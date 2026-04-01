const burger = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    // On ajoute/enlève la classe "active" au menu
    navMenu.classList.toggle('active');
    
    // Animation optionnelle du burger (on peut transformer les barres en X)
    burger.classList.toggle('toggle');
});

// Fermer le menu quand on clique sur un lien (important pour mobile)
document.querySelectorAll('.navbar__links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});