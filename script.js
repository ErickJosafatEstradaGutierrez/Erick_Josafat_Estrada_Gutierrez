document.addEventListener("DOMContentLoaded", function() {

  /* ======================
     TYPEWRITER EFFECT
  ====================== */
  const text = "Erick Josafat Estrada Gutierrez";
  let i = 0;
  const speed = 80;

  function typeWriter() {
    if (i < text.length) {
      document.querySelector(".hero-title").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();


  /* ======================
     PARTICLES
  ====================== */
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 1 },
        line_linked: { enable: true }
      }
    });
  }


  /* ======================
     SCROLL REVEAL
  ====================== */
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  });


  /* ======================
     MODAL RECOMENDACIONES
  ====================== */
  const modal = document.getElementById("docModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".recommendation-item").forEach(item => {
    item.addEventListener("click", function() {
      const img = this.querySelector("img");
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});

/* ======================
   EXPERIENCE SLIDER
====================== */

const images = document.querySelectorAll(".showcase-images img");
const title = document.getElementById("experience-title");
const description = document.getElementById("experience-description");

const experiences = [
  {
    title: "Proyecto implementado UTEQ",
    text: "Durante este proyecto me sentí retado técnicamente. Lideré el proyecto y logramos satisfacer las necesidades de la iniversidad para poder implementar la herramienta"
  },
  {
    title: "Implementación en Producción",
    text: "Se noto el apoyo por parte del rector Dr. Luis Fernando Pantoja Amaro, ya que no despues de mucho tiempo se implementaron señaleticas para anunciar nuestra herramienta."
  },
  {
    title: "Reconocimiento Académico",
    text: "Sentí orgullo al ver el impacto del dentro de la universidad. Fue reconocido por su innovación y eficiencia en visualización geoespacial."
  }
];

let index = 0;

function changeSlide() {
  images.forEach(img => img.classList.remove("active"));

  index = (index + 1) % images.length;

  images[index].classList.add("active");

  title.textContent = experiences[index].title;
  description.textContent = experiences[index].text;
}

setInterval(changeSlide, 5000);

