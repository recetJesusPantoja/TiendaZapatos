function toggleSeccion(id) {
    let contenido = document.getElementById(id);
    if (contenido.classList.contains("active")) {
        contenido.classList.remove("active");
    } else {
        contenido.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cargado correctamente."); // Verificar que el JS se está ejecutando

    // Seleccionamos todos los enlaces con la clase "scroll-link"
    let links = document.querySelectorAll("a.scroll-link");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto brusco

            let targetId = this.getAttribute("href").substring(1); // Obtiene el ID de la sección destino
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                let topOffset = targetSection.offsetTop - 70; // Ajuste para no tapar el título
                
                window.scrollTo({
                    top: topOffset,
                    behavior: "smooth" // Activa la animación de desplazamiento
                });

                console.log("Desplazándose a:", targetId); // Mensaje en consola para verificar
            } else {
                console.error("No se encontró la sección:", targetId);
            }
        });
    });
});

