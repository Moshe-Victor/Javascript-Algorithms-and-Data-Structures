function factorial1(num) {

    if (num <= 1 ) return 1;

    let fc  =num;
    for (let i = num-1; i > 0 ; i--) {
        fc *= i;
    }
    return fc;
}

//console.log(factorial1(0));



function factorial2(num){
    if (num <= 1 ) return 1;
    return num * factorial2(num -1);
}


//console.log(factorial2(4));




function productOfArray(arr){
    if (arr.length === 0) return 0 ;
    return arr[0] + productOfArray(arr.slice(1));
}
//console.log(productOfArray([1,2,3,4,5,6]));

//console.log([1,2,3,4,5,6].slice(1));


function recursiveRange(num){
    if (num === 0) return 0 ;
    return num + recursiveRange(num-1);
}
//console.log(recursiveRange(5));



//fib
function fib(num){
    if (num <= 2) return 1;
    return fib(num-1) + fib(num-2);
}
console.log(fib(6)); // 5+ 3
