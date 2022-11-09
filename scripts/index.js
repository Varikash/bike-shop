const cards = document.querySelectorAll('.bikes__card');
const cardImage = document.querySelectorAll('.bikes__card-image');
const cardText = document.querySelectorAll('.bikes__text');
const cardLink = document.querySelectorAll('.bikes__link');
const cardBtn = document.querySelectorAll('.bikes__btn');
const highwayBtn = document.querySelector('#highway');
const gravelBtn = document.querySelector('#gravel');
const triatlonBtn = document.querySelector('#triatlon');

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



highwayBtn.addEventListener('click', () => {
  attributeSet(highwayImage, highwayText, highwayLink);
  removeActiveClass();
  addActiveClass(highwayBtn);
})

gravelBtn.addEventListener('click', () => {
  attributeSet(gravelImage, gravelText, gravelLink);
  removeActiveClass();
  addActiveClass(gravelBtn);
})

triatlonBtn.addEventListener('click', () => {
  attributeSet(triatlonImage, triatlonText, triatlonLink);
  removeActiveClass();
  addActiveClass(triatlonBtn);
})

  
//------------- ФУНКЦИИ ---------------//

/**
 * 
 * @param {string} image 
 * @param {string} text 
 * @param {string} link 
 * @returns устанавливает атрибуты для карточек с велосипедами
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
 * снимает выделение кнопки
 */
function removeActiveClass() {
  cardBtn.forEach((el) => {
    el.classList.remove('bikes__btn_active');
  })
}

/**
 * 
 * @param {HTMLButtonElement} button 
 * Выделяет кнопку при нажатии
 */
function addActiveClass(button) {
  button.classList.add('bikes__btn_active');
}