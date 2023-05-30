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

let productSize = 200;

let currentItem = 0;
let currentPosition1 = 0;
let currentPosition2 = 0;
let currentPosition3 = 0;
let currentPosition4 = 0;
let currentPosition5 = 0;
let currentPosition6 = 0;
let currentPosition7 = 0;


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

let indexToHandle = comandsToHandle.findIndex(function(elemento){
    return elemento == clickedElement
})

function handleClickEvents(){
if(clickedElement == comandsToHandle.map([0])){
    
    if (comandsToHandle[indexToHandle][2] > -(productSize * (comandsToHandle[indexToHandle][3].childElementCount - 6))) {
        comandsToHandle[indexToHandle][2] -= productSize;
        comandsToHandle[indexToHandle][3].style.transform = `translateX(${comandsToHandle[indexToHandle][2]}px)`;
      }

}
if(clickedElement == comandsToHandle.map([1])){

    if (comandsToHandle[indexToHandle][2] < 0) {
        comandsToHandle[indexToHandle][2] += comandsToHandle[indexToHandle][3];
        comandsToHandle[indexToHandle][3].style.transform = `translateX(${comandsToHandle[indexToHandle][2]}px)`;
      }
    };

}

