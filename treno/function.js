let kilometri=prompt("Quanti kilometri vuoi fare?");
let età= prompt("Quanti anni hai?");
let biglietto=parseFloat(kilometri)*0.21;

if (età<18){
    biglietto*= 0.2;
}else if(età>65){
    biglietto*=0.4;
}
document.getElementById('prezzo').innerHTML = biglietto.toFixed(2);

