const content = document.querySelectorAll('.content')
const listitem = document.querySelectorAll('nav ul li')

listitem.forEach((item, idx) => {
    item.addEventListener('click', () => {

        hideAllcontent()
        hideAllItems()

        item.classList.add('active')
        content[idx].classList.add('show')
    })

})

function hideAllcontent() {
    content.forEach(content => content.classList.remove('show'))
}
function hideAllItems() {
    listitem.forEach(item => item.classList)
}
