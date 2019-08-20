const play = function () {
    if (video.paused) {
        video.play();
        document.querySelector('button[title="Toggle Play"]').innerHTML = '❚ ❚'
    } else {
        video.pause();
        document.querySelector('button[title="Toggle Play"]').innerHTML = '►'
    }
}

const setVolume = function () {
    video.volume = this.value;
}

const setSpeed = function () {
    video.playbackRate = this.value;
}

const setTimeBack = function () {
    video.currentTime -= 10
}

const setTimeForward = function () {
    video.currentTime += 25
}

const handleProgress = function () {
    const progressPercentage = (video.currentTime / video.duration) * 100;
    const progressFilled = document.querySelector('div[class="progress__filled"]');
    progressFilled.style.flexBasis = `${progressPercentage}%`;
    if (video.currentTime == video.duration) {
        document.querySelector('button[title="Toggle Play"]').innerHTML = '►';
    }
}

const setProgress = function (e) {
    const progressPercentage = parseInt(e.offsetX / progress.offsetWidth * 100);
    videoPercentage = (progressPercentage * video.duration / 100).toFixed(2);
    progressFilled = document.querySelector('div[class="progress__filled"]');
    progressFilled.style.flexBasis = `${progressPercentage}%`;
    video.currentTime = videoPercentage;
}

const fullScreen = function () {
    if (fullScreenFlag) video.requestFullscreen();
    else video.mozRequestFullScreen();
}

const video = document.querySelector('video');

let playButton = document.querySelector('button', '.toggle');
playButton.addEventListener('click', play);

let generalButton = document.querySelector('video[class="player__video viewer"]');
generalButton.addEventListener('click', play);

let volumeRange = document.querySelector('input[name="volume"]');
volumeRange.addEventListener('click', setVolume);
volumeRange.addEventListener('mousemove', setVolume);

let speedRange = document.querySelector('input[name="playbackRate"]');
speedRange.addEventListener('click', setSpeed);
speedRange.addEventListener('mousemove', setSpeed);

let timeBack = document.querySelector('button[data-skip="-10"]');
timeBack.addEventListener('click', setTimeBack);

let timeForward = document.querySelector('button[data-skip="25"]');
timeForward.addEventListener('click', setTimeForward);

video.addEventListener('timeupdate', handleProgress);

let progress = document.querySelector('div[class="progress"]');
let clickFlag = false;
progress.addEventListener('mousedown', () => clickFlag = true);
progress.addEventListener('mouseup', () => clickFlag = false);
progress.addEventListener('click', setProgress);
progress.addEventListener('mousemove', (e) => clickFlag && setProgress(e));

let fullScreenFlag = false;
video.addEventListener('dblclick', () => {
    if (!fullScreenFlag) fullScreenFlag = true;
    else fullScreenFlag = false;
});
video.addEventListener('dblclick', fullScreen);
