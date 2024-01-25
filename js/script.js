document.addEventListener('DOMContentLoaded', () => {

  // faq
  const faqItems = document.querySelectorAll('.faq__item')

  faqItems.forEach(item => {
    item.querySelector('.faq__item__header').addEventListener('click', () => {
      item.classList.toggle('faq__item--active')
    })
  })

})