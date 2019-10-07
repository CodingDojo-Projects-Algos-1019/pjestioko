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

let arr = [1, 2, 3, 4, 5];
function popFront(arr) {
    var val = arr[0];
    for (var index = 0; index < arr.length - 1; index++) {
        var currentValue = arr[index + 1];
        arr[index] = currentValue;
    }
    arr.length -= 1;
    console.log(arr);
}
console.log(popFront(arr));