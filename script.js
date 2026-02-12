const images = [
    "Rectangle 6 (2).png",
    "download2.jpg",
    "download (7).jpg"
  ];

  let index = 0;
  const img = document.getElementById("mainImage");

  function changeImage(){
    img.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % images.length; // loop
      img.src = images[index];
      img.classList.remove("fade-out");
    }, 250);
  }
const slideElements = document.querySelectorAll('.slide-left-box, .slide-right-box');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // viewport se bahar jaane par remove class
          entry.target.classList.remove('active');
        }
      });
    },
    { threshold: 0.3 } // 30% element visible hone par trigger
  );

  slideElements.forEach(el => observer.observe(el));
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".modern-faq .faq-item");

  faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    const body = item.querySelector(".faq-body");
    const plus = item.querySelector(".faq-plus");

    header.addEventListener("click", () => {
      const isOpen = body.style.display === "block";

      // Close all items first
      faqItems.forEach(other => {
        other.querySelector(".faq-body").style.display = "none";
        other.querySelector(".faq-plus").textContent = "+";
        other.classList.remove("open");
      });

      // Toggle current
      if (!isOpen) {
        body.style.display = "block";
        plus.textContent = "−";
        item.classList.add("open"); // add class to apply blue background
      } else {
        body.style.display = "none";
        plus.textContent = "+";
        item.classList.remove("open");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const specialistBoxes = document.querySelectorAll(".specialist-img-box");
  const specialistInfos = document.querySelectorAll(".specialist-info");

  specialistBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const id = box.getAttribute("data-id");

      // Set active/inactive images
      specialistBoxes.forEach(b => {
        if (b.getAttribute("data-id") === id) {
          b.classList.add("active");
          b.classList.remove("inactive");
        } else {
          b.classList.remove("active");
          b.classList.add("inactive");
        }
      });

      // Show selected specialist info, hide others
      specialistInfos.forEach(info => {
        if (info.getAttribute("data-id") === id) {
          info.style.display = "block";
        } else {
          info.style.display = "none";
        }
      });
    });
  });

  // Initialize first specialist active
  specialistBoxes[0].click();
});
const reveals = document.querySelectorAll('.reveal-up');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener("DOMContentLoaded", function () {

  const slideElements = document.querySelectorAll(".slide-left, .slide-right");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active"); // repeat animation
        }
      });
    }, { threshold: 0.25 });

    slideElements.forEach(el => observer.observe(el));

  } else {
    // Fallback for very old browsers
    slideElements.forEach(el => el.classList.add("active"));
  }

});
// Navbar scroll effect - Add this script
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Ensure navbar is visible on page load
    navbar.style.display = 'block';
    navbar.style.opacity = '1';
});

document.querySelectorAll('.nav-item.dropdown').forEach((dropdown) => {
  let timeout;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
    bootstrap.Dropdown.getOrCreateInstance(toggle).show();
  });

  dropdown.addEventListener('mouseleave', () => {
    const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
    timeout = setTimeout(() => {
      bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
    }, 120);
  });
});

// Get carousel track element
const carouselTrack = document.querySelector('.carousel-track');

let isDragging = false;
let startX;
let scrollVelocity = 0;

// Mouse Events
carouselTrack.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  scrollVelocity = 0;
  
  // Pause animation
  carouselTrack.style.animationPlayState = 'paused';
  carouselTrack.style.cursor = 'grabbing';
});

carouselTrack.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const currentX = e.clientX;
  const diff = currentX - startX;
  
  // Calculate velocity for smooth scroll
  scrollVelocity = diff * 0.5; // Speed control
  
  // Get current transform
  const computedStyle = window.getComputedStyle(carouselTrack);
  const matrix = new DOMMatrix(computedStyle.transform);
  const currentTransform = matrix.m41;
  
  // Apply drag movement
  carouselTrack.style.transform = `translateX(${currentTransform + scrollVelocity}px)`;
  
  startX = currentX;
});

carouselTrack.addEventListener('mouseup', () => {
  isDragging = false;
  
  // Resume normal animation
  carouselTrack.style.animationPlayState = 'running';
  carouselTrack.style.cursor = 'grab';
});

carouselTrack.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    
    // Resume normal animation
    carouselTrack.style.animationPlayState = 'running';
    carouselTrack.style.cursor = 'grab';
  }
});

// Touch Events for Mobile
let touchStartX = 0;
let touchVelocity = 0;

carouselTrack.addEventListener('touchstart', (e) => {
  isDragging = true;
  touchStartX = e.touches[0].clientX;
  touchVelocity = 0;
  
  // Pause animation
  carouselTrack.style.animationPlayState = 'paused';
});

carouselTrack.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  
  const currentX = e.touches[0].clientX;
  const diff = currentX - touchStartX;
  
  // Calculate velocity
  touchVelocity = diff * 0.5;
  
  // Get current transform
  const computedStyle = window.getComputedStyle(carouselTrack);
  const matrix = new DOMMatrix(computedStyle.transform);
  const currentTransform = matrix.m41;
  
  // Apply drag movement
  carouselTrack.style.transform = `translateX(${currentTransform + touchVelocity}px)`;
  
  touchStartX = currentX;
});

carouselTrack.addEventListener('touchend', () => {
  isDragging = false;
  
  // Resume normal animation
  carouselTrack.style.animationPlayState = 'running';
});

carouselTrack.addEventListener('touchcancel', () => {
  isDragging = false;
  
  // Resume normal animation
  carouselTrack.style.animationPlayState = 'running';
});

// Set initial cursor
carouselTrack.style.cursor = 'grab';