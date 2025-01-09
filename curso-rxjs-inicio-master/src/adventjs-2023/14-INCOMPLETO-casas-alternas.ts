console.log(maxGifts([5, 8, 7, 35, 37, 22, 99, 101, 102])); // 9 (4 + 4 + 1)
/*  maxGifts([4, 4, 2, 1, 1, 1]) */

function maxGifts(houses: number[]): number {
  let indexedHouses: any[] = [];
  for (let i = 0; i < houses.length; i++) {
    indexedHouses.push({ index: i, value: houses[i] });
  }
  indexedHouses = indexedHouses.sort((a, b) => b.value - a.value); //Casas con indice y valor ordenadas de mayor a menor
  let giftedHouses: number[] = []; //Ids de las casas que ya han sido regaladas
  let totalGifts = 0;
  for (let i = 0; i < indexedHouses.length; i++) {
    if (giftedHouses.includes(indexedHouses[i].index)) continue;
    if (giftedHouses.includes(indexedHouses[i].index - 1)) continue;
    if (giftedHouses.includes(indexedHouses[i].index + 1)) continue;

    if (
      !giftedHouses.includes(indexedHouses[i].index - 2) &&
      !giftedHouses.includes(indexedHouses[i].index + 2) &&
      houses[indexedHouses[i].index - 1] < indexedHouses[i].value &&
      houses[indexedHouses[i].index + 1] < indexedHouses[i].value &&
      houses[indexedHouses[i].index - 1] + houses[indexedHouses[i].index + 1] >
        indexedHouses[i].value
    )
      continue;
    totalGifts += indexedHouses[i].value;
    giftedHouses.push(indexedHouses[i].index);
  }
  return totalGifts;
}

//VERSION INCOMPLETA - En esta se va cojiendo de mayor a menor y tachando los de al lado
/* function maxGifts(houses: number[]): number {
  let indexedHouses: any[] = [];
  for (let i = 0; i < houses.length; i++) {
    indexedHouses.push({ index: i, value: houses[i] });
  }
  indexedHouses = indexedHouses.sort((a, b) => b.value - a.value);
  let giftedHouses: number[] = [];
  let totalGifts = 0;
  for (let i = 0; i < indexedHouses.length; i++) {
    if (giftedHouses.includes(indexedHouses[i].index)) continue;
    if (giftedHouses.includes(indexedHouses[i].index - 1)) continue;
    if (giftedHouses.includes(indexedHouses[i].index + 1)) continue;
    totalGifts += indexedHouses[i].value;
    giftedHouses.push(indexedHouses[i].index);
  }
  return totalGifts;
} */

//OTRA VERSION DISFUNCIONAL - En esta se verifica si los numeros anterior y posterior son seleccionables y suman mas que el numero maximo
/* function maxGifts(houses: number[]): number {
  let indexedHouses: any[] = [];
  for (let i = 0; i < houses.length; i++) {
    indexedHouses.push({ index: i, value: houses[i] });
  }
  indexedHouses = indexedHouses.sort((a, b) => b.value - a.value); //Casas con indice y valor ordenadas de mayor a menor
  let giftedHouses: number[] = []; //Ids de las casas que ya han sido regaladas
  let totalGifts = 0;
  for (let i = 0; i < indexedHouses.length; i++) {
    if (giftedHouses.includes(indexedHouses[i].index)) continue;
    if (giftedHouses.includes(indexedHouses[i].index - 1)) continue;
    if (giftedHouses.includes(indexedHouses[i].index + 1)) continue;

    if (
      !giftedHouses.includes(indexedHouses[i].index - 2) &&
      !giftedHouses.includes(indexedHouses[i].index + 2) &&
      houses[indexedHouses[i].index - 1] < indexedHouses[i].value &&
      houses[indexedHouses[i].index + 1] < indexedHouses[i].value &&
      houses[indexedHouses[i].index - 1] + houses[indexedHouses[i].index + 1] >
        indexedHouses[i].value
    )
      continue;
    totalGifts += indexedHouses[i].value;
    giftedHouses.push(indexedHouses[i].index);
  }
  return totalGifts;
} */

export interface House {
  index: number;
  value: number;
}
