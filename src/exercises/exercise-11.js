/* 
EJERCICIO 11:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con las peliculas ordenadas 
por valoracion (propiedad "rating") de mayor a menor  
*/

import { sortNumbers } from "../utils"

/**
 * 
 * @param {*} movies 
 * @returns array movies sorted by rating desc
 */
function sortMovies(movies) {
  // 1. Function sort to movies array with array element's pair
  // 2. Compare rating values for both elements
  // 3. Values [+,-,0] into sort() returns [desc order]: 
  //    - positive, movie2 in front of movie1
  //    - negative, movie2 behind movie1
  //    - zero, both in equal positions
  return movies.sort((movie1, movie2) => sortNumbers(movie2.rating, movie1.rating))
}

export function exercise11(movies) {
  
  let moviesSorted = sortMovies(movies) 
  return moviesSorted
}
