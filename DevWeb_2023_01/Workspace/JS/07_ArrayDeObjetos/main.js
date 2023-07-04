// Objetos
let aluno = {
  PrimeiroNome: "Abraao",
  Nota: 8,
  Idade:102,
  Altura: 3.15,
  Hobbies: ["ping pong", "Castor de Andrade", "Futebol"],
  Personalidade: "Jogador Caro",
  endereco:{
    numeroCasa: 34,
    nomeRua: "X",
    estado: "SP"
  }
}

console.log(aluno)
console.log(aluno.Nota)
console.log(aluno.Hobbies[1])
console.log(aluno.endereco.numeroCasa)

console.clear()
const {
  PrimeiroNome,
  Idade,
  Nota
} =aluno;

console.log(Nota)

console.clear()
const alunosIOS = [
  {
    nomeAluno: "Higor Fequer",
    Idade: "54",
    Nota: 9
  },
  {
    nomeAluno: "Marcos",
    Idade: "12",
    Nota: 8
  },
  {
    nomeAluno: "Thainá Zerbinatti",
    Idade: 35,
    Nota: 10
  }
]

console.log(alunosIOS)
console.log(alunosIOS[0])
console.log(alunosIOS[0].Nota)

console.log(JSON.stringify(alunosIOS))

let jsonzinho = ''