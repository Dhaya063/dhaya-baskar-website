// Add any interactive features or animations here

// Example: Smooth scrolling
// document.querySelectorAll('.sidebar a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


const sidebar = document.querySelector('.sidebar');
const logoIcon = document.querySelector('.nav-arrow a i');

logoIcon.addEventListener('click', () => {
    sidebar.classList.toggle('shrink');
    
    if (sidebar.classList.contains('shrink')) {
        logoIcon.classList.remove('fa-angle-left');
        logoIcon.classList.add('fa-chevron-right');
    } else {
        logoIcon.classList.remove('fa-chevron-right');
        logoIcon.classList.add('fa-angle-left');
    }
});


// Contact Form

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    let isValid = true;
    
    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    if (!email) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (!message) {
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }
    
    if (isValid) {
        // Display success message
        document.getElementById('success-message').style.display = 'flex';
        
        // Hide the form
        document.querySelector('.contact-form').style.display = 'none';
        
        // Reset form fields
        document.getElementById('contact-form').reset();

        // Hide the success message after 5 seconds
        setTimeout(() => {
            document.getElementById('success-message').style.display = 'none';
            document.querySelector('.contact-form').style.display = 'flex'; // Show the form again
        }, 5000);
    }

    return false; // Prevent form submission
}
