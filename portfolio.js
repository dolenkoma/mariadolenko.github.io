document.addEventListener('DOMContentLoaded', function () {
    // === Таб секції ===
    function showSection(id) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      const target = document.getElementById(id);
      if (target) {
        target.classList.add('active');
      }
    }
    window.showSection = showSection;
  
    // === Слайдер ===
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
      attachImageClickHandlers(); // оновлюємо обробники кліків після зміни слайду
    }
  
    function attachImageClickHandlers() {
      const images = document.querySelectorAll('.slide.active img');
  
      images.forEach(img => {
        img.onclick = () => {
            overlayImg.src = img.src;
            overlayImg.alt = img.alt || '';
            overlay.style.display = 'flex';
            setTimeout(() => overlay.classList.add('show'), 10);
        };
      });
    }
  
    // === Збільшення картинки ===
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';

    const overlayImg = document.createElement('img');
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);

  
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);
  
    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 300);
      });
  
    // ініціалізація
    showSlide(currentSlide);
  
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  });
  