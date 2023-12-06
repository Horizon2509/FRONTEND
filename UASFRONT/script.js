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

// Controller definition
var app = angular.module('myApp', []);
var result = document.getElementById("result");
        app.controller('myController', function ($scope) {
            $scope.showResultPopup = false;
            $scope.first = "";
            $scope.amount = 0;
            popupResult.addEventListener("click", function() {
                // Change the display property of the container to flex
                popupresult.style.display = "flex";
              });
            $scope.submitForm = function () {
                // Add any form submission logic here
                console.log("oke");
                    togglePopup(result);
                // Set showResultPopup to true to display the popup
                $scope.showResultPopup = true;
            };

            $scope.confirmResultPopup = function () {
                // Add logic here
            };

            $scope.cancelResultPopup = function () {
                $scope.showPopupcontent = true;
            };
        });


  // Function to open popup
function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
    document.body.classList.add('popup-open');
}


// Function to close popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
}

// Add event listener to close popup when close button is clicked
const closePopupBtn = document.getElementById('close-popup');
closePopupBtn.addEventListener('click', closePopup);





function togglePopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
    document.body.classList.toggle('popup-open');
} 

function openFirstPopup() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("popup1").style.display = "block";
  }

  function openSecondPopup() {
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "block";
    
  }

  function confirmAction() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup2").style.display = "none";
  }

  function closeSecondPopup() {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup1").style.display = "block";
  }


  function closePopup(popupId) {
    const popups = document.querySelectorAll('.popup');
    for (const popup of popups) {
        popup.style.display = 'none';
    }
    document.body.classList.remove('popup-open');
}

const closePopupBtn1 = document.getElementById('close-popup1');
closePopupBtn1.addEventListener('click', () => closePopup('popup1'));

const closePopupBtn2 = document.getElementById('close-popup2');
closePopupBtn2.addEventListener('click', () => closePopup('popup2'));