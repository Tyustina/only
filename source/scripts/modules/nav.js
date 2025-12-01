const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.header__toggle');
const isDesktop = window.innerWidth > 1023;
const body = document.body;
const overlay = document.querySelector('.overlay');

export function switchingNav() {
    if (navToggle) {
        navToggle.addEventListener('click', openCloseNav)
    }
}

function openCloseNav() {

    if (nav.classList.contains('is-open')) {
        closeNav();

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeNav();
            }
        })

        body.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeNav();
            }
        })
    } else {
        openNav();
    }
}

function closeNav() {
    nav.classList.remove('is-open');
    body.classList.remove('scroll-lock');
    overlay.classList.remove('is-active');
    navToggle.classList.remove('is-open');
}

function openNav() {
    nav.classList.add('is-open');
    body.classList.add('scroll-lock');
    overlay.classList.add('is-active');
    navToggle.classList.add('is-open');
}



window.addEventListener('resize', switchingNav)
