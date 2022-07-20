const singleImg = document.getElementById("container");
const next = document.getElementById("next");
const prev = document.getElementById("previous");

let counter = 0;

next.addEventListener("click", function(){
    if (counter == 0) {
        
    }
    singleImg.style.transform = `translateX(-${counter * 100}%)`
});