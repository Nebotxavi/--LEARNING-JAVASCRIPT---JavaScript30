// Fetch and store data

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(i => i.json())
    .then(i => cities.push(...i))

// Main functions

function outputMatches() {
    const matches = getMatches(this.value, cities)

    let previousLi = document.querySelectorAll('li');
    previousLi.forEach(n => n.remove());

    for (let entry of matches) {
        console.log(entry)
        let newLi = document.createElement('li');
        let span = document.createElement('span');
        span.setAttribute('class', 'name');
        let HTML = entry['city'] + ', ' + entry['state'];
        let hlText = new RegExp(this.value, 'gi');
        let hlHTML = HTML.replace(hlText, `<span class="hl">${this.value}</span>`);
        span.innerHTML = hlHTML
        newLi.append(span)

        console.log(hlHTML);
        let newSpan = document.createElement('span');
        newSpan.setAttribute('class', 'population');
        newSpan.innerHTML = numCommas(entry['population']);
        newLi.append(newSpan);
        console.log(newLi)

        let container = document.querySelector('ul');
        container.append(newLi)
    }
}

function numCommas(n) {
    const regex = /\B(?=(\d{3})+(?!\d))/gi
    return n.toString().replace(regex, ',')
}


function getMatches(toMatch, cities) {
    const input = (toMatch).toLowerCase();
    const matches = cities.filter(i => i['city'].toLowerCase().includes(input)
        || i['state'].toLowerCase().includes(input))
    return matches;
}

// Event Listerner

const inputBox = document.querySelector('input');
inputBox.addEventListener('keyup', outputMatches);
