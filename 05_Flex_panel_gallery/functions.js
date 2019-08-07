function expand() {
    let others = document.querySelectorAll('.panel');
    others.forEach(box => box['classList'].remove('open'));
    this['classList'].toggle('open');
}

function center(e) {
    if (e.propertyName.includes('flex')) {
        this['classList'].toggle('open-active');
    }
}

let boxes = document.querySelectorAll('.panel');
boxes.forEach(box => box.addEventListener('click', expand));
boxes.forEach(box => box.addEventListener('transitionend', center));

