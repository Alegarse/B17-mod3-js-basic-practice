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

  // 1. Init array to return
  let result = []
  // 2. Iterate actors atep by step
  actors.forEach(actor => {
    // 3. Declare necessary vars
    let selectedTitle
    let bestRating
    // 4. Iterate array movies
    movies.forEach(movie => {
      // 5. Filters:  * Movie actors need inclkude the selected
      //              * If bestRating undefined (first iteration), assign value
      //              * bestRatign exists, verify witch value is bigger and assign it
      //              * If title movie exists in result, not continue (avoid duplicate titles)
      //              * Passed rules = Assign necessary vars
      if(movie.actors.includes(actor) && (bestRating === undefined || movie.rating > bestRating) && !result.includes(movie.title)) {
        bestRating = movie.rating
        selectedTitle = movie.title
      }
    })
    // 6. At the iteration's end insert title into result array
    result.push(selectedTitle)
  })
  return result
}
