const openHome = document.querySelector('.navs-list-item.home');
const dropHome = document.querySelector('.navs-list-dropdown.home');
const openTwo = document.querySelector('.navs-list-item.listTwo');
const dropTwo = document.querySelector('.navs-list-dropdown.listTwo');
const openThree = document.querySelector('.navs-list-item.listThree');
const dropThree = document.querySelector('.navs-list-dropdown.listThree');


openHome.addEventListener("mouseover", () => {
  dropHome.classList.remove('navs-list-dropdown');
})

openHome.addEventListener("mouseout", () => {
  dropHome.classList.add('navs-list-dropdown');
})

openTwo.addEventListener("mouseover", () => {
  dropTwo.classList.remove('navs-list-dropdown');
})

openTwo.addEventListener("mouseout", () => {
  dropTwo.classList.add('navs-list-dropdown');
})

openThree.addEventListener("mouseover", () => {
  dropThree.classList.remove('navs-list-dropdown');
})

openThree.addEventListener("mouseout", () => {
  dropThree.classList.add('navs-list-dropdown');
})



// document.querySelector('.navs-list-dropdown').addEventListener('click', () => {
//   console.log('yo')
// })