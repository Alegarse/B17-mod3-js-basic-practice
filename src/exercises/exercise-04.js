/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H, m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU";
  // Escribe tu solución aquí
  let arrayResult = [];
  let arrayString = string.split('');
  arrayString.forEach(char => {
    if (!vowels.includes(char)) arrayResult.push(char); 
  })
  let result = arrayResult.join('').replaceAll('  ',' ');
  return result;
}