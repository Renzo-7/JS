const btnComprar = document.getElementById("btn-comprar");

// function alertaBasica() {
//   Swal.fire({
//     title: "Quieres agregar el producto?",
//     showCancelButton: true,
//     confirmButtonText: "Ok",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         icon: "success",
//         title: "Agregado al carrito",
//         text: "Tu producto ya se encuentra en el carrito",
//       });
//     } else if (result.isDismissed) {
//       Swal.fire({
//         icon: "error",
//         title: "Compra cancelada!",
//       });
//     }
//   });
// }

const toast = Swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
toast.fire({
  icon: "error",
  title: "Error al realizar la compra!",
});

btnComprar.addEventListener("click", alertaBasica);
