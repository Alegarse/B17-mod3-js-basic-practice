/**
 * 
 * @param {*} string 
 * @returns String lowered without spaces/signs
 */
export function stringLowerWithOutSpacesAndSigns(string) {
    let pattern = 'abcdefghijklmnñopqrstuvwxyz';
    let fixedString = [];
    string.toLowerCase().replaceAll(' ', '').split('').forEach(char => {
        if (pattern.includes(char)) fixedString.push(char);
    });
    return fixedString.join('');
}


/**
* 
* @param {*} string 
* @returns String lowered without spaces & accents
*/
export function phraseLowerWithOutSpacesAndAcents(string) {
    /**
         * ================================================================================================================
         * PATRON REGEX
         * ================================================================================================================
         * Es un patron así llamado para búsquedas
         * Siempre empieza por /
         * Lo que queramos buscar va entre []
         * Iniciamos patron de búsqueda con \ y después lo que queramos buscar, en este caso u para buscar carácter unicode
         * Caracteres Unicode: https://symbl.cc/es/unicode-table/#combining-diacritical-marks
         * Sintaxis expresiones: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
         * Por defecto solo busca primera coincidencia, para buscar todas se pone despues de los corchetes /g
         * ================================================================================================================
         * ================================================================================================================
         */
    let regex = /[\u0301]/g
    /**
     * Explicación del patrón entre corchetes []:
     * u de caracter unicode
     * 0301 es el caracter unicode del acento agudo
     * Para buscar un rango ponemos - en medio
     * Ej: \u0301-\u0304
     */
    return string.toLowerCase().replaceAll(' ', '').normalize('NFD').replace(regex, '');
    /**
     * Explicación de normalize
     * Si ponemos que sea de tipo NFD, subdivide los caracteres entre la letra y su agregado, en este caso el acento
     * Están ambos, aunque el console.log no los muestre
     */
}

/**
 * 
 * @param {*} string 
 * @param {*} length 
 * @returns String without central char in odd chars lenght
 */
export function deleteCentralChar(string, length) {
    let centralIndex = parseInt(length / 2)
    if (length % 2 !== 0) {
        return string.substring(0, centralIndex) + string.substring(centralIndex + 1);
    }
    return string;
}

/**
 * 
 * @param {*} arrayString 
 * @param {*} arrayAlphabet 
 * @param {*} positionArray 
 * @returns Array with alphabet positions of parameter arrayString
 */
export function charPosition(arrayString, arrayAlphabet, positionArray) {
    arrayString.forEach(char => {
        arrayAlphabet.forEach(charAlpha => {
            if (char === charAlpha) positionArray.push(arrayAlphabet.indexOf(charAlpha) + 1);
        });
    });
    return positionArray;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns values [-1, 1, 0] to use with sort
 */
export function sortStrings(a, b) {
    const string1 = a.toLowerCase();
    const string2 = b.toLowerCase();

    if (string1 < string2) return -1;
    if (string1 > string2) return 1;
    return 0;
}