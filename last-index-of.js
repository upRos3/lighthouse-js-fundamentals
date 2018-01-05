function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), '=?', 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), '=?', 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), '=?', -1);
console.log(lastIndexOf([5, 5, 5], 5), '=?', 2);
console.log(lastIndexOf([], 3), '=?', -1);
console.log(lastIndexOf([1, 3, 3, 3, 3], 3), '=?', 4);
console.log(lastIndexOf([3], 3), '=?', 0);

// While loop:

function lastIndexOf2(array2, value2) {
  var i = array2.length;
  while (i--) {
    if (array2[i] === value2) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf2([0, 1, 4, 1, 2], 1), '=?', 3);
console.log(lastIndexOf2([0, 1, 4, 1, 2], 2), '=?', 4);
console.log(lastIndexOf2([0, 1, 4, 1, 2], 3), '=?', -1);
console.log(lastIndexOf2([5, 5, 5], 5), '=?', 2);
console.log(lastIndexOf2([], 3), '=?', -1);
console.log(lastIndexOf2([1, 3, 3, 3, 3], 3), '=?', 4);
console.log(lastIndexOf2([3], 3), '=?', 0);
