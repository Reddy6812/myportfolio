// Open Modal
function openModal() {
    document.getElementById('resumeModal').style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('resumeModal').style.display = 'none';
}

// Close Modal on Click Outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('resumeModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
