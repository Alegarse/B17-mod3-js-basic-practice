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
  // 1. Function sort to movies array with array element's pair
  // 2. Compare rating values for both elements
  // 3. Values [+,-,0] into sort() returns [asc order]: 
  //    - positive, movie1 in front of movie2
  //    - negative, movie1 behind movie2
  //    - zero, both in equal positions
  return movies.sort((movie1, movie2) => sortStrings(movie1.title, movie2.title))
  
}


export function exercise12(movies) {

  let moviesSorted = sortMovies(movies)
  // 1. Init array to return
  let titleMoviesArray = []
  // 2. Return an array with title movies ordered
  moviesSorted.forEach( movie => {titleMoviesArray.push(movie.title)})
  return titleMoviesArray
}
