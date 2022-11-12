const menu_btn = document.querySelector('.menu-icon')
const close_btn = document.querySelector('.close-icon')
const arrow_icon = document.querySelector('.arrow-icon')
const item_icon = document.querySelectorAll('.item-icon')
const dropdown = document.querySelectorAll('.dropdown-list')
const navBar = document.querySelector('.nav')

menu_btn.addEventListener('click', () => {
  menu_btn.style.display = 'none'
  navBar.style.display = 'block'
  close_btn.style.display = 'block'
})

close_btn.addEventListener('click', () => {
  close_btn.style.display = 'none'
  navBar.style.display = 'none'
  menu_btn.style.display = 'block'
  for (let ind = 0; ind < dropdown.length; ind++) {
    dropdown[ind].classList.remove('rotate')
    item_icon[ind].classList.remove('active')
  }
})

for (let ind = 0; ind < item_icon.length; ind++) {
  item_icon[ind].addEventListener('click', () => {
    item_icon[ind].classList.toggle('active')
    dropdown[ind].classList.toggle('rotate')
  })
}
