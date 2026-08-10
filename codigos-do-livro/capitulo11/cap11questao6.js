// região do programa principal
var nota1, nota2, situacao;
nota1 = Number(prompt("digite a 1ª nota" ));
nota2 = Number(prompt("digite a 2ª nota" ));
situacao = media(nota1, nota2);
alert(situacao);

// região das novas funções.
function media(n1,n2){
    var m, resultado;
    m = (n1 + n2)/2;
    if(m >= 6){
         resultado = "Aprovado";
    }
    else{
         resultado = "Reprovado";
    }
    return resultado;
}
