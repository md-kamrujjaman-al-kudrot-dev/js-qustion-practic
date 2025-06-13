// qus6: Write a JavaScript function that reverse a number

// way 1 
function kk(value){
    // return value.toString().split("").reverse().join("") // ata string return korboe tai atake number er modde dia pass koray number korai te hbe 
    return Number(value.toString().split("").reverse().join(""));
}
console.log(kk(12345))

// way2