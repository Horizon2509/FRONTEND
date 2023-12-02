document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        const offsetTop = section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Scroll to Home section when "Home" link is clicked
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('home');
    });

    // Scroll to About Us section when "About Us" link is clicked
    const aboutUsLink = document.querySelector('a[href="#desc"]');
    aboutUsLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('desc');
    });

    // Scroll to Information section when "Information" link is clicked
    const informationLink = document.querySelector('a[href="#our"]');
    informationLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('our');
    });

    // Scroll to Spot section when "Spot F&B" link is clicked
    const spotLink = document.querySelector('a[href="#spot"]');
    spotLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('spot');
    });

    // Scroll to Book Now section when "Contact Us" link is clicked
    const contactLink = document.querySelector('a[href="#booknow"]');
    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('booknow');
    });

    // Scroll to Contact section when "Follow Us" link is clicked
    const followUsLink = document.querySelector('.h-right a[href="#contact"]');
    followUsLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection('booknow');
    });
    // Show the container when "Book a trip" button is clicked
    const bookTripButton = document.querySelector('.btn');
    const container = document.getElementById('container');
    const closePopupButton = document.getElementById('close-container');

    bookTripButton.addEventListener('click', function () {
        container.style.display = 'flex';
    });

    // Hide the container when the close button is clicked
    closePopupButton.addEventListener('click', function () {
        container.style.display = 'none';
    });

    // Hide the container when clicking outside the content
    window.addEventListener('click', function (event) {
        if (event.target === container) {
            container.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and container elements
    var bookTripBtn = document.getElementById("bookTripBtn");
    var container = document.querySelector(".container");
    var closepopup = document.getElementById("close-container");
    var result = document.querySelector(".popupresult");

    // Add a click event listener to the button
    bookTripBtn.addEventListener("click", function() {
      // Change the display property of the container to flex
      container.style.display = "flex";
    });

    closepopup.addEventListener("click", function() {
        // Change the display property of the container to flex
        container.style.display = "none";   
      });

  });






