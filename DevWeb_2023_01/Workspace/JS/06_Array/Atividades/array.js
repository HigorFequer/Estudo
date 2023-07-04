// Array Unidimensional
var EX = [
  "HTML",
  "1993",
  "CSS",
  "1996",
  "Booststrap",
  "2011",
  "JS",
  "1995",
  "React",
  "2013",
  "Java",
  "1995",
];

console.log(EX)
console.log(EX[6])
console.log(EX.join())
console.log(EX.join("/"))

let IOS = EX.unshift("IOS")
console.log(IOS)
console.log(EX)
// Array bidimensional
var EX1 = [
  ["HTML","1993","CSS","1996"],
  ["Booststrap","2011","JS","1995"],
  ["React","2013","Java","1995"],
];

console.log(EX1)
console.log(EX1[2][1])

EX1[1][2] = "JavaScript"
console.log(EX1)

delete EX1[2][2]

let EXpipoca = EX1.push('pipoca')
console.log(EXpipoca)
console.log(EX1)