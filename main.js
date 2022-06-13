function fetchApiData() {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('ul')
        data.data.map(item => {
            const li = document.createElement('li')
            li.setAttribute('id', item.id)
            li.innerHTML = item.name
            list.appendChild(li)
        })
    })
}