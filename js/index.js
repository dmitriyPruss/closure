'use strict'

// Closure
// Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная 
// функция должна складывать получаемый аргумент с аргументом n возвращающей функции.
// Пояснения:
// - внешняя функция addNum(n) имеет параметр n
// - возвращаемая из addNum функция имеет параметр m

const add = addNum(5);
const result = add(10); // => 15
console.log('result :>> ', result);

const add2 = addNum(32);
const result2 = add2(222); // => 254
console.log('result2 :>> ', result2);

const add3 = addNum();
const result3 = add3(1000); // => 1000
console.log('result3 :>> ', result3);

function addNum(n = 0) {

    return function(m = 0) {
        if (typeof n !== 'number' || typeof m !== 'number') {
            throw new TypeError(`This value is not a number`);
        };
        if (Number.isNaN(n) || Number.isNaN(m)) {
            throw new RangeError(`This value isn't correct. Enter another...`);
        };
    
        return n + m;
    };
};