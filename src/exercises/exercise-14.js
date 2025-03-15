/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/

export function exercise14(movies, categories) {
  // Escribe tu solución aquí
  let arrayMoviesFiltered = []
  movies.forEach(movie => {
    if (movie.category === categories.drama) {
      const { title, description } = movie
      arrayMoviesFiltered.push({ title, description })
    }
  })
  return arrayMoviesFiltered
}
