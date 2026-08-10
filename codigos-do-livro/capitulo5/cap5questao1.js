// região do programa principal
var m;
media( );
avalicao( );

// região das novas funções.
function media(  ){
    var nota1, nota2;
    nota1 = Number(prompt("digite a 1ª nota" ));
    nota2 = Number(prompt("digite a 2ª nota" ));

    m = (nota1  + nota2 )/2;
    alert(m);
}

function avaliacao(  ){
 var resultado;
 if(m >= 6){
         resultado = "Aprovado";
    }
    else{
         resultado = "Reprovado";
    }
    alert(resultado);
}
