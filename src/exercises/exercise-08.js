/* 
EJERCICIO 8:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
Nota: los siglos comienzan el 1 de enero de un año terminado en 1 y finalizan el 31 de diciembre de un año terminado en 0. 
*/
export function exercise08(year) {
  
  // 1. Every 100 years is a century
  let century = Math.floor(year / 100)
  // 2. If year module 100 different that 0, need to increment 1
  let rest = year % 100
  if (rest !== 0) century++

  return `The year ${year} belongs to the ${century}st century`
}
