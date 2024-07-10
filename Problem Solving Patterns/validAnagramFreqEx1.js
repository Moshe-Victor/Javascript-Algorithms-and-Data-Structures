function validAnagramFreqEx1(arr1, arr2){

    if (arr1.length !== arr2.length) return false;

    let object1 = {};
    let object2 = {};

    for (let char of arr1){
        object1[char] = (object1[char] || 0) +1  ;
    }
    for (let char of arr2){
        object2[char] = (object2[char] || 0) +1  ;
    }

    for (let key in object1){
        if (!(key in object2)) return false;
    }

    for (let key in object1){
        if (object1[key] !== object2[key]) return false;
    }

    return true;
}
//console.log("object1:" + obj);
console.log(validAnagramFreqEx1("",""));
console.log(validAnagramFreqEx1("aaz","zza"));
console.log(validAnagramFreqEx1("anagram", "nagaram"));
console.log(validAnagramFreqEx1("rat","car")) ;// false) // false
console.log(validAnagramFreqEx1('awesome', 'awesom')) ;// false
console.log(validAnagramFreqEx1('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagramFreqEx1('qwerty', 'qeywrt')); // true
console.log(validAnagramFreqEx1('texttwisttime', 'timetwisttext')); // true