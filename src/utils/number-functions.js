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