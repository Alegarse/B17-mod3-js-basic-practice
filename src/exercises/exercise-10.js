/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste en el archivo utils.js).
*/

import { phraseLowerWithOutSpacesAndAcents, charPosition } from "../utils";

export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // Escribe tu solución aquí
  let arrayString = phraseLowerWithOutSpacesAndAcents(string).split('');
  let arrayAlphabet = alphabet.split('');
  let positionArray = [];
  positionArray = charPosition(arrayString, arrayAlphabet, positionArray);
  return positionArray;
}
