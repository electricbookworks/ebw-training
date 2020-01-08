/*jslint browser */
/*globals locales, pageLanguage */

// Options
// -------
var ebShowHideOptions = {
    elementsToHide: '.show-hide', // a querySelectorAll string
    buttonShowText: locales[pageLanguage].input.show, // will be overriden if set in HTML as data-show-text
    buttonHideText: locales[pageLanguage].input.hide // will be overriden if set in HTML as data-hide-text
};

// Toggle visuallyhidden
function ebToggleNextSiblingVisibility(event) {
    'use strict';
    var button = event.target;
    var elementToHide = button.nextElementSibling;
    if (elementToHide.classList.contains('visuallyhidden')) {
        elementToHide.classList.remove('visuallyhidden');
        button.classList.remove('show-hide-hidden');
        button.classList.add('show-hide-visible');

        // If button text has been set in the HTML, use that,
        // otherwise use our default from ebShowHideOptions above.
        if (elementToHide.getAttribute('data-hide-text')) {
            button.innerHTML = elementToHide.getAttribute('data-hide-text');
        } else {
            button.innerHTML = ebShowHideOptions.buttonHideText;
        }
    } else {
        elementToHide.classList.add('visuallyhidden');
        button.classList.remove('show-hide-visible');
        button.classList.add('show-hide-hidden');

        // If button text has been set in the HTML, use that,
        // otherwise use our default from ebShowHideOptions above.
        if (elementToHide.getAttribute('data-show-text')) {
            button.innerHTML = elementToHide.getAttribute('data-show-text');
        } else {
            button.innerHTML = ebShowHideOptions.buttonShowText;
        }
    }
}

// Add a show/hide button
function ebShowHideAddButton(elementToHide) {
    'use strict';
    var button = document.createElement('button');
    button.classList.add('show-hide');
    button.classList.add('show-hide-hidden');
    elementToHide.insertAdjacentElement('beforebegin', button);

    // If button text has been set in the HTML, use that,
    // otherwise use our default from ebShowHideOptions above.
    if (elementToHide.getAttribute('data-show-text')) {
        button.innerHTML = elementToHide.getAttribute('data-show-text');
    } else {
        button.innerHTML = ebShowHideOptions.buttonShowText;
    }

    // Add a listener to the button
    button.addEventListener('click', ebToggleNextSiblingVisibility, false);
}

// Hide element
function ebShowHideHideInitially(elementToHide) {
    'use strict';
    elementToHide.classList.add('visuallyhidden');
    elementToHide.classList.add('show-hide-content');
}

// Process all show-hides
function ebShowHide() {
    'use strict';
    var ebShowHideElements = document.querySelectorAll(ebShowHideOptions.elementsToHide);
    var i;
    for (i = 0; i < ebShowHideElements.length; i += 1) {
        ebShowHideHideInitially(ebShowHideElements[i]);
        ebShowHideAddButton(ebShowHideElements[i]);
    }
}

// Go!
ebShowHide();
