/*jslint browser */
/*globals window, IntersectionObserver, SVGInject */

// Add observer
var ebImageObserverConfig = {
    rootMargin: '200px' // load image when it's 200px from the viewport
};

// Re-run SVGInject() after lazyloading SVGs
// (Assumes SVGInject() has been bundled already.)
function ebInjectLazyLoadedSVG(image) {
    'use strict';
    if (image.classList.contains('inject-svg')
            && !image.classList.contains('no-inject-svg')
            && typeof SVGInject === 'function') {
        SVGInject(image);
    }
}

function ebLazyLoadImages() {
    'use strict';

    // Create an array and then populate it with images.
    var lazyImages = [];
    lazyImages = lazyImages.slice
        .call(document.querySelectorAll('[data-src], [data-srcset]'));

    // If IntersectionObserver is supported,
    // create a new one that will use it on all the lazyImages.
    if (window.hasOwnProperty('IntersectionObserver')) {
        var lazyImageObserver = new IntersectionObserver(function
                (entries, lazyImageObserver) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {

                    var lazyImage = entry.target;

                    // Set the src as the data-src,
                    // and the src-set as the data-srcset.
                    if (lazyImage.dataset.src) {
                        lazyImage.src = lazyImage.dataset.src;
                    }
                    if (lazyImage.dataset.srcset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }

                    // If the image is an SVG, inject it if necessary
                    var fileExtension = lazyImage.src.split('.').pop();
                    if (fileExtension === 'svg' || fileExtension === 'SVG') {
                        ebInjectLazyLoadedSVG(lazyImage);
                    }

                    // Stop observing the image once loaded
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        }, ebImageObserverConfig);

        // Observe each image
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // If the browser doesn't support IntersectionObserver,
        // just change all data-src to src and data-srcset to srcset.
        lazyImages.forEach(function (lazyImage) {
            if (lazyImage.dataset.src) {
                lazyImage.src = lazyImage.dataset.src;
            }
            if (lazyImage.dataset.srcset) {
                lazyImage.srcset = lazyImage.dataset.srcset;
            }
        });
    }
}

// Go when the document is loaded
document.addEventListener('DOMContentLoaded', ebLazyLoadImages());
