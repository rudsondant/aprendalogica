var numero, outros, cont = 0;
numero = Number(prompt("digite um número"));
for(outros = 2; outros < numero;  outros++){
    if(numero%outros == 0){
       cont = cont + 1;
       break;
   }
}

if(cont == 0){
    alert("primo");
}
else{
    alert("não");
}
