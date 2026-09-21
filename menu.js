/* =====================================
   ABRIR / CERRAR MENÚ
====================================== */

const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
    btnMenu.classList.toggle("activo");
});

/* =====================================
   MARCAR EN EL MENÚ LA PÁGINA ACTUAL
====================================== */

const paginaActual = document.body.dataset.pagina;

if (paginaActual) {
    const enlaceActual = menu.querySelector('a[data-pagina="' + paginaActual + '"]');
    if (enlaceActual) {
        enlaceActual.classList.add("enlace-activo");
    }
}
