/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/
export function exercise17(string) {
  
  // 1. Init result with starting char '#'
  let result = '#'
  // 2. String lowered and splitted by space(get separed words array)
  let arrayStrings = string.toLowerCase().split(' ')
  // 3. Iterate the words array
  arrayStrings.forEach(string => {
    // 4. For each word, get an char's array
    let arrayString = string.split('')
    // 5. Insert into result first char, that need to be uppercase
    arrayString[0] = arrayString[0].toUpperCase()
    // 6. Inserte the other chars joined into result
    result += arrayString.join('') 
  })
  return result
}
