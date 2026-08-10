//região do programa principal
var n, n_fat;
n = parseInt(prompt("digite n"));
n_fat = fatorial(n);
alert(n_fat)

//região das novas funções
function fatorial( num ){
    var i, fat;
    fat= 1;
   for(i = 1; i <= num ; i++){
        fat = fat* i;
    }
    return fat;
}
