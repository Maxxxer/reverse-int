module.exports = function reverse(number) {
    number = Math.abs(number);
    number = number.toString().split('');
    let opposite = [];
    for (let item of number) {
        opposite.unshift(item);
    }
    return +opposite.join('');
}

