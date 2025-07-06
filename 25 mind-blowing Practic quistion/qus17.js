
// qus17: write a JavaScript program to find the most frequent item of an array.

function freq(arr){
    var freq = {}
    arr.forEach(function(elem){
        if (freq.hasOwnProperty(elem))freq[elem]++;
        else freq [elem]= 1;
    })
    var ans = Object.keys(freq).reduce(function(acc,next){
        return freq[acc]> freq[next] ? acc : next;
    })
    console.log(ans);
}

freq([1,25,5,5,5,5,32,32,34,3434,,445,45,54,5,43453,])