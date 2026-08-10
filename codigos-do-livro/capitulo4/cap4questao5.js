var quad, carni, oni;
var conhecido = false;
quad = parseInt(prompt("quadrupede?"));
oni = parseInt(prompt("onivoro?"));
carni = parseInt(prompt("carnivoro?"));
if(quad && carni && !oni){
alert("crocodilo");
conhecido=true;
}
if(quad && oni && !carni){
alert("tartaruga");
conhecido=true;

}
if(!conhecido){
         alert("desconhecido");
}
