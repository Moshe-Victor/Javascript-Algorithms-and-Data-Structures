function isSubsequence(searchStr1, str2) {

    //loop thru str1
    //if char str1 found in str2 increase i++
    let j =0;

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === searchStr1[j]) {
            j++;
        }
        if (j === searchStr1.length)  return true;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)