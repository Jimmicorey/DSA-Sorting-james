/* eslint-disable no-console */
/* eslint-disable strict */

function merge(array, left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
    
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
    
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}



function mSort(array) {
  if(array.length <= 1) {
    return array;
  }
    
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
    
  left = mSort(left);
  right = mSort(right);
  return merge(array, left, right);
}

  
const BOOKS1 = ['A', 'D', 'B', 'C', 'F', 'E', 'H', 'J', 'G', 'I'];
const BOOKS2 = ['Alpha', 'Dogma', 'Beta', 'Caul', 'Digit', 'Bada', 'Abba', 'Exo', 'Crom', 'Ello'];

console.log(mSort(BOOKS1));
//[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
console.log(mSort(BOOKS2));
//['Abba', 'Alpha', 'Bada','Beta', 'Caul', 'Crom', 'Digit', 'Dogma', 'Ello', 'Exo']