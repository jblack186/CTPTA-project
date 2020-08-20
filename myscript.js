const openHome = document.querySelector('.navs-list-item.home');
const dropHome = document.querySelector('.navs-list-dropdown.home');
const navHome = document.querySelector('.list-tag.home-tag');
const navOpen = document.querySelector('.dropdown-container')
const navTwoOpen = document.querySelector('.navs-list-dropdown.listTwo')
const navTwo = document.querySelector('.list-tag.second-tag');
const navThreeOpen = document.querySelector('.navs-list-dropdown.listThree')
const navThree = document.querySelector('.list-tag.third-tag');

const navFour = document.querySelector('.list-tag.fourth-tag');
const navFourOpen = document.querySelector('.navs-list-dropdown.listFour')
const navFive = document.querySelector('.list-tag.fifth-tag');
const navFiveOpen = document.querySelector('.navs-list-dropdown.listFive')
const navSix = document.querySelector('.list-tag.sixth-tag');
const navSixOpen = document.querySelector('.navs-list-dropdown.listSix')

const openTwo = document.querySelector('.navs-list-item.listTwo');
const dropTwo = document.querySelector('.navs-list-dropdown.listTwo');
const openThree = document.querySelector('.navs-list-item.listThree');
const dropThree = document.querySelector('.navs-list-dropdown.listThree');
const openFour = document.querySelector('.navs-list-item.listFour');
const dropFour = document.querySelector('.navs-list-dropdown.listFour');
const openFive = document.querySelector('.navs-list-item.listFive');
const dropFive = document.querySelector('.navs-list-dropdown.listFive');
const openSix = document.querySelector('.navs-list-item.listSix');
const dropSix = document.querySelector('.navs-list-dropdown.listSix');

const firstOpen = document.querySelector('.second-dropdown');



navOpen.addEventListener("mouseover", () => {
  navHome.classList.remove('list-tag')
  navHome.classList.add('list-tag-open');
})



navOpen.addEventListener("mouseout", () => {
  navHome.classList.add('list-tag')
  navHome.classList.remove('list-tag-open');
})


navTwoOpen.addEventListener("mouseover", () => {
  navTwo.classList.remove('list-tag');
  navTwoOpen.classList.add('open-nav')
  navTwo.classList.add('list-tag-open');
  firstOpen.classList.add('second-dropdown-open')
})



navTwoOpen.addEventListener("mouseout", () => {
  navTwo.classList.add('list-tag')
  navTwo.classList.remove('list-tag-open');
})

navThreeOpen.addEventListener("mouseover", () => {
  navThree.classList.remove('list-tag')
  navThree.classList.add('list-tag-open');
})



navThreeOpen.addEventListener("mouseout", () => {
  navThree.classList.add('list-tag')
  navThree.classList.remove('list-tag-open');
})

navFourOpen.addEventListener("mouseover", () => {
  navFour.classList.remove('list-tag')
  navFour.classList.add('list-tag-open');
})



navFourOpen.addEventListener("mouseout", () => {
  navFour.classList.add('list-tag')
  navFour.classList.remove('list-tag-open');
})

navFiveOpen.addEventListener("mouseover", () => {
  navFive.classList.remove('list-tag')
  navFive.classList.add('list-tag-open');

})



navFiveOpen.addEventListener("mouseout", () => {
  navFive.classList.add('list-tag')
  navFive.classList.remove('list-tag-open');
})

navSixOpen.addEventListener("mouseover", () => {
  navSix.classList.remove('list-tag')
  navSix.classList.add('list-tag-open');
})



navSixOpen.addEventListener("mouseout", () => {
  navSix.classList.add('list-tag')
  navSix.classList.remove('list-tag-open');
})



openHome.addEventListener("click", () => {
  dropHome.classList.remove('navs-list-dropdown');

})



openHome.addEventListener("mouseout", () => {
  dropHome.classList.add('navs-list-dropdown');
  navOpen.classList.remove('list-tag-open');

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

openFour.addEventListener("mouseover", () => {
  dropFour.classList.remove('navs-list-dropdown');
})

openFour.addEventListener("mouseout", () => {
  dropFour.classList.add('navs-list-dropdown');
})

openFive.addEventListener("mouseover", () => {
  dropFive.classList.remove('navs-list-dropdown');
})

openFive.addEventListener("mouseout", () => {
  dropFive.classList.add('navs-list-dropdown');
})

openSix.addEventListener("mouseover", () => {
  dropSix.classList.remove('navs-list-dropdown');
})

openSix.addEventListener("mouseout", () => {
  dropSix.classList.add('navs-list-dropdown');
})

const icon = document.querySelector('.fa.fa-bars');

const mediaOpen = document.querySelectorAll(".navs-list-item");

const navItem = document.querySelectorAll(".list-tag");


icon.addEventListener("click", () => {
for (var i = 0; i < mediaOpen.length; i++) {
  mediaOpen[i].classList.toggle('navs-list-item');
}

for (var i = 0; i < navItem.length; i++) {
  // navItem[i].classList.remove('list-tag');
  navItem[i].classList.remove('nav-list-dropdown');

  // navItem[i].classList.add('list-tag-media');

}
})
