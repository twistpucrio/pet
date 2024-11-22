let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Remove the 'active' class from the current item
    items[currentIndex].classList.remove('active');

    // Update the index
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Add the 'active' class to the new item
    items[currentIndex].classList.add('active');

    // Update the transform property for smooth sliding
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}