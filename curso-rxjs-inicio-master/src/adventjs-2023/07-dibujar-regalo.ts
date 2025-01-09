console.log(drawGift(10, "."));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####

*/

function drawGift(size, symbol) {
  const lines = size * 2 - 1;
  let gift = "";

  for (let i = 1; i <= lines; i++) {
    if (i < size) {
      //primera mitad
      for (let j = 1; j <= lines; j++) {
        if (j <= size - i) {
          gift += " ";
        } else {
          if (i === 1) {
            gift += "#";
          } else {
            if (j === size - i + 1 || j === size - i + size || j === lines) {
              gift += "#";
            } else {
              gift += symbol;
            }
          }
        }
      }
      gift += "\n";
    } else if (i === size) {
      //linea central
      for (let j = 0; j < lines; j++) {
        if (j <= size - 1 || j === lines - 1) {
          gift += "#";
        } else {
          gift += symbol;
        }
      }
      gift += "\n";
    } else {
      //segunda mitad
      const giftArray = gift.split("\n");
      giftArray.pop();
      giftArray.pop();
      giftArray.reverse();
      giftArray.forEach((line) => {
        gift += line.trim() + "\n";
      });
      break;
    }
  }
  return gift;
}
