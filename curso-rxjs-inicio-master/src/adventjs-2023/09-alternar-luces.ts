console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

function adjustLights(lights) {
  let correctLightsGreen = ["🟢"];
  let greenStartChangeAmount = 0;
  let correctLightsRed = ["🔴"];
  let redStartChangeAmount = 0;

  if (lights[0] !== "🟢") greenStartChangeAmount++;
  if (lights[0] !== "🔴") redStartChangeAmount++;

  for (let i = 1; i < lights.length; i++) {
    correctLightsGreen[i - 1] === "🟢"
      ? correctLightsGreen.push("🔴")
      : correctLightsGreen.push("🟢");
    if (lights[i] !== correctLightsGreen[i]) {
      greenStartChangeAmount++;
    }

    correctLightsRed[i - 1] === "🔴"
      ? correctLightsRed.push("🟢")
      : correctLightsRed.push("🔴");
    if (lights[i] !== correctLightsRed[i]) {
      redStartChangeAmount++;
    }
  }
  if (greenStartChangeAmount < redStartChangeAmount) {
    return greenStartChangeAmount;
  }

  return redStartChangeAmount;
}
