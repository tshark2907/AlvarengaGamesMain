const banners = document.getElementsByClassName('banner_image');
const products1 = document.querySelector('#products_to_be_moved_1');
const products2 = document.querySelector('#products_to_be_moved_2');
const products3 = document.querySelector('#products_to_be_moved_3');
const products4 = document.querySelector('#products_to_be_moved_4');
const products5 = document.querySelector('#products_to_be_moved_5');
const products6 = document.querySelector('#products_to_be_moved_6');
const products7 = document.querySelector('#products_to_be_moved_7');

const bannerNext = document.querySelector('#banner_next');
const bannerLast = document.querySelector('#banner_back');

const nextProduct1 = document.querySelector('#next_product_1');
const nextProduct2 = document.querySelector('#next_product_2');
const nextProduct3 = document.querySelector('#next_product_3');
const nextProduct4 = document.querySelector('#next_product_4');
const nextProduct5 = document.querySelector('#next_product_5');
const nextProduct6 = document.querySelector('#next_product_6');
const nextProduct7 = document.querySelector('#next_product_7');

const lastProduct1 = document.querySelector('#last_product_1');
const lastProduct2 = document.querySelector('#last_product_2');
const lastProduct3 = document.querySelector('#last_product_3');
const lastProduct4 = document.querySelector('#last_product_4');
const lastProduct5 = document.querySelector('#last_product_5');
const lastProduct6 = document.querySelector('#last_product_6');
const lastProduct7 = document.querySelector('#last_product_7');

let productSize = 200;

let currentItem = 0;
let currentPosition1 = 0;
let currentPosition2 = 0;
let currentPosition3 = 0;
let currentPosition4 = 0;
let currentPosition5 = 0;
let currentPosition6 = 0;
let currentPosition7 = 0;

let intervalId;

function switchBannerFwd() {
  banners[currentItem].style.display = 'none';
  currentItem = (currentItem + 1) % banners.length;
  banners[currentItem].style.display = 'block';
}

function switchBannerRvs() {
  banners[currentItem].style.display = 'none';
  currentItem = (currentItem - 1 + banners.length) % banners.length;
  banners[currentItem].style.display = 'block';
}

nextProduct1.addEventListener('click', () => {
  if (currentPosition1 > -(productSize * (products1.childElementCount - 6))) {
    currentPosition1 -= productSize;
    products1.style.transform = `translateX(${currentPosition1}px)`;
  }
});

nextProduct2.addEventListener('click', () => {
  if (currentPosition2 > -(productSize * (products2.childElementCount - 6))) {
    currentPosition2 -= productSize;
    products2.style.transform = `translateX(${currentPosition2}px)`;
  }
});

nextProduct3.addEventListener('click', () => {
  if (currentPosition3 > -(productSize * (products3.childElementCount - 6))) {
    currentPosition3 -= productSize;
    products3.style.transform = `translateX(${currentPosition3}px)`;
  }
});

nextProduct4.addEventListener('click', () => {
  if (currentPosition4 > -(productSize * (products4.childElementCount - 6))) {
    currentPosition4 -= productSize;
    products4.style.transform = `translateX(${currentPosition4}px)`;
  }
});

nextProduct5.addEventListener('click', () => {
  if (currentPosition5 > -(productSize * (products5.childElementCount - 6))) {
    currentPosition5 -= productSize;
    products5.style.transform = `translateX(${currentPosition5}px)`;
  }
});

nextProduct6.addEventListener('click', () => {
  if (currentPosition6 > -(productSize * (products6.childElementCount - 6))) {
    currentPosition6 -= productSize;
    products6.style.transform = `translateX(${currentPosition6}px)`;
  }
});

nextProduct7.addEventListener('click', () => {
  if (currentPosition7 > -(productSize * (products7.childElementCount - 6))) {
    currentPosition7 -= productSize;
    products7.style.transform = `translateX(${currentPosition7}px)`;
  }
});

lastProduct1.addEventListener('click', () => {
  if (currentPosition1 < 0) {
    currentPosition1 += productSize;
    products1.style.transform = `translateX(${currentPosition1}px)`;
  }
});

lastProduct2.addEventListener('click', () => {
  if (currentPosition2 < 0) {
    currentPosition2 += productSize;
    products2.style.transform = `translateX(${currentPosition2}px)`;
  }
});

lastProduct3.addEventListener('click', () => {
  if (currentPosition3 < 0) {
    currentPosition3 += productSize;
    products3.style.transform = `translateX(${currentPosition3}px)`;
  }
});

lastProduct4.addEventListener('click', () => {
  if (currentPosition4 < 0) {
    currentPosition4 += productSize;
    products4.style.transform = `translateX(${currentPosition4}px)`;
  }
});

lastProduct5.addEventListener('click', () => {
  if (currentPosition5 < 0) {
    currentPosition5 += productSize;
    products5.style.transform = `translateX(${currentPosition5}px)`;
  }
});

lastProduct6.addEventListener('click', () => {
  if (currentPosition6 < 0) {
    currentPosition6 += productSize;
    products6.style.transform = `translateX(${currentPosition6}px)`;
  }
});

lastProduct7.addEventListener('click', () => {
  if (currentPosition7 < 0) {
    currentPosition7 += productSize;
    products7.style.transform = `translateX(${currentPosition7}px)`;
  }
});

bannerNext.addEventListener('click', () => {
  switchBannerFwd();
});

bannerLast.addEventListener('click', () => {
  switchBannerRvs();
});

setInterval(switchBannerFwd,5000);