const menu = document.querySelector('#mobile-menu');
const menuList = document.querySelector('.nav-menu');


menu.addEventListener('click',() =>{
     menu.classList.toggle('is-active');
     menuList.classList.toggle('active');   
});
// modal items

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

// Click Event

openBtn.addEventListener('click',()=> {
     modal.style.display ='block';
});

closeBtn.addEventListener('click',()=>{
     modal.style.display = 'none';
});

window.addEventListener('click',(e) =>{
     if( e.target ===modal) {
          modal.style.display ='none';
     }
});