// região do programa principal
var nota1, nota2;
nota1 = Number(prompt("digite a 1ª nota" ));
nota2 = Number(prompt("digite a 2ª nota" ));
media(nota1, nota2 );

// região das novas funções.
function media(n1, n2 ){
    var media;
    media = (n1 + n2)/2;
    alert(media);
}
