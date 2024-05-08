var img = document.getElementsByTagName("img")

// a = setInterval(() => {
//   if (img[0].getBoundingClientRect().top < window.innerHeight) {
//     console.log("aaa")
//     clearInterval(a)
//   }
// }, 100)

function ativaNoScroll() {
  if (img[0].getBoundingClientRect().top < window.innerHeight - 100) {
    console.log("aaa")
    img[0].src = img[0].getAttribute("data-src")
    document.getElementById("img").classList.add("viewed")
    // clearInterval(a)
  }
}

window.addEventListener("scroll", ativaNoScroll)
