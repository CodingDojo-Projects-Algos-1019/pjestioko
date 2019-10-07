// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

let arr = [4, 2, 1, 3, 5];

function minToFront(arr) {
    let min = arr[0];
    let emptyArr = [];
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] < min) {
            min = arr[index];
        }
    }
    emptyArr[0] = min;
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] != min) {
            emptyArr.push(arr[index]);
        }
    }

    console.log(emptyArr);
    return emptyArr;

}

result = minToFront(arr);