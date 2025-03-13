/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/

import {stringLowerWithOutSpacesAndSigns, deleteCentralChar} from '../utils'

export function exercise06(string) {
  // Escribe tu solución aquí
  let stringModified = stringLowerWithOutSpacesAndSigns(string);
  let stringEvenCharacters = deleteCentralChar(stringModified, stringModified.length);
  let position = stringEvenCharacters.length/2;
  let string1 = stringEvenCharacters.substring(0, position);
  let string2 = stringEvenCharacters.substring(position);
  string2 = string2.split('').reverse().join('');
  return (string1 === string2) 
    ? `The phrase '${string}' is a palindrome` 
    : `The phrase '${string}' is NOT a palindrome`;
}