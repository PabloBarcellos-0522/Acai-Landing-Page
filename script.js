var img = document.getElementsByTagName("img")
var header = document.getElementById("finalHeder")
var list = document.getElementsByClassName("viewport")

// a = setInterval(() => {
//   if (img[0].getBoundingClientRect().top < window.innerHeight) {
//     console.log("aaa")
//     clearInterval(a)
//   }
// }, 100)

function ativaNoScroll() {
  // if (img[0].getBoundingClientRect().top > header.getBoundingClientRect().top + 500) {
  //   img[0].src = img[0].getAttribute("data-src")
  //   document.getElementById("img").classList.add("viewed")
  // }
  // if (img[0].getBoundingClientRect().top < header.getBoundingClientRect().top + 500) {
  //   img[0].src = img[0].getAttribute("data-src")
  //   document.getElementById("img").classList.remove("viewed")
  // }
  // for (let i = 0; i < 5; i++) {
  //   if (img[0].getBoundingClientRect().top > list[i].getBoundingClientRect().top - 350) {
  //     // list[0].style.opacity = "1"
  //     console.log(img[0].getBoundingClientRect().top, list[i].getBoundingClientRect().top)
  //     img[0].src = "https://acaimontecastelo.com.br/wp-content/uploads/2021/05/ACAI-NO-COPO.png"
  //     list[i].classList.add("active")
  //   }
  // }
  // for (let i = 0; i < 5; i++) {
  //   if (list[i].getBoundingClientRect().top < window.innerHeight) {
  //     console.log(list[i].getBoundingClientRect().top)
  //     list[i].classList.add("active")
  //   }
  // }
  // for (let i = 0; i < 5; i++) {
  //   if (list[i].getBoundingClientRect().top - 200 > window.innerHeight) {
  //     console.log(list[i].getBoundingClientRect().top)
  //     list[i].classList.remove("active")
  //   }
  // }
  // console.log(img[0].getBoundingClientRect().top)
}

window.addEventListener("scroll", ativaNoScroll)

window.sr = ScrollReveal() // { reset: true }

sr.reveal(".viewport", {
  duration: 1500,
  // rotate: { x: 0, y: 0, z: 50 },
  distance: "300px",
  easing: "cubic-bezier(0.66, 0.01, 0.38, 1)",
  opacity: 0,
})

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 0,
      color: "#ffffff",
      opacity: 0.176,
      width: 2.8800000000000003,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 299.3772952259301, line_linked: { opacity: 1 } },
      bubble: { distance: 425.38710226305966, size: 5, duration: 0, opacity: 1, speed: 3 },
      repulse: { distance: 0, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
})
var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = "absolute"
stats.domElement.style.left = "0px"
stats.domElement.style.top = "0px"
document.body.appendChild(stats.domElement)
count_particles = document.querySelector("#particles-js")
update = function () {
  stats.begin()
  stats.end()
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length
  }
  requestAnimationFrame(update)
}
requestAnimationFrame(update)
