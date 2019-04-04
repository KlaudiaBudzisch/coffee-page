const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function stickyNav() {
    if (window.scrollY >= navTop) {
        document.body.style.opaddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.opaddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickyNav);


const btns = document.querySelectorAll('.btn');
const sections = document.querySelectorAll('.js-section');



function scrollSections(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}


btns.forEach((btn, index) => btn.addEventListener("click", () =>
    scrollSections(sections[index])
));

// btns[0].addEventListener("click", () => {
//     scrollSections(sections[0]);
// });

// btns[1].addEventListener('click', () => {
//     scrollSections(sections[1]);
// })

// btns[2].addEventListener('click', () => {
//     scrollSections(sections[2]);
// })

// btns[3].addEventListener('click', () => {
//     scrollSections(sections[3]);
// })