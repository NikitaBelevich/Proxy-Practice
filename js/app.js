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

