const hamburguesa = document.getElementById("hamburguesa");
const nav = document.getElementById("nav")

hamburguesa.addEventListener("click", ()=>{
    nav.classList.toggle("nav_evento")
})