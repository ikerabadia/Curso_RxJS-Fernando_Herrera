import { from, of } from "rxjs";

const palabra1 = "Escandalizar";
const palabra2 = "Zascandilear";
let splittedPalabra1 = palabra1.toLowerCase().split("");
let splittedPalabra2 = palabra2.toLowerCase().split("");

console.log(sonAnagramas(palabra1, palabra2));

function sonAnagramas(palabra1: string, palabra2: string): boolean {
  if (palabra1 === palabra2) return false;
  if (palabra1.length !== palabra2.length) return false;
  if (splittedPalabra1.sort().toString() !== splittedPalabra2.sort().toString())
    return false;
  return true;
}
