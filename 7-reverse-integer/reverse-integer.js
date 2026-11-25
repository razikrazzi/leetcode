/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let isNegative = x < 0;

    let num = Math.abs(x).toString();

    let reversed = num.split("").reverse().join("");

    let result = Number(reversed);

    if (isNegative) {
        result = -result;
    }

    if (result > 2147483647 || result < -2147483648) {
        return 0;
    }

    return result;
};