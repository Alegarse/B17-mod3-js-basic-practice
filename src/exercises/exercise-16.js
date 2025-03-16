/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/
export function exercise16(movies) {
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];

  // Escribe tu solución aquí
  let result = []
  actors.forEach(actor => {
    let selectedTitle
    let bestRating
    movies.forEach(movie => {
      if(movie.actors.includes(actor) && (bestRating === undefined || movie.rating > bestRating) && !result.includes(movie.title)) {
        bestRating = movie.rating
        selectedTitle = movie.title
      }
    })
    result.push(selectedTitle)
  })
  return result
}
