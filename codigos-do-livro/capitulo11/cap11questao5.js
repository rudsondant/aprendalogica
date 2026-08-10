// região do programa principal
var nota1, nota2, mAluno;
nota1 = Number(prompt("digite a 1ª nota" ));
nota2 = Number(prompt("digite a 2ª nota" ));
mAluno = media(nota1, nota2);
alert(mAluno);

// região das novas funções.
function media(n1,n2){
    var m;
    m = (n1 + n2)/2;
    return m;
}
