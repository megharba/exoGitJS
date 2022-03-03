//Chine,Inde,USA,Indonésie,Pakistan,Brésil,Nigeria,Bangladesh,Russie,Mexique

let tabpop = [1.5,1.3,0.329,0.270,0.207,0.207,0.200,0.168,0.146,0.126]

const reducer = (accumulator, curr) => accumulator + curr;
console.log(tabpop.reduce(reducer));

function Motab (myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
}

function sup1MILLI (myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
}
console.log(Motab(tabpop));