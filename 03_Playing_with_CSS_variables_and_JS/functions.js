
let controls = document.querySelectorAll('.controls input')


function modify() {
    if (this['id'] == 'base') {
        document.documentElement.style.setProperty(`--${this['id']}`, this['value'])
    } else {
        document.documentElement.style.setProperty(`--${this['id']}`, this['value'] + 'px')
    }
    console.log(this['id']);
}


controls.forEach(i => i.addEventListener('change', modify));
controls.forEach(i => i.addEventListener('mousemove', modify));
