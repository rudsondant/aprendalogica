var dado, frutas = [ ];
frutas = ["banana", "laranja", "goiaba", "acerola" ];
         dado = prompt("que fruta você deseja buscar?" );
for( i = 0; i < 4; i++){
        if(dado == frutas[ i ]){
             alert(frutas[ i ]);
        }
}
