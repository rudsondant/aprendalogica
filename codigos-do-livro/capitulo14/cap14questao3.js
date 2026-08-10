var achou, dado, frutas = [  ];
frutas = ["banana", "laranja", "goiaba", "acerola" ];
achou = false;
         dado = prompt("que fruta você deseja buscar?" );
for( i = 0; i < 4; i++){
        if(dado == frutas[ i ]){
             alert(frutas[ i ]);
             achou = true;
        }
 }
if(achou == false){
     alert("não achei");
}
