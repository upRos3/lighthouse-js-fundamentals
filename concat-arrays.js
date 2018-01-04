function concat(array1, array2) {
  var fullArray = array1.concat(array2);
  return fullArray;
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

// To practise with loops and not using inbuilt functions

function concat2(array3, array4) {
  for (var i = 0; i < array4.length; i++) {
    array3.push(array4[i]);
  }
  return array3;
}

console.log(concat2([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat2([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat2([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat2([ 5, 10 ], []), "=?", [ 5, 10 ]);