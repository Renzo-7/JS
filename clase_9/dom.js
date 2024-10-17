// console.dir(document);
// console.dir(document.head);
// console.dir(document.body);

// const div = document.getElementById("app");
// console.log(div);

// const parrafo = document.getElementById("parrafo1");
// console.log(parrafo);
// console.log(parrafo.innerHTML);

// let paises = document.getElementsByClassName("paises");
// console.log(paises);

// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// const listItem = document.getElementsByTagName("li");
// console.log(listItem);

// for(let pais of listItem){
//     console.log(pais.textContent);
// }

// const titulo = document.getElementById("titulo");
// console.log(titulo.innerText);

// titulo.innerText = "Hola alumnos";

// const contenedor = document.getElementById("contenedor");

// contenedor.innerHTML = `<div>
//         <h2>Mi Parrafo</h2>
//         <p id="mi-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex quas incidunt sint unde alias optio dolorem, necessitatibus, reiciendis illum expedita minus tempora earum voluptates iste aliquam laborum quaerat itaque?</p>
//     </div>`;

// const miParrafo = document.getElementById("mi-parrafo");
//     miParrafo.className = "mi-parrafo";

// const parrafo1 = document.getElementById("parrafo1")
// const parrafo2 = document.getElementById("parrafo2")

// parrafo2.remove();

// document.getElementById("nombre").value = "Fernando";
// document.getElementById("edad").value = 32;

// const contenedor = document.getElementById("contenedor-personas");
// const personas = ["Fernando", "Ariel", "Juan","Macarena", "Renzo"]; 

// for(let persona of personas) {
//     const li = document.createElement("li");
//     li.innerHTML = persona;
//     contenedor.append(li);
// }

// const contenedor = document.getElementById("contenedor-personas");
// const personas = ["Fernando", "Ariel", "Juan","Macarena", "Renzo"]; 

// for(let persona of personas) {
//     const itemPersona = document.createElement("div");
//     itemPersona.innerHTML = `<p>Hola soy <strong> ${persona} <strong></p>`;
//     contenedor.append(itemPersona);
// }

const productos = [
    {
        id: 1,
        nombre: "caramelo",
        precio: 4000
    },
    {
        id: 2,
        nombre: "arroz",
        precio: 3000
    },
    {
        id: 3,
        nombre: "cafe",
        precio: 6000,
    },
];