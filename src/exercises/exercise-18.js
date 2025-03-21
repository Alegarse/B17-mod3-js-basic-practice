/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite en el string cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1,
}

Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/
// Import declared functions
import { stringLowerWithOutSpacesAndSigns, lettersOcurrences } from "../utils"

export function exercise18(string) {
  
  // 1. Filter string to delete spaces and signs
  string = stringLowerWithOutSpacesAndSigns(string)
  // 2. Iterate the string to get the letter's ocurrence and return the result
  return lettersOcurrences(string)
}
