// qus15: write a JavaScript function to get the first element of an array. passing a parameter "n" will return the first "n" element of the array

function retrieve(arr,n = 1){
    if (n <= arr.length){
        for (let i = 0; i<n; i++){
            console.log(arr[i])
        }
    }else{
        console.log(`Array does not contain ${n} elements.`)
    }
}

retrieve([1,2,3,4,5,6], 100)