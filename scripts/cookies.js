const cookieBar = document.querySelector("#cookies");
const cookieBtn = document.querySelector("#cookies button");

const closeBar = () => {
    cookieBar.style.display = "none";
}

cookieBtn.addEventListener("click", closeBar);