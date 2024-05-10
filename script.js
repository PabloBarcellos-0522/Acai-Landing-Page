var img = document.getElementsByTagName("img")
var header = document.getElementById("finalHeder")
var list = document.getElementsByTagName("li")

// a = setInterval(() => {
//   if (img[0].getBoundingClientRect().top < window.innerHeight) {
//     console.log("aaa")
//     clearInterval(a)
//   }
// }, 100)

function ativaNoScroll() {
  if (img[0].getBoundingClientRect().top > header.getBoundingClientRect().top + 500) {
    img[0].src = img[0].getAttribute("data-src")
    document.getElementById("img").classList.add("viewed")
  }

  if (img[0].getBoundingClientRect().top < header.getBoundingClientRect().top + 500) {
    img[0].src = img[0].getAttribute("data-src")
    document.getElementById("img").classList.remove("viewed")
  }

  for (let i = 0; i < 5; i++) {
    if (img[0].getBoundingClientRect().top > list[i].getBoundingClientRect().top - 350) {
      // list[0].style.opacity = "1"
      console.log(img[0].getBoundingClientRect().top, list[i].getBoundingClientRect().top)
      list[i].classList.add("active")
    }
  }
  console.log(img[0].getBoundingClientRect().top)
}

window.addEventListener("scroll", ativaNoScroll)
