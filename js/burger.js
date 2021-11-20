window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#header__nav').classList.toggle('burger-menu_active')
  })
})
