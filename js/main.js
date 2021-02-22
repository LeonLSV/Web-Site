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

// menu hamburguesa
$("#menu").hide();
$("#menu-btn").click(function () {
  $("#menu").slideToggle();
});

// Lazy Loading e intersection observer
const logos = document.querySelectorAll("img");

function intersection(entries, observer) {
  entries.forEach((entry) => {
    console.log("intersection");
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
    }
  });
}

const options = {
  root: null,
  rootMargin: "1000px",
  threshold: 0,
};

const observer = new IntersectionObserver(intersection, options);

logos.forEach((logo) => {
  observer.observe(logo);
});

var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
});
