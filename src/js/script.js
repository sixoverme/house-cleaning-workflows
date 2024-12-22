// Basic function to handle sidebar navigation
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('aside nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            links.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});

// Placeholder function for future API integrations
function initializeAPIs() {
    // Google OAuth integration
    // Google Sheets integration
}