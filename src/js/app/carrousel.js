var imagenes = ["./src/img/tecnology.jpg","./src/img/img24.jpg", "./src/img/fondo.jpg"], contador = 0;
function carrousel(contenedor) {
    contenedor.addEventListener("click", e => {
     let atras = contenedor.querySelector(".atras"),
        adelante = contenedor.querySelector(".adelante"),
        imagen = contenedor.querySelector("#imagen"),
        tgt = e.target;

        if (tgt == atras){
            if(contador > 0){
                imagen.src = imagenes[contador -1];
                contador--;
            }
            else{
                imagen.src = imagenes[imagenes.length -1];
                contador = imagenes.length -1;
            }}

        else if(tgt == adelante){
            if(contador < imagenes.length -1){
                imagen.src = imagenes[contador +1];
                contador++;
            }
            else{
                imagen.src = imagenes[0];
                contador = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor = document.querySelector(".contenedor");
    carrousel(contenedor)
})
