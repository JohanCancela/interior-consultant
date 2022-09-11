document.querySelector('.fa-bars-staggered').addEventListener('click', mostrarMenu);
document.querySelector('.fa-xmark').addEventListener('click', ocultarMenu);

navbar = document.querySelector('.navigation');

function mostrarMenu() {
    navbar.style.right = '0px';
};

function ocultarMenu() {
    navbar.style.right = '-250px';
};