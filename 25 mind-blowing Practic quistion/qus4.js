// qus4: How would you check if a number is an integer?

        // thinking
// we can use this method
// console.log(Number.isInteger(10.2)) //output: false {because 10.2 is floting type value}
        // But we will use this way to solve this

let value = 10;

if(value%1 === 0){
    console.log('integer')
}else{
    console.log("NOT !")
}