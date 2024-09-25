$(document).ready(function() {
    // Smooth scroll for navigation links
    $('a.nav-link').on('click', function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800);
      }
    });
  
    // Change navbar background on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('#navbar').css('background-color', '#215D65');
      } else {
        $('#navbar').css('background-color', 'transparent');
      }
    });
  
    // Image hover effect
    $('#image').hover(
      function() {
        $(this).css('filter', 'brightness(70%)');
      },
      function() {
        $(this).css('filter', 'brightness(100%)');
      }
    );
  
    // Scroll to top button
    var scrollToTopBtn = $('#scrollToTopBtn');
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        scrollToTopBtn.fadeIn();
      } else {
        scrollToTopBtn.fadeOut();
      }
    });
  
    scrollToTopBtn.on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
    });
  
    // Fade-in effect for sections
    $(window).on('load', function() {
      $('.fade-in').css('opacity', '1');
    });
  });


  // Form validation
$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
      var email = $('#email').val();
      var phone = $('#phone').val();
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        e.preventDefault(); // Prevent form submission if email is invalid
      }
  
      if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        e.preventDefault(); // Prevent form submission if phone number is invalid
      }
    });
  
    function validateEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function validatePhone(phone) {
      var re = /^\d{10,}$/;
      return re.test(phone);
    }
  });
  

  // Change image on hover
$(document).ready(function() {
    $('#image').hover(
      function() { 
        $(this).attr('src', 'images/second-image.jpg'); // Replace with second image path
      },
      function() { 
        $(this).attr('src', 'images/first-image.jpg');  // Return to original image path
      }
    );
  });
  

  // Continuous Typewriter Effect Function
function typeWriter(text, className, delay, pause) {
    let index = 0; // Start from the first character of the string
    let element = document.querySelector(`.${className}`); // Target element by class name
    element.innerHTML = ""; // Ensure the element starts empty to avoid duplication
    
    // Function to "type" each character
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index); // Add the next character to the element
        index++;
        setTimeout(type, delay); // Wait for `delay` milliseconds before typing the next character
      } else {
        // Clear the text after a short pause and restart the typing
        setTimeout(() => {
          element.innerHTML = ""; // Clear the text
          index = 0; // Reset the index to start over
          setTimeout(type, delay); // Start typing again
        }, pause); // Pause before restarting
      }
    }
    
    type(); // Start the typing process
  }
  
  // Call the function with the desired text, delay, and pause
  document.addEventListener('DOMContentLoaded', function() {
    const navTitle = "Julie's Ink"; // The text you want to type out
    typeWriter(navTitle, "navtxt1", 100, 2000); // 100ms typing speed, 2000ms (2 seconds) pause before clearing
  });
  