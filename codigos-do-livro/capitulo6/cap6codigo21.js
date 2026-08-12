function main( ){
  var nota1, nota2;
  var media;

  nota1 = parseFloat(document.getElementById("n1").value);
  nota2 = parseFloat(document.getElementById("n2").value);

  media = (nota1 + nota2 )/2;
  alert(media);
}
