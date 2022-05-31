let infoHero = document.getElementById('info__hero')
let imgHero = document.getElementById('img__hero')
let heroInfo = document.getElementById('hero__info')

const urlParams = new URLSearchParams(window.location.search);
const currentID = urlParams.get('id');

fetch(`https://www.superheroapi.com/api.php/1139884686613571/${currentID}/appearance`)
    .then(j => j.json())
    .then((json) => {
        let template = ''
        template = `
                <div>
                    <h1>${json.response}</h1>
                    <h1>${json.id}</h1>
                    <h1>Hello ${json.name}</h1>
                </div>
                `
        infoHero.innerHTML = template
    })

fetch(`https://www.superheroapi.com/api.php/1139884686613571/${currentID}/image`)
    .then(j => j.json())
    .then((json) => {
        let template = ''
        template = `
                <div>
                    <img src="${json.url}" alt="">
                </div>
                `
        imgHero.innerHTML = template
    })

fetch(`https://www.superheroapi.com/api.php/1139884686613571/${currentID}/appearance`)
    .then(j => j.json())
    .then((json) => {
        let template = ''
        template = `
                <div>
                    <h1>${json.gender}</h1>
                    <h1>${json.race}</h1>
                    <h1>${json.height}</h1>
                    <h1>${json.weight}</h1>
                </div>
                `
        heroInfo.innerHTML = template
    })


