'use strict';


let user1 = {
    name: "John",
    age: 22,
};

let user1Proxy = wrap(user1);

function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if (target[prop] === undefined) {
                throw new ReferenceError(`The object property "${prop}" is not defined`);
            } else {
                return target[prop];
            }
        }
    });
}

// Task 2
let array2 = [1,2,3,4,5,6,7,8];
let arr2Proxy = new Proxy(array2, {
    get(target, elem) {
        const index = elem;
        if (index < 0) {
            return target[target.length - Number(-index)];
        } else {
            return target[elem];
        }
    }
});

// Task 3

let user2 = {
    name: "Jane",
    age: 35,
};

// Проксируем объект
let user2Proxy = makeObservable(user2);
// Задали _handler функцию
user2Proxy.observe((key, value) => {
    console.warn(`SET ${key}=${value}`);
});

function makeObservable(target) {
    // Создали для target метод observer, который добавляет переданную 
    // функцию в свойство _handler
    target.observe = (handler = () => { // фукнцию по умолчанию
        console.log(`Hi, my name is ${target.name}`);
    }) => {
        target.__proto__._handler = handler;
    }
    
    return new Proxy(target, {
        set(target, prop, value) {
            target[prop] = value;
            // Теперь при каждой записи или перезаписи будет срабатывать _handler который мы задали ранее
            target._handler(prop, value);
            return true;
        }
    });
}
