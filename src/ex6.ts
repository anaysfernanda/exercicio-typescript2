// 6. Dado a seguinte lista de números:
// 17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32

// a) Adicione +1 em cada valor da lista;
// b) Crie um novo array contendo apenas os valores ímpares;
// c) Crie um novo array alterando todos os valores ímpares para o
// próximo valor par;
// d) Crie um novo array com os valores menores do que 20;
// e) Crie um novo array com os valores menores do que 17 e incremente
// cada um dos valores desse novo array;
// f) Retorne a soma de todos os valores menores do que 20;

let lista6: number[] = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];

let adicionar: number[] = lista6.map((num: number) => (num += 1));
console.log(adicionar);

let listImpar: number[] = lista6.filter((impar: number) => impar % 2 !== 0);
console.log(listImpar);

let somarPar: number[] = listImpar.map((numero: number) => (numero += 1));
console.log(somarPar);

let menores = lista6.filter((value: number) => value < 20);
console.log(menores);

let menores17 = lista6.filter((value: number) => value < 17);
let incremento: number[] = menores17.map((numero: number) => (numero += 1));
console.log(incremento);

let somaNum: number = menores.reduce(
  (acumul: number, inicial: number) => (acumul += inicial)
);
console.log(somaNum);
