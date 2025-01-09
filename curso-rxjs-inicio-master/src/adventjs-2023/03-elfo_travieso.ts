const original = "abcd";
const modified = "abcde";

console.log(findNaughtyStep(original, modified));

function findNaughtyStep(original, modified) {
  let larga = "";
  let corta = "";

  if (original.length > modified.length) {
    larga = original;
    corta = modified;
  } else {
    larga = modified;
    corta = original;
  }

  for (let i = 0; i < larga.length; i++) {
    if (original[i] !== modified[i]) {
      return larga[i];
    }
  }
  return "";
}
