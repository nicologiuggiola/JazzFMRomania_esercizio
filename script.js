function rotateButton() {
    const image = document.getElementById("footer2-img");
    image.style.transform = "rotate(-45deg)"
}

function rotateButtonBack() {
    const image = document.getElementById("footer2-img");
    image.style.transform = ""
}

const imageP = document.getElementById("header-main-img");

function musicClicky() {
    if (imageP.value === "0") {
        imageP.src = "./images/assets_stop-2.png"
        imageP.value = "1";
    } else{
        imageP.src = "./images/assets_play.png";
        imageP.value = "0";
    }
}

function topFunction() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
}