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
  // 1. Init array top return
  let bestMovies = []
  // 2. Init aux array for movie ratings[ to get average rating]
  let arrayRatingMovies = []
  // 3. Fill the rating aray
  movies.forEach(movie => arrayRatingMovies.push(movie.rating))
  // 4. Defined funtion to get the average of numbers
  let average = getAverage(arrayRatingMovies)
  // 5. First get an ordered movies array by rating
  let arrayOrderedMovies = movies.sort((movie1, movie2) => sortNumbers(movie2.rating, movie1.rating))
  // 6. In return array only insert {title, description} if movie rating is bigger than average
  arrayOrderedMovies.forEach(movie => {
    if (movie.rating > average) {
      const { title, description } = movie
      bestMovies.push({ title, description })
    }
  })
  return bestMovies
}


export function exercise13(movies) {
  
  let moviesSorted = sortMovies(movies)
  return moviesSorted
}
