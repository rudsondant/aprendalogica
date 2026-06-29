var lado1, lado2, lado3;
 lado1 = parseInt(prompt("Digite o valor do primeiro lado: "));
 lado2 = parseInt(prompt("Digite o valor do segundo lado: "));
 lado3 = parseInt(prompt("Digite o valor do terceiro lado: "));
            if (lado3<lado1+lado2) {
    		if (lado2<lado1+lado3) {
    		   if (lado1<lado2+lado3) {
      			alert("Os lados formam um triângulo.");
       		   }
    		}
      	}
