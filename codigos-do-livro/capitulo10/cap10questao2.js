var n, i, fatorial;
for(h=0; h <10; h++){
    fatorial= 1;
    n = parseInt(prompt("digite n"));
    for(i = 1; i <= n ; i++){
       fatorial = fatorial* i;
    }
    alert(fatorial);
}
