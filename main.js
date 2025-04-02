JAVASCRIPT CODE// Form submission handler (with basic validation)
function handleSubmit(event) {
   event.preventDefault();  // Prevent the form from reloading the page

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   // Basic validation check
   if (name === "" || email === "" || message === "") {
       alert("Please fill out all fields before submitting.");
       return;
   }

   // If all fields are filled out, show a thank-you message
   alert("Thank you for getting in touch, " + name + "! We will get back to you shortly.");

   // Reset the form after submission
   document.getElementById('contactForm').reset();
}

// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
       e.preventDefault();  // Prevent the default link behavior

       // Scroll smoothly to the section linked in the href attribute
       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth',
           block: 'start'
       });
   });
});

// Get Involved Button scroll to contact section
const getInvolvedButton = document.querySelector('#home button');
getInvolvedButton.addEventListener('click', function() {
   document.querySelector('#contact').scrollIntoView({
       behavior: 'smooth',
       block: 'start'
   });
});
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});
