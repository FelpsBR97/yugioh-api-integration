const api_url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
async function getCards(){
  fetch(api_url).then(response => response.json())
  .then(data => {
      const list = document.querySelector('ul')
      data.data.map(item => {
         const li = document.createElement('li')
          li.setAttribute('id', item.id)
          li.innerHTML = `<a>${item.name} <br>${item.type}<br>ATK:${item.atk} DEF:${item.def}</a>`
          list.appendChild(li)
      })
    })
}
getCards()

function searchCard() {
    var input, filter, ul, li, a, i, txtValue
    input = document.getElementById('userInput')
    filter = input.value.toUpperCase()
    ul = document.querySelector('ul')
    li = ul.getElementsByTagName('li')

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0]
      txtValue = a.textContent || a.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ""
      } else {
        li[i].style.display = "none"
      }
    }
  }