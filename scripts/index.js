const page = document.querySelector('.page');
const headerNavigation = document.querySelector('.header__navigation');
const headerPoint = document.querySelectorAll('.header__point');
const intro = document.querySelector('.intro');
const introParagraph = document.querySelector('.intro__paragraph');
const introBrand = document.querySelector('.intro__brand');
const surface = document.querySelector('.surface');
const surfaceOccupation = document.querySelector('.surface__author-occupation');
const surfaceInfo = document.querySelector('.surface-info');
const sliderControls = document.querySelectorAll('.slider__control');
const bikes = document.querySelector('.bikes');
const prevBtn = document.querySelector('.slider__control[data-slide = "prev"]');
const nextBtn = document.querySelector('.slider__control[data-slide = "next"]');
const trainings = document.querySelector('.trainings');
const trainingsText = document.querySelector('.trainings__text');
const trainingsLinks = document.querySelectorAll('.trainings__link');
const footerTabs = document.querySelector('.footer__tabs');
const bikesMobile = document.querySelector('.bikes-mobile');
const mobileCards = document.querySelectorAll('.bikes-mobile__card');
const popupTabs = document.querySelector('.popup__tabs');

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

const footer = document.querySelector('.footer');
const emailForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');
const formBtn = document.querySelector('.footer__form-btn');

const lightModeDesktop = document.querySelector('#light');
const darkModeDesktop = document.querySelector('#dark');
const lightModePopup = document.querySelector('#mLight');
const darkModePopup = document.querySelector('#mDark');

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

window.addEventListener('resize', () => {
  if (window.innerWidth < 889) {
    popup?.classList.remove('popup_active');
    document.body.classList.remove('lock');
    iconMenu.classList.remove('header__button_active');
  }
})

// мягкий скролл при нажатии на меню в шапке
menuLinks?.forEach(menuLink => {
  menuLink?.addEventListener('click', smoothScroll);
});

//мягкий скролл при нажатии на меню в модальном окне
popupLinks.forEach(popupLink => {
  popupLink?.addEventListener('click', smoothScroll);
});

// При выборе "шоссе" показываем соответствующие карточки с велосипедами 

highwayBtn?.addEventListener('click', () => {
  attributeSet(highwayImage, highwayText, highwayLink);
  removeActiveClass();
  addClass(highwayBtn, 'bikes__btn_active');
})

// При выборе "грэвел" показываем соответствующие карточки с велосипедами

gravelBtn?.addEventListener('click', () => {
  attributeSet(gravelImage, gravelText, gravelLink);
  removeActiveClass();
  addClass(gravelBtn, 'bikes__btn_active');
})

// При выборе "ТТ" показываем соответствующие карточки с велосипедами

triatlonBtn?.addEventListener('click', () => {
  attributeSet(triatlonImage, triatlonText, triatlonLink);
  removeActiveClass();
  addClass(triatlonBtn, 'bikes__btn_active');
})

// настройка карточек в мобильной версии секции 

surfaceType?.addEventListener('change', () => {
  if (surfaceType.value == 'highway') {
    mobileCardsAttributeSet(highwayImage, highwayText, highwayLink);
  } else if (surfaceType.value == 'gravel') {
    mobileCardsAttributeSet(gravelImage, gravelText, gravelLink);
  } else if (surfaceType.value == 'triatlon') {
    mobileCardsAttributeSet(triatlonImage, triatlonText, triatlonLink);
  }
})

// Настраиваем реагирование кнопки "ок" на ввод данных в input

footerInput?.addEventListener('input', () => {
  if (footerInput.value.length > 0) {
    formBtn.classList.add('footer__form-btn_active');
  } else if (footerInput.value.length < 1) {
    formBtn.classList.remove('footer__form-btn_active');
  }
})

// После отправки формы убираем кнопку "ок" и показываем "круто!"

emailForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  footerInput.value = 'Круто!'
  formBtn.classList.remove('footer__form-btn_active');
  setTimeout(() => {
    footerInput.value = '';
  }, 3000)
})

//переключение на темную тему

darkModeDesktop?.addEventListener('change', () => {
  dark();
  darkModePopup.checked = true;
})

// Переключение на светлую тему

lightModeDesktop.addEventListener('change', () => {
  light();
  lightModePopup.checked = true;
})

lightModePopup.addEventListener('change', () => {
  light();
  lightModeDesktop.checked = true;
})

