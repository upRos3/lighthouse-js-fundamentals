function merge(array1, array2) {
  var mergedArray = array1.concat(array2);
  mergedArray.sort();
  return mergedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

// Without auto functions

function merge2(array3, array4) {
  for (var i = 0; i < array4.length; i++) {
   array3.push(array4[i]);
  }
  for (i=0; i < array3.length; i++) {
    for (var i2 = i + 1; i2 < array3.length; i2++) {
      if (array3[i] > array3[i2]) {
        var tempA = array3[i];
        array3[i] = array3[i2];
        array3[i2] = tempA;
      }
    }
  }
  return array3;
}

console.log(merge2([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge2([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge2([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);