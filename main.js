// PUSH FRONT

let arr = [1, 2, 3, 4, 5];
let val = 999;
pushFront(arr, val);
function pushFront(arr, val) {
    for (var i = 0; i > arr.length; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = val;
}
console.log(arr);