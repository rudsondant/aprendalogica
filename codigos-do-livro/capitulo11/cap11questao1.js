//região do programa principal
var n;
n = parseInt(prompt("digite n"));
fatorial(n);

//região das novas funções
function fatorial( num ){
    var i, fat;
    fat= 1;
   for(i = 1; i <= num ; i++){
        fat = fat* i;
    }
    alert(fat);
}
