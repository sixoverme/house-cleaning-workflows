function toggleActive(event) {
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', toggleActive);
    });
});

// Placeholder for future API integration
// function integrateWithGoogleOAuth() {}

// function integrateWithGoogleSheets() {}