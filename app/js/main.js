// Установка title, для wp не понадобиться
if (document.location.pathname === '/') { document.title = 'Главная' };
if (document.location.pathname === '/404.html') { document.title = 'Страница не найдена' };
if (document.location.pathname === '/terms-of-trade.html') { document.title = 'Условия торговли' };
if (document.location.pathname === '/platform.html') { document.title = 'Торговая платформа' };
if (document.location.pathname === '/analytics.html') { document.title = 'Аналитика рынка' };
if (document.location.pathname === '/news.html') { document.title = 'Новости рынка' };
if (document.location.pathname === '/forecasts.html') { document.title = 'Прогнозы рынка' };
if (document.location.pathname === '/currencies.html') { document.title = 'Валюты' };
if (document.location.pathname === '/cryptocurrencies.html') { document.title = 'Криптовалюты' };
if (document.location.pathname === '/stocks.html') { document.title = 'Акции' };
if (document.location.pathname === '/indexes.html') { document.title = 'Индексы' };
if (document.location.pathname === '/about.html') { document.title = 'О нас' };
if (document.location.pathname === '/contacts.html') { document.title = 'Контакты' };
if (document.location.pathname === '/calendar.html') { document.title = 'Экономический календарь' };
if (document.location.pathname === '/conditions.html') { document.title = 'Торговые условия' };
if (document.location.pathname === '/documents.html') { document.title = 'Документы' };
if (document.location.pathname === '/quotes.html') { document.title = 'Онлайн котировки' };
if (document.location.pathname === '/raw-material.html') { document.title = 'Сырье' };
if (document.location.pathname === '/review.html') { document.title = 'Обзор рынка' };
if (document.location.pathname === '/training.html') { document.title = 'Обучение трейдингу' };

// появление хедера при скролле
let body = document.querySelector("body");
let header = document.querySelector(".header");

window.onscroll = function () {
    if (pageYOffset > 50) {
        header.classList.add("scrolled");
        body.style = "margin-top: 100px"
    } else {
        header.classList.remove("scrolled");
        body.style = "margin: 0"
    }
}