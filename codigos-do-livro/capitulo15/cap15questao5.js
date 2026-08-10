var preco = [ ], nome = [ ];
for(i = 0; i < 10; i ++){
      nome[i] = prompt( );
      preco[i] = parseFloat(prompt( ));
}

var preco = [ ], nome = [ ];
var busca;
for(i = 0; i < 10; i ++){
nome[i] = prompt( );
preco[i] = parseFloat(prompt( ));
}
busca = prompt("que produto você quer consultar");
for(i = 0; i< 10; i++){
        if(busca == nome[i]){
             alert(preco[i]);
             break;
       }
}
