const roles = [
    "Full-stack Dasturchi",
    "Telegram Bot Mutaxassisi",
    "Vue.js / Nuxt.js Dev",
    "Python Backend Dev",
    "PWA & Electron Dev"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typedText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

setTimeout(typeEffect, 500);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.project-card .review-card, .contact-card').forEach(card => {
    gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

gsap.fromTo('.hero h1',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
);

gsap.fromTo('.hero-stats, .hero-buttons',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, delay: 0.5, stagger: 0.1 }
);

console.log("✅ Portfolio ready | Professional structure");