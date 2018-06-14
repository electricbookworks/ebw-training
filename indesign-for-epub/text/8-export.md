---
title: Exporting to epub
---

# Exporting to epub

In order to export a full book from InDesign, you must select the export command from the “Book” panel menu, instead of the “File” menu, as it is for documents. 

Make sure that you have the “Book” panel visible (it automatically pops up whenever you open a book in InDesign). The export tool will only export character/paragraph styles and metadata from one document in the book. This document can be selected from the Book panel menu as the “styling source” document (the little symbol to the left of the document name).

Export to Digital Editions?
:	CS3 and CS4 referred to its epub export as 'Export to Digital Editions', because at the time Adobe Digital Editions was the dominant epub reader around.

Some of the following export options have changed a little or been renamed in different versions of InDesign. They should be a useful guide no matter which version you're using.

## General options

*	Add the name of the publisher.
*	For CSS, choose 'Defined Styles'.
*	for 'Bullets and Numbers', choose 'Map to … Lists'.

We avoid Adobe’s font embedding because it creates invalid ePubs.

## Images options

Choose *Optimized* and high quality jpeg. Avoid gif or Automatic, they often create problems.

## Contents options

*	Select XHTML-based
*	Select Include InDesign TOC entries (see the [table of contents section](5-toc.html)) for more detail)
*	Select 'Suppress Automatic Entries for Documents'.

Keith Fahlgren has written an [excellent post on exporting from InDesign](https://blog.safaribooksonline.com/2009/11/23/choosing-indesign-epub-output-options/). You'll find it by searching for his name with "Choosing InDesign ePub output options".

## CS3 tip

If you're working in CS3, make sure the ‘bullets to text’ checkbox is ticked when exporting to epub, not ‘map bullets to lists’. 

## Troubleshooting

Unfortunately, if your export fails, InDesign’s error messages are not always helpful. [Liz Castro found one error](http://www.pigsgourdsandwikis.com/2010/07/hyperlink-causes-indesign-export-to.html) caused by having an ampersand in a URL in your InDesign document. (InDesign doesn’t create valid XML for the ampersand in a hyperlink.) On that note, check out Liz’s book, [EPUB Straight to the Point](http://www.amazon.com/exec/obidos/ISBN=0321734688/elizabethcastroA/ref=nosim/).)
