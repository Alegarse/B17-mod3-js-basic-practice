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
 * @returns String lowered without spaces/signs
 */
function stringLowerWithOutSpacesAndSigns(string) {
  let pattern = 'abcdefghijklmnñopqrstuvwxyz';
  let fixedString = [];
  string.toLowerCase().replaceAll(' ','').split('').forEach(char => {
    if (pattern.includes(char)) fixedString.push(char);
  });
  return fixedString.join('');
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