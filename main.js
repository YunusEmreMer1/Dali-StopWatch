//global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 4655;
let interval = null;

//event listeners
start_btn.addEventListener('click', start);

//update the timer
function timer() {
    seconds++;
    //format our time
    let secs = seconds % 60;
    let mins = Math.floor(seconds / 60) ;
    let hrs = Math.floor(seconds / 3600);

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}

timer();

console.log("hello bitches");