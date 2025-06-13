// qus1: Given a string, reverse each word in the sentence
            // answere
let str = "kamrujjaman brother, Emotion is not for you, so control your salfe."

let reverseStr =  str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})

console.log(reverseStr.join(" "))