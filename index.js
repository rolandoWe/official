
let nav=document.querySelector(".nav");

document.addEventListener("scroll",function(){
    scroll()
})

let paginaArriba=window.pageYOffset;
function scroll(){
    let paginaAbajo=window.pageYOffset;
    if(paginaArriba<=paginaAbajo){
        nav.style.top="0px";
    }else{
        nav.style.top="-220px";

    }
paginaArriba=paginaAbajo
}
// *************MOSTRAR/OCULTAR MENU CON UN CLICK PANTALLA PEQUEÑA************************
let x_menu=document.querySelector(".x_menu")
let cont_bars=document.querySelector(".cont_bars")

cont_bars.addEventListener("click",()=>{
    document.querySelector(".ul").classList.toggle("ver_ul")
})
// x_menu.addEventListener("click",()=>{
//     document.querySelector(".ul").classList.toggle("ver_ul")
// })
document.querySelector(".ul").addEventListener("click",(p)=>{
    if(p.target!=document.querySelector(".ul")){
        document.querySelector(".ul").classList.toggle("ver_ul")
    }
})