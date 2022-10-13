const menuBtn = document.querySelector('.menu-btn');
const hamburger =document.querySelector('.menu-btn_burger');
let showMenu = false;
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        showMenu = false;
    }
}