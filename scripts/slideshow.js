let slideIndex = 1;

showSlides(slideIndex);

// Next / previous controls

function plusSlides(num) {
    showSlides(slideIndex += num);
}

// Thumbnail image controls

function currentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    let i;

    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    let nbSlides = slides.length;

    if (num > nbSlides)  slideIndex = 1;
    
    if (num < 1)  slideIndex = nbSlides;

    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    for (let dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("keydown", (e) => {
    let code = e.key;

    console.log(code);

    if (code == "ArrowLeft")    plusSlides(-1);
    if (code == "ArrowRight")    plusSlides(1);
});