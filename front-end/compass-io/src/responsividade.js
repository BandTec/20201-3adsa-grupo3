let show = true;



const menuSection = document.querySelector(".menuSection")
const menuResponsivo = document.querySelector(".menuResponsivo")
   
    menuResponsivo.addEventListener("click", () => {
        menuSection.classList.toggle(" on", show)
        show = !show;
    })