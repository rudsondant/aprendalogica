var cont = 0, soma = 0, geral;
//calcula a média de duas notas
function media(nota1, nota2){
  let media;
   media = (nota1 + nota2 )/2;
  return media;
}
//define a categoria da média
function categoria(media){
  let resp;
  if(Number(media)  >=6){
       resp = "APR";
  }
  else if (Number(media)<6 && Number(media)>=3){
       resp="REC";
  }
  else{
    resp="REP";
  }
  return resp;
}
//exibe os resultados na interface HTML
function calcular(){
   let nota1 = parseFloat(document.getElementById("n1").value);
   let nota2 = parseFloat(document.getElementById("n2").value);
   let m = media(nota1, nota2);
   let cat = categoria(m);
   geral = mediaGeral(m);
   document.getElementById("resultado").textContent = m;
   document.getElementById("categoria").textContent = cat;
   document.getElementById("geral").textContent = geral;
   document.getElementById("n1").value = " ";
   document.getElementById("n2").value = " ";
}
//media geral
function mediaGeral(media){
  let geral;
  soma = soma + media;
  cont++;
  geral = soma/cont;
  return geral;
}
