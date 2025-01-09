import { switchMap } from "rxjs";
import { fromEvent, interval, mergeMap } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$
  .pipe(
    switchMap(() => interval$)
    /* mergeMap(() => interval$) */
  )
  .subscribe(console.log);
