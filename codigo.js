let numero = document.getElementById("numero-pantalla");

let botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{

        let numeroEnPantalla = boton.textContent;

        /*deja en 0 todo el contenido de la pantalla */

        if(boton.id === "cancelar" || numero.textContent === "Error!"){
            numero.textContent = "0";
            numero.classList.remove("red");
            return;
        };

        /*Borra el ultimo numero*/

        if(boton.id === "borrar" || numero.textContent === "Error!"){
            if(numero.textContent.length == 1){
                numero.textContent = "0";
                numero.classList.remove("red");
            }
            else{
            numero.textContent = numero.textContent.slice(0, -1);
            }
            return
        }

        /*Resultado del contenido en pantalla */

        if(boton.id === "igual"){
            try{
                numero.textContent = eval(numero.textContent)
            }
            catch{
                numero.classList.add("red")
                numero.textContent = "Error!"
            };
            return
        }

        /*Agrega los numero en pantalla*/

        if(numero.textContent == 0 || numero.textContent === "Error!"){
            numero.textContent = numeroEnPantalla;            
            numero.classList.remove("red");
        }
        else{
            
        numero.textContent += numeroEnPantalla
        };



    })
})

/*Modo Oscuro*/

const modo = document.getElementById("modo");

function transformBotones(elemento){
    botones.forEach(boton => {
        if(boton.className.includes(elemento + "-claro")){
            boton.classList.replace(elemento + '-claro', elemento + '-oscuro');
        }
        else{
            boton.classList.replace(elemento + '-oscuro', elemento + '-claro');
        }
    });
}

function trasformElementos(objeto){
    if(objeto.className == objeto+"-claro"){
        objeto.classList.replace(objeto+"-claro",objeto+"-oscuro")
    }
    else{
        objeto.classList.replace(objeto+"-oscuro",objeto+"-claro")
    }
}



modo.addEventListener("click",function(){

    const body = document.querySelector("body");

    if(body.className == "body-claro"){
        body.classList.replace("body-claro","body-oscuro")
    }
    else{
        body.classList.replace("body-oscuro","body-claro")
    }


    const calculadora = document.getElementById("calculadora");

    if(calculadora.className == "calculadora-claro"){
        calculadora.classList.replace("calculadora-claro","calculadora-oscuro");
    }
    else{
        calculadora.classList.replace("calculadora-oscuro","calculadora-claro")
    }

    const window = document.getElementById("window");

    if(window.className == "window-claro"){
        window.classList.replace("window-claro","window-oscuro");
    }
    else{
        window.classList.replace("window-oscuro","window-claro")
    }


    const img = document.querySelector("img");

    if(modo.className == "modo-claro"){
        modo.classList.replace("modo-claro","modo-oscuro");
        img.setAttribute("src","logos/luna.png")
    }
    else{
        modo.classList.replace("modo-oscuro","modo-claro")
        img.setAttribute("src","logos/sol.png")
    }

    transformBotones("nm");

    transformBotones("calculo");

    transformBotones("cancelar");

    transformBotones("resul");
})


