var soma, valor;  //criação da variáveis
soma = 0;
valor = Number(prompt("preço do primeiro produto"));
while(valor>=0){
      soma = soma + valor;
      valor =  Number(prompt("preço de outro produto"));
}
alert(soma)
