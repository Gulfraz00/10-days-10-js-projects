const textareaEl = document.getElementById("txtarea");
const charCounterEl = document.querySelector("#totalCounter");
const remainingCharEl = document.querySelector("#RemainingChar");

textareaEl.addEventListener("keyup", () => {
    // console.log("key is pressed");
    updateCounter();
})
updateCounter();


function updateCounter(){
    const text = textareaEl.value;
    // console.log(text);
    const charCount = text.length;
    // console.log(charCount);
    charCounterEl.innerHTML= charCount;
    remainingCharEl.innerHTML= textareaEl.getAttribute("maxLength")-charCount;
    
}