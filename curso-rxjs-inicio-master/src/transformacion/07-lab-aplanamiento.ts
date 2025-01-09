import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  tap
} from "rxjs";
import { ajax } from "rxjs/ajax";

const peticionHttpLogin = (userPass) =>
  ajax.post<any>("https://reqres.in/api/login?delay=1", userPass).pipe(
    map((response) => response.response.token),
    catchError((err) => of("xxx"))
  );

const form = document.createElement("form");
const inputMail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

inputMail.type = "email";
inputMail.placeholder = "Email";
inputMail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputMail, inputPass, submitBtn);
document.querySelector("body").append(form);

const submitForm$ = fromEvent(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value
  })),
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe((token) => {
  console.log(token);
});
