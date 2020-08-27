/* eslint-disable strict */

///////////////// BUBBLE SORT ///////////////////////
///////////////// best-case: O(n), average & worst-case: O(n^2) //////////////
/////// DO NOT USE BUBBLE SORTING...IT'S NOT EFFICIENT!!!!
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}



///////////////// MERGE SORT ///////////////////////
///////////////// best, average, & worst-case: O(nlog(n)) //////////////
function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(array, left, right);
}
  
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



///////////////// QUICKSORT ///////////////////////
///////////////// best & average-case: O(nlog(n)), worst-case: O(n^2)  //////////////
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function quickSort(array, start=0, end=array.length) {
  if(start >= end) {
    return array;
  }

  const sorted = partition(array, start, end);
  array = quickSort(array, start, sorted);
  array = quickSort(array, sorted + 1, end);
  return array;
}