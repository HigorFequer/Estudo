let lista = document.getElementById("itens");
let item1 = lista.firstElementChild;

function alterarBackgroundColor() {
  let elemento = document.getElementById("item1");
  elemento.style.backgroundColor = "black";
  elemento.style.color = "white";
}

function alterarFontWeight() {
  let elementos = document.getElementsByClassName("item2");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.fontWeight = "bold";
  }
}

function criarEfeitoZebrado() {
  let elementos = document.getElementsByTagName("li");
  for (let i = 0; i < elementos.length; i++) {
    if (i % 2 === 0) {
      elementos[i].style.backgroundColor = "yellow";
    } else {
      elementos[i].style.backgroundColor = "green";
    }
  }
}

function incluirBorderBottom() {
  let elementos = document.getElementsByName("item3");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.borderBottom = "3px solid blue";
  }
}

function removerElemento() {
  lista.removeChild(item1);
}

function recuperarElemento() {
  let lista = document.getElementById("itens");
  let primeiroElemento = lista.firstElementChild;
  item1.innerHTML = "item recuperado"
  lista.insertBefore(item1, primeiroElemento);
}

let ul = document.getElementById("itens");
ul.style.listStyle = "none";

ul.style.listStyle = "decimal inside";
