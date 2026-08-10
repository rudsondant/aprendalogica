var idade, rendaTotal, qtd;
idade = parseInt(prompt("idade?"));
rendaTotal = parseFloat(prompt("sua renda total?"));
qtd = parseInt(prompt("quantas pessoas?"));
if(idade>=18 && (rendaTotal<=3135  || rendaTotal/qtd <=552.5)){
alert("apto")
}
else{
alert("nao");
}
