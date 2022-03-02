const sliderPicures = document.querySelectorAll('.slider__picture');
const personName = document.querySelector('.slider__person-name');
const personProfession = document.querySelector('.slider__person-profession');
const pointsContainer = document.querySelectorAll('.slider__point');

const regButtonHeader = document.querySelector('.header__register-button');
const regButtonFooter = document.querySelector('.footer__register-button');
const submitButton = document.querySelector('.form__register-button');
const popupReg = document.querySelector('.popup');
const formReg = document.querySelector('.form');

function openPopup(popup) {
  popup.classList.add('popup_status_active');
}

function closePopup(popup) {
  popup.classList.remove('popup_status_active');
}

regButtonHeader.addEventListener('click', function (evt) {
  openPopup(popupReg);
});

regButtonFooter.addEventListener('click', function (evt) {
  openPopup(popupReg);
});

submitButton.addEventListener('click', function (evt) {
  closePopup(popupReg);
});

formReg.addEventListener('submit', function (evt) {
  evt.preventDefault();
  closePopup(popupReg);
});

pointsContainer[0].addEventListener('click', function (evt) {

  if (!pointsContainer[0].classList.contains('slider__point_status_active')) {
    pointsContainer[0].classList.add('slider__point_status_active');
  }

  pointsContainer[1].classList.remove('slider__point_status_active');
  pointsContainer[2].classList.remove('slider__point_status_active');
  sliderPicures[0].src = './images/andre.png';
  sliderPicures[0].alt = 'Фото Андрея';
  personName.textContent = 'АНДРЕЙ';
  personProfession.textContent = 'Шахматист, писатель.';
});

pointsContainer[1].addEventListener('click', function (evt) {

  if (!pointsContainer[1].classList.contains('slider__point_status_active')) {
    pointsContainer[1].classList.add('slider__point_status_active');
  }

  pointsContainer[0].classList.remove('slider__point_status_active');
  pointsContainer[2].classList.remove('slider__point_status_active');
  sliderPicures[0].src = './images/nikita.png';
  sliderPicures[0].alt = 'Фото Никиты';
  personName.textContent = 'НИКИТА';
  personProfession.textContent = 'Шахматист, кулинар.';
});

pointsContainer[2].addEventListener('click', function (evt) {

  if (!pointsContainer[2].classList.contains('slider__point_status_active')) {
    pointsContainer[2].classList.add('slider__point_status_active');
  }

  pointsContainer[0].classList.remove('slider__point_status_active');
  pointsContainer[1].classList.remove('slider__point_status_active');
  sliderPicures[0].src = './images/alex.png';
  sliderPicures[0].alt = 'Фото Алексея';
  personName.textContent = 'АЛЕКСЕЙ';
  personProfession.textContent = 'Шахматист, геймер.';
});

sliderPicures[0].addEventListener('click', function (evt) {
  if (personName.textContent == 'АНДРЕЙ') {
    sliderPicures[0].src = './images/nikita.png';
    sliderPicures[0].alt = 'Фото Никиты';
    personName.textContent = 'НИКИТА';
    personProfession.textContent = 'Шахматист, кулинар.';
    pointsContainer[0].classList.remove('slider__point_status_active');
    pointsContainer[1].classList.add('slider__point_status_active');
    return;
  }

  if (personName.textContent == 'НИКИТА') {
    sliderPicures[0].src = './images/alex.png';
    sliderPicures[0].alt = 'Фото Алексея';
    personName.textContent = 'АЛЕКСЕЙ';
    personProfession.textContent = 'Шахматист, геймер.';
    pointsContainer[1].classList.remove('slider__point_status_active');
    pointsContainer[2].classList.add('slider__point_status_active');
    return;
  }

  if (personName.textContent == 'АЛЕКСЕЙ') {
    sliderPicures[0].src = './images/andre.png';
    sliderPicures[0].alt = 'Фото Андрея';
    personName.textContent = 'АНДРЕЙ';
    personProfession.textContent = 'Шахматист, писатель.';
    pointsContainer[2].classList.remove('slider__point_status_active');
    pointsContainer[0].classList.add('slider__point_status_active');
    return;
  }
});

pointsContainer[3].addEventListener('click', function (evt) {

  if (!pointsContainer[3].classList.contains('slider__point_status_active')) {
    pointsContainer[3].classList.add('slider__point_status_active');
  }

  pointsContainer[4].classList.remove('slider__point_status_active');
  pointsContainer[5].classList.remove('slider__point_status_active');
  sliderPicures[1].src = './images/b1.png';
  sliderPicures[1].alt = 'Игроки за шахматной доской';
});

pointsContainer[4].addEventListener('click', function (evt) {

  if (!pointsContainer[4].classList.contains('slider__point_status_active')) {
    pointsContainer[4].classList.add('slider__point_status_active');
  }

  pointsContainer[3].classList.remove('slider__point_status_active');
  pointsContainer[5].classList.remove('slider__point_status_active');
  sliderPicures[1].src = './images/b2.png';
  sliderPicures[1].alt = 'Шахматная доска вблизи';

});

pointsContainer[5].addEventListener('click', function (evt) {

  if (!pointsContainer[5].classList.contains('slider__point_status_active')) {
    pointsContainer[5].classList.add('slider__point_status_active');
  }

  pointsContainer[3].classList.remove('slider__point_status_active');
  pointsContainer[4].classList.remove('slider__point_status_active');
  sliderPicures[1].src = './images/b3.png';
  sliderPicures[1].alt = 'Игроки нажимают на шахматные часы';

});

sliderPicures[1].addEventListener('click', function (evt) {
  if (sliderPicures[1].alt == 'Игроки за шахматной доской') {
    sliderPicures[1].src = './images/b2.png';
    sliderPicures[1].alt = 'Шахматная доска вблизи';
    pointsContainer[3].classList.remove('slider__point_status_active');
    pointsContainer[4].classList.add('slider__point_status_active');
    return;
  }

  if (sliderPicures[1].alt == 'Шахматная доска вблизи') {
    sliderPicures[1].src = './images/b3.png';
    sliderPicures[1].alt = 'Игроки нажимают на шахматные часы';

    pointsContainer[4].classList.remove('slider__point_status_active');
    pointsContainer[5].classList.add('slider__point_status_active');
    return;
  }

  if (sliderPicures[1].alt == 'Игроки нажимают на шахматные часы') {
    sliderPicures[1].src = './images/b1.png';
    sliderPicures[1].alt = 'Игроки за шахматной доской';

    pointsContainer[5].classList.remove('slider__point_status_active');
    pointsContainer[3].classList.add('slider__point_status_active');
    return;
  }
});
