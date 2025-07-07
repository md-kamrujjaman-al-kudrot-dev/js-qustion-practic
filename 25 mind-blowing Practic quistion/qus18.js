function shaffalekaro(arr){
    let totalShuffleArea = arr.length;
    while(totalShuffleArea > 0){
        totalShuffleArea--;
        let indexToBeExchanged = Math.floor(Math.random()*totalShuffleArea);
        var temp = arr[totalShuffleArea]
        arr[totalShuffleArea] = arr[indexToBeExchanged];
        arr[indexToBeExchanged] = temp;
    }
    return arr
}


console.log(shaffalekaro([1,2,3,4,5,6,7]))