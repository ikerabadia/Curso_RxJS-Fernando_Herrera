const gifts = ["libro", "ps5"];
const materials = "psli";

console.log(manufacture(gifts, materials));

function manufacture(gifts, materials) {
  let manufacturableGifts = [];
  materials = materials.split("");

  for (let gift of gifts) {
    const splittedGift = gift.split("");
    let craftable = true;
    for (let letter of splittedGift) {
      if (!materials.includes(letter)) {
        craftable = false;
      }
    }
    if (craftable) manufacturableGifts.push(gift);
  }

  return manufacturableGifts;
}
