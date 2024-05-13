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
