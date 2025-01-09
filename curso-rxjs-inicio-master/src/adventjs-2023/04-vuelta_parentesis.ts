const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

function decode(message: string) {
  while (message.includes("(")) {
    const openIndex = message.lastIndexOf("(");
    const closeIndex = message.indexOf(")", message.lastIndexOf("("));
    const substr = message.substring(openIndex + 1, closeIndex);
    const newSubstr = substr.split("").reverse().join("");
    message = message.replace(`(${substr})`, newSubstr);
  }

  return message;
}
