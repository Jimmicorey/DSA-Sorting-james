/* eslint-disable no-console */
/* eslint-disable strict */

function sortInPlace(array) {
    
  for(let i = array.length - 1; i > 0; i--) {

    let randomIndex = Math.floor(Math.random() * (i+1));
    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;

  }

  console.log(array);
  //return array;
}

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

sortInPlace(NUMBERS);
//random sequence each time