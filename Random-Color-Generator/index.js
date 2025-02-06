const containerEl = document.getElementById('container');

for(i=0; i++; i<10) {
    const box = document.createElement('div');
    box.classList.add('box');


    box.style.backgroundColor= getRandomColor();
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.2)';
        box.style.backgroundColor = getRandomColor();
    });

    containerEl.appendChild(box);
}

function getRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
}