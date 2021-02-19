window.addEventListener("scroll", function () {
  let venir = this.document.getElementById("venir");
  let position = venir.getBoundingClientRect().top;

  let informacion = this.document.getElementById("informacion");
  let posiinformacion = informacion.getBoundingClientRect().top;

  let preguntas = this.document.getElementById("preguntas");
  let posipreguntas = preguntas.getBoundingClientRect().top;

  let masinfo = this.document.getElementById("masinfo");
  let posimasinfo = masinfo.getBoundingClientRect().top;

  let pantalla = window.innerHeight;

  if (position < pantalla) {
    venir.style.animation = "escala 1s ease-out";
  }
  if (posiinformacion < pantalla) {
    informacion.style.animation = "escala 1s ease-out";
  }
  if (posipreguntas < pantalla) {
    preguntas.style.animation = "escala 1s ease-out";
  }
  if (posimasinfo < pantalla) {
    masinfo.style.animation = "escala 1s ease-out";
  }
});

// console.log("hola");
// const isIntersecting = (entry) => {
//   return entry.isIntersecting;
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.filter(isIntersecting).forEach(accion);
// });

$("#menu").hide();
$("#menu-btn").click(function () {
  $("#menu").slideToggle();
});
