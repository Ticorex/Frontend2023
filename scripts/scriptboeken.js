console.log('help im trapped in the console');

window.onresize = function () {
    var vpWidth = window.innerWidth;
    
    addClass(vpWidth);
    deleteClass(vpWidth);
    openDetails(vpWidth);
};

const details = document.querySelectorAll('details');
var hiddenElements = document.querySelectorAll('section:nth-of-type(4) ul li button:nth-of-type(-n+4)');

function openDetails(vpWidth) {
    if (vpWidth > 560) {
        details.forEach(detail => {
            detail.open = true;
        });
    } else {
        details.forEach(detail => {
            detail.open = false;
        });
    }
}

function addClass(vpWidth) {
    if (vpWidth < 898) {
        hiddenElements.forEach(function (element) {
            element.classList.add('hidden');
        });
    }
}

function deleteClass(vpWidth) {
    if (vpWidth > 898) {
        hiddenElements.forEach(function (element) {
            element.classList.remove('hidden');
        });
    }
}

var hamburgr = document.querySelector('header nav button');

function noBurger() {
    const vpWidth = window.innerWidth;

    if (vpWidth > 561) {
        hamburgr.classList.add('hidden');
    }
}

function hmmBurger() {
    const vpWidth = window.innerWidth;

    if (vpWidth < 561) {
        hamburgr.classList.remove('hidden');
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

