// FAQ
const faqs = document.querySelectorAll(".faq-card");
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
});
//

// MENU BURGER
const menuBurger = document.querySelector(".menu-burger");
const burger = document.querySelector(".navigation-burger");
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menuBurger.classList.toggle('active')
})
//
