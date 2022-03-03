

function Eleve(nom, note){
    this.nom = nom;
    this.note = note;
    
    this.sayHello = function(){
        return `${this.name} vous dit bonjour !`;
    }
    this.Moyenne = function (myArray) {
        var i = 0, summ = 0, ArrayLen = myArray.length;
        while (i < ArrayLen) {
            summ = summ + myArray[i++];
        }
        return summ / ArrayLen;
    }
}

let eleve1 = new Eleve("Bruno",[13,17,12])
console.log(eleve1.note)
let noteTab = eleve1.note
console.log(eleve1.Moyenne(noteTab))