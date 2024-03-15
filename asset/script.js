let memuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
memuIcon.onclick = () =>
{
    memuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}



// scroll bar


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () =>
{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute( "id" );

        if(top>=offset && top<offset+height)
        {
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
        };
    });

    

    // sticky navbar


    let header = document.querySelector( ".header" );
    header.classList.toggle('sticky', window.scrollY > 100);


    //remove toggle icon and nav

    menuIcon.classList.remove( "fa-xmark" );
    navbar.classList.remove('active');
};


// Scroll Reveal

ScrollReveal({
    distance: '80px',
    duration: 2000 ,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading',{origin:'top'});

ScrollReveal().reveal('.home-ing, .services-container, .protfolio-box, .contact form', {origin: 'bottom'});

ScrollReveal().reveal('.home-content h1,  .about-img',{origin:'left'});

ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});


// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontedend Developer','Backend Developer', 'UI/UX Designer','Full Stack Developer'],
    typeSpeed: 50,
    backspeed: 50,
    backDelay: 1000,
    loop: true,

})

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    // If F12 key is pressed
    if (event.keyCode === 123) {
        event.preventDefault(); // Prevent default behavior
    }
});

