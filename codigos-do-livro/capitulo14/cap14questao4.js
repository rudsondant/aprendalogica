function menu(){
  let op;
  do{
    alert("Bem vindo");
    alert(
      "1 - Cadastrar novo produto\n" +
      "2 - Listar produtos\n" +
      "3 - Buscar produto\n" +
      "4 - Excluir produto\n" +
      "5 - Alterar\n"+
      "6- Sair");
    op = prompt(
      "Escolha uma opção: ");
    if(op=="1"){
      cadastro();
    }else if(op=="2"){
      listar();
    }else if(op=="3"){
      buscar();
    }else if(op=="4"){
      remover();
    }else if(op=="5"){
      alterar();
    }else if(op=="6"){
      alert("Até mais!")
    }
    else{
      alert("Opção inválida");
    }

  }while(op!=6);
}

function cadastro(){
  let nome = prompt("Digite o nome do HD: ");
  HD[HD.length] = nome;
  let valor = prompt("Digite o preço do HD: ");
  preco[preco.length] = valor;
}

function buscar(){
  let nome = prompt("Digite o nome do HD: ");
  let achou = false;
  for(let i=0; i<HD.length; i++){
    if(HD[i] == nome){
      achou = true;
      alert("HD: " + HD[i] + " - Preço: " + preco[i]);
    }

  }
  if(achou==false){
    alert(nome + " não cadastrado");
  }
}

function remover(){
  let nome = prompt("Digite o nome do HD: ");
  let achou = false;
  for(let i=0; i<HD.length; i++){
    if(HD[i] == nome){
      achou = true;
      HD.splice(i,1);
      preco.splice(i,1);
    }
 }
  if(achou==false){
    alert(nome + " não cadastrado");
  }
}

function alterar(){
  let nome = prompt("Digite o nome do HD: ");
  let achou = false;
  for(let i=0; i<HD.length; i++){
    if(HD[i] == nome){
      achou = true;
      let novo = prompt("Digite o novo nome do HD: ");
      HD[i] = novo;
      let novopreco = prompt("Digite o novo preço do HD: ");
      preco[i] = novopreco;
    }
  }
  if(achou==false){
    alert(nome + " não cadastrado");
  }
}

var HD = [ ];
var preco = [ ];
menu( );
