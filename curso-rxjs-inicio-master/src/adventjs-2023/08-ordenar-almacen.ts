const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'

//1 pale = 50 regalos -> [x]
//1 caja = 10 regalos -> {x}
//resto de regalos -> (xxx)

function organizeGifts(gifts) {
  const giftsArray: string[] = gifts.split(/(?<=[a-zA-Z])/);
  let almacen = "";

  giftsArray.forEach((gift) => {
    const letter = gift.match(/[a-zA-Z]/)[0];
    let number = parseInt(gift.match(/\d+/)[0]);
    let pales = 0;
    let cajas = 0;
    pales = Math.floor(number / 50);
    number = number % 50;
    cajas = Math.floor(number / 10);
    number = number % 10;
    almacen += `[${letter}]`.repeat(pales) + `{${letter}}`.repeat(cajas);

    if (number > 0) {
      almacen += `(${letter.repeat(number)})`;
    }
  });
  return almacen;
}
