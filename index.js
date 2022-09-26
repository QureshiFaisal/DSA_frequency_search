//indexOf, includes, find, findIndex these JS in-built methods apply frequency search

function linearSearch(arr, num) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
}
console.log(linearSearch([1, 2, 3, 4, 5], 4));

//The above function will go through all elements of the array from index 0 till it finds the match.
