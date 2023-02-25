// loader на сайте
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('hide');
});


// Замена левого рукава
// Получаем ссылки на все маленькие изображения
var baseOfJacet = document.querySelectorAll(".baseOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < baseOfJacet.length; i++) {
    baseOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var smallImagePath = this.src;

    // Обновляем большое изображение
    var bigImage = document.getElementById("mainBaseOfJacet");
    bigImage.src = smallImagePath;
  });
}


// Замена воротника
// Получаем ссылки на все маленькие изображения
var headerOfJacet = document.querySelectorAll(".headerOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < headerOfJacet.length; i++) {
    headerOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var headerOfJacetsmallImagePath = this.src;

    // Обновляем большое изображение
    var headerOfJacetImage = document.getElementById("headerOfJacet");
    headerOfJacetImage.src = headerOfJacetsmallImagePath;
  });
}


// Замена рукавов
// Получаем ссылки на все маленькие изображения
var handsOfJacet = document.querySelectorAll(".handsOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < handsOfJacet.length; i++) {
    handsOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var handsOfJacetsmallImagePath = this.src;

    // Обновляем большое изображение
    var headerOfJacetImage = document.querySelectorAll(".handsOfJacet");
    for (var a = 0; a < headerOfJacetImage.length; a++){
        headerOfJacetImage[a].src = handsOfJacetsmallImagePath;
    }
  });
}