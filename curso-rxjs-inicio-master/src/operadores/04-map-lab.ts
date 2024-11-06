import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec vulputate lacus, id laoreet lectus. In tortor eros, ultrices eu ornare ut, varius at nunc. Donec vel erat vitae eros rhoncus tempor vitae at leo. Mauris et quam laoreet, lobortis purus ac, mollis ligula. In tellus leo, eleifend pulvinar purus porttitor, pellentesque bibendum justo. Suspendisse rhoncus mauris sed velit sodales, eget iaculis libero malesuada. Nulla commodo hendrerit risus ullamcorper accumsan. Phasellus posuere ornare nibh, eget porta sem laoreet eget. Vivamus sodales diam leo, eget aliquam augue efficitur sed. Etiam et erat a dolor ornare volutpat. Sed bibendum eros quis nibh vehicula, vitae ultricies massa cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in elit nec sapien volutpat sagittis. Suspendisse potenti. Aenean convallis lorem id iaculis condimentum.
<br><br>
Maecenas ac mi accumsan, tincidunt nulla ac, euismod nulla. Maecenas accumsan tortor ac odio ultricies euismod. Etiam efficitur nisl mi, ac dapibus nisi efficitur a. Phasellus sit amet nulla gravida, elementum erat ac, condimentum metus. Nulla facilisis quis enim sit amet ornare. Aliquam vulputate libero nisi, id fringilla ligula vulputate id. Nulla condimentum vulputate egestas. Donec vitae varius nulla. Duis ut eleifend felis. Proin pellentesque finibus ipsum vitae viverra. Sed sit amet faucibus nisl.
<br><br>
In interdum cursus sapien, fringilla rutrum metus condimentum eu. Praesent felis tellus, viverra imperdiet lectus id, facilisis volutpat massa. Mauris lacinia est ut suscipit dictum. Sed vitae lorem et metus consequat lacinia sed vestibulum arcu. Vestibulum hendrerit sit amet ligula et pharetra. Etiam ut nulla pellentesque, convallis tortor auctor, ultricies felis. Sed rhoncus nisi dolor, porta pretium nulla tincidunt in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eu risus eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet eu velit et posuere. Donec imperdiet justo est, commodo finibus augue pellentesque sed. Morbi finibus pharetra volutpat.
<br><br>
Curabitur sagittis commodo laoreet. Sed suscipit diam nec justo tempor dignissim. Quisque finibus, mauris eu fringilla consectetur, lectus diam tristique massa, quis ultrices magna risus id ligula. Cras ultrices orci ut nisl auctor auctor. Ut feugiat elit eget luctus rhoncus. Proin fringilla feugiat ex bibendum varius. Donec sollicitudin venenatis dui quis imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultrices, augue sit amet fringilla interdum, elit arcu euismod eros, sed iaculis tortor augue in sem. Nunc commodo erat non eleifend tincidunt. Fusce in ullamcorper urna.
<br><br>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consectetur sollicitudin nulla at volutpat. Maecenas dignissim, ligula vitae consequat mattis, dui erat ornare nisi, a vehicula lacus enim sed mauris. Maecenas eleifend sem eget ligula rutrum tristique. Nulla massa eros, molestie eu risus sed, dapibus blandit nisl. Sed non dignissim est. Ut vehicula vestibulum elit in tristique. Nunc vitae aliquet orci, at blandit tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tempor dictum mi quis vulputate. Donec pulvinar pretium orci a varius. Ut pharetra, ipsum id ornare malesuada, nunc neque euismod sem, sed tincidunt augue eros quis velit. Donec vulputate lorem sollicitudin, venenatis dolor at, mattis eros. Vestibulum lorem nisi, suscipit sit amet tristique vel, luctus non eros. Quisque ut ultrices tortor. Nulla in felis placerat, dictum est in, porta ante.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//streams
const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
