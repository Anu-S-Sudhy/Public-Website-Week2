// var  toTop=document.querySelector(".header");
// window.addEventListener("scroll",() =>{
//     if(window,pageYOffset>500){
//         toTop.classList.add("active");
//     }
//     else{
//         toTop.classList.remove("active");
//     }
//}


var subscribe=document.querySelector(".btn-click");
function subscribeClick(){
    if(subscribe.style.display=="none"){
        subscribe.style.display="block";
    }
    else{
        subscribe.style.display="none";
    }
}