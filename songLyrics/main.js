let imageContainer = document.querySelector(".image-container");
let lyricsParagraph = document.getElementById('lyrics');


imageContainer.children.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s ease";
    image.style.filter = "brightness(0.7)";
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
    image.style.filter = "brightness(1)";
  });
});

imageContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        let lyricsFile = event.target.getAttribute('data-lyrics');
        loadLyrics(lyricsFile);
     
    }
});



function loadLyrics(file) {    
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      lyricsParagraph.innerText = xhr.responseText;
    }
  };
  xhr.open("GET", file, true);
   xhr.send();
}


