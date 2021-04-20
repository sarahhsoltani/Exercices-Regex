// Exercice 1
function espace (){
let name="sarah,soltani"
let espace=/[" ",]/g;
let reslt=espace.test(name);
//console.log(reslt)
}
espace ()
// ------------------EXercice 2--------------------
function vowels(){
    let name="je suis sarra";
    let reg=/[ieyaou]/g;
    let rst=name.match(reg).length;
    //console.log("vowels",rst)
}
vowels()

// ------------------EXercice 3--------------------
function replace(){
let name="je suis sarah soltani";
let regex=/[ieyaou]/g;
let reslt=name.replace(regex,'#')
//console.log('replace',reslt)
}
replace()

// ------------------EXercice 4--------------------
function input(){
    let exp="1+6"
    let regex=/^[0-9][-+/*][0-9]$/;
    let resultat=regex.test(exp)
    console.log(resultat)
}
input()
// ------------------EXercice 5--------------------
function alphabet(){
let name="aaabcc"
let regex=/^[a][a-zA-Z]{0,15}[c]{1,15}[a-zA-Z]{0,15}$/;
let resultat=regex.test(name)
//console.log(resultat)
}
alphabet()
// ------------------EXercice 6--------------------
function number(){
let num="12445";
let regex=/^[0-9]{5}$/;
let resultat=regex.test(num)
console.log(resultat)
}
number()
