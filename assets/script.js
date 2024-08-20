
// Contact Form

// copy button

function copyToClipboard(elementId, buttonElement) {
    var textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(function() {
        // Change button text to "Copied"
        buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        
        // Revert button text to "Copy" after 10 seconds
        setTimeout(function() {
            buttonElement.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
        }, 10000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
