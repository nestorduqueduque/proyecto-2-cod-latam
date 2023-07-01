const toggleButton = document.getElementById('_toggle');
const navigationItems = document.getElementById('_items');
const navLinks = navigationItems.getElementsByClassName('navegacion__enlace');
const bodyElement = document.body;


const toggleNavigation = () => {
    navigationItems.classList.toggle('open');
    toggleButton.classList.toggle('close');
    bodyElement.classList.toggle('no-scroll');
};

toggleButton.addEventListener('click', toggleNavigation);


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {

    navigationItems.classList.remove('open');
    toggleButton.classList.remove('close');
    bodyElement.classList.remove('no-scroll');
    });
}