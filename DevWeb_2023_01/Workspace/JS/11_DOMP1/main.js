// JavaScript e DOM
// objeto document
console.log(document);
// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
// Alterar o título
document.title = "Socorro Deus";
// Criar um elemento <h1>
let nomeUsuario = "Marcos";

if (nomeUsuario === "Marcos") {
  let heading = document.createElement("H1");
  heading.innerHTML = `Olá ${nomeUsuario}`;
  document.body.appendChild(heading);
} else {
  let heading = document.createElement("H1");
  heading.innerHTML = "Olá alunos!";
  document.body.appendChild(heading);
}
