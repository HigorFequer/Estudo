var abraao = true // boolean

var grimaldo = [true, 171, "Gabriel", 3.14]
//               0     1       2        3
console.log(abraao)
console.log(grimaldo)
console.log(grimaldo[2])
console.log(grimaldo[1]) 
// boolean
// numerico
// string
// numero ponto flutuante

console.clear()
const turma = [
  ["turma 1", "Gabriel", 7],
  ["turma 1", "Carina", 10],
  ["turma 1", "Felipe", 9]
]
console.log(turma)

console.clear()

const array1 = ["maça", "kiwi", "Pera", "Tomate"]
console.log(array1)
array1[2] = "melao";
console.log(array1)

console.log(array1.toString())
console.clear()

var atrasado = ["Matheus", "Abraao", "Erick", "Jhonattan"]
console.log(atrasado.join("*"))
console.log(atrasado.length)
let atrasado2 = atrasado.pop()
console.log(atrasado2)
console.log(atrasado)

let atrasado2min = atrasado.push('Fequer')
console.log(atrasado2min)
console.log(atrasado)

let atrasado3min = atrasado.shift();
console.log(atrasado3min)
console.log(atrasado)

console.clear()
let outroatrasado = atrasado.unshift("Adrielly")
console.log(outroatrasado)
console.log(atrasado)
console.clear()

delete atrasado[2]

console.log(atrasado)