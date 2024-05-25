function ToggleClick() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar black.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
