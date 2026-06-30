// script.js - General customer-facing UI logic and actions

document.addEventListener('DOMContentLoaded', () => {
   const userBtn = document.querySelector('#user-btn');
   const userBox = document.querySelector('.header .header-2 .user-box');
   const menuBtn = document.querySelector('#menu-btn');
   const navbar = document.querySelector('.header .header-2 .navbar');

   if (userBtn && userBox) {
      userBtn.onclick = () => {
         userBox.classList.toggle('active');
         if (navbar) navbar.classList.remove('active');
      };
   }

   if (menuBtn && navbar) {
      menuBtn.onclick = () => {
         navbar.classList.toggle('active');
         if (userBox) userBox.classList.remove('active');
      };
   }

   window.onscroll = () => {
      if (userBox) userBox.classList.remove('active');
      if (navbar) navbar.classList.remove('active');
   };

   // Update Header details
   if (typeof updateHeaderNav === 'function') {
      updateHeaderNav();
   }
});
