/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/

import { getMinMax, getRandomNumber } from "../utils";

export function exercise09(length, start, end) {
  
  // 1. Init array of random numbers
  let arrayOfRandomNumbers = []
  // 2. For length, get the random number and insert it the previous array
  // checking that this number is not included
  for (let i = 1; i <= length; i++) {
    let randomNumber
    do {
      randomNumber = getRandomNumber(start, end)
    } while (arrayOfRandomNumbers.includes(randomNumber))
      arrayOfRandomNumbers.push(randomNumber)
  }
  // 3. Extract min & max from the array
  const min = getMinMax(arrayOfRandomNumbers)[0]
  const max = getMinMax(arrayOfRandomNumbers)[1]

  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`
}
