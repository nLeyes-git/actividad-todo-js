const span_txt = document.getElementById("span-txt");
const btn_add_tareas = document.getElementById("btn-lista-tareas");
const btn_add_libros = document.getElementById("btn-lista-libros");
const btn_add_peliculas = document.getElementById("btn-lista-peliculas");
const edit_tareas = document.getElementById("btn-tareas");
const edit_peliculas = document.getElementById("btn-peliculas");
const edit_libros = document.getElementById("btn-libros");
const form = document.getElementById("form");
let form_buttons = document.querySelectorAll(".submit");

let listaElegida = "";

let lista = [];
let listaParseada = JSON.stringify(lista);

function refrescarBotones(){
  if (localStorage.getItem("listaDeTareas")||localStorage.getItem("listaDeLibros")||localStorage.getItem("listaDePeliculas")) {
    if (localStorage.getItem("listaDeTareas")) {
      btn_add_tareas.setAttribute("disabled",true)
      listaElegida = "listaDeTareas";
      span_txt.innerHTML =
        `Se encontro una Lista De Tareas ` +
        ` <button id="btn-tareas" onclick="editarLista('${listaElegida}')" >Ir</button> <button onclick="borrarLista('${listaElegida}')">Eliminar lista</button>`;
    } else {
      btn_add_tareas.disabled = false
      span_txt.innerHTML = "<br> No se encontraron listas de tareas";
    }
    if (localStorage.getItem("listaDePeliculas")) {
      btn_add_peliculas.setAttribute("disabled",true)
      listaElegida = "listaDePeliculas";
      span_txt.innerHTML += `<br> Se encontro una Lista de Peliculas <button id="btn-peliculas" onclick="editarLista('${listaElegida}')">Ir</button> <button onclick="borrarLista('${listaElegida}')">Eliminar lista</button>  `;
    } else {
      btn_add_peliculas.disabled = false
      span_txt.innerHTML += "<br>  No se encontraron listas de peliculas";
    }
    if (localStorage.getItem("listaDeLibros")) {
      btn_add_libros.setAttribute("disabled",true)
      listaElegida = "listaDeLibros";
      span_txt.innerHTML += `<br> Se encontro una Lista de Libros <button id="btn-libros" onclick="editarLista('${listaElegida}')">Ir</button> <button onclick="borrarLista('${listaElegida}')">Eliminar lista</button>`;
    } else {
      btn_add_libros.disabled = false
      span_txt.innerHTML += "<br>  No se encontro una lista de libros";
    }
  } else {
    btn_add_tareas.disabled = false
    btn_add_peliculas.disabled = false
    btn_add_libros.disabled = false
    span_txt.innerHTML = "No hay ninguna lista disponible, cree una";
  }
  
}


function borrarLista(listado){
  console.log("rompio?" + listado)
  localStorage.removeItem(listado)
  refrescarBotones()
}



function editarLista(listado) {
  listaElegida = listado;
  sessionStorage.setItem("listaElegida", listaElegida);
  document.location = "lista-de-tareas.html";
  refrescarBotones()
}

btn_add_tareas.addEventListener("click", (e) => {
  localStorage.setItem("listaDeTareas", listaParseada);
  listaElegida = "listaDeTareas";
  sessionStorage.setItem("listaElegida", listaElegida);
  console.log("se creo la lista");
  refrescarBotones()
});

btn_add_libros.addEventListener("click", (e) => {
  localStorage.setItem("listaDeLibros", listaParseada);
  listaElegida = "listaDeLibros";
  sessionStorage.setItem("listaElegida", listaElegida);
  console.log("se creo la lista");
  refrescarBotones()
});

btn_add_peliculas.addEventListener("click", (e) => {
  localStorage.setItem("listaDePeliculas", listaParseada);
  listaElegida = "listaDePeliculas";
  sessionStorage.setItem("listaElegida", listaElegida);
  console.log("se creo la lista");
  refrescarBotones()
});

refrescarBotones()

/* form_buttons = document.querySelectorAll(".submit");
form_buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.location = "#";
  });
}); */
