const text = document.getElementById("text");
const textArea = document.getElementById("output-text");
console.log(text);
const btn = document.getElementById("btn-submit");
const btn__ascendente = document.getElementById("btn-ascendente");
const btn__descendiente = document.getElementById("btn-descendiente");
const btn__borrar = document.getElementById("btn-borrar");
const indice__a__borrar = document.getElementById("indice-a-borrar");

let listaDeTareas = [];

btn.addEventListener("click", agregarTarea);
btn__ascendente.addEventListener("click", ordenarAlfAscendente);
btn__descendiente.addEventListener("click", ordenarAlfDescendiente);
btn__borrar.addEventListener("click", borrarItemDeLaLista);

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

function validarTextoIngresado() {
  return text.value.trim() != "";
}

function imprimirTexto() {
  let parrafo = `<ul>`;

  // for (let i of listaDeTareas) {
  //   parrafo += `<li>${i}</li> `;
  // }

  listaDeTareas.forEach((item, i) => (parrafo += `<li>${i}) ${item}</li> `));

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
