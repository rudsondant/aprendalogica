var 	a=[ ], par=[ ],imp=[ ],contp=0,conti=0;
 for(var 	i=0; i<20; i++){
 	a[i] 	= parseInt(prompt());
 	if(a[i]%2===0){
 		par[contp] 	= a[i];
 	 	contp++;
 	 }
 	 else{
 	 	imp[conti] 	= a[i];
 	 	conti++;
 	 }
 }
 alert("Pares: 	" + par + "\n" +"Impares: " + imp);
