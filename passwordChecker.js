/*

// let lmao = /(\w{3})/g;
let password = "ajsdkjjlj";
// console.log(password.match(lmao));

// array with duplicates
let threeCharsArray = password.split("").map( val => val.repeat(3));
console.log(threeCharsArray);

// array without duplicates
let CharsSet = new Set(threeCharsArray);
threeCharsArray = Array.from(CharsSet);
console.log(threeCharsArray);

let result = false;

threeCharsArray.forEach(Chars => {
    if(password.includes(Chars) === true){
        result = true;
    }
});

console.log(result);
// console.log(password.includes("aaa"));
// console.log(password.includes());

*/









var strongPasswordChecker = function(password) {
    let count = 6;
    let upper = /[A-Z]/;
    let lower = /[a-z]/;
    let digit = /[0-9]/;
    
    // THREE CHARS:
    // array with duplicates
    let threeCharsArray = password.split("").map( val => val.repeat(3));

    // array without duplicates
    let CharsSet = new Set(threeCharsArray);
    threeCharsArray = Array.from(CharsSet);

    let result = false;

    threeCharsArray.forEach(Chars => {
        if(password.includes(Chars) === true){
            result = true;
        }
    });
    
    
    if (password.length >= 6 && password.length <= 20){  // NO
        count-=2;
    if (!result){ // YES
        count--;
    }
    }
    if (upper.test(password)){ // NO
        count--;
    }
    if (lower.test(password)){ // YES
        count--;
    }
    if (digit.test(password)){ // NO
        count--;
    }
    return count;
};

console.log(strongPasswordChecker("a"));

// aA1  NO for the first condition





/*Current Code*/
// var strongPasswordChecker = function(password) {
//     let count = 6;
//     let upper = /[A-Z]/;
//     let lower = /[a-z]/;
//     let digit = /[0-9]/;
    
//     // THREE CHARS:
//     // array with duplicates
//     let threeCharsArray = password.split("").map( val => val.repeat(3));
//     // console.log(threeCharsArray);

//     // array without duplicates
//     let CharsSet = new Set(threeCharsArray);
//     threeCharsArray = Array.from(CharsSet);
//     // console.log(threeCharsArray);

//     let result = false;

//     threeCharsArray.forEach(Chars => {
//         if(password.includes(Chars) === true){
//             result = true;
//         }
//     });
    
    
//     if (password.length >= 6 && password.length <= 20){  // NO
//         count-=2;
//     if (!result){ // YES
//         count--;
//     }
//     }
//     if (upper.test(password)){ // NO
//         count--;
//     }
//     if (lower.test(password)){ // YES
//         count--;
//     }
//     if (digit.test(password)){ // NO
//         count--;
//     }
//     return count;
// };