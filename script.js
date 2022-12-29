const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuItems = document.getElementsByClassName('menu-items')[0]

toggleButton.addEventListener('click', () =>{
    menuItems.classList.toggle('active')
})