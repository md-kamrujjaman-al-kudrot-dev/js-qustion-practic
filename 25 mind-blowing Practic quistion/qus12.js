// qus12: loop an array of object and remove all object which don't have gender's value maleb

let arr = [
    {name : "Kamrujjaman",gender: "male"},
    {name : "biplob",gender: "male"},
    {name : "Kamrujjamanta",gender: "female"},
    {name : "Kamrujjamanti",gender: "female"}

]

let newarr = arr.filter(function(elem){
    return elem.gender === "male"
})

console.log(newarr)