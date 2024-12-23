require('dotenv').config();

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - House Cleaning Workflows</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <div id="login-button" class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="js/login.js"></script>
</body>
</html>

// Google OAuth login
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    // Redirect to main page after login
    window.location.href = 'index.html';
}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User signed out.');
    });
}

// Initialize the Google Sign-In client
function initClient() {
    gapi.load('auth2', () => {
        gapi.auth2.init({
            client_id: '927096546445-61g8b1625se3b34imq7mvbbinlpgplgs.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/contacts.readonly'
        });
    });
}

// Load the Google Platform Library and initialize the client
window.onload = () => {
    initClient();
};
