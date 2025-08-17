var calc = function (a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log(calc(10, 20, 30));
console.log(calc(10, 20)); // Outputs: 30
