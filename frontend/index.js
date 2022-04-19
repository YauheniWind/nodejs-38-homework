(async () => {
    const cats = (await fetch('http://localhost:3000/cats').then((resp) => resp.json())) || []

    const root = document.getElementById('root')

    cats.forEach(cat => {
        const catParagraph = document.createElement('p')
        catParagraph.innerHTML = cat.name
        root.appendChild(catParagraph)
    });
})()
