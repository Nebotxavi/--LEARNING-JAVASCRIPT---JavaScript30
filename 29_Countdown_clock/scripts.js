let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if we should stop
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const h = Math.floor(seconds / 3600);
    const min = Math.floor((seconds % 3600) / 60);
    const sec = (seconds % 3600 % 60);
    let totalTime = `${h > 9 ? h : '0' + h}:${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`;
    timerDisplay.innerHTML = totalTime;
    document.title = totalTime;
}


function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.innerHTML = `Back at ${hours > 10 ? hours : '0' + hours}:${minutes > 10 ? minutes : '0' + minutes}`;
}

function startTimer() {
    const seconds = this.dataset.time;
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    timer(this.minutes.value * 60);
    this.reset();
})
