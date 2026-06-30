// admin_script.js - Admin panel UI logic and actions

document.addEventListener('DOMContentLoaded', () => {
   const userBtn = document.querySelector('#user-btn');
   const accountBox = document.querySelector('.header .account-box');
   const menuBtn = document.querySelector('#menu-btn');
   const navbar = document.querySelector('.header .navbar');

   if (userBtn && accountBox) {
      userBtn.onclick = () => {
         accountBox.classList.toggle('active');
         if (navbar) navbar.classList.remove('active');
      };
   }

   if (menuBtn && navbar) {
      menuBtn.onclick = () => {
         navbar.classList.toggle('active');
         if (accountBox) accountBox.classList.remove('active');
      };
   }

   window.onscroll = () => {
      if (accountBox) accountBox.classList.remove('active');
      if (navbar) navbar.classList.remove('active');
   };

   // Inject Admin Account Details into header
   const admin = getCurrentUser();
   if (admin && admin.user_type === 'admin') {
      if (accountBox) {
         const nameSpan = accountBox.querySelector('p:nth-child(1) span');
         const emailSpan = accountBox.querySelector('p:nth-child(2) span');
         if (nameSpan) nameSpan.textContent = admin.name;
         if (emailSpan) emailSpan.textContent = admin.email;
      }
   }
});
