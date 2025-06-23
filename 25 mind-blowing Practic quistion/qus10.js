// qus10: write a JavaScript function to get the number of occurrences of each letter in specified string.

function occ(str){
    let occurrences = {};
    str.split("").forEach(elem => {
        if (occurrences.hasOwnProperty(elem)=== false){
            occurrences[elem] = 1;

        }else{
            occurrences [elem]++
        }
    });

    return occurrences
}

console.log(occ("kamrujjamn"))