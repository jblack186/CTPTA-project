const open = document.querySelector('.navs-list-item');
const drop = document.querySelector('.navs-list-dropdown');


open.addEventListener('click', () => {
  drop.classList.toggle('navs-list-dropdown');
})

// document.querySelector('.navs-list-dropdown').addEventListener('click', () => {
//   console.log('yo')
// })