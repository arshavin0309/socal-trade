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
    } else {
        header.classList.remove("scrolled");
    };
};

// кнопка вверх
document.addEventListener('DOMContentLoaded', () => {
    let goTopBtn = document.querySelector('.upButton');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

    function trackScroll() {
        let scrolled = window.pageYOffset;

        if (scrolled > 100) {
            goTopBtn.classList.add('show');
        };
        if (scrolled < 100) {
            goTopBtn.classList.remove('show');
        };
    };

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});

for (let table of document.getElementsByTagName("table")) {
    let tableOverflow = document.createElement("div");
    tableOverflow.className = "table-overflow";
    table.parentElement.replaceChild(tableOverflow, table);
    tableOverflow.appendChild(table);
};

let tableBtn = document.querySelectorAll(".assets-conditions__btn");
let tableTable = document.querySelectorAll(".assets-conditions table");

let tableShow = document.querySelector(".assets-conditions__more");
let tableTr = document.querySelectorAll(".assets-conditions tr");

if (tableShow) {
    tableShow.addEventListener("click", () => {
        if (tableShow.textContent === "Показать еще") {
            for (let i = 0; i < tableTr.length; i++) {
                tableTr[i].classList.add("active");
            }
            tableShow.textContent = "Скрыть";
            tableShow.classList.add("active");
        } else {
            for (let i = 0; i < tableTr.length; i++) {
                tableTr[i].classList.remove("active");
            }
            tableShow.textContent = "Показать еще";
            document.getElementById('table').scrollIntoView({ behavior: 'smooth', block: 'center' });

            tableShow.classList.remove("active");
        };
    });
};

for (let i = 0; i < tableBtn.length; i++) {
    tableBtn[i].addEventListener("click", () => {
        tableShow.textContent = "Показать еще";
        tableShow.classList.remove('active');

        for (let i = 0; i < tableTr.length; i++) {
            tableTr[i].classList.remove("active");
        };

        for (let n = 0; n < tableBtn.length; n++) {
            tableBtn[n].classList.remove("active");
            tableTable[n].classList.remove("active");
        };

        tableBtn[i].classList.add("active");
        tableTable[i].classList.add("active");
    });
};

$(document).ready(function () {
    $('.faq-currencies__list > li > .answer').hide();

    $('.faq-currencies__list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".faq-currencies__list > li.active .answer").slideUp();
            $(".faq-currencies__list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

});

var swiper = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".swiper3", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let headerBurger = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let headerContainer = document.querySelector('.header .container');
let headerMenuItem = document.querySelectorAll('.header .menu > .menu-item');

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    headerContainer.classList.toggle('active');

    for (let n = 0; n < headerMenuItem.length; n++) {
        headerMenuItem[n].classList.remove('active');
    };
});

for (let i = 0; i < headerMenuItem.length; i++) {
    headerMenuItem[i].addEventListener('click', () => {
        for (let n = 0; n < headerMenuItem.length; n++) {
            if (headerMenuItem[n] !== headerMenuItem[i]) {
                headerMenuItem[n].classList.remove('active');
            }
        };

        headerMenuItem[i].classList.toggle('active');
    });
};

// окно с предупреждением о куки
function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options,
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
    }

    let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue
        }
    }

    document.cookie = updatedCookie
}

if (!getCookie('cookies')) {
    document.querySelector('.cookies').style = 'display: flex'
}

document.querySelector('.cookies .btn').addEventListener('click', () => {
    document.querySelector('.cookies').style = 'display: none'
    setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
})