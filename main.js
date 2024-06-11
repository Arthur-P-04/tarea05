function irA(id) { //para poder redirigir cuando se haga click al Id(que pertenece )
    var target = document.getElementById(id);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
}
document.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (scrollY > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Función para desplazarse suavemente hacia arriba al hacer clic en el botón
document.getElementById("backToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});