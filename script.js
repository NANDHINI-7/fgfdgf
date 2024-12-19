

// profile cards

let currentIndex = 0;
    const items = document.querySelectorAll('.testimonial-item');
    const totalItems = items.length;

    function updateSlider() {
        const slider = document.querySelector('.testimonial-slider');

        // Determine number of visible items based on screen width
        const visibleItems = window.innerWidth <= 768 ? 2 : window.innerWidth <= 1024 ? 2 : 4;
        
        // Calculate offset for the current index
        const offset = (100 / visibleItems) * currentIndex;
        slider.style.transform = `translateX(-${offset}%)`;
        
        // Reset index if it's at the end (for wrap-around effect)
        if (currentIndex >= totalItems) {
            currentIndex = 1;
        }
    }

    // Left button - moves to previous item or wraps to the end
    document.querySelector('.left-btn').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateSlider();
    });

    // Right button - moves to next item or wraps to the start
    document.querySelector('.right-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    });

    // Update slider on window resize
    window.addEventListener('resize', updateSlider);
    updateSlider();


    document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', function () {
    const faqItem = this.parentElement;
    const toggleIcon = this.querySelector('.toggle-icon');
    
    // Toggle the active class
    faqItem.classList.toggle('active');
    
    // Change icon based on active state
    if (faqItem.classList.contains('active')) {
      toggleIcon.textContent = '−';
    } else {
      toggleIcon.textContent = '+';
    }
  });
});
