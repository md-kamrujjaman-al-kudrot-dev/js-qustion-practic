// qus2: How to check if an object is an array or not?

// Solution

// thinking proccess
// we can't use this way
// console.log("this is the output of typeof:",typeof [],typeof {}) // output = object object        (js a type of use korle array keo object dekhay {so we can't use this way})

// we can ues this way
// console.log("this is the output of Array.isArray:",Array.isArray([]),Array.isArray({})) //output = true false ( we use this way to solve this problem)

// Final solution
function ArrayOrNot(element) {
    return Array.isArray(element)
}
console.log("is this  an Array:", ArrayOrNot([]))
console.log(" is this  an Array:", ArrayOrNot({}))