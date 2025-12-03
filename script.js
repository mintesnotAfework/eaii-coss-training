document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlideIndex = 0;

    const navLeft = document.getElementById('nav-left');
    const navRight = document.getElementById('nav-right');

    // Function to update the slide display
    function showSlide(index, direction) {
        if (index < 0 || index >= totalSlides) return;

        // 1. Remove active classes from all slides
        slides.forEach(slide => {
            slide.classList.remove('active-slide', 'prev-slide', 'next-slide');
        });

        // 2. Determine transition class for the old slide (if moving)
        const oldSlide = slides[currentSlideIndex];
        if (oldSlide && oldSlide !== slides[index]) {
            if (direction === 'next') {
                oldSlide.classList.add('prev-slide');
            } else if (direction === 'prev') {
                oldSlide.classList.add('next-slide');
            }
        }

        // 3. Set the new slide as active
        slides[index].classList.add('active-slide');
        
        // 4. Update the current index
        currentSlideIndex = index;

        // 5. Update arrow visibility
        navLeft.style.display = currentSlideIndex > 0 ? 'block' : 'none';
        navRight.style.display = currentSlideIndex < totalSlides - 1 ? 'block' : 'none';
    }

    // Navigation handlers
    function nextSlide() {
        if (currentSlideIndex < totalSlides - 1) {
            showSlide(currentSlideIndex + 1, 'next');
        }
    }

    function prevSlide() {
        if (currentSlideIndex > 0) {
            showSlide(currentSlideIndex - 1, 'prev');
        }
    }

    // Attach click events to arrows
    navRight.addEventListener('click', nextSlide);
    navLeft.addEventListener('click', prevSlide);

    // Attach key press events (Right/Left arrow keys)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize the presentation on the first slide
    showSlide(currentSlideIndex, 'initial');
});