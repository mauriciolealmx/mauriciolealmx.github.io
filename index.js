const slideLine = document.querySelector('.underline');
const listItems = document.querySelectorAll('li');

// Initialize: Underline default nav item.
focusNavItem(listItems[0]);

// Add Click event listener to each li.
[ ...listItems].forEach( element => {
    element.addEventListener('click', ({ target: { parentElement } }) => {
        const selectedNavItem = document.querySelector('.selected');
        blurNavItem(selectedNavItem);
        focusNavItem(parentElement);
    });
});

// Helper functions.
function slideUnderline(toElement) {
    slideLine.style.width = `${toElement.offsetWidth}px`;
    slideLine.style.left = `${toElement.offsetLeft}px`;
}

function selectNavItem(navItem) {
    navItem.classList.add('selected');
}

function focusNavItem(navItem) {
    slideUnderline(navItem); 
    selectNavItem(navItem);  
}

function blurNavItem(selectedNavItem) {
    selectedNavItem.classList.remove('selected');
}