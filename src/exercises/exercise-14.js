/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/

export function exercise14(movies, categories) {
  // 1. Init return array
  let arrayMoviesFiltered = []
  // 2. Filtering array by category and when condition true
  // insert movie {title, description} in return array
  movies.forEach(movie => {
    if (movie.category === categories.drama) {
      const { title, description } = movie
      arrayMoviesFiltered.push({ title, description })
    }
  })
  return arrayMoviesFiltered
}
