window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#form-search__btn').addEventListener('click', function () {
      document.querySelector('#header').classList.add('header_search-active')
  })
  document.querySelector('#form-search__btn_closed').addEventListener('click', function () {
    document.querySelector('#header').classList.remove('header_search-active')
  })
})

$(document).mouseup(function (e){
  var search = $("#header__search");
  if (!search.is(e.target)
      && search.has(e.target).length === 0) {
        document.querySelector('#header').classList.remove('header_search-active');
  }
});
