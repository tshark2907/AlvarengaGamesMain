const banners = document.getElementsByClassName('banner_image');
const products1 = document.querySelector('#products_to_be_moved_1');
const products2 = document.querySelector('#products_to_be_moved_2');
const bannerNext = document.querySelector('#banner_next');
const bannerLast = document.querySelector('#banner_back');
const nextProduct1 = document.querySelector('#next_product_1');
const nextProduct2 = document.querySelector('#next_product_2');
const lastProduct1 = document.querySelector('#last_product_1');
const lastProduct2 = document.querySelector('#last_product_2');

let productSize = 200;

let currentItem = 0;
let currentPosition1 = 0;
let currentPosition2 = 0;

let intervalId;


function switchBannerFwd (){
    banners[currentItem].style.display = ('none');
    currentItem = (currentItem + 1) % banners.length;
    banners[currentItem].style.display = ('block');
}

function switchBannerRvs (){
    banners[currentItem].style.display = ('none');
    currentItem = (currentItem - 1 + banners.length) % banners.length;
    banners[currentItem].style.display = ('block');
}

nextProduct1.addEventListener("click", () => {
   if(currentPosition1 > -(productSize * (products1.childElementCount - 6)))
   currentPosition1 -= productSize;
   products1.style.transform = `translateX(${currentPosition1}px)`
});

lastProduct1.addEventListener("click", () => {
if(currentPosition1 < 0) {
    currentPosition1 += productSize;
    products1.style.transform = `translateX(${currentPosition1}px)`
    }
}); 

nextProduct2.addEventListener("click", () => {
    if(currentPosition2 > -(productSize * (products1.childElementCount - 6)))
    currentPosition2 -= productSize;
    products2.style.transform = `translateX(${currentPosition2}px)`
 });
 
 lastProduct2.addEventListener("click", () => {
 if(currentPosition2 < 0) {
     currentPosition2 += productSize;
     products2.style.transform = `translateX(${currentPosition2}px)`
     }
 }); 

bannerNext.addEventListener("click",switchBannerFwd);
bannerLast.addEventListener("click",switchBannerRvs);

function startInterval() {
    intervalId = setInterval(change, 5000);
  }
  
  function stopInterval() {
    clearInterval(intervalId);
  }
  
  bannerNext.addEventListener("click", () => {
    switchBannerFwd();
    stopInterval();
    startInterval();
  });
  
  bannerLast.addEventListener("click", () => {
    switchBannerRvs();
    stopInterval();
    startInterval();
  });
  
  startInterval();

