// Paulo Henrique Ribeiro
// Definindo as variáveis
var nota1 = 10;
var nota2 = 8;
var media = (nota1 + nota2) / 2;
//Booleanos
var alunoPassou = media >= 7; 
var alunoReprovou = media <= 4;
// Exibe as notas e a média para passar
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log("Média para passar: 7");
console.log("Média para reprovar: 4");
console.log("Recuperação: entre 4 e 7");
//Estruturas condicionais
if (alunoPassou){
    console.log("Você passou!");
} else if (alunoReprovou){
    console.log("Você reprovou!");
} else {
    console.log("Você está de recuperação! ");}