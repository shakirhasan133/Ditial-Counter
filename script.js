

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
const display = document.getElementById('display');
const audio = new Audio("click.mp3");

let count = 0;

plus.addEventListener('click', ()=>{
    count ++;
    display.innerHTML = count;
    audio.play()


});

minus.addEventListener('click', ()=>{
    count --;
    display.innerHTML = count;
    audio.play()
});

reset.addEventListener('click', ()=>{
    count = 0;
    display.innerHTML = count;
    audio.play()
});

