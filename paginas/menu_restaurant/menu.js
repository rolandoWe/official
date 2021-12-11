let ver_menu=document.querySelector(".ver_menu")
let cerrar_mn=document.querySelector(".cerrar_mn")

ver_menu.addEventListener("click",function(){
    document.querySelector(".cara_uno").classList.toggle("ver_mn2");
    setTimeout(function(){
    document.querySelector(".cara_dos").classList.toggle("ver_mn");
    },500)
})
cerrar_mn.addEventListener("click",function(){
    document.querySelector(".cara_dos").classList.toggle("ver_mn");
    setTimeout(function(){
    document.querySelector(".cara_uno").classList.toggle("ver_mn2");
    },1000)
})