var soma, idade, cont;	//criação da variaveis
soma = 0;
cont = 0;
idade= Number(prompt("Digite a primeira idade"));
while(idade >= 0){
      soma = soma + idade;
      cont = cont + 1;
      idade =  Number(prompt("Digite a próxima idade"));
}
media = soma / cont;
alert(media);
