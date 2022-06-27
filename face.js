const closeFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

closeFace.addEventListener("click", function(){
    if(openFace.classList.contains('open')){
        openFace.classList.add("active");
        closeFace.classList.remove("active");
    } 
})

openFace.addEventListener('click', function(){
    if(closeFace.classList.contains('closed')){
        openFace.classList.remove("active");
        closeFace.classList.add("active");
    }
})