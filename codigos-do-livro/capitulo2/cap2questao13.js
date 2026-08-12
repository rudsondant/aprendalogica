var horas, numero_dias, resto;
horas = prompt("digite o valor inicial de horas") ;
numero_dias = parseInt(horas/24);
resto = horas % 24;
alert(horas+" equivale a "+ numero_dias + " dias e "+ resto +" horas");
