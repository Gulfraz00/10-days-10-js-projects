const containerEl = document.querySelector(".container");
const prevEl = document.getElementById("Prev");
// prevEl.innerHTML = `click`;
const nextEl = document.getElementById("next");

let timer;
let x = 0;
prevEl.addEventListener('click', () => {
    x = x + 30;
    clearTimeout(timer);
    // containerEl.style.transform = `translateX(${x}px)`;
    updateGallery();
});


nextEl.addEventListener('click', () => {
    x = x - 30;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    containerEl.style.transform = ` 
    perspective(1500px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x + 30;
        updateGallery();
        
    }, 3000);
    
}
// x = x + 30;
updateGallery();