const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sicky" , window.scrollY > 0);
}) 