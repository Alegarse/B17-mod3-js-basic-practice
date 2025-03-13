export function showResult(num, content) {
  document.getElementById("app").innerHTML += `
      <div class="exercise">
        <h3 class="heading">Exercise ${num}</h3>
        <pre>${JSON.stringify(content, undefined, 2)}</pre>
      </div>
    `;
}


// PERSONAL FUNCTIONS SECTION

// CHARS & STRING FUNCTIONS
/**
 * 
 * @param {*} string 
 * @returns String lowered without spaces/signs
 */
export function stringLowerWithOutSpacesAndSigns(string) {
  let pattern = 'abcdefghijklmnñopqrstuvwxyz';
  let fixedString = [];
  string.toLowerCase().replaceAll(' ','').split('').forEach(char => {
    if (pattern.includes(char)) fixedString.push(char);
  });
  return fixedString.join('');
}

/**
 * 
 * @param {*} string 
 * @param {*} length 
 * @returns String without central char in odd chars lenght
 */
export function deleteCentralChar(string,length) {
  let centralIndex = parseInt(length/2)
  if(length % 2 !== 0){
      return string.substring(0,centralIndex) + string.substring(centralIndex + 1);
  }
  return string;
}

// NUMBERS FUNCTIONS

/**
 * 
 * @param {*} arrayNums 
 * @returns Min and max value from arrayNums
 */
export function getMinMax(arrayNums) {
  let min, max;
  arrayNums.forEach(number => {
      if (min === undefined || number < min) min = number;
      if (max === undefined || number > max) max = number;
  });
  return [min, max];
}

/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @returns Random number between start and end
 */
export function getRandomNumber(start, end) {
  return Math.round(Math.random() * (end - start) + start);
}