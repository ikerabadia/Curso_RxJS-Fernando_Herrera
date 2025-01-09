const movements2 = ">***>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

function maxDistance(movements: string): number {
  let movDer = 0;
  let movIzq = 0;
  let comodines = 0;

  /* for (let i = 0; i < movements.length; i++) {
    if (movements[i] === ">") {
      movDer++;
    } else if (movements[i] === "<") {
      movIzq++;
    } else {
      comodines++;
    }
  } */
  movDer = movements.split("").filter((mov) => mov === ">").length;
  movIzq = movements.split("").filter((mov) => mov === "<").length;
  comodines = movements.split("").filter((mov) => mov === "*").length;

  if (movDer > movIzq) {
    return movDer - movIzq + comodines;
  } else {
    return movIzq - movDer + comodines;
  }
}
