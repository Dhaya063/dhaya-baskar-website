
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


// Scroll animation

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 
        });
    }, { threshold: 0.3 });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});