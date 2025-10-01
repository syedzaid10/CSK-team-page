/* -------------------------
   Full Page Particles.js
---------------------------- */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#ffd700", "#ffcc00", "#ffff66"] // Golden colors
        },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#ffd700",
            "opacity": 0.4,
            "width": 1.2
        },
        "move": {
            "enable": true,
            "speed": 2.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } },
            "bubble": { "distance": 250, "size": 8, "duration": 2, "opacity": 0.8 },
            "repulse": { "distance": 150 },
            "push": { "particles_nb": 5 },
            "remove": { "particles_nb": 2 }
        }
    },
    "retina_detect": true
});

/* -------------------------
   Mobile Menu Toggle
---------------------------- */
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

/* -------------------------
   Smooth Scroll for Links
---------------------------- */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
        if(navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});

/* -------------------------
   Optional: Floating Trophies Animation
---------------------------- */
const trophies = document.querySelectorAll('.trophy');
trophies.forEach((trophy, i) => {
    let direction = 1;
    setInterval(() => {
        trophy.style.transform = `translateY(${direction * 10}px)`;
        direction *= -1;
    }, 1500 + i*300);
});

// Create animated logo div
const logoBg = document.createElement('div');
logoBg.id = 'csk-logo-bg';
document.body.appendChild(logoBg);
