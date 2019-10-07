// // PUSH FRONT

// let arr = [1, 2, 3, 4, 5];
// let val = 999;
// pushFront(arr, val);
// function pushFront(arr, val) {
//     for (var i = 0; i > arr.length; i--) {
//         arr[i + 1] = arr[i];
//     }
//     arr[0] = val;
// }
// console.log(arr);

// POP FRONT

// let arr = [1, 2, 3, 4, 5];
// function popFront(arr) {
//     var val = arr[0];
//     for (var index = 0; index < arr.length - 1; index++) {
//         var currentValue = arr[index + 1];
//         arr[index] = currentValue;
//     }
//     arr.length -= 1;
//     console.log(arr);
// }
// console.log(popFront(arr));

// REMOVE AT

// let arr = [1, 2, 3, 4, 5];
// function removeAt(arr, position) {
//     var val = arr[position];
  
//     for (var index = position; index < arr.length - 1; index++) {
//       var currentValue = arr[index + 1];
  
//       arr[index] = currentValue;
//     }
  
//     arr.length--;
//     console.log('removing ', arr, val);
  
//     return val;
//   }
  
  
//   console.log(removeAt(arr, 4));

// SWAP PAIRS

let arr = [1,2,3,4];
function swapPairs(arr){
    for (index = 0; index < arr.length-1; index+=2){
        var currentValue = arr[index];
        arr[index] = arr[index + 1];
        arr[index+1] = currentValue;
    }
    return arr;
}
var testArray = [1,2,3,4];
console.log(swapPairs(testArray))
var testArray = ["Brendan",true,42];
console.log(swapPairs(testArray));