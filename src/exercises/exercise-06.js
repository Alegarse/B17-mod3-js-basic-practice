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
  
  // 1. Filter and modify string to a new string without spaces & signs
  let stringModified = stringLowerWithOutSpacesAndSigns(string)
  // 2. If string lenght is odd, I don't need the central char for the algorithm
  let stringEvenCharacters = deleteCentralChar(stringModified, stringModified.length)
  // 3. Getting the central position
  let position = stringEvenCharacters.length/2
  // 4. With sustring(init, position) extract the first string
  let string1 = stringEvenCharacters.substring(0, position)
  // 5. With sustring(position) extract the second string ultil the end
  let string2 = stringEvenCharacters.substring(position)
  // 6. Need to reverse the second string to compare with the first
  string2 = string2.split('').reverse().join('')
  // 7. Check the rule for palindrom
  return (string1 === string2) 
    ? `The phrase '${string}' is a palindrome` 
    : `The phrase '${string}' is NOT a palindrome`
}