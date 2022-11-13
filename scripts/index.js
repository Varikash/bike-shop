const iconMenu = document.querySelector('.header__button');
const popup = document.querySelector('.popup');

const menuLinks = document.querySelectorAll('.header__point');
const popupLinks = document.querySelectorAll('.popup__text');

const cards = document.querySelectorAll('.bikes__card');
const cardImage = document.querySelectorAll('.bikes__card-image');
const cardText = document.querySelectorAll('.bikes__text');
const cardLink = document.querySelectorAll('.bikes__link');
const cardBtn = document.querySelectorAll('.bikes__btn');
const highwayBtn = document.querySelector('#highway');
const gravelBtn = document.querySelector('#gravel');
const triatlonBtn = document.querySelector('#triatlon');

const surfaceType = document.querySelector('#surface');

const mobileCardsImage = document.querySelectorAll('.bikes-mobile__card-image');
const mobileCardsText = document.querySelectorAll('.bikes-mobile__text');
const mobileCardsLink = document.querySelectorAll('.bikes-mobile__link');

const emailForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');
const formBtn = document.querySelector('.footer__form-btn');

const lightModeDesktop = document.querySelector('#light');
const darkModeDesktop = document.querySelector('#dark');

lightModeDesktop.addEventListener('change', () => {
  document.querySelector('.page').style.backgroundColor ='#f4f4f4';
  document.querySelector('.header__navigation').style.backgroundColor ='#f4f4f4';
  document.querySelectorAll('.header__point').forEach(element => {
    element.style.color = '#151515';
  })
  document.querySelector('.header__button').classList.remove('header__button_dark');
  document.querySelector('.intro').classList.remove('intro__dark-mode');
  document.querySelector('.intro__paragraph').style.color = '#222';
  document.querySelector('.intro__brand').style.color = '#151515';
  document.querySelector('.surface').classList.remove('surface__dark-mode');
  document.querySelector('.surface__author-occupation').style.color = "#222";
  document.querySelector('.surface-info').classList.remove('surface-info__dark-mode');
  document.querySelectorAll('.slider__control').forEach(element => {
    element.classList.remove('slider__control_mode_dark');
  })
  const prevBtn = document.querySelector('.slider__control[data-slide = "prev"]');
  prevBtn.classList.add('slider__control_direction_previous');
  prevBtn.classList.remove('slider__control_mode_dark-left');

  const nextBtn = document.querySelector('.slider__control[data-slide = "next"]');
  nextBtn.classList.add('slider__control_direction_next');
  nextBtn.classList.remove('slider__control_mode_dark-right');

  document.querySelector('.bikes').classList.remove('bikes__dark-mode');
  document.querySelectorAll('.bikes__btn').forEach(btn => {
    btn.style.setProperty('color','#222');
    btn.style.setProperty('background-color','#f4f4f4');
  });
  document.querySelector('.trainings').classList.remove('trainings__dark-mode');
  document.querySelector('.trainings__text').style.color = "#151515";
  document.querySelectorAll('.trainings__link').forEach(link => {
    link.style.setProperty('color', '#151515');
  });
  document.querySelector('.footer').classList.remove('footer__dark-mode');
  document.querySelector('#footerInput').classList.remove('footer__input-dark');
})

darkModeDesktop?.addEventListener('change', () => {
  document.querySelector('.page').style.backgroundColor ='#333333';
  document.querySelector('.header__navigation').style.backgroundColor ='#333333';
  document.querySelectorAll('.header__point').forEach(element => {
    element.style.color = '#fff';
  })
  document.querySelector('.header__button').classList.add('header__button_dark');
  document.querySelector('.intro').classList.add('intro__dark-mode');
  document.querySelector('.intro__paragraph').style.color = '#fff';
  document.querySelector('.intro__brand').style.color = '#fff';
  document.querySelector('.surface').classList.add('surface__dark-mode');
  document.querySelector('.surface__author-occupation').style.color = "#e5e5e5";
  document.querySelector('.surface-info').classList.add('surface-info__dark-mode');
  document.querySelectorAll('.slider__control').forEach(element => {
    element.classList.add('slider__control_mode_dark');
  })
  const prevBtn = document.querySelector('.slider__control[data-slide = "prev"]');
  prevBtn.classList.remove('slider__control_direction_previous');
  prevBtn.classList.add('slider__control_mode_dark-left');

  const nextBtn = document.querySelector('.slider__control[data-slide = "next"]');
  nextBtn.classList.remove('slider__control_direction_next');
  nextBtn.classList.add('slider__control_mode_dark-right');

  document.querySelector('.bikes').classList.add('bikes__dark-mode');
  document.querySelectorAll('.bikes__btn').forEach(btn => {
    btn.style.setProperty('color','#ffffff');
    btn.style.setProperty('background-color','#333333');
  });
  document.querySelector('.trainings').classList.add('trainings__dark-mode');
  document.querySelector('.trainings__text').style.color = "#fff";
  document.querySelectorAll('.trainings__link').forEach(link => {
    link.style.setProperty('color', '#fff');
  });
  document.querySelector('.footer').classList.add('footer__dark-mode');
  document.querySelector('#footerInput').classList.add('footer__input-dark');
})

const highwayImage = [
  './images/highway__caledonia.jpeg',
  './images/highway__systemsix.jpg',
  './images/highway__domane.jpg',
]

