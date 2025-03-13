/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/

/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @returns Random number between start and end
 */
function getRandomNumber(start, end) {
  return Math.round(Math.random() * (end - start) + start);
}

/**
 * 
 * @param {*} arrayNums 
 * @returns Min and max value from arrayNums
 */
function getMinMax(arrayNums) {
  let min, max;
  arrayNums.forEach(number => {
      if (min === undefined || number < min) min = number;
      if (max === undefined || number > max) max = number;
  });
  return [min, max];
}

export function exercise09(length, start, end) {
  // Escribe tu solución aquí
  let arrayOfRandomNumbers = [];
  for (let i = 1; i <= length; i++) {
    let randomNumber;
    do {
      randomNumber = getRandomNumber(start, end);
    } while (arrayOfRandomNumbers.includes(randomNumber))
      arrayOfRandomNumbers.push(randomNumber);
  }
  const min = getMinMax(arrayOfRandomNumbers)[0];
  const max = getMinMax(arrayOfRandomNumbers)[1];

  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`;
}
