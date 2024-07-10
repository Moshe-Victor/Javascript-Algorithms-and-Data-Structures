function sameFrequencyEx3(num1, num2) {


    //convert numbers to strings
    // declare lookUp empty object
    //loop through num1string to pop lookUp object with num : freq
    // loop thru num2string array check that el value exists in loopUp object and freq value > 0
    //if false then return false;
    //if true then decr --1 from lookUp -  we basically knocking off value from lookup for every num occurence found in string.

    let num1str = num1.toString();
    let num2str = num2.toString();

    if (num1str.length !== num2str.length) return false;

    let  lookUp = {};

    for (let num of num1str){
        lookUp[num] = (lookUp[num] || 0) + 1;
    }

    for (let num of num2str){
        if (!lookUp[num]) return false;
        else{
            lookUp[num]--;
        }
    }

    return true;
}
console.log(sameFrequencyEx3(182, 281));
console.log(sameFrequencyEx3(34,14)); // false
console.log(sameFrequencyEx3(3589578, 5879385)); // true
console.log(sameFrequencyEx3(22,222)); // false






