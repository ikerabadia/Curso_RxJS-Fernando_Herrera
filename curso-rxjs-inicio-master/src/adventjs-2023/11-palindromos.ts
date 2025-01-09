console.log(
  getIndexsForPalindrome("rotaratov") // [0, 1]
);
/* getIndexsForPalindrome("anna"); // []
getIndexsForPalindrome("abab"); // [0, 1]
getIndexsForPalindrome("abac"); // null
getIndexsForPalindrome("aaaaaaaa"); // []
getIndexsForPalindrome("aaababa"); // [1, 3]
getIndexsForPalindrome("caababa");*/ // null
("rotaratov");
("votarator");
function getIndexsForPalindrome(word) {
  const splittedWord: string[] = word.split("");

  if (word === word.split("").reverse().join("")) return [];

  for (let i = 0; i < splittedWord.length; i++) {
    i = i;
    for (let j = i + 1; j < splittedWord.length; j++) {
      let aux = [...splittedWord];
      aux[i] = splittedWord[j];
      aux[j] = splittedWord[i];

      if (aux.join("") === aux.reverse().join("")) {
        return [i, j];
      }
    }
  }

  return null;
}
