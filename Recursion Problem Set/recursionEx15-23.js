function reverse(str) {

    let lastIndex  = str.length - 1;
    return str.length > 0 ?  str[lastIndex] + reverse(str.slice(0, lastIndex)) : "";
}

//console.log(reverse("abcdef"));
//console.log(reverse("tacocat"));

//console.log("abcdef".slice(1));


function reverseTS(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

//console.log(reverseTS("abcdef"));


function isPalindrome(str, str2) {
    //
    // console.log(str2);
    let lastIndex  = str.length - 1;
    return str.length > 0 ?  str2 === (str[lastIndex] + isPalindrome(str.slice(0, lastIndex), str2 )) : "";
}

// console.log(isPalindrome("abcdef", "abcdef"));
// console.log(isPalindrome('awesome', 'awesome')) // false
// console.log(isPalindrome('foobar', 'foobar')); // false
//console.log(isPalindrome('tacocat', 'tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama', 'amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium', 'amanaplanacanalpandemonium')); // false


function isPalindromeTS(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb){

    // for (let i = 0; i < arr.length; i++){
        if (arr.length === 0) return false;
        if (cb(arr[0])) return true;
       return someRecursive(arr.slice(1), cb);

    // }
}

// console.log([0,1,2].slice(0,1));
//
// console.log([0,1,2].splice(0,1));
//
// console.log([0,1,2].slice(1));

// console.log(someRecursive([0,0,0], val => val && true));
// // SAMPLE INPUT / OUTPUT
// console.log(someRecursive([1,2,3,4], isOdd)); // true
// console.log(someRecursive([4,6,8,9], isOdd)); // true
// console.log(someRecursive([4,6,8], isOdd)); // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false



//console.log([0,1,2].shift());

function flatten(arr){

    let newArr = [];

    if (arr.length === 0) return "";

    //arr[0].type ===

    //Array.isArray(arr[0]) ? newArr= newArr.concat(...arr[0]) + flatten(arr.slice(1)): newArr.push(arr[0]);

    Array.isArray(arr[0]) ? newArr= newArr.concat(...arr[0]) + flatten(arr.slice(1))
        : newArr= newArr.push(arr[0]) + flatten(arr.slice(1));



    //newArr= newArr.concat(Array.isArray(arr[0]) ? ...arr[0] : arr[0]) + flatten(arr.slice(1));

    return newArr;

}
//console.log(flatten([1,2,[4,5,6]]));

//console.log([1,3,[4,5,6]].slice(1));


function flatten2(oldArr){
    let newArr = []
    for(let i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten2(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

 //console.log(flatten2([1,2,[4,5,6]]));
// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

/////////////////////////////////////////////////////////////////////

function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!



    if (arr.length === 0) return "";

    let newArr = [];
    newArr= newArr.push(arr[0].toUpperCase())  + newArr.concat(capitalizeFirst(arr.slice(1)));

    return newArr;
}


let array = ['car','taco', 'banana'];
// console.log(array.slice(0, -1));
// console.log(array.slice(array.length-1)[0]);
// console.log(array.length);
//console.log(['car','taco','banana'].slice(1));
//console.log(['car','taco','banana'].slice(0,-1));
//console.log(['car','taco','banana'].slice(2));
//console.log(['car','taco','banana'][0].charAt(0).toUpperCase() + ['car','taco','banana'][0].slice(1));

//console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']



function capitalizeWords2 (array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords2(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
}

//console.log(capitalizeWords2(['car','taco','banana']));

// capitalizeWords2(array.slice(0));  car
// capitalizeWords2(array.slice(0, -1));  car, taco
// capitalizeWords2(array.slice(0, -1));  car, taco, banana


/////////////////////////////////////////////////////////////////////////

function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!

    let total = 0;

    for (let key in obj) {

        if (typeof obj[key] === "number") {

            total += obj[key] % 2 === 0 && obj[key];
        }
        else if (typeof obj[key] === "object") {
            total += nestedEvenSum(obj[key]);
        }
    }

    return total;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

var obj3 = {
    a: 2,
    b: 5,
    c: "car",
    d: {d:6},
    e: {e: {e: 2}, ee: 'car'}
};


// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10
// console.log(nestedEvenSum(obj1));
// console.log(nestedEvenSum(obj2));
//  console.log(nestedEvenSum(obj3));

 //////////////////////////////////////




function collectStrings(obj){

    let arr = [];

    for (let key in obj){

        if (typeof obj[key] === "string") {

           arr.push(obj[key]);
        }
        else if (typeof obj[key] === "object") {
            arr  = arr.concat(collectStrings(obj[key]));
        }
    }

    return arr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

//console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

////////////////////////////////////////////////////////////


function stringifyNumbers (obj) {
    // add whatever parameters you deem necessary - good luck!

    let newObj = {};

    for (let key in obj) {

        if (typeof obj[key] === "number") {

            newObj[key] = obj[key].toString();
        }
        else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        }
        else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}


let obj4 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj4));



