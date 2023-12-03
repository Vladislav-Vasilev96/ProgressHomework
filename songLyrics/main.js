let imageContainer = document.querySelector(".image-container");

document.addEventListener("DOMContentLoaded", function () {
    Reveal.initialize();

    imageContainer.children.forEach(image => {
        if (image && image.tagName === 'IMG') {
            image.addEventListener('mouseover', function (event) {
                event.target.style.filter = 'brightness(1.5)'; // Adjust the brightness value as needed
            });

            image.addEventListener('mouseout', function (event) {
                event.target.style.filter = 'brightness(1)'; // Reset to the original brightness
            });
        }
    });
});
