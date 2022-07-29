const mobileNav = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

mobileNav.addEventListener('click',()=>{
  // primaryNav.classList.toggle('opened');
  primaryNav.toggleAttribute('data-visible');

})