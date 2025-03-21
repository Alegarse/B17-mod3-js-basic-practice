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

export function exercise20(n) {
  
  // 1. Define fixed cases
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  // 2. Return recursive case with defined formule to
  // get a fibonacci value of a number (Elements serie sumatory)
  return (exercise20(n - 2) + exercise20(n - 1))
}

export function exercise20Iterative(n) {
  
  // 1. Define fixed cases
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  // 2. Declare auxiliar vars with fibonacci's serie rules 
  //    (First and Second term is equal to '1')
  let ind1 = 1
  let ind2 = 1
  // 3. Define return var and initialize to zero
  let fibonacci = 0
  // 4. Starting with third element (First and second is fixed and knowed)
  //  need to iterate until n terms provided.
  //  Next terms formule = sumatory both previous terms and the reassign the vars
  //  with new values. When n term arrives, the iteration is finished
  for(let i = 3; i <= n; i++) {
    fibonacci = (ind1 + ind2)
    ind1 = ind2
    ind2 = fibonacci
  }
  return fibonacci
}
