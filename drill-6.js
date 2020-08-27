/* eslint-disable no-console */
/* eslint-disable strict */

function sortBucket(array, low, high) {
  const newArray = [];
  //let tick =0;

  for (let i = 0; i < high; i++) {
    newArray[i] = '';
    //tick++;
  }
  
  for (let i = 0; i < array.length; i++) {
    newArray[array[i] - low] = array[i];
    //tick++;
  }
  //console.log(tick);
  console.log(newArray);
  return newArray;
}

const BUCKET = [8, 1, 9, 5, 4, 10, 6, 2, 3, 7];

sortBucket(BUCKET, 1, 10);
//[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]