document.addEventListener("DOMContentLoaded", function () {
  const headerButton = document.querySelector(".header__btn");
  const wrapperSearch = document.querySelector(".search__wrapper");
  const searchClose = document.querySelector(".search-close");

  headerButton.addEventListener("click", function () {
    wrapperSearch.classList.add("search-active");
  });

  searchClose.addEventListener("click", function (e) {
    e.preventDefault();
    wrapperSearch.classList.remove("search-active");
    document.querySelector("input").value = "";
  });
});
