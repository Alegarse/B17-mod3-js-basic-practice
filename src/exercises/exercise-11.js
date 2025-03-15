/* 
EJERCICIO 11:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con las peliculas ordenadas 
por valoracion (propiedad "rating") de mayor a menor  
*/
 /**
  * 
  * @param {*} movies 
  * @returns array movies sorted by rating desc
  */
function sortMoviesSteps(movies) {
  // 1. Paso función a sort con dos elementos
  // 2. Comparo restando los valores rating de esos dos elementos
  // 3. Resultados: 
  //    - positivo, movie2 irá delante de movie1
  //    - negativo, movie1 irá delante de movie2
  //    - cero, ambos permanecen en la misma posición
  return movies.sort((movie1, movie2) => movie2.rating - movie1.rating)
}

export function exercise11(movies) {
  // Escribe tu solución aquí
  let moviesSorted = sortMoviesSteps(movies) 
  return moviesSorted
}
