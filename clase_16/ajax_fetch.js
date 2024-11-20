// const lista = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts?_limit=10_start=0")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((post) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//       <h4>${post.title}</h4>
//       <p>${post.body}</p>
//       `;
//       lista.append(li);
//     });
//   });

const lista = document.getElementById("listado");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");

      li.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>${producto.precio}</p>`;

      lista.append(li);
    });
  });

const pedirDatos = async () => {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10_start=0"
  );
  const data = await resp.json();
  console.log(data);
};

pedirDatos();
