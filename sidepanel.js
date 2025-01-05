document.addEventListener('DOMContentLoaded', function () {
    // Check if an API key is stored
    chrome.storage.local.get('apiKey', function (data) {
        if (data.apiKey) {
            // If API key exists, show main functionality
            document.getElementById('main').style.display = 'block';
        } else {
            // If no API key, show setup UI
            document.getElementById('setup').style.display = 'block';
        }
    });
  
    // Save the API key when the user enters it
    document.getElementById('saveKey')?.addEventListener('click', function () {
        const apiKey = document.getElementById('apiKey').value.trim();
        if (apiKey) {
            chrome.storage.local.set({ apiKey }, function () {
                // Switch to the main UI
                document.getElementById('setup').style.display = 'none';
                document.getElementById('main').style.display = 'block';
            });
        }
    });
});