
let burger = document.getElementById('burger');
let nav = document.getElementById('nav');
let header = document.getElementById('header');
let welcome = document.getElementById('welcome');
let scrollPos = window.scrollY;

burger.addEventListener('click', function(){
    nav.classList.toggle('show');
})

window.addEventListener('scroll', function(){
    scrollPos = this.scrollY;
    if (scrollPos > offset(welcome)) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed');
    }
})


// Poss el from top
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
};