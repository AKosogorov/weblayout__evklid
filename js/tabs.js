document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      document.querySelector('.tabs__btn_active').classList.remove('tabs__btn_active')
      const path = event.currentTarget.dataset.path
      tabsBtn.classList.add('tabs__btn_active');
      document.querySelectorAll('.section-working__tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('section-working__tab-content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-working__tab-content_active')
    })
  })
})
