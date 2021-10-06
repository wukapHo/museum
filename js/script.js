import { openBurger } from './burger.js';
import { setWelcomeSlider } from './welcome-slider.js';
import { setExploreSlider } from './explore-slider.js';
import { setProgressSliders } from './video.js';
import { setPlaylistSlider } from './video.js';
import { setGallery } from './gallery.js';
import { viewTicketsPopup } from './booking-tickets.js';
import { rippleButton } from './booking-tickets.js';

openBurger();
setWelcomeSlider();
setExploreSlider();
setProgressSliders();
setPlaylistSlider();
setGallery();
viewTicketsPopup();
rippleButton();

console.log(`
  + Вёрстка соответствует макету. Ширина экрана 1024px +40

    + Блок header +4
    + Секция Welcome +4
    + Секция Visiting +4
    + Секция Explore +4
    + Секция Video +4
    + Секция Gallery +4
    + Секция Tickets +4
    + Форма покупки билетов +4
    + Секция Contacts +4
    + Блок footer +4

  + Вёрстка соответствует макету. Ширина экрана 768px +38

    + Блок header +4
    +/- Секция Welcome +2
    + Секция Visiting +4
    + Секция Explore +4
    + Секция Video +4
    + Секция Gallery +4
    + Секция Tickets +4
    + Форма покупки билетов +4
    + Секция Contacts +4
    + Блок footer +4

  + Вёрстка соответствует макету. Ширина экрана 420px +38

    + Блок header +4
    +/- Секция Welcome +2
    + Секция Visiting +4
    + Секция Explore +4
    + Секция Video +4
    + Секция Gallery +4
    + Секция Tickets +4
    + Форма покупки билетов +4
    + Секция Contacts +4
    + Блок footer +4

  + Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6

  + Совмещается адаптивная и респонсивная (резиновая) вёрстка +9
    При изменении ширины экрана плавно изменяются размеры:

    + слайдера в секции Welcome +2
    - слайдера сравнения изображений в секции Explore +0
    +/- кастомного видеоплеера в секции Video +1
    +/- слайдера в секции Video +1
    +/- YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого +1
    + галереи изображений и изображений в ней +2
    + карты +2

  + На ширине экрана 1024рх и меньше реализовано адаптивное меню +12

    + при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку +2
    + ссылки в меню работают, обеспечивая плавную прокрутку по якорям +2
    + при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается +2
    + вёрстка меню соответствует макету на всех проверяемых разрешениях +6

  - Оптимизация скорости загрузки страницы +0
    Оптимизация скорости загрузки страницы определяется при помощи сервиса https://developers.google.com/speed/pagespeed/insights/. Результат проверки скорости сайта для мобильных устройств:

    0 to 49 (red): Poor - не выполнено, 0 баллов
    50 to 89 (orange): Needs Improvement - частично выполнено +4
    90 to 100 (green): Good - выполнено полностью +8

  Итого: 143/150
`);
