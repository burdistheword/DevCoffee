const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/Arcade.jpg" },
  { name: "Voluptatem", image: "images/Bag.jpg" },
  { name: "Explicabo", image: "images/Ben.jpg" },
  { name: "Rchitecto", image: "images/Cam.jpg" },
  { name: " Beatae", image: "images/Dad.jpg" },
  { name: " Vitae", image: "images/Icecream.jpg" },
  { name: "Inventore", image: "images/Man.jpg" },
  { name: "Veritatis", image: "images/Skip.jpg" },
  { name: "Accusantium", image: "images/View.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  