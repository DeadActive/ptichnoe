var map = L.map('map').setView([55.5, 37.2], 13)

$.getJSON('/poly.geojson', data => {
    var geo = L.geoJson(data).addTo(map)
})

L.marker(new L.latLng([55.5207, 37.2216]))
    .bindTooltip(
        '<h3>Стадион "Десна"</h3><img class="preview" src="https://avatars.mds.yandex.net/get-altay/2960979/2a000001748c990267ba21a416e49b517463/XXL">')
        .addTo(map)

L.marker(new L.latLng([55.5218, 37.2118]))
    .bindTooltip(
        '<h3>Школа 1391</h3><img class="preview" src="http://photos.wikimapia.org/p/00/05/05/19/82_big.jpg">')
        .addTo(map)

L.marker(new L.latLng([55.5216, 37.2168]))
    .bindTooltip(
        '<h3>Дом культуры</h3><img class="preview" src="https://avatars.mds.yandex.net/get-altay/1637232/2a00000169baf535c87e5069ad4b8f4112bb/XXXL">')
        .addTo(map)

L.marker(new L.latLng([55.5219, 37.2203]))
    .bindTooltip(
        '<h3>Дикси</h3><img class="preview" src="https://img.kvartus.ru/server/php/files/base_kvartus/object/346/3461328/base_kvartus_object_346_3461328_v8KJ1RjYMVcSwNxRMvQMSp9wGhBNEpw0n6zfNI3qu68QJwxmSe.jpeg">')
        .addTo(map)

L.marker(new L.latLng([55.5215, 37.2209]))
    .bindTooltip(
        '<h3>Мои документы</h3><img class="preview" src="https://ideputat.er.ru/sites/default/files/styles/page_width/public/deputy/news/24882/dnyiwbkzuh0.jpg?itok=uWPoy7LS">')
        .addTo(map)

L.marker(new L.latLng([55.5206, 37.2161]))
    .bindTooltip(
        '<h3>ТЦ Горчаково</h3><img class="preview" src="https://bazametrov.ru/uploads/objects/5417404/5417404.jpg">')
        .addTo(map)

L.marker(new L.latLng([55.5283, 37.2190]))
    .bindTooltip(
        '<h3>Дикси</h3><img class="preview" src="https://avatars.mds.yandex.net/get-altay/235931/2a0000015f52fa39d4506e6a6a2a80935786/XXXL">')
        .addTo(map)

L.marker(new L.latLng([55.5239, 37.2154]))
    .bindTooltip(
        '<h3>Красное и болое</h3><img class="preview" src="https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5d82a3b0e4fff000ad41f8d9_5d82b04a80879d00ae0ef8c6/scale_1200">')
        .addTo(map)

L.marker(new L.latLng([55.5216, 37.2187]))
    .bindTooltip(
        '<h3>Детсад Горчаково</h3><img class="preview" src="https://farm5.staticflickr.com/4681/38527896015_e7d6735feb_h.jpg">')
        .addTo(map)

L.marker(new L.latLng([55.5176, 37.2214]))
    .bindTooltip(
        '<h3>Эксперементальный завод</h3><img class="preview" src="http://photos.wikimapia.org/p/00/05/80/61/26_big.jpg">')
        .addTo(map)

L.marker(new L.latLng([55.5145, 37.2253]))
    .bindTooltip(
        '<h3>Ресторан-шаурмечная</h3><img class="preview" src="https://avatars.mds.yandex.net/get-altay/5584339/2a0000017da0c7fd18ee3dff2837723b4150/XXXL">')
        .addTo(map)

L.marker(new L.latLng([55.5296, 37.1968]))
    .bindTooltip(
        '<h3>Отель Империал</h3><img class="preview" src="https://www.imperialhotel.ru/upload/resize_cache/iblock/bb0/1920_1920_140cd750bba9870f18aada2478b24840a/fgal2.jpg">')
        .addTo(map)

L.marker(new L.latLng([55.5165, 37.2270]))
    .bindTooltip(
        '<h3>Детсад</h3><img class="preview" src="https://www.moscowmap.ru/_public/images4sqr/79/79264.jpg">')
        .addTo(map)

L.marker(new L.latLng([55.5187, 37.2248]))
    .bindTooltip(
        '<h3>Амбулатория</h3><img class="preview" src="https://farm5.staticflickr.com/4689/38527893565_ff357be89d_h.jpg">')
        .addTo(map)

L.marker(new L.latLng([55.5181, 37.2268]))
    .bindTooltip(
        '<h3>Контора ФГУ ППЗ Птичное</h3><img class="preview" src="https://newokruga.ru/wp-content/uploads/sites/13/2018/06/0JDNYcPVmUw.jpg">')
        .addTo(map)