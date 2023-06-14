const text = document.getElementById("text");
const textArea = document.getElementById("output-text");
const buscador = document.getElementById("buscar-tarea");
console.log(text);
const btn = document.getElementById("btn-submit");
const btn__ascendente = document.getElementById("btn-ascendente");
const btn__descendiente = document.getElementById("btn-descendiente");
const btn__borrar = document.getElementById("btn-borrar");
const indice__a__borrar = document.getElementById("indice-a-borrar");
const btn__borrar__tarea = document.getElementById("btn-borrar-tarea");
const btn__buscar__tarea = document.getElementById("btn-buscar-tarea");

let listaDeTareas = [];
let arrayDeBotones = [];

btn.addEventListener("click", agregarTarea);
btn__ascendente.addEventListener("click", ordenarAlfAscendente);
btn__descendiente.addEventListener("click", ordenarAlfDescendiente);
btn__borrar.addEventListener("click", borrarItemDeLaLista);
btn__buscar__tarea.addEventListener("click", buscarTareaEnLista);

function agregarTarea() {
  if (validarTextoIngresado()) {
    listaDeTareas.push(text.value.trim());
    console.log(listaDeTareas);
    text.value = "";

    /*  let parrafo = `<ul>`;
    for (let i of listaDeTareas) {
      parrafo += `<li>${i}</li> `;
    }
    parrafo += `</ul>`;
    textArea.innerHTML = parrafo; */
    imprimirTexto();
  }
}
function ordenarAlfAscendente() {
  listaDeTareas.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  imprimirTexto();
}

function ordenarAlfDescendiente() {
  listaDeTareas.sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });
  imprimirTexto();
}
function borrarItemDeLaLista() {
  /* let listaAuxiliar = []; */
  /*   for (let i = 0; i < listaDeTareas.length; i++) {
    if (i != indice__a__borrar.value) {
      listaAuxiliar.push(listaDeTareas[i]);
    }
  }
  listaDeTareas = listaAuxiliar; */
  listaDeTareas = listaDeTareas.filter(
    (item, i) => i != indice__a__borrar.value
  );
  console.log(listaDeTareas);
  imprimirTexto();
}
/* function borrarTareaIndividual() {
  listaDeTareas = listaDeTareas.filter((item, i) => i != btn__borrar__tarea.id);
  console.log(listaDeTareas);
  imprimirTexto();
} */

function buscarTareaEnLista() {
  /*  for (let i = 0; i < listaDeTareas.length; i++) {
    if (listaDeTareas[i].includes(buscador.value)) {

    }
  } */

  const listaFiltrada = listaDeTareas.filter((item, i) =>
    item.includes(buscador.value)
  );

  imprimirTexto(listaFiltrada);
}

function validarTextoIngresado() {
  return text.value.trim() != "";
}

function imprimirTexto(lista = listaDeTareas) {
  let parrafo = `<ul id="lista">`;

  // for (let i of listaDeTareas) {
  //   parrafo += `<li>${i}</li> `;
  // }

  lista.forEach((item, i) => (parrafo += `<li>${i}) ${item} </li>`));
  /* for (let i = 0; i < listaDeTareas.length; i++) {
    let boton = `<button class="btn-borrar-tarea" id="${i}">Borrar tarea</button>`;
    parrafo += `<li>${i}) ${listaDeTareas[i]}` + boton + `</li>`;
    arrayDeBotones.push();
  } */
  parrafo += `</ul>`;

  textArea.innerHTML = parrafo;
}
console.log(listaDeTareas);

// funciones de array
// .join(caracter)
// .toString()

// destructivos

/* listaDeTareas = ["b", "a", "d", "c", "e"]; */
//listaDeTareas = [10, 2, 5, 23, 9];

// Ordenar alfabeticamente

// ordenar datos numéricos
/* listaDeTareas.sort((a, b) => b - a); */
