/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste en el archivo utils.js).
*/

import { phraseLowerWithOutSpacesAndAcents, charPosition } from "../utils";

export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  // 1. Convert string cleaned in a chars's array
  let arrayString = phraseLowerWithOutSpacesAndAcents(string).split('')
  // 2. alphabet to an alphabet char's array
  let arrayAlphabet = alphabet.split('')
  // 3. Init the return array
  let positionArray = []
  // 4. Fill the array with every position of char in alphabet
  positionArray = charPosition(arrayString, arrayAlphabet, positionArray)
  return positionArray
}
