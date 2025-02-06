const containerEl = document.getElementById('container');

// console.log("key is pressed");
// const boxesEl = document.getElementById('box2');
// containerEl.style.backgroundColor = `#01acde`;
for(let i=0; i<18; i++){
    
    const box = document.createElement('div');
    box.classList.add('box');


    // box.style.backgroundColor= getRandomColor();
    box.addEventListener('mouseenter', () => {
        // box.style.transform = 'scale(1.2)';
        // box.style.gap = '10px';
        box.style.backgroundColor = getRandomColor();
    });

    containerEl.appendChild(box);
}
// console.log("After for loop");
// const randomClr = `#${Math.floor(Math.random() * 123145245)}`;
//     console.log('randomColor: '+randomClr);

function getRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 17654222).toString(16)}`;
    // console.log(randomColor);
    return randomColor;
}