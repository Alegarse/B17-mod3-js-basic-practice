/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/

import { sortNumbers, getAverage } from "../utils"

/**
 * 
 * @param {*} movies 
 * @returns array movies sorted by rating desc
 */
function sortMovies(movies) {
  let arrayRatingMovies = []
  let bestMovies = []
  movies.forEach(movie => arrayRatingMovies.push(movie.rating))
  let average = getAverage(arrayRatingMovies)
  movies.forEach(movie => {
    if (movie.rating > average) bestMovies.push(movie)
  })
  return bestMovies.sort((movie1, movie2) => sortNumbers(movie2.rating, movie1.rating))
}


export function exercise13(movies) {
  // Escribe tu solución aquí
  let moviesSorted = sortMovies(movies)
  return moviesSorted
}
