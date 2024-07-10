//console.log("hello world1");

function createObject(string){
    //create object
    //for loop thru string
    //if char exists as prop in object add to count
    //if char not exists in then add char as prop with count 1
    //check char is alpha numeric
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase();

        if (!char.match(/^[0-9a-z]+$/)) continue;

        if (obj[char] === undefined) {
            obj[char]=1;
        }
        else
        {
            obj[char] +=1;
        }
    }
    return obj;
}

console.log(createObject("hello world!!!!!!"));

