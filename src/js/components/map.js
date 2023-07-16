let center = [55.76318697091413, 37.6226961721998];
let point = [55.769968655904016, 37.63859877514647];

function init() {
  let map = new ymaps.Map("map", {
    center,
    zoom: 14,
  });

  let placemark = new ymaps.Placemark(
    point,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/svg/marker.svg",
      iconImageSize: [12, 12],
      iconImageOffset: [0, 0],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);

  placemark.events.add("click", function () {
    document.getElementById("menu").classList.add("open");
  });

  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("menu").classList.remove("open");
  });
}

ymaps.ready(init);
