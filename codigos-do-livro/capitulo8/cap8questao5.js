var continuar, idade;
const frase = "Digite: SIM - continuar; NÃO - encerrar";
continuar = "SIM";
while(continuar == "SIM"){
          idade = parseInt(prompt("Digite sua idade"));
          if(idade > 65){
               alert("Prioridade");
          }
          else{
               alert("Normal");
          }
            continuar= prompt(frase);
}