const highwayText = [
  'Cervelo Caledonia-5',
  'Cannondale Systemsix Himod',
  'Trek Domane SL-7',
]

const highwayLink = [
  'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',
  'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
  'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
]

const gravelImage = [
  './images/gravel__cervelo.jpeg',
  './images/gravel__diverge.jpg',
  './images/gravel__cannondale.jpg',
];

const gravelText = [
  'Cervelo Aspero GRX 810',
  'Specialized S-Works Diverge',
  'Cannondale Topstone Lefty 3',
]

const gravelLink = [
  'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
  'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
  'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',
]

const triatlonImage = [
  './images/tt__shiv.jpg',
  './images/tt__bmc.jpg',
  './images/tt__cervelo.jpg',
];

const triatlonText = [
  'Specialized S-Works Shiv',
  'BMC Timemachine 01 ONE',
  'Cervelo P-Series',
]

const triatlonLink = [
  'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9',
  'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
  'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q',
]

//навешиваем события при клике на бургер меню

iconMenu?.addEventListener('click', () => {
  iconMenu.classList.toggle('header__button_active');
  popup.classList.toggle('popup_active');
  document.body.classList.toggle('lock');
})

// мягкий скролл при нажатии на меню в шапке
menuLinks?.forEach(menuLink => {
  menuLink?.addEventListener('click', smoothScroll);
});

//мягкий скролл при нажатии на меню в модальном окне
popupLinks.forEach(popupLink =>{
  popupLink?.addEventListener('click', smoothScroll);
});

/* При выборе "шоссе" показываем соответствующие карточки с велосипедами */

highwayBtn?.addEventListener('click', () => {
  attributeSet(highwayImage, highwayText, highwayLink);
  removeActiveClass();
  addClass(highwayBtn, 'bikes__btn_active');
})

/* При выборе "грэвел" показываем соответствующие карточки с велосипедами */

gravelBtn?.addEventListener('click', () => {
  attributeSet(gravelImage, gravelText, gravelLink);
  removeActiveClass();
  addClass(gravelBtn, 'bikes__btn_active');
})

/* При выборе "ТТ" показываем соответствующие карточки с велосипедами */

triatlonBtn?.addEventListener('click', () => {
  attributeSet(triatlonImage, triatlonText, triatlonLink);
  removeActiveClass();
  addClass(triatlonBtn, 'bikes__btn_active');
})

/* настройка карточек в мобильной версии секции */

surfaceType?.addEventListener('change', () => {
  if (surfaceType.value == 'highway') {
    mobileCardsAttributeSet(highwayImage, highwayText, highwayLink);
  } else if (surfaceType.value == 'gravel') {
    mobileCardsAttributeSet(gravelImage, gravelText, gravelLink);
  } else if (surfaceType.value == 'triatlon') {
    mobileCardsAttributeSet(triatlonImage, triatlonText, triatlonLink);
  }
})

/* Настраиваем реагирование кнопки "ок" на ввод данных в input */

footerInput?.addEventListener('input', () => {
  if (footerInput.value.length > 0) {
    formBtn.classList.add('footer__form-btn_active');
  } else if (footerInput.value.length < 1) {
    formBtn.classList.remove('footer__form-btn_active');
  }
})

/* После отправки формы убираем кнопку "ок" и показываем "круто!"*/

emailForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  footerInput.value = 'Круто!'
  formBtn.classList.remove('footer__form-btn_active');
  setTimeout(() => {
    footerInput.value = '';
  }, 3000)
})

//------------- ФУНКЦИИ ---------------//

/**
 * функция добавляет класс нужному элементу
 * @param {HTMLElement} element 
 * @param {string} className 
 */
function addClass(element, className) {
  element.classList.add(className);
}

/**
 * устанавливает атрибуты для карточек с велосипедами
 * @param {string} image 
 * @param {string} text 
 * @param {string} link 
 * @returns 
 */
function attributeSet(image, text, link) {
  for (i = 0; i < cards.length; i++) {
    cardImage[i].setAttribute('src', image[i]);
    cardText[i].innerHTML = text[i];
    cardLink[i].setAttribute('href', link[i]);
  }
  return;
}

/**
 * устанавливает атрибуты для карточек с велосипедами в мобильной версии
 * @param {string} image 
 * @param {string} text 
 * @param {string} link 
 * @returns 
 */
function mobileCardsAttributeSet(image, text, link) {
  for (i = 0; i < cards.length; i++) {
    mobileCardsImage[i].setAttribute('src', image[i]);
    mobileCardsText[i].innerHTML = text[i];
    mobileCardsLink[i].setAttribute('href', link[i]);
  }
  return;
}

/**
 * снимает выделение кнопки
 */
function removeActiveClass() {
  cardBtn.forEach((el) => {
    el.classList.remove('bikes__btn_active');
  })
}

/**
 * Функция мягкого скролла и закрытия модального окна при нажатии на ссылку.
 * @param {HTMLElement} e 
 */
function smoothScroll (e) {
  e.preventDefault();
  const menuLink = e.target;
  console.log(menuLink);
  const gotoBlock = document.querySelector(menuLink.dataset.goto);
  const gotoBlockValue = gotoBlock?.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

  popup.classList.remove('popup_active');
  iconMenu.classList.remove('header__button_active');
  document.body.classList.remove('lock');

  window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth"
  });
};