let content = document.getElementById('content')

    document.getElementById('search').addEventListener('submit', function (e) {
        e.preventDefault()


        const name = document.getElementById('enter__hero').value
        fetch(`https://www.superheroapi.com/api.php/1139884686613571/search/${name}`)
            .then(j => j.json())
            .then((json) => {
                let template = ''
                json.results.forEach(elem => {
                    template += `
            <div class="hero__block" id="${elem.id}">
                <h1 style="text-align: center">${elem.name}</h1>
                <div class="hero__img">
                    <img src="${elem.image.url}" alt="">
                </div>
                <button class="hero__modal" id="${elem.id}"><a href="heroModal.html?id=${elem.id}">Details</a></button>
            </div>
            `

                })
                content.innerHTML = template
            })
    })





