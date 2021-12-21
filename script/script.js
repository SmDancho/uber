window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-list'),
    menuItem = document.querySelectorAll('.nav_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        })
    })
})


window.onscroll = function showHeader () {
    
    let nav = document.querySelector('.nav')

    if (window.pageYOffset > 200) {
        nav.classList.add('nav-fixed');
    }
    else if(window.pageYOffset < 200) {
        nav.classList.remove('nav-fixed');
    }

}