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
  // Escribe tu solución aquí

  let stringLowered = string.replaceAll(' ','').toLowerCase()
  let stringObjetcOcurrences = lettersOcurrences(stringLowered)
  let arrayValues = Object.values(stringObjetcOcurrences)
  const isEqualValue = (value) => value === arrayValues[0];
  let isIsogram = arrayValues.every(isEqualValue)

  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}
