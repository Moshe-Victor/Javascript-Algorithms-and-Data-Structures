function binarySearchEx25(arr, elVal) {

    let leftPnt =  0;
    let rightPnt =  arr.length-1;

    while (leftPnt <= rightPnt) {
        let  midPnt = Math.floor((rightPnt + leftPnt) /2);
        if (arr[midPnt] === elVal) return midPnt;

        if (elVal < arr[midPnt]) {
            rightPnt = midPnt-1;
        }

        else if (elVal > arr[midPnt]) {
            leftPnt = midPnt+1;
        }

    }

    return  -1;

}


console.log(binarySearchEx25([1,2,3,4,5],2)); // 1
console.log(binarySearchEx25([1,2,3,4,5],3)); // 2
console.log(binarySearchEx25([1,2,3,4,5],5)); // 4
console.log(binarySearchEx25([1,2,3,4,5],6)); // -1
console.log(binarySearchEx25([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearchEx25([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearchEx25([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1