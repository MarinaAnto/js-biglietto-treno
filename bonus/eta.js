let eta1=prompt("Tu quanti anni hai?");
let eta2=prompt("E il tuo amico quanti anni ha?");
if (isNaN(eta1)|| isNaN(eta2)){
    window.alert("ATTENZIONE: puoi inserire solo numeri !!!")
} else {
     if (eta1>eta2){
    document.getElementById('demo').innerHTML ="Congratulazioni sei più grande del tuo amico : )" ;


       }else if(eta1<eta2){
    document.getElementById('demo').innerHTML ="Congratulazioni sei più piccolo del tuo amico : )" ;

    }else{
    document.getElementById('demo').innerHTML ="Congratulazioni siete coetanei : )" ;
 }
}