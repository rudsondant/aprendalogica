// região do programa principal
var mAluno;
mAluno = media();
alert(mAluno);
// região das novas funções.
function media( ){
    var nota1, nota2, m;
    nota1 = Number(prompt("digite a 1ª nota" ));
    nota2 = Number(prompt("digite a 2ª nota" ));
    m = (nota1 + nota2)/2;
    return m;
}
