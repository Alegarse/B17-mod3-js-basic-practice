/* 
EJERCICIO 11:
Escribe una función que pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js" devuelve un array con el título de las 
películas ordenadas alfabéticamente por el título.

Consejo: 
puedes definir en utils.js una función auxiliar para ordenar las cadenas
que recibe como parámetro dos cadenas y devuelve -1 si la primera es menor que la segunda, 
0 si son iguales y 1 si la primera es mayor que la segunda.
*/

import { sortStrings } from "../utils"

/**
 * 
 * @param {*} movies 
 * @returns array movies sorted by title asc
 */
function sortMovies(movies) {
  return movies.sort((movie1, movie2) => sortStrings(movie1.title, movie2.title))
}


export function exercise12(movies) {
  // Escribe tu solución aquí
  let moviesSorted = sortMovies(movies)
  return moviesSorted 
}
