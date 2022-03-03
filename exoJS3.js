function Eleve(nom, note, prenom){
    this.nom = nom;
    this.note = note;
    this.prenom = prenom;
    this.sayHello = function(){
        return `${this.name} vous dit bonjour !`;
    }
    this.Moyenne = function (myArray) {
        var i = 0, total = 0, ArrayLen = myArray.length;
        while (i < ArrayLen) {
            total = total + myArray[i++];
        }
        return total / ArrayLen;
    }
    this.corrigerJAN = function (myArray){
        
    }
}

let tabPrenom = ["Pierre", "Marie", "Jan" , "Paul"]
const tabnbr = [12,45,10];

console.log(tabPrenom);
tabPrenom[2]="Jean";
console.log(tabPrenom)
tabPrenom.splice(2, 1, 'Jean')
console.log(tabPrenom)

console.log(Math.min(...tabnbr))
console.log(Math.max(...tabnbr))