function getDate() {
    const now = new Date();
    const sec = (now.getSeconds() / 60) * 360 + 90;
    document.getElementsByClassName('second-hand')[0].style.transform = `rotate(${sec}deg)`;

    const min = (now.getMinutes() / 60) * 360 + 90;
    document.getElementsByClassName('min-hand')[0].style.transform = `rotate(${min}deg)`;

    const hour = (now.getHours() / 12) * 360 + 90;
    document.getElementsByClassName('hour-hand')[0].style.transform = `rotate(${hour}deg)`;
}

setInterval(getDate, 1000);
