//

function areThereDuplicates(...args){

    objDupCount= {};

    for (let char of args) {
        objDupCount[char] = (objDupCount[char] || 0) + 1;

        if (objDupCount[char] > 1) return true
    }
    return false;
//return args.length;
}


function areThereDuplicatesMP(...args){

    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let i =0;

    for (let j = 1; j < args.length; j++){

        if (args[j] !== args[i]) {
            args[++i] = args[j];
        }

    }

    i += 1;

    if (i === args.length) return false;
    return true;
//return args.length;
}


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
console.log("========================"); // false
console.log(areThereDuplicatesMP(1, 2, 3)); // false
console.log(areThereDuplicatesMP(1, 2, 2)); // true
console.log(areThereDuplicatesMP('a' ,'b', 'c', 'a')); // true