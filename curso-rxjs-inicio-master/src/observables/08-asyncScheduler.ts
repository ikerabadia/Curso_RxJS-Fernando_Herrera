import { asyncScheduler } from "rxjs";

const saludar = () => console.log("Hola Mundo");
const saludar2 = (persona) =>
  console.log(`Hola ${persona.nombre} ${persona.apellido}`);

/* asyncScheduler.schedule(saludar2, 2000, { nombre: "Iker", apellido: "Abadia" }); */

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    /* if (state < 4) */ this.schedule(state + 1, 1000);
  },
  3000,
  0
);

/* setTimeout(() => {
  subs.unsubscribe();
}, 6000); */

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
