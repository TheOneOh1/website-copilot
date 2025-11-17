// ==========================================
// DEVOPS PORTFOLIO - INTERACTIVITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill categories, project cards, and experience items
    document.querySelectorAll('.skill-category, .project-card, .experience-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Animate counter for statistics (optional enhancement)
    animateOnScroll();
});

// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        animationObserver.observe(element);
    });
}

// Add active nav link styling
const style = document.createElement('style');
style.innerHTML = `
    .nav-link.active {
        color: var(--accent-cyan);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);
