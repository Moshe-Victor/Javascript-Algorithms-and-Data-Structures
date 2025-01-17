function countUniqueValues(arr) {
    //loop thru array
    //pointer i
    //pointer j = i++
    //compare value i with next value j
    //if the same move j++ and compare
    //if not the same move i++ and put value j in i++
    if(arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {

        if (arr[i] !== arr[j]){
            arr[++i] = arr[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2)
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
console.log(countUniqueValues([1])); // 2)

console.log([].length)