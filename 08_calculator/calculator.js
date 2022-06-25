const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const sum = (arr) => {
    return arr.reduce((total, next) => {
        return total + next;
    }, 0);
};

const multiply = (arr) => {
    return arr.reduce((total, next) => {
        return total * next;
    });
};

const power = (a, b) => Math.pow(a, b);

const factorial = (n) => {
    if (n == 1 || n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
