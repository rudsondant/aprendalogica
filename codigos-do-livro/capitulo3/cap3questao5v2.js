var n1, n2, media;
n1 = parseFloat(prompt("digite a nota1"));
n2 = parseFloat(prompt("digite a nota 2")); 
media = (n1+n2)/2.0;
alert("A média é: " + media);
if(media >= 5){
        alert("Aprovado");
}
if( media < 5 ){
       if( media >= 3){
           alert("Recuperação");
       }
}
if(media < 3){
         alert("Reprovado");
}
