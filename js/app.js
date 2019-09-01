
let burger = document.getElementById('burger');
let nav = document.getElementById('nav');
let header = document.getElementById('header');
let welcome = document.getElementById('welcome');
let scrollPos = window.scrollY;
let speakers = document.querySelector('.speakers-list')

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

speakers.addEventListener('click', function(e){
    e.preventDefault();
    e.target.parentNode.classList.toggle('hov');
})


// Poss el from top
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
};