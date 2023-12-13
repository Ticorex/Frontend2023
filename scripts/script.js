// JavaScript Document
console.log("hi");

var positie = 0;

var buttonLinks = document.querySelector('section:nth-of-type(2) button:nth-of-type(1)');
var buttonRechts = document.querySelector('section:nth-of-type(2) button:nth-of-type(2)');
var deals = document.querySelector('section:nth-of-type(2) ul');


var buttonLinks2 = document.querySelector('section:nth-of-type(3) button:nth-of-type(1)');
var buttonRechts2 = document.querySelector('section:nth-of-type(3) button:nth-of-type(2)');
var categorie = document.querySelector('section:nth-of-type(3) ul');


// JavaScript Document

console.log("Carousel Initialized");

function initializeCarousel(containerSelector) {
    const carouselContainer = document.querySelector(containerSelector);
    const buttonLeft = carouselContainer.querySelector('button:nth-of-type(1)');
    const buttonRight = carouselContainer.querySelector('button:nth-of-type(2)');
    const itemList = carouselContainer.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    if (items.length === 0) {
        return;
    }

    const gridStyle = window.getComputedStyle(itemList);
    const gridGap = parseInt(gridStyle.gap);
    const itemWidth = items[0].offsetWidth;
    let currentPosition = 0;

    function updateCarousel() {
        const totalItemWidth = itemWidth + gridGap;
        const visibleItems = Math.floor(carouselContainer.offsetWidth / totalItemWidth);
        const maxPosition = Math.max(0, items.length - visibleItems);
        currentPosition = Math.min(Math.max(currentPosition, 0), maxPosition);
        const transformValue = -currentPosition * totalItemWidth;

        itemList.style.transform = `translateX(${transformValue}px)`;
    }

    function moveLeft() {
        currentPosition -= 1;
        updateCarousel();
    }

    function moveRight() {
        currentPosition += 1;
        updateCarousel();
    }

    buttonLeft.addEventListener('click', moveLeft);
    buttonRight.addEventListener('click', moveRight);

    // Handle browser resize
    window.addEventListener('resize', () => {
        updateCarousel(); // Recalculate the carousel's position on resize
    });
}

// Initialize carousels
initializeCarousel('section:nth-of-type(2)');
initializeCarousel('section:nth-of-type(3)');

// Source: Frank van der Velde, Leerlingnummer: 500874906 
// https://www.linkedin.com/in/frankvdv1998/

window.onresize = function() {
    removeClass();
    openDetails();
};

const details = document.querySelectorAll ('details');

function openDetails(event) {
    const vpWidth = window.innerWidth

    if (vpWidth > 560) {
        details.forEach( detail => {
            detail.open = true;
        });
    }
    else {
        details.forEach( detail => {
            detail.open = false;
        });
    }
} 



var hamburgr = document.querySelector('header nav button');
var mainNav = document.querySelector("main nav");

hamburgr.onclick = openMenu;

function openMenu() {
    mainNav.classList.add("open");
  }

  var bigX = document.querySelector("main nav button");


  bigX.onclick = sluitMenu;
  
  function sluitMenu() {
    mainNav.classList.remove("open");
  }


function noBurger() {
    const vpWidth = window.innerWidth;

    if (vpWidth > 561) {
        hamburgr.classList.add('hidden');
        mainNav.classList.add('hidden');
    }
}

function hmmBurger() {
    const vpWidth = window.innerWidth;

    if (vpWidth < 561) {
        hamburgr.classList.remove('hidden');
        mainNav.classList.remove('hidden');
        mainNav.classList.remove("open");
    }
}

// Call the function on page load
noBurger();
hmmBurger();

// Add an event listener to update the visibility on window resize
window.addEventListener('resize', function() {
    noBurger(); // Call the function to update hamburger visibility
});

window.addEventListener('resize', function() {
    hmmBurger(); // Call the function to update hamburger visibility
});





//Dit is wat ik zelf had samen met de student assistent, maar dat was niet goed responsive als het
//scherm grooter werd.
// function moveListL(){
    
//  if (positie === 60){
//         positie = 0

//     } else if (positie === 120){
//         positie = 60
    
//     } else if (positie === 180){
//         positie = 120

//     } else if (positie === 200){
//         positie = 180
        
//     }

//     deals.style.translate = `-${positie}%`;
// }

// function moveListR(){
    

//     if (positie === 0){
//         positie = 60

//     } else if (positie === 60){
//         positie = 120

//     } else if (positie === 120){
//         positie = 180
    
//     } else if (positie === 180){
//         positie = 180

//     }

//     deals.style.translate = `-${positie}%`

// }

// function moveList2L(){
    
//     if (positie === 200){
//            positie = 100
   
//        } else if (positie === 100){
//            positie = 0
       
//        } 
   
//        categorie.style.translate = `-${positie}%`;
//    }

// function moveList2R(){
    

//     if (positie === 0){
//         positie = 100

//     } else if (positie === 100){
//         positie = 200

//     } 

//     categorie.style.translate = `-${positie}%`

// }

// buttonLinks.addEventListener('click', moveListL);
// buttonRechts.addEventListener('click', moveListR);

// buttonLinks2.addEventListener('click', moveList2L);
// buttonRechts2.addEventListener('click', moveList2R);


// window.onresize = openDetails;

// const details = document.querySelectorAll ('details');

// function openDetails(event) {
//     const vpWidth = window.innerWidth

//     if (vpWidth > 560) {
// 		details.forEach( detail => {
// 			detail.open = true;
// 		});
// 	}
// 	else {
// 		details.forEach( detail => {
// 			detail.open = false;
// 		});
// 	}
// } 




