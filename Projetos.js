const prompt = require('prompt-sync')(); //Comando para o prompt rodar



//USUARIO ESCOLHE QUANTAS VEZES SEU NOME VAI REPETIR
let nome = prompt("Digite seu nome: "); 

let vezes = prompt("Quantas vezes você quer que repita: ");


for (let i = 0; i < vezes; i++) {
    console.log(nome);
}





//MINHAS MUSICAS FAVORITAS

let musicas = ["Chlorine", "Stressed out", "The judge", "My Blood", "Tear in My Heart"];

console.log("Top 5 Músicas:\n"+musicas [0], "\n"+musicas [1], "\n" + musicas[2], "\n" + musicas[3], "\n"+musicas [4]);












//FAZER COM QUE O USUÁRIO TENHA INTERAÇÃO NO SISTEMA!
let usuario = prompt("Digite suas 5 músicas favoritas:");
let musicas = usuario.split(',');

console.log("Suas músicas favoritas:");

for (let i = 0; i < musicas.length; i++) {
console.log(musicas[i].trim());
}





//SAUDAÇÕES AO USUÁRIO
let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")
let altura = prompt("Digite sua altura:")
let cidadeNatal = prompt("Digite sua Cidade Natal:")

console.log("Olá " + nome +  ", sua idade é "+ idade+" anos, você tem "+altura+"cm de altura e nasceu em " +cidadeNatal+"!" )
















//TESTE IF E ELSE

let tempoEnsolarado = true;

let palavra = prompt("O tempo está ensolarado?")

if ( palavra == "Sim"){ 
  console.log("O tempo está ensolarado!")
}

else {
  console.log("O tempo está chuvoso!")

}




//CALCULADORA

console.log( "Calculadora")
let num1 = parseFloat(prompt("Escolha o primeiro número:"));

let operação = prompt("Qual operação deseja fazer? (+, -, *, /) ");

let num2 = parseFloat(prompt("Escolha o segundo número: "));

let resultado;



switch (operação){

case "+":
resultado = num1 + num2;
break;

case "-":
resultado = num1 - num2;
break;

case "*":
resultado = num1 * num2;
break;

case "/":
resultado = num2 !== 0 ? num1 / num2: "Erro: Divisão por zero";
break;

default:
  resultado = "Operação inválida;"
}

console.log ("Resultado = " + resultado );




