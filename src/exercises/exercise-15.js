/* 
EJERCICIO 15:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]

Pista: usa el método "groupBy" de la clase Object
*/

export function exercise15(movies) {
  // 1. Calsify movies with function Object.groupBy
  // 2. Need array parameter, propierty in argument like filter 
  // and return array orderer and calsified by this filter 
  const result = Object.groupBy(movies, ({ category }) => category)
  return result
}
