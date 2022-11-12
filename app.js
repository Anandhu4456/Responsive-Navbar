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

// Form Validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

// Show Error Message

function showError(input,message){
     const formValidation =input.parentElement;
     formValidation.className = 'form-validation error';
}