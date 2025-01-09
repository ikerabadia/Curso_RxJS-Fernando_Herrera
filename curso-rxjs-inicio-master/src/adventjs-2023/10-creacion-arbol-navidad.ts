console.log(createChristmasTree("123", 4));

function createChristmasTree(ornaments, height) {
  const totalCharachters = (height * (height + 1)) / 2;
  let newString = "";
  while (newString.length < totalCharachters) {
    newString += ornaments;
  }
  const ornamentsString = newString;

  const baseLength = height * 2 - 1;
  let tree = "";

  let stringIndex = 0;

  for (let i = 0; i < height; i++) {
    const spaces = Math.floor(baseLength - (i * 2 + 1));
    let ornaments = ornamentsString.slice(stringIndex, stringIndex + i + 1);
    stringIndex = stringIndex + i + 1;
    ornaments = ornaments.split("").join(" ");
    tree += `${" ".repeat(spaces / 2)}${ornaments}\n`;
  }
  tree += " ".repeat(baseLength / 2) + "|\n";

  return tree;
}

/* function getLine(ornamentsString, i, baseLength) {
  const spaces = Math.floor(baseLength - (i * 2 + 1));
  let ornaments = ornamentsString.slice(0, i + 1);
  ornaments = ornaments.split("").join(" ");
  return `${" ".repeat(spaces / 2)}${ornaments}${" ".repeat(spaces / 2)}\n`;
} */

/* function getCharachtersNumber(heigth) {
  return (heigth * (heigth + 1)) / 2;
} */

/* function getCharachtersString(string, totalCharachters) {
  let newString = "";
  while (newString.length < totalCharachters) {
    newString += string;
  }
  return newString;
} */
