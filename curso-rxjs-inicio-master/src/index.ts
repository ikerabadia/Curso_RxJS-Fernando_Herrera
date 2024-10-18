import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado")
};

const intervalo$ = new Observable<number>((subscriber) => {
  let segundo = 0;
  const interval = setInterval(() => {
    subscriber.next(segundo);
    console.log(segundo);
    segundo++;
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe();
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();

  console.log("Completado timeout");
}, 3000);
