const pressKey = event => {
    let sound = document.querySelector(`audio[data-key="${event.keyCode}"`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();

    let box = document.querySelector(`div[data-key="${event.keyCode}"`);
    box.classList = "key playing";
}

const resetBox = event => {
    if (event.propertyName !== 'transform') return;
    this.classList = 'key';
}


window.addEventListener("keydown", pressKey)

const keys = Array.from(document.getElementsByClassName("keys"));
keys.forEach(event => addEventListener("transitionend", resetBox));
