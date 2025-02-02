import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");
click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    /* takeWhile(({ y }) => y <= 150) */
    takeWhile(({ y }) => y <= 150, true) //El true hace que incluya el valor que rompe la condicion
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete")
  });
