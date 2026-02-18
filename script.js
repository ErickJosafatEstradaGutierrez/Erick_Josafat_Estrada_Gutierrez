// Typing effect
const text = "Erick Josafat Estrada Gutierrez";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#38bdf8" },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true }
  }
});

// Chart
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['CCTV', 'Inventario', 'Cotizaciones', 'Automatización'],
    datasets: [{
      data: [85, 70, 90, 95],
      backgroundColor: "#38bdf8"
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

window.onload = typeWriter;
