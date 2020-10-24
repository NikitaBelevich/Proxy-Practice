'use strict';

let numbers = [0,1,2,3,4,5,6];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0; // значение по умолчанию
        }
    }
});


let arr2 = [];
arr2 = new Proxy(arr2, {
    set(target, prop, value) {
        if (typeof value == 'number') {
            target[prop] = value;
            return true;
        } else {
            return false;
        }
    }
});


let users = {
    name: 'Ivan', 
    age: 15,
    sex: 'Male'
};

