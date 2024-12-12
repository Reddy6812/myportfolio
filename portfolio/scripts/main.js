// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality for Resume Preview
const modal = document.getElementById('resumeModal');
const closeModalButton = document.querySelector('.modal .close');

// Open Modal
function openModal() {
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
}

// Close Modal on Click Outside
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Animate Elements on Scroll (Optional)
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            element.classList.add('aos-animate');
        }
    });
});
