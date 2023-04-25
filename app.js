function myNav() {
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = () => {
        if (nav.style.left == "0%") {
            nav.style.left = "-100%";
            bar.classList.remove("circle");
            bar.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            nav.style.left = "0%";
            bar.classList.add("circle");
            bar.innerHTML = '<i class="far fa-times-circle"></i>';
        }
    }
}
myNav();

// window.onload = () => {
//     let homeContent = document.querySelector(".home-content");
//     homeContent.style.left = "50px"
// }

// // Selectati toate imaginile din galerie
// const galleryImages = document.querySelectorAll('.gallery-flex img');

// // Iterati prin fiecare imagine si adaugati un eveniment de click
// galleryImages.forEach(img => {
//     img.addEventListener('click', () => {
//         // Salvati sursa imaginii din clasa "image-one event"
//         const mainImageSrc = document.querySelector('.image-one img').src;

//         // Schimbati sursa imaginii din clasa "image-one event" cu sursa imaginii selectate
//         document.querySelector('.image-one img').src = img.src;

//         // Schimbati sursa imaginii selectate cu sursa imaginii din clasa "image-one event"
//         img.src = mainImageSrc;
//     });
// });

let images = document.querySelectorAll(".event img");
let firstImage = document.querySelector(".image-one img");

images.forEach(image => {
    image.addEventListener("click", () => {
        let currentSrc = image.src;
        image.src = firstImage.src;
        firstImage.src = currentSrc;
    });
});
