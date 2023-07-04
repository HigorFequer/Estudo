const num = [17, 43, 8, 4, 97, 56, 29, 40];

num.forEach(verificarParImpar);

function verificarParImpar(valor) {
  if (valor % 2 === 0){
  console.log('é par ' + valor)
  } else {
  console.log('é impar ' + valor)
  }
  
}

const num1 = [17, 43, 8, 4, 97, 56, 29, 40, 3, 75, 34, 88, 82];

let filtronum1 = num1.filter((num1) => {
  return num1 > 20 && num1 < 80;
});
console.log(filtronum1);
