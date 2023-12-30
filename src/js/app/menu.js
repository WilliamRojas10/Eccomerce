const hamburguesa = document.getElementById("hamburguesa");
const nav = document.getElementById("nav")

hamburguesa.addEventListener("click", ()=>{
    nav.classList.toggle("nav_evento")
})

/*

hamburguesa.addEventListener("click", ()=>{
    nav.classList.toggle("nav_evento")
    if ("nav_evento"){
    hamburguesa.style.position = "fixed";}
    if (nav.style.left == "-100%"){
        hamburguesa.style.position = "absolute";
    }
 
})
*/