const singleImg = document.getElementById("container");
const next = document.getElementById("next");
const prev = document.getElementById("previous");

let counter = 0;
const numb = singleImg.childElementCount;


    next.addEventListener("click", function(){
        if(counter > 0 && counter < numb-2){
            counter++;
            singleImg.style.transform = `translateX(-${counter * 100}%)`
        }
        else if (counter == 0) {
            counter++
            singleImg.style.transform = `translateX(-${counter * 100}%)`
            prev.classList.remove("hidden");
        }else{
            counter++;
            singleImg.style.transform = `translateX(-${counter * 100}%)`
            next.classList.add("hidden");
        }
    });

    prev.addEventListener("click", function(){
        if(counter > 2 && counter < numb-1){
            counter--;
            singleImg.style.transform = `translateX(-${counter * 100}%)`
        }
        else if (counter == 1) {
            counter--
            singleImg.style.transform = `translateX(-${counter * 100}%)`
            prev.classList.add("hidden");
        }else{
            counter--;
            singleImg.style.transform = `translateX(-${counter * 100}%)`
            next.classList.remove("hidden");
        }
    });

