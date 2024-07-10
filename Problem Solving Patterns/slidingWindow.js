//naive
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

//maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

//sliding PT
function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3));

// num= 3 maxSum = 17  tempSum= 17  i=3 arr[3]=2 arr[i - num] =  2 arr[i] = 2  == 17
// num= 3 maxSum = 17  tempSum= 12  i=4  arr[i - num] =  6 arr[i] = 1  == 12
// num= 3 maxSum = 17  tempSum=11   i=5  arr[i - num] =  9 arr[i] = 8  == 16   (12 - 9 + 8)
// num= 3 maxSum = 17  tempSum=14   i=6  arr[i - num] =  2 arr[i] = 5  == 14   (11 - 2 + 5)
// num= 3 maxSum = 17  tempSum=  i=7 arr[7]=6  arr[i - num] = 1  arr[i] = 6  == 19   (11 - 2 + 5)





