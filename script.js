// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update active class
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Dynamic active nav on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// CV Download Function
function downloadCV() {
    // Replace with your actual CV file path
    const cvUrl = 'assets/pdfs/Emmanuel_Owoeye_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Emmanuel_Owoeye_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
// Check for saved theme or prefered scheme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌞';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
}
    
themeToggle.addEventListener('click', function() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌞';
    }
});

// Testimonial slider functionality
let currentTestimonial = 0;
const testimonials = document.getElementById('testimonialsSlider');
const dots = document.querySelectorAll('.testimonial-dot');
    
function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial();
}
    
function updateTestimonial() {
    testimonials.scrollTo({
        left: currentTestimonial * testimonials.offsetWidth,
        behavior: 'smooth'
    });
    
    dots.forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
    
// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % dots.length;
    updateTestimonial();
}, 5000);
    
// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();
    
// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
    
function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}
    
// Intersection Observer for skill animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
    
document.querySelectorAll('.skills-container').forEach(section => {
    observer.observe(section);
});