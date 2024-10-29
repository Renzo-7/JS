const productos = [
  {
    id: 1,
    nombre: "Leche",
    imagen:
      "https://th.bing.com/th/id/OIP.iCJFwMqqYlgUrqrnmAgWUgHaHa?rs=1&pid=ImgDetMain",
    precio: 1500,
    stock: 14,
  },
  {
    id: 2,
    nombre: "Arroz",
    imagen:
      "https://th.bing.com/th/id/OIP.iCJFwMqqYlgUrqrnmAgWUgHaHa?rs=1&pid=ImgDetMain",
    precio: 1000,
    stock: 12,
  },
  {
    id: 3,
    nombre: "Cafe",
    imagen:
      "https://th.bing.com/th/id/OIP.iCJFwMqqYlgUrqrnmAgWUgHaHa?rs=1&pid=ImgDetMain",
    precio: 2500,
    stock: 32,
  },
];

const agregarProductos = ({ nombre, precio, imagen, stock }) => {
  productos.push({ id: 4, nombre, precio, imagen, stock });
};

const mostrarProductos = () => {
  let mensajeInformativo = "";
  for (let producto of productos) {
    mensajeInformativo += `
    ID: ${producto.id}
    Nombre: ${producto.nombre}
    Precio: ${producto.precio}
    Imagen: ${producto.imagen}
    Stock: ${producto.stock}
    `;
  }

  console.log(mensajeInformativo);
};

const solicitarDatosDelProducto = () => {
  let nombreProducto = prompt("Ingresa el nombre del producto.");
  let imagen = prompt("Por favor ingresa la URL de la imagen.");
  let precioDelProducto = parseFloat(
    prompt("A continuación ingresa el precio.")
  );
  let stock = parseInt(
    prompt("Por favor ingresa la cantidad de unidades disponibles")
  );
  if (nombreProducto && !isNaN(precioDelProducto) && imagen && !isNaN(stock)) {
    return { nombre: nombreProducto, precio: precioDelProducto, imagen, stock };
  } else {
    alert("Por favor ingresa datos validos.");
  }
};

const eliminarProducto = (nombre) => {
  const indice = productos.findIndex(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (indice !== -1) {
    productos.splice(indice, 1);
    console.log(`El producto ${nombre} se ha eliminado con éxito.`);
    mostrarProductos();
  } else {
    alert(`El producto ${nombre} no se ha encontrado.`);
  }
};

const encontrarProductoBaratos = () => {};

const main = () => {
  let opcion = "";

  while (opcion !== "4") {
    opcion = prompt(
      "Selecciona una opción: \n1. Agregar productos. \n2. Ver productos \n3. Eliminar producto \n4. Salir"
    );

    switch (opcion) {
      case "1":
        const nuevoProducto = solicitarDatosDelProducto();
        if (nuevoProducto) {
          agregarProductos(nuevoProducto);
        }
        break;

      case "2":
        mostrarProductos();
        break;

      case "3":
        const productoAEliminar = prompt(
          "Ingresa el nombre del producto a eliminar"
        );
        eliminarProducto(productoAEliminar);
        break;

      case "4":
        console.log("Saliendo...");
        break;
      default:
        alert("Opción no valida. Por favor selecciona de nuevo.");
    }
  }
};

main();
