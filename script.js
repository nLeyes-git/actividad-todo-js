const text = document.getElementById("text");
const textArea = document.getElementById("output-text");

console.log(text);

const btn = document.getElementById("btn-submit");

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

btn.addEventListener("click", agregarTarea);

console.log(listaDeTareas);

// funciones de array
// .join(caracter)
// .toString()

// destructivos
//const listaDeTareas = [];
listaDeTareas = ["b", "a", "d", "c", "e"];
//listaDeTareas = [10, 2, 5, 23, 9];

// Ordenar alfabeticamente
listaDeTareas.sort((a, b) => {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
});

// ordenar numéricamente
listaDeTareas.sort((a, b) => b - a);
