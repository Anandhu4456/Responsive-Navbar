const menu = document.querySelector('#mobile-menu');
const menuList = document.querySelector('.nav-menu');


menu.addEventListener('click',() =>{
     menu.classList.toggle('is-active');
     menuList.classList.toggle('active');   
});