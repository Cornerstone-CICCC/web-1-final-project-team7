const makeup = document.getElementById("makeup")
const hairstyle = document.getElementById("hairstyle")
const hairstyleImages = document.querySelectorAll(".hairstyle_image")
const makeupImages = document.querySelectorAll(".makeup_image")

makeup.addEventListener("click", () => {
    hairstyle.classList.add("gray")
    makeup.classList.remove("gray")
    hairstyleImages.forEach((element) => {
        element.classList.add("back")
    })
    makeupImages.forEach((element) => {
        element.classList.remove("back")
    })
})

hairstyle.addEventListener("click", () => {
    makeup.classList.add("gray")
    hairstyle.classList.remove("gray")
    hairstyleImages.forEach((element) => {
        element.classList.remove("back")
    })
    makeupImages.forEach((element) => {
        element.classList.add("back")
    })
})
