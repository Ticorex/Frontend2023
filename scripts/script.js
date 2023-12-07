// JavaScript Document
console.log("hi");

var positie = 0;

var buttonLinks = document.querySelector('section:nth-of-type(2) button:nth-of-type(1)');
var buttonRechts = document.querySelector('section:nth-of-type(2) button:nth-of-type(2)');
var deals = document.querySelector('section:nth-of-type(2) ul');


var buttonLinks2 = document.querySelector('section:nth-of-type(3) button:nth-of-type(1)');
var buttonRechts2 = document.querySelector('section:nth-of-type(3) button:nth-of-type(2)');
var categorie = document.querySelector('section:nth-of-type(3) ul');

function moveListL(){
    
 if (positie === 60){
        positie = 0

    } else if (positie === 120){
        positie = 60
    
    } else if (positie === 180){
        positie = 120

    } else if (positie === 200){
        positie = 180
        
    }

    deals.style.translate = `-${positie}%`;
}

function moveListR(){
    deals.style.translate = '-200%';

    if (positie === 0){
        positie = 60

    } else if (positie === 60){
        positie = 120

    } else if (positie === 120){
        positie = 180
    
    } else if (positie === 180){
        positie = 180

    }

    deals.style.translate = `-${positie}%`

}

function moveList2L(){
    
    if (positie === 200){
           positie = 0
   
       } else if (positie === 0){
           positie = 0
       
       } 
   
       categorie.style.translate = `-${positie}%`;
   }

function moveList2R(){
    categorie.style.translate = '-200%';

    if (positie === 0){
        positie = 200

    } else if (positie === 200){
        positie = 200

    } 

    categorie.style.translate = `-${positie}%`

}

buttonLinks.addEventListener('click', moveListL);
buttonRechts.addEventListener('click', moveListR);

buttonLinks2.addEventListener('click', moveList2L);
buttonRechts2.addEventListener('click', moveList2R);