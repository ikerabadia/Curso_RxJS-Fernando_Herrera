let penultimo = 0;
let ultimo = 1;
let aux = 0;

for (let i = 0; i < 50; i++) {
  aux = penultimo + ultimo;
  penultimo = ultimo;
  ultimo = aux;
  console.log(aux);
}
