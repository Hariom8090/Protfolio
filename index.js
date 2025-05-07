let menuIcon = document.querySelector('#menu-icon');
 let headerbox = document.querySelector('.header-box');

 menuIcon.addEventListener('click', ()=>{
   headerbox.classList.toggle('showdata');
   menuIcon.classList.toggle('fa-xmark');
 })

const typed = new Typed('.multiple-text',{
  strings:['frontend Developer','web Desiger','web development','full-stack'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop: true,
 });
