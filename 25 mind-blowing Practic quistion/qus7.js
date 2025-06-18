// qus7: Write a JavaScript function that check whether a passed string is palindrome or not

// answer
function strPalCheck (str){
    const reverse = str.split("").reverse().join('')
    // if(str === reverse){
    //     return true;
    // }else{
    //     return false;
    // }
    
    // short from of this code
    return str === reverse;
}
console.log(strPalCheck("madam"))
console.log(strPalCheck("dwg"))