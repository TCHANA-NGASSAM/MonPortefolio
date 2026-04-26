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

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const to = 'adrienngassam@etu.digitalschool.fr';
        const subject = encodeURIComponent(`Contact portfolio — ${name}`);
        const body = encodeURIComponent(
            `Bonjour,\n\n${message}\n\n---\nNom : ${name}\nEmail : ${email}\n`
        );

        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
}