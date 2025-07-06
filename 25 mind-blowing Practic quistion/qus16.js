// qus16: write a JavaScript function to get the last elementof an array passing "n" will returnthe last 'n' element of the array.
function retrieve(arr,n = 1){
    if (n <= arr.length){
        for (let i = 0; i<n; i++){
            console.log(arr[arr.length - 1 -i])
        }
    }else{
        console.log(`Array does not contain ${n} elements.`)
    }
}

retrieve([1,2,3,4,5,6], 5)