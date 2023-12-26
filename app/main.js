function autocompletar (arreglo){
    const inputBuscador = document.querySelector("#buscador");
    let indexFocus = -1;

    /*PARA CADA VEZ QUE CAMBIE DE TEXTO -> EVENTO:INPUT*/ 
    inputBuscador.addEventListener("input", function(){
        const buscador = this.value;

        if(!buscador) return false;
        cerrarLista();
        //Crear la lista de sugerencias
        const divList = document.createElement("div");//Esta creando ETIQUETAS DIV
        divList.setAttribute("id", this.id + "-lista-autocompletar");
        divList.setAttribute("class","lista-autocompletar-items");
        this.parentNode.appendChild(divList);

        //Validar arreglo vs input
        if (arreglo.length == 0) return false;
        arreglo.forEach(item => {

          
           if (item.substr(0, buscador.length) == buscador){
            const elementoLista = document.createElement("div");
            elementoLista.innerHTML = `<strong>${item.substr(0, buscador.length)}</strong>${item.substr(buscador.length)}`;
            elementoLista.addEventListener("click", function(){
                inputBuscador.value = this.innerText;
                cerrarLista();
                return false;
            });
            divList.appendChild(elementoLista);
           }
        });
    });

    /*PARA CADA VEZ QUE CAMBIE LAS TECLAS DE SUBIR Y BAJARA -> EVENTO:INPUT*/ 
    inputBuscador.addEventListener("keydown", function(){
        const divList = document.querySelector("#", + this.id +"-lista-autocompletar");
        let items;

        if(divList){
           items = divList.querySelectorAll("div");

            switch(e.keyCode){
                case 40:
                    indexFocus ++
                    if(indexFocus > items.length-1) indexFocus = items.length -1;
                break;

                case 38:
                    indexFocus--
                    if(indexFocus < 0) indexFocus = 0;
                break;

                case 13:
                    e.preventDefault();
                    items[indexFocus].click();
                    indexFocus = -1
                break;

                default:
                break;
            }

            seleccionar(items.indexFocus);
            return false;
        }
    });

    //PARA QUE SE CIERRE EL AUTOCOMPLETADO AL HACER CLICK EN EL BUSCADOR
    document.addEventListener("click", function(){
        cerrarLista();
    })
}



/*-------FUNCIONALIDADES --------*/

function seleccionar(lista, indexFocus){
    if(!lista || indexFocus == -1) return false;
    lista.forEach(x => {
        x.classList.remove("autocompletar-active")
    });
    items[indexFocus].classList.add("autocompletar-active")
}


function cerrarLista(){
    const items = document.querySelectorAll(".lista-autocompletar-items");
    items.forEach(item=> {
        item.parentNode.removeChild(item);
    });
    indexFocus = -1
}

autocompletar(["gorra negra", "boina", "zapatilla","samsung", "short", "bocina", "gorro","g","gato","gata","gaston","garnano" ,"ganacho", "gatu", "gaspar", "gasparin","gastoni","gasti","gasrfdr","gad", "agenda", "Samsung","Motorola", "lg",]);



/*
buscador.addEventListener("keyup", filtro=>{
    if (filtro.target.matches("#buscador")){

        if (filtro.key == "Escape")e.target.value = ""
        document.querySelectorAll(".articulo").forEach(articulo=>{
            articulo.textContent.toLowerCase().includes(filtro.target.value.toLowerCase())
             ?articulo.classList.remove("filtrar")
             :articulo.classList.add("filtrar")
                                                }     )
    }

 
})
*/

//PROBLEMAS
//BUSQUEDA EN MAYUCULAS Y MINISCULAS ENTENDIENDO QUE SON LO MISMO
//LA LISTA DE AUTOCOMPLETADO O SUGERENCIA ESTE LIMITADO A 10 ELEMENTOS
