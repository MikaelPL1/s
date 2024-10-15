

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".slider"); // Corrected selector

next.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slides");
    slider.appendChild(slides[0]); // This will move the first slide to the end
});

// You might want to add functionality for the 'prev' button too
prev.addEventListener("click", function() {
    let slides = document.querySelectorAll(".slides");
    slider.prepend(slides[slides.length - 1]); // This will move the last slide to the start
});
