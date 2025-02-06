const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const videoContainerEl = document.getElementById("Trailer-container");
const videoEl = document.querySelector("video");


btnEl.addEventListener("click", () => {
    videoContainerEl.classList.remove("Active");
    videoEl.play();
    // closeIconEl.classList.remove("close-icon");
    // videoEl.classList.add("Active");
    });


closeIconEl.addEventListener('click', () => {
    videoContainerEl.classList.add("Active");
    videoEl.pause();
    videoEl.currentTime = 0;
});

videoEl.addEventListener('mouseenter', () => {
        closeIconEl.classList.add("close-icon");
        });

        
videoEl.addEventListener('mouseleave', () => {
        closeIconEl.classList.remove("close-icon");
    });

    