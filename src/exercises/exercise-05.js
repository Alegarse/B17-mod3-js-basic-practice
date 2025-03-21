/* 
EJERCICIO 5:
Escribe una función que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
  exercise05('code') // result: "COoDddEeee"
  exercise05('list') // result: "LIiSssTttt"
  exercise05('function') // result: "FUuNnnCcccTttttIiiiiiOooooooNnnnnnnn"
*/
export function exercise05(string) {
  
  // 1. Init var result
  let result = ""
  // 2. Fill array with lowercase string's chars
  let arrayString = string.toLowerCase().split('')
  // 3. For each char, first ocurrence in uppercase, and
  // with index I know the next ocurrences of this char 
  arrayString.forEach((char, index) => {
    result += char.toUpperCase()
    for(let i = 1;i <= index; i++) result += char
  });
  return result
}