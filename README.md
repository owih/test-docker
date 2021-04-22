# Тестовое задание на основе Docker и Laravel для Frontend разработчика

## Первоначальная настройка

-   Устанавливаем Docker c [официального сайта](https://www.docker.com/products/docker-desktop) и [Docker Compose](https://docs.docker.com/compose/install/)
-   Собираем контейнер командой в папке проекта `docker-compose up -d`
-   Инициализируем сервер
    -   при запущенном контейнере в папке проекта запускаем команду `docker-compose exec app bash`
    -   запускаем сборку `bash ./init.sh`

## Сборка демо проекта

-   при запущенном контейнере в папке проекта запускаем команду `docker-compose exec app bash`
-   собираем js `yarn dev`

## Описание API

| Описание                        | Тип запроса |             Структура |                      Параметры |
| ------------------------------- | :---------: | --------------------: | -----------------------------: |
| Получить все комментарии        |     GET     |      `/api/comments/` |                                |
| Получить конкретный комментарий |     GET     | `/api/comments/${id}` | id - идентификатор комментария |
| Создать комментрай              |    POST     | `/api/comments/${id}` | id - идентификатор комментария |
| Удалить комментарий             |   DELETE    | `/api/comments/${id}` | id - идентификатор комментария |
| Обновить комментарий            |    PATCH    | `/api/comments/${id}` | id - идентификатор комментария |

## Описание записи

`{ name: 'Имя создателя', text: 'Текст комментария', date: 'Дата создания комментраия в строковом формате(выбирается создателем)', }`

## Задание

Создать сайт со списком комментариев.

Функциональные требования:

-   добавление/ удаление комментариев (без перезагрузки страницы)
-   постраничный просмотр комментариев (3 комментария на страницу)

Требование к разработке:

-   использование адаптивной верстки
-   использование js-фреймворка vue
-   загрузка комментариев по ajax
-   использовать vuex и реализовать возможность менять сортировку на клиенте(по дате в обе стороны).

Форма добавления комментария должна располагаться под уже добавленными комментариями.
