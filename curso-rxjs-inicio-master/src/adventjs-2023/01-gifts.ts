let gifts01 = [2, 1, 1, 5, 3, 2];
let auxGifts = [];

console.log(getRepeatedGift(gifts01));

function getRepeatedGift(gifts01: number[]) {
  gifts01 = gifts01.filter(
    (gift) => gifts01.indexOf(gift) !== gifts01.lastIndexOf(gift)
  );

  for (let gift of gifts01) {
    if (!auxGifts.includes(gift)) {
      auxGifts.push(gift);
    } else {
      return gift;
    }
  }
  return -1;
}
