var numero, outros, cont = 0;
numero = Number(prompt("digite um numero"));
for(outros = 2; outros < numero;  outros++){
    if(numero%outros == 0){
       cont = cont + 1;
   }
}

if(cont == 0){
    alert("primo");
}
else{
    alert("não");
}
