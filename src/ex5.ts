// 5. Faça a mesma atividade anterior, mas troque o função findIndex pela
// função find.

const lista5: string[] = [
  "notebook",
  "celular",
  "radio",
  "tablet",
  "televisão",
  "maquina de lavar",
  "impressora",
];

let compra2: string | null = prompt(
  "Qual eletrodoméstico você deseja comprar?"
);

const eletrodomestico2 = lista5.find((eletro: string) => {
  if (eletro === compra2) {
    alert("Parabéns pela compra!");
    lista5.splice(lista5.indexOf(eletro), 1);
    console.log(lista5);
  }
});
