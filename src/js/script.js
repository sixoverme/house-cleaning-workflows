// Basic function to handle sidebar navigation
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('aside nav ul li a');
    const sections = document.querySelectorAll('main section');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            links.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');

            const sectionId = event.target.getAttribute('data-section');
            sections.forEach(section => {
                section.style.display = section.id === sectionId ? 'block' : 'none';
            });
        });
    });
});

// Function to toggle sidebar on mobile devices
function toggleSidebar() {
    const sidebar = document.querySelector('aside');
    sidebar.classList.toggle('open');
}

// Placeholder function for future API integrations
function initializeAPIs() {
    // Google OAuth integration
    // Google Sheets integration
}

// Google Sheets API integration
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBIwvNxVtRxGA5vN5TgbSlBdgBuENZNy68',
        clientId: '927096546445-61g8b1625se3b34imq7mvbbinlpgplgs.apps.googleusercontent.com',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(() => {
        // Handle successful initialization
    }, (error) => {
        console.error('Error initializing Google Sheets API', error);
    });
}

function loadSheetsApi() {
    gapi.load('client:auth2', initClient);
}

function readSheetData() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'Sheet1!A1:E10',
    }).then((response) => {
        const range = response.result;
        if (range.values.length > 0) {
            for (let i = 0; i < range.values.length; i++) {
                const row = range.values[i];
                console.log(row);
            }
        } else {
            console.log('No data found.');
        }
    }, (error) => {
        console.error('Error reading data from Google Sheets', error);
    });
}

function writeSheetData(values) {
    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        resource: { values: values }
    }).then((response) => {
        console.log('Data written to Google Sheets', response);
    }, (error) => {
        console.error('Error writing data to Google Sheets', error);
    });
}