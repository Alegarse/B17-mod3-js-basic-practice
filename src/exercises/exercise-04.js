/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H, m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU"
  
  // 1. Init aux array for result
  let arrayResult = []
  // 2. Fill array with string's chars
  let arrayString = string.split('')
  // 3. Only includes in arrayResult no vowels chars
  arrayString.forEach(char => {
    if (!vowels.includes(char)) arrayResult.push(char);
  })
  // 4. Convert arrayResult to String without double spaces
  let result = arrayResult.join('').replaceAll('  ',' ')

  return result
}