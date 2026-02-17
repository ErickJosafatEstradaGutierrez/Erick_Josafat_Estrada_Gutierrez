const text = "Erick Josafat Estrada Gutierrez";
let i = 0;
const speed = 80;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#38bdf8" },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true }
  }
});

const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['CCTV', 'Inventario', 'Cotizaciones', 'Automatización'],
    datasets: [{
      data: [85, 70, 90, 95],
    }]
  },
});

function openModal() {
  document.getElementById("modal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function toggleTheme() {
  document.body.classList.toggle("light");
}
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


window.onload = typeWriter;
