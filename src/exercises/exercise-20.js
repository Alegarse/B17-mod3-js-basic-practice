/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Crea 2 funcines que dado un número entero devuelva el Fibonacci de ese número como parámetro. 
La primera función debe ser recursiva y la segunda iterativa.

Ejemplo: Fibonacci(20) = 6765

Nota: evita llamar a la función con números altos en la versión recursiva.
*/
/**
 * 
 * fórmula
 * fib(1) = 1;
 * fib(2) = 1;
 * firb(n) = fin(n-2) + fib(n-1)
 * serie 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ... 
 */

export function exercise20(n) {
  // Escribe tu solución aquí
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return (exercise20(n - 2) + exercise20(n - 1));
}

export function exercise20Iterative(n) {
  // Escribe tu solución aquí
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let ind1 = 1
  let ind2 = 1
  let acc = 0
  for(let i = 3; i <= n; i++) {
    acc += (ind1 + ind2)
    let aux = ind1 + ind2
    ind1 = ind2
    ind2 = aux
  }
  return acc
}
