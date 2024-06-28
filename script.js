function toggleMode() {
    const body = document.body
    body.classList.toggle("light")
    const img = document.querySelector("#profile img")
    if (body.classList.contains("light")) {
        img.setAttribute("src", "./assets/profile-light.png")
    } else {
        img.setAttribute("src", "./assets/profile-dark.png")
    }
}