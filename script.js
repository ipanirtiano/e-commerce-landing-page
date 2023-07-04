// navbar
const toggle = document.querySelectorAll('#toggle-menu');
const menu = document.querySelector('.navbar-menu');

toggle.forEach(btn => {[
    btn.addEventListener('click', function(){
        menu.classList.toggle('menu-active');
    })
]});