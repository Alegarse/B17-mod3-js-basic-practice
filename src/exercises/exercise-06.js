/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/

/**
 * 
 * @param {*} string 
 * @returns String lowered without spaces
 */
function stringLowerWithOutSpaces(string) {
  return string.toLowerCase().replaceAll(' ','');
}

/**
 * 
 * @param {*} string 
 * @param {*} length 
 * @returns String without central char in odd chars lenght
 */
function deleteCentralChar(string,length) {
  let centralIndex = parseInt(length/2)
  if(length % 2 !== 0){
      return string.substring(0,centralIndex) + string.substring(centralIndex + 1);
  }
  return string;
}

/**
 * 
 * @param {*} string1 
 * @param {*} string2 
 * @returns Check palindrom
 */
function checkPalindrom(string1, string2, string) {
  return [string1 === string2] 
    ? `The phrase '${string}' is a palindrome` 
    : `The phrase '${string}' is NOT a palindrome`;
}


function splitAndCheckString(stringE, string) {
  let position = stringE.length/2;
  let string1 = stringE.substring(0, position);
  let string2 = stringE.substring(position);
  console.log(checkPalindrom(string1, string2, string));
}

export function exercise06(string) {
  let stringModified = stringLowerWithOutSpaces(string);
  let stringEvenCharacters = deleteCentralChar(stringModified, stringModified.length);
  splitAndCheckString(stringEvenCharacters, string);
  // Escribe tu solución aquí
  // return [condición]
  //   ? `The phrase '${string}' is a palindrome`
  //   : `The phrase '${string}' is NOT a palindrome`;
}
 exercise06("Rats live on no evil star")