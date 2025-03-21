/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/

import { lettersOcurrences } from "../utils";

export function exercise19(string) {

  // 1. Declare var with string lowered and without spaces
  let stringLowered = string.replaceAll(' ','').toLowerCase()
  // 2. Get an array with letter ocurrences in stringLowered
  let stringObjetcOcurrences = lettersOcurrences(stringLowered)
  // 3. Get a values's array from letters ocurrences
  let arrayValues = Object.values(stringObjetcOcurrences)
  // 4. Use a const value that is defined by the first value
  const isEqualValue = (value) => value === arrayValues[0];
  // 5. All the letter ocurrences(values) need to be equals. Here return 
  // a boolean value (true if all the values is equals, false if not)
  let isIsogram = arrayValues.every(isEqualValue)

  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}
