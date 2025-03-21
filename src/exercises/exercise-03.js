/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>” 
Nota: vowels = "aeiou" (no incluyas acentos)
*/

export function exercise03(string) {
  const vowels = "aeiou"
  
  // 1. Extract all chars in lowercase to an array
  let arrayString = string.toLowerCase().split('')
  // 2. Var result init
  let result = 0

  // 3. Array of chars -> Check if id vowels and increment result
  arrayString.forEach(char => {
    if(vowels.includes(char)) result++
  })
  return `Number of vowels in '${string}' is ${result}`
}