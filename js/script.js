// loader на сайте
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('hide');
});


// Замена основы
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
    var headerOfJacetImage = document.getElementById("handsOfJacet");
    headerOfJacetImage.src = handsOfJacetsmallImagePath;
  });
}


// Замена кармана
// Получаем ссылки на все маленькие изображения
var pocketOfJacet = document.querySelectorAll(".pocketOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < pocketOfJacet.length; i++) {
    pocketOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var pocketOfJacetsmallImagePath = this.src;

    // Обновляем большое изображение
    var headerOfJacetImage = document.getElementById("pocketOfJacet");
    headerOfJacetImage.src = pocketOfJacetsmallImagePath;
  });
}



// Добавление и удаление классов
// получаем все элементы с классом "components__item"
const items = document.querySelectorAll(".components__item");

// перебираем элементы и назначаем обработчик клика на каждый из них
items.forEach((item) => {
  item.addEventListener("click", function() {
    // получаем родительский элемент, содержащий элемент, на который был сделан клик
    const parentFrame = item.closest(".components__frame");
    
    // ищем все элементы внутри родительского элемента, кроме текущего элемента, и удаляем у них классы
    parentFrame.querySelectorAll(".components__item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("components__item-active");
      }
    });
    
    // добавляем класс "components__item-active" текущему элементу
    item.classList.add("components__item-active");
  });
});

