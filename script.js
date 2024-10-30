const menuMobile = document.getElementById("mobile-menu");
const botaoMobileIcone = document.getElementById("btn-mobile-icone");

function mostrarMenu() {
    if (menuMobile.classList.contains("visivel")) {
        menuMobile.classList.remove("visivel");
        botaoMobileIcone.classList.remove("fa-x");
        botaoMobileIcone.classList.add("fa-bars");
        return;
    }
    menuMobile.classList.add("visivel");
    botaoMobileIcone.classList.add("fa-x");
    botaoMobileIcone.classList.remove("fa-bars");
}
