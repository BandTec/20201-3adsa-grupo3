let show = true;



document.addEventListener("DOMContentLoaded", function () {
    const menuSection = document.getElementByClassName(".menuSection")
    const menuResponsivo = document.getElementByClassName(".menuResponsivo")
        menuResponsivo.addEventListener("click", () => {
            menuSection.classList.toggle(" on", show)
            show = !show;
        })
});