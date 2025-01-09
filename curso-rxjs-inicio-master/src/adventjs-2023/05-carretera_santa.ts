const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

console.log(result);

function cyberReindeer(road, time) {
  let result: string[] = [road];
  let roadNoSanta = road.replace("S", ".").split("");

  for (let i = 0; i < time - 1; i++) {
    if (i === 4) {
      roadNoSanta = roadNoSanta.join("").replaceAll("|", "*").split("");
      road = road.replaceAll("|", "*");
    }

    let splittedRoad = road.split("");
    let santaPosition = splittedRoad.indexOf("S");

    if (splittedRoad[santaPosition + 1] !== "|") {
      splittedRoad[santaPosition + 1] = "S";
      splittedRoad[santaPosition] = roadNoSanta[santaPosition];
      road = splittedRoad.join("");
    }

    result.push(splittedRoad.join(""));
  }
  return result;
}
