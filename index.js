const productsToBeMoved = [
document.querySelector('#products_to_be_moved_1'),
document.querySelector('#products_to_be_moved_2'),
document.querySelector('#products_to_be_moved_3'),
document.querySelector('#products_to_be_moved_4'),
document.querySelector('#products_to_be_moved_5'),
document.querySelector('#products_to_be_moved_6'),
document.querySelector('#products_to_be_moved_7')
];

const nextProducts = [
document.querySelector('#next_product_1'),
document.querySelector('#next_product_2'),
document.querySelector('#next_product_3'),
document.querySelector('#next_product_4'),
document.querySelector('#next_product_5'),
document.querySelector('#next_product_6'),
document.querySelector('#next_product_7')
];

const lastProducts = [
document.querySelector('#last_product_1'),
document.querySelector('#last_product_2'),
document.querySelector('#last_product_3'),
document.querySelector('#last_product_4'),
document.querySelector('#last_product_5'),
document.querySelector('#last_product_6'),
document.querySelector('#last_product_7')
];

const banners = document.querySelectorAll('.banner_image');

let positions = [0,0,0,0,0,0,0,0,0];

const bannerNext = document.querySelector('#banner_next');
const bannerLast = document.querySelector('#banner_back');
const popup = document.querySelector('#popup');
const popupExit = document.querySelector('.popup_exit');
const popupLeftButton = document.querySelector('#left_button_popup');
const popupRightButton = document.querySelector('#right_button_popup');
const popupImages = document.querySelector('.popup_image_holder');
const products = document.querySelectorAll('.product');

let productSize = 100;

let intervalId;

products.forEach((product) => {
  product.addEventListener('click', () => {
    popup.style.display = 'block';
  });
});

if (popupExit) {
  popupExit.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

function switchBannerFwd() {
  banners[positions[8]].style.display = 'none';
  currentItem = (positions[8] + 1) % banners.length;
  banners[currentItem].style.display = 'block';
  positions[8] = currentItem;
}

function switchBannerRvs() {
  banners[positions[8]].style.display = 'none';
  const currentItem = (positions[8] - 1 + banners.length) % banners.length;
  banners[currentItem].style.display = 'block';
  positions[8] = currentItem;
}

nextProducts.forEach((product) => {
  product.addEventListener('click', function() {
    let productIndex = Array.from(nextProducts).indexOf(this);
    if (positions[productIndex] > -(productSize * (products.length - 6))){
      console.log(`Botão proximo produto ${productIndex} clicado`)
      positions[productIndex] -= productSize;
      productsToBeMoved[productIndex].style.transform = `translateX(-${productSize}px)`;
  }})});

lastProducts.forEach((product) => {
  product.addEventListener('click', function() {
    let productIndex = Array.from(lastProducts).indexOf(this);
    if(positions[productIndex] < 0){
      console.log(`Botão ultimo produto ${productIndex} clicado`)
      positions[productIndex] += productSize;
      productsToBeMoved[productIndex].style.transform = `translateX(${productSize}px)`;
    }})});

bannerNext.addEventListener('click', () => {
  switchBannerFwd();
  setInterval(5000)
});

bannerLast.addEventListener('click', () => {
  switchBannerRvs();
  setInterval(5000)
});

setInterval(switchBannerFwd,5000);