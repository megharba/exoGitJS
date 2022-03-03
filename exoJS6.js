let tabFilm = ["Spider-man", "Harry Potter", "Matrix 4" , "Nemo"]


function search (myArray,film) {
    var i = 0
    let tableauResultat = [] 
    ArrayLen = myArray.length;
    while (i < ArrayLen) {
        if (myArray[i++] == film){
            tableauResultat.push(myArray[i-1])
        }
    }
    return tableauResultat ;
}

console.log(search(tabFilm,"Harry Potter"))