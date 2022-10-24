// 4. Crie uma lista com 7 produtos eletrodomésticos e pergunte para o
// usuário qual produto ele deseja comprar.
// Utilize o método findIndex para verificar se o produto que o usuário quer
// existe dentro da lista, se o produto existir mostre uma mensagem
// parabenizando pela compra e remova o produto da lista.

const lista4: string[] = [
  "notebook",
  "celular",
  "radio",
  "tablet",
  "televisão",
  "maquina de lavar",
  "impressora",
];

let compra: string | null = prompt("Qual eletrodoméstico você deseja comprar?");

const eletrodomestico = lista4.findIndex((eletro: string) => {
  if (eletro === compra) {
    alert("Parabéns pela compra!");
    lista4.splice(lista4.indexOf(eletro), 1);
    console.log(lista4);
  }
});
