var numero, idade;
const frase = "Digite 1 - continuar; 2 - encerrar";
numero = 1;
while(numero == 1){
    idade = parseInt(prompt("Digite sua idade"));
    if(idade > 65){
       alert("Prioridade");
    }
    else{
       alert("Normal");
  } //fim fo else
   numero = parseInt(prompt(frase));
}// fim do comando while
