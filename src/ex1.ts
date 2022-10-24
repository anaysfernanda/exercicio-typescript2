// 1. Crie um algoritmo que solicite para o usuário informar um número
// qualquer 7x. Adicione cada número informado pelo usuário em uma lista.
// No final utilize o forEach para mostrar cada elemento da lista.

let num1: number = Number(prompt("Digite um número"));
let num2: number = Number(prompt("Digite um número"));
let num3: number = Number(prompt("Digite um número"));
let num4: number = Number(prompt("Digite um número"));
let num5: number = Number(prompt("Digite um número"));
let num6: number = Number(prompt("Digite um número"));
let num7: number = Number(prompt("Digite um número"));

let list: number[] = [num1, num2, num3, num4, num5, num6, num7];

list.forEach((numero) => {
  console.log(numero);
});
