import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap<MouseEvent>(console.log),
    map(({ clientY, clientX }) => ({
      clientY,
      clientX
    })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete")
  });
