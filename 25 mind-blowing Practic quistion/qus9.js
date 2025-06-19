// qus9:  write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function CaPitalize(str){
    let upper =str.split("").map(function(word){
        return word.chatAt(0).toUpperCase() + word.substring(1)
    })
    return upper.join("")
}

console.log('hello kamrujjaman how are you')