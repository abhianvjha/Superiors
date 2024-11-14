// 1. Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2. Hover Effects on Team Member Cards
  document.querySelectorAll('.team-member').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = 'none';
    });
  });
  
  // 3. Video Section Fullscreen Toggle
  document.querySelectorAll('.video-content').forEach(video => {
    video.addEventListener('dblclick', () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
      }
    });
  });
  
  // 4. Section Animations on Scroll (Reveal on Scroll)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  function revealOnScroll() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 150) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Call once to check if any element is already in the viewport
  
  // 5. Gallery Hover Effect to Zoom Images
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('img').style.transform = 'scale(1.1)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.querySelector('img').style.transform = 'scale(1)';
    });
  });
  
  // 6. Scroll Progress Indicator (Optional)
  const progressBar = document.querySelector('.progress-bar');
  
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    
    progressBar.style.width = `${scrollPercentage}%`;
  });
  
  // 7. Back-to-Top Button Functionality
  const backToTopButton = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 8. Lazy Loading for Images (Optional)
  const lazyImages = document.querySelectorAll('img.lazy');
  
  function lazyLoad() {
    lazyImages.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (imageTop < windowHeight - 50) {
        image.src = image.dataset.src;
        image.classList.remove('lazy');
      }
    });
  }
  
  window.addEventListener('scroll', lazyLoad);
  lazyLoad(); // Run initially to load images that are already in view

  

  function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    
    // Set the source of the lightbox image to the clicked image
    lightboxImg.src = imageSrc;
    
    // Display the lightbox
    lightbox.style.display = 'flex';
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    
    // Hide the lightbox
    lightbox.style.display = 'none';
  }
  