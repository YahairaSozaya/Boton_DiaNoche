const boton=document.getElementById("deslizable");
const body=document.getElementById("body");

var luna=1;
const activar_desactivar=()=>{
    switch(true){
        case (luna==1):
            boton.style.transform="translateX(120px)";
            body.style.backgroundPosition="0 -700vh";
            boton.classList.add("sol");
            luna=0;
            sol=1;
        break;
        
        case (sol==1):
            boton.style.transform="translateX(0px)";
            body.style.backgroundPosition="0 0";
            boton.classList.remove("sol");
            luna=1;
            sol=0;
        break;

    }
}

deslizable.addEventListener("click", activar_desactivar);




