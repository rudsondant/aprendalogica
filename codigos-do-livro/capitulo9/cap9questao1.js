var numero, idade;
do{
          idade = parseInt(prompt("Digite sua idade"));
          if(idade > 65){
               alert("Prioridade");
          }
          else{
               alert("Normal");
          }
          numero = parseInt(prompt("2 para encerrar"));
}while(numero == 1);
