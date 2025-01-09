import { from, tap } from "rxjs";

let numeros = from(["7834", "1634", "4238", "8624", "6174"]);
const vueltas = 0;

numeros
  .pipe(
    tap({
      next: (num) => {
        console.log("-------------------------------------");
        console.log("NUMERO: ", num);
        calculaKaprekar(num);
      },
      complete: () => console.log("Se termino todo")
    })
  )
  .subscribe();

function calculaKaprekar(numero: string) {
  if (numero === "6174") {
    console.log("Este ya es el numero de kaprekar");
    return;
  }
  if (
    numero === "1111" ||
    numero === "2222" ||
    numero === "3333" ||
    numero === "4444" ||
    numero === "5555" ||
    numero === "6666" ||
    numero === "7777" ||
    numero === "8888" ||
    numero === "9999"
  ) {
    console.log("No se puede hacer la operacion con este numero");
    return;
  }

  let vueltas = 0;
  let ascNumber = orderDigitsAsc(numero);
  let descNumber = orderDigitsDesc(numero);
  let result = parseInt(numero);
  while (result !== 6174) {
    ascNumber = orderDigitsAsc(result.toString());
    descNumber = orderDigitsDesc(result.toString());
    result = descNumber - ascNumber;
    console.log(`${descNumber} - ${ascNumber} = ${result}`);
    vueltas++;
  }
  console.log("Vueltas: " + vueltas);
}

/* calculaKaprekar("7365"); */

function orderDigitsAsc(numero) {
  return parseInt(numero.split("").sort().join(""));
}
function orderDigitsDesc(numero) {
  return parseInt(numero.split("").sort().reverse().join(""));
}
