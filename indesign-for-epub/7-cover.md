---
book: InDesign best practice for print and ebooks
title: The cover
layout: chapter
---

# The cover

We recommend using the same InDesign documents for creating your print PDFs and exporting to epub. This way, you only ever have one master InDesign document, which is good for version control.

However, if you choose to have two versions of your InDesign document for any reason, then you can put a cover image in your epub version in InDesign, rather than inserting it later into the epub code.

If you choose to do this, read [Adobe’s very helpful guide to working with images in InDesign for epub](http://www.adobe.com/products/indesign/epub/howto/). It includes this advice:

> The cover for an eBook must be a single image. If your cover design is composed of an assortment of text and image frames within InDesign, the design elements will be linearized in the eBook. To quickly generate a cover image, you can export the cover from InDesign as a JPEG file. Choose File > Export, specify a name for the image, choose JPEG from the Format menu, and then click Save. In the Export JPEG dialog box, specify which page you want exported. For optimum display on different screen sizes and resolutions, specify a resolution of 72 pixels per inch (ppi) and choose Maximum from the Quality menu. Click Export to generate the image. The final image size for the cover should be around 600×800 pixels so that the cover looks good on a variety of eBook readers. If the pixel dimensions of the image are not large enough, export the image at a higher resolution. After your cover image has been created, import it into InDesign.

and

> Manage the cover with a book file. … create a separate InDesign document for the cover image. Then combine the cover document with any other documents that make up your book layout into an InDesign book file (File > New > Book).

Obviously make that cover document the first document in your InDesign Book.

We prefer to insert our covers into the epub code after export from InDesign. There is [advice for inserting covers in epubs on the EBW Knowledge Base](http://electricbookworks.com/kb/creating-epub-from-indesign/after-indesign-export-to-epub/add-a-cover/).
