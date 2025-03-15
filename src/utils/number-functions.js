/**
 * 
 * @param {*} arrayNums 
 * @returns Min and max value from arrayNums
 */
export function getMinMax(arrayNums) {
    let min, max;
    arrayNums.forEach(number => {
        if (min === undefined || number < min) min = number;
        if (max === undefined || number > max) max = number;
    });
    return [min, max];
}

/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @returns Random number between start and end
 */
export function getRandomNumber(start, end) {
    return Math.round(Math.random() * (end - start) + start);
}

/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns values [-1, 1, 0] to use with sort
 */
export function sortNumbers(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        throw new Error('Error. Parameters must be numbers')

    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
    return 0;
}