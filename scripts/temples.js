const navButton = document.querySelector('#menu');
const navList = document.querySelector('#nav-list');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('open');
    navList.classList.toggle('open');
});