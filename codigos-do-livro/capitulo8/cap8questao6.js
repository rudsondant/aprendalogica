var cont, idade, maior18;   //criação dos contadores
maior18 = 0;
cont = 0;          //contadores iniciados com 0
while(cont<6){
      idade = prompt("digite a sua idade");
      if(idade>18){
           alert("maior que 18");
           maior18 = maior18 + 1;
      }
   cont = cont+1;
}
alert(maior18)
