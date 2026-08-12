//calcula a média de duas notas
function media( ){
  let nota1, nota2;
  let media;
  nota1 = parseFloat(document.getElementById("n1").value);
  nota2 = parseFloat(document.getElementById("n2").value);
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
   let m = media( );
   let cat = categoria(m);
  document.getElementById("resultado").textContent = m;
  document.getElementById("categoria").textContent = cat;
  document.getElementById("n1").value = " ";
  document.getElementById("n2").value = " ";
}
