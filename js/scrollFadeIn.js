document.addEventListener("DOMContentLoaded", function() {
    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    // On scroll, check the position of each section
    window.addEventListener('scroll', function () {
        fadeInSections.forEach(function(section) {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    });
});

