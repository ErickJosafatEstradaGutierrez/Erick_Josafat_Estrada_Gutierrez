// Typing effect for Hero (optional but recommended)
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

window.onload = typeWriter;

// Activate particles effect
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true }
  }
});

// Scroll Reveal Animation
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

