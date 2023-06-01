const products1 = document.querySelector('#products_to_be_moved_1');
const products2 = document.querySelector('#products_to_be_moved_2');
const products3 = document.querySelector('#products_to_be_moved_3');
const products4 = document.querySelector('#products_to_be_moved_4');
const products5 = document.querySelector('#products_to_be_moved_5');
const products6 = document.querySelector('#products_to_be_moved_6');
const products7 = document.querySelector('#products_to_be_moved_7');

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

const banners = document.getElementsByClassName('banner_image');

const bannerNext = document.querySelector('#banner_next');
const bannerLast = document.querySelector('#banner_back');

const popup = document.queryselector('#popup');
const popupExit = document.getElementsByClassName('popup_exit')
const popupLeftButton = document.querySelector('#left_button_popup')
const popupRightButton = document.querySelector('#right_button_popup')
const popupImages = document.querySelector('.popup_image_holder')



let productSize = 200;

let currentItem = 0;
let currentPopup = 0;
let currentPosition1 = 0;
let currentPosition2 = 0;
let currentPosition3 = 0;
let currentPosition4 = 0;
let currentPosition5 = 0;
let currentPosition6 = 0;
let currentPosition7 = 0;

const buttons = [nextProduct1,nextProduct2,nextProduct3,nextProduct4,nextProduct5,nextProduct6,nextProduct7
                ,lastProduct1,lastProduct2,lastProduct3,lastProduct4,lastProduct5,lastProduct6,lastProduct7]

function handleClickEvents(event){

    const comandsToHandle = [
        [nextProduct1,lastProduct1,currentPosition1,products1],
        [nextProduct2,lastProduct2,currentPosition2,products2],
        [nextProduct3,lastProduct3,currentPosition3,products3],
        [nextProduct4,lastProduct4,currentPosition4,products4],
        [nextProduct5,lastProduct5,currentPosition5,products5],
        [nextProduct6,lastProduct6,currentPosition6,products6],
        [nextProduct7,lastProduct7,currentPosition7,products7],
    ]
    
    let clickedElement = event.target;
    let indexToHandle;

    for(let i = 0; i < comandsToHandle.length; i++){
        for(let j = 0; j < comandsToHandle[i].length; j++){
            if(clickedElement == comandsToHandle[i][j]){
                indexToHandle = i;
                if(j == 0){
                    advanceProduct(indexToHandle)
                }
                if(j == 1){
                    revertProduct(indexToHandle)
                }
            }
        }
    }
    
function advanceProduct(index){
    if (comandsToHandle[index][2] > -(productSize * (comandsToHandle[index][3].childElementCount - 6))) {
        comandsToHandle[index][2] -= productSize;
         comandsToHandle[index][3].style.transform = `translateX(${comandsToHandle[indexToHandle][2]}px)`;
        }
    }    
     
function revertProduct(index){
    if (comandsToHandle[index][2] < 0) {
        comandsToHandle[index][2] += comandsToHandle[index][3];
        comandsToHandle[index][3].style.transform = `translateX(${comandsToHandle[indexToHandle][2]}px)`;
        }
    }    
}
              
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

  function switchPopupImageFwd() {
    popupImages[currentPopup].style.display = 'none';
    currentPopup = (currentPopup + 1) % popupImages.length;
    popupImages[currentPopup].style.display = 'block';
  }

  function switchPopupImageRvs() {
    popupImages[currentPopup].style.display = 'none';
    currentPopup = (currentPopup - 1 + popupImages.length) % popupImages.length;
    popupImages[currentPopup].style.display = 'block';
  }

  bannerNext.addEventListener('click', () => {
    switchBannerFwd();
  });
  
  bannerLast.addEventListener('click', () => {
    switchBannerRvs();
  });

  popupLeftButton.addEventListener('click', () => {
    switchPopupImageRvs()
  })
  popupRightButton.addEventListener('click', () => {
    switchPopupImageFwd()
  })

  setInterval(switchBannerFwd,5000);

  buttons.forEach(button => button.addEventListener('click', handleClickEvents));

