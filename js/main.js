

const shoppingcard = document.querySelector(".button-white");
const modal = document.querySelector('.modal');
const krest = document.querySelector('.modal__header_close');


function toggleModal() {
  modal.classList.toggle('active');
}
// toggleModal()
shoppingcard.addEventListener("click", toggleModal);
krest.addEventListener('click', toggleModal);

new WOW().init();