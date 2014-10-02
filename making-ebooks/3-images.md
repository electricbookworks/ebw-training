---
title: Images
layout: chapter
---

Adding images
=============

You are going to want to add or edit images in ebooks often. Luckily, this is very simple.

First, add the image to the epub's Images folder. In Sigil, just right-click the Images folder and select Add Existing Files. Then go find the image on your computer, and Sigil will copy it to that Images folder. Remember, though:

-   remove all spaces from image file names;
-   try to use only lowercase letters in file names (for one thing, Sigil alphabetises file names differently according to the case of the letters, bizarrely);
-   only use jpg or gif images (png is usually also okay);
-   before adding, make sure the images are 72 to 150 dpi, large but not larger than 1000px on their longest side, and saved as RGB, not CMYK.

Then, head back to your HTML document to add an image tag where the image must appear. Image tags must always include two attributes:

-   src for source, indicating the image file you just added, and
-   alt for alternative text, which appears if the image breaks and is read out loud is reader for the visually impaired.

An image tag can also include a title attribute, which provides more info about the image. Many ereaders show the title as a tooltip when a user mouses over the image.

Finally, the image tag must self-close with a slash.

Here's an example:

\<img src="../Images/example.jpg" alt="Example image" title="An example of an image in an ebook" /\>

Which might show like this in the rendered ebook:

![Example image](../Images/lily_by-arthur-attwell_20130214_194014.jpg "An example of an image in an ebook")