darkModePopup.addEventListener('change', () => {
  dark();
  darkModeDesktop.checked = true;
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
 * функция удаляет класс нужному элементу
 * @param {HTMLElement} element 
 * @param {string} className 
 */
function removeClass(element, className) {
  element.classList.remove(className);
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
function smoothScroll(e) {
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

/**
 * 
 * @param {string} color 
 * @param  {...HTMLElement} element 
 */
function setBgc(color, element) {
  element.style.backgroundColor = color;
}

function setColor(color, element) {
  element.style.color = color;
}

function light() {
  setBgc('#f4f4f4', page);
  setBgc('#f4f4f4', headerNavigation);
  setBgc("#fff", footerTabs);
  setBgc('#fff', popupTabs);

  headerPoint.forEach(element => {
    setColor('#151515', element);
  });

  setColor('#222', introParagraph);
  setColor('#151515', introBrand);
  setColor('#222', surfaceOccupation);
  setColor('#151515', trainingsText);

  removeClass(iconMenu, 'header__button_dark');
  removeClass(intro, 'intro__dark-mode');
  removeClass(surface, 'surface__dark-mode');
  removeClass(surfaceInfo, 'surface-info__dark-mode');

  sliderControls.forEach(element => {
    removeClass(element, 'slider__control_mode_dark');
  })

  removeClass(prevBtn, 'slider__control_mode_dark-left');
  removeClass(nextBtn, 'slider__control_mode_dark-right');
  removeClass(bikes, 'bikes__dark-mode');
  removeClass(trainings, 'trainings__dark-mode');
  removeClass(footer, 'footer__dark-mode');
  removeClass(footerInput, 'footer__input-dark');
  removeClass(formBtn, 'footer__form-btn_mode_dark');

  mobileCards.forEach(element => {
    removeClass(element, 'bikes-mobile__card-dark');
  });

  removeClass(bikesMobile, 'bikes-mobile__dark-mode');

  popupLinks.forEach(element => {
    removeClass(element, 'popup__text-white');
  });

  addClass(prevBtn, 'slider__control_direction_previous');
  addClass(nextBtn, 'slider__control_direction_next');


  cardBtn.forEach(btn => {
    btn.style.setProperty('color', '#222');
    btn.style.setProperty('background-color', '#f4f4f4');
  });

  popup.style.setProperty('background-color', '#f4f4f4');

  trainingsLinks.forEach(link => {
    link.style.setProperty('color', '#151515');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 889) {
      footer.style.backgroundImage = 'url("../../images/footer__star.svg")';
    } else {
      footer.style.backgroundImage = 'none';
    }
  });
}

function dark() {

  [page, headerNavigation, popup].forEach(element => {
    setBgc('#333', element);
  })

  setBgc('#545454', popupTabs);
  setBgc('#545454', footerTabs);

  headerPoint.forEach(element => {
    setColor('#fff', element);
  });

  [introParagraph, introBrand, trainingsText].forEach(element => {
    setColor('#fff', element);
  })

  setColor('#e5e5e5', surfaceOccupation);

  addClass(iconMenu, 'header__button_dark');
  addClass(intro, 'intro__dark-mode');
  addClass(surface, 'surface__dark-mode');
  addClass(surfaceInfo, 'surface-info__dark-mode');
  addClass(prevBtn, 'slider__control_mode_dark-left');
  addClass(nextBtn, 'slider__control_mode_dark-right');
  addClass(trainings, 'trainings__dark-mode');
  addClass(bikes, 'bikes__dark-mode');
  addClass(footer, 'footer__dark-mode');

  sliderControls.forEach(element => {
    addClass(element, 'slider__control_mode_dark');
  })

  addClass(intro, 'intro__dark-mode');
  addClass(surface, 'surface__dark-mode');
  addClass(surfaceInfo, 'surface-info__dark-mode');
  addClass(prevBtn, 'slider__control_mode_dark-left');
  addClass(nextBtn, 'slider__control_mode_dark-right');
  addClass(trainings, 'trainings__dark-mode');
  addClass(bikes, 'bikes__dark-mode');
  addClass(footer, 'footer__dark-mode');
  addClass(footerInput, 'footer__input-dark');
  addClass(formBtn, 'footer__form-btn_mode_dark');
  addClass(bikesMobile, 'bikes-mobile__dark-mode');

  mobileCards.forEach(element => {
    addClass(element, 'bikes-mobile__card-dark');
  });

  popupLinks.forEach(element => {
    addClass(element, 'popup__text-white');
  })

  removeClass(prevBtn, 'slider__control_direction_previous');
  removeClass(nextBtn, 'slider__control_direction_next');

  cardBtn.forEach(btn => {
    btn.style.setProperty('color', '#ffffff');
    btn.style.setProperty('background-color', '#333333');
  });
  trainingsLinks.forEach(link => {
    link.style.setProperty('color', '#fff');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 889) {
      footer.style.backgroundImage = 'url("../../images/footer__star_white.svg")';
    } else {
      footer.style.backgroundImage = 'none';
    }
  });

}
