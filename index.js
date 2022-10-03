//indexOf, includes, find, findIndex these JS in-built methods apply frequency search

function linearSearch(arr, num) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
}
console.log(linearSearch([1, 2, 3, 4, 5], 4));

//The above function will go through all elements of the array from index 0 till it finds the match.


//Global Linear Search return an array that contains all elemenst at which the key is present in ana array

function globalLinearSearch(arr, key){
   let result = []
   for(i=0; i< arr.length; i++){
      if(arr[i] === key) result.push(arr[i])
   }
   return result
}
console.log(globalLinearSearch([5,7,3,1,7,1,3,4,5,3,1,4], 1))
