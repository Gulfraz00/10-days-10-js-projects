const btnEl= document.querySelector('button');
const spanEl= document.querySelector('span');

btnEl.addEventListener('click', ()=>{
    const yourName=prompt('Please enter your name: ');
    spanEl.textContent= yourName;
});