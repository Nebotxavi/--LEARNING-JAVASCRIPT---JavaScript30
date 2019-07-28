function pressKey(event) {
    let sound = document.querySelector(`audio[data-key="${event.keyCode}"`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();

    let box = document.querySelector(`div[data-key="${event.keyCode}"`);
    box.classList = "key playing";
}

function resetBox(event) {
    if (event.propertyName !== "transform") return;
    this.className = "key";
}


window.addEventListener("keydown", pressKey)

const keys = document.querySelectorAll('.key');
keys.forEach(event => addEventListener("transitionend", resetBox));
