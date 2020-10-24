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


