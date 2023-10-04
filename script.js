const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselTrack = document.querySelector(".carousel-track");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, carouselTrack.children.length - 1);
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = carouselTrack.children[0].offsetWidth;
    const offset = -currentIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}
