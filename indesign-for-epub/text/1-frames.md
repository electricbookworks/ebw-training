---
title: Dealing with frames
---

# Dealing with frames

The guidelines here are for designing and typesetting with epub export/conversion in mind. They are also good design and typesetting practice even if you’re not sure you’re going to be exporting or converting to epub.

## One story flow

There are two rules of thumb for managing text flow:

1. Set each chapter in a separate document, and gather them in an InDesign Book. (Inside an epub, each chapter will then be in a separate XHTML file. This means the software only has to open one chapter at a time, making your epub open more quickly and read more smoothly. Some software, like some Sony Readers, can’t even open an XHTML file that’s bigger than 300K.) This also creates a nice page-break effect in the final epub, without having to add a page-break tag to the code.
2. Thread (join together) all your text frames in one story flow. If you have any text boxes floating in your document, not threaded into the main story flow, after export that text will appear right at the end of your epub. (If you must have floating text boxes, anchor them, and give them their own paragraph style. This can make it easier to fix the threading problem after export later on.)

Note: You can break rule 1 for very short books if you really want to work in one document only, not in a Book. You can add page-break tags to your XHTML code and CSS file between chapters or sections.

## Pagination and master pages

PDF ebooks have pages like print. But reflowable formats, like epub, have no fixed pages as such. So there is no pagination. When you export an InDesign file to epub, it will pretty much ignore:

*	running headers/footers and page numbers on master pages, and
*	margins or page size.

So don’t put any important content on a master page.

Also, if you have to override master page items on your pages, but you don’t want them in your epub, [here is some useful advice on a workaround in CS4](http://labs.oreilly.com/2010/03/epub-export-from-indesign-tips-tricks.html).
{:.non-printing}

## Images and objects

Where possible, anchor your images. Like floating text boxes, any image that isn’t anchored might not appear next to the relevant text after export to epub. Up to CS4, unless anchored, images and objects will be placed pretty arbitrarily in the ePub (usually at the end in random order). From CS5, InDesign tries to guess where an image should go by its placement on the page – but you might not want to trust it. 

[Adobe gives this advice](http://www.adobe.com/products/indesign/epub/howto/) for anchoring images:

> Anchor each image to its own paragraph. To ensure that an image appears between paragraphs in the EPUB file, it must be anchored to its own paragraph by inserting an extra paragraph return and anchoring the image to that paragraph. You can then apply a paragraph style to the paragraph to further control the image’s position. For example, to center an image and create some space above and below it in the EPUB file, you center-align the paragraph and apply space before and after it. Note: Since text wrap settings are discarded in the EPUB file, you must use the InDesign Space Before and Space After options to add extra space above or below an image.

You may have to work with the images after export anyway.

Also, images you’ve created using drawing tools in InDesign won’t work. You’ll have to save these as image files (e.g. jpg or Adobe Illustrator) and place them back in the InDesign document as anchored images.

Unfortunately, an anchored frame can’t contain other frames, so you can’t anchor an image and a caption in the same anchored object. To add a caption, you’re going to need to get at the XHTML code. (We won’t go into that code here, but if you every need it, let us know; it can be done.)

Finally, if you have very large images in your book, you may need to resize them, because some devices can’t display images larger than 10MB. (In InDesign CS4 you can choose to have InDesign automatically resize your images when you export to epub, which saves you the hassle.)
