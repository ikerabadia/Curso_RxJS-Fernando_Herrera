/* A-Z ⇒ a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒   */
console.log(checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#"));
("Santa Claus is coming");
("p#nt: cla#s #s c+min#");
function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;

  for (let i = 0; i < original.length; i++) {
    let ov = 0;
    let cv = 0;

    if (original[i] !== copy[i]) {
      if (/\s/.test(original[i])) {
        ov = 0;
      } else if (original[i] === ".") {
        ov = 1;
      } else if (original[i] === ":") {
        ov = 2;
      } else if (original[i] === "+") {
        ov = 3;
      } else if (original[i] === "#") {
        ov = 4;
      } else if (/^[a-z]$/.test(original[i])) {
        ov = 5;
      } else if (/^[A-Z]$/.test(original[i])) {
        ov = 6;
      }
    }

    if (/\s/.test(copy[i])) {
      cv = 0;
    } else if (copy[i] === ".") {
      cv = 1;
    } else if (copy[i] === ":") {
      cv = 2;
    } else if (copy[i] === "+") {
      cv = 3;
    } else if (copy[i] === "#") {
      cv = 4;
    } else if (/^[a-z]$/.test(copy[i])) {
      cv = 5;
    } else if (/^[A-Z]$/.test(copy[i])) {
      cv = 6;
    }

    if (copy[i] !== original[i] && ov <= cv) {
      return false;
    }

    if (cv === 5 && ov === 6 && copy[i].toUpperCase() !== original[i]) {
      return false;
    }
  }
  return true;
}
