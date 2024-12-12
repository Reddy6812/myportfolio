// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Typing Animation
const phrases = ['Researcher', 'Developer', 'AI Enthusiast'];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loopTyping() {
    const typingElement = document.getElementById('typing');
    if (j < phrases.length) {
        const fullPhrase = phrases[j];
        currentPhrase = isDeleting ? currentPhrase.slice(0, -1) : fullPhrase.slice(0, currentPhrase.length + 1);

        typingElement.innerHTML = currentPhrase.join('');

        if (!isDeleting && currentPhrase.length === fullPhrase.length) {
            isDeleting = true;
            setTimeout(loopTyping, 1000);
        } else if (isDeleting && currentPhrase.length === 0) {
            isDeleting = false;
            j++;
            setTimeout(loopTyping, 300);
        } else {
            setTimeout(loopTyping, isDeleting ? 100 : 200);
        }
    } else {
        j = 0;
        loopTyping();
    }
}
loopTyping();

// Scroll Reveal
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);

// Project Statistics Chart
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'Machine Learning', 'Web Development', 'Data Science'],
        datasets: [{
            label: 'Skill Level',
            data: [9, 8, 7, 8],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});
