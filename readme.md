## [POST] devices/add

>Добавление платы

```
{
    gid: 'ID конструкции',
    ip: 'ip адресс платы'
}
```

## [GET] devices/check&ip

>Проверка связи с платой

```
{
    ip: 'ip адресс платы'
}
```

## [GET] devices

>Список плат

Ответ:
```
{
    id: Number,
    city: String,
    ctType: String,
    gid: Number,
    lastOnline: Date,
    pk: Number,
    cam: Number,
    wifi: Number,
    elStatus: [
        Boolean,
        Boolean,
        Boolean
    ],
}
```

Params:
1. page - страница
2. limit - кол-во элементов на странице
3. sortBy - сортировка
4. filterBy - фильтр (JSON)

Фильтры:
1. city - город
2. gid - id конструкции
3. id - id платы
4. lastOnline - дата последнего выхода на связь, массив [startDate, endDate]
5. pk - статус пк, больше, меньше, равно
6. cam - статус камеры
7. wifi - статус wifi
8. el - статус электричества

## [GET] devices/count

> Общее кол-во плат

## [GET] devices/alert

> Список проблемных плат

Все пагинация и сортировка из devices

## [GET] devices/_id

> Детализация по конкретной плате

Ответ:

```
{
    id: Number,
    city: String,
    ctType: String,
    gid: Number,
    lastOnline: Date,
    pk: Number,
    cam: Number,
    wifi: Number,
    elStatus: [
        Boolean,
        Boolean,
        Boolean
    ],
    firmware: String,
    camImageUrl: String,
    desktopImageUrl: String,
    connectionUrl: String
}
```

## [GET] constructions

> Список конструкций

Пагинация и сортировка

## [GET] constructions/count

> Общее кол-во конструкций
