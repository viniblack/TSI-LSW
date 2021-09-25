
let Lakers = (79 + 120 + 103 + 100)/4;
let Golden = (107 + 105 + 110 + 99)/4;
let Cavaliers = (90 + 117 + 108 + 89)/4;

console.log ("Media Lakers: " + Lakers , "/ Media Golden: " + Golden , " / Media Cavaliers: " + Cavaliers) ;


// if ternário 
// console.log ( Lakers > Golden ? 'Lakers tem maior média' : 'Golden tem maior média' ); 


// switch case
switch (true){
    case ( Lakers > Golden && Lakers > Cavaliers) : 
        console.log ("Lakers tem maior média");
        break;
    case ( Golden > Lakers && Golden > Cavaliers) :
        console.log("Golden tem maior média");
        break;
    default:
        console.log("Cavaliers tem maior média")
}