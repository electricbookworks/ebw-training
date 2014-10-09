---
book: Making ebooks with Sigil, HTML and CSS
title: Working with images
layout: chapter
---

# Working with images

You are going to want to add or edit images in ebooks often. Luckily, this is very simple. You can just use Sigil's `Insert > Files…` menu. But if you want to understand what's going on in your code, here is the more manual method. To troubleshoot, you'll need to know this stuff.

## Add the image file

First, add the image to the epub's `Images` folder. In Sigil, just right-click the `Images` folder and select `Add Existing Files`. Then go find the image on your computer, and Sigil will copy it to that `Images` folder. Remember, though:

*   remove all spaces from image file names;
*   try to use only lowercase letters in file names (for one thing, Sigil alphabetises file names differently according to the case of the letters);
*   only use jpg or gif images (png is usually also okay);
*   before adding, make sure the images are 72 to 150 dpi, large but not larger than 1000px on their longest side, and saved in RGB colours, not CMYK.

## Add an image tag

Now, head back to your HTML document to add an `<img>` image tag where the image must appear. Image tags must always include two attributes:

*   `src` for source, indicating the image file you just added, and
*   `alt` for alternative text, which appears if the image breaks and is read out loud is reader for the visually impaired.

An image tag can also include a `title` attribute, which provides more info about the image. Many ereaders show the title as a tooltip when a user mouses over the image.

Finally, the image tag must self-close with a slash.

Here's an example:

~~~ html
<img src="../Images/example.jpg" alt="Example image" title="An example of an image in an ebook" />
~~~

Done! Switch back to book view to check that it's displaying correctly.

## Image sizes and styles

Images vary in size and are portrait or landscape or square. So are the screens they appear on. This means you will need to experiment with CSS styling for your images to make sure they display reliably on various screen sizes and orientations. Usually, this means working with `max-width` and `max-height` rules in your CSS.

Sometimes you'll need to create a couple of classes for different kinds of images in your book. For instance, little marginal decorations might be in a `margin-decor` class, while big, important graphics might be in an `important-graphic` class. Remember to create class names that describe the *purpose* of a given kind of image, not its appearance.

## Captions and figures

If your images have captions, you should have two options:

*	Make the captions paragraphs immediately before or after the image (you can make them `<p class="caption">` to style them); or
*	Use the HTML for a `<figure>` element.

But the second option, using `<figure>` doesn't work in Sigil. Still, it's useful to know about it, in case Sigil allows for it in future, or in the event that you use another epub editor that does allow it.

The `<figure>` element wraps an image and its caption together. This is useful for styling, and also for keeping the image and its caption, marked up with `<figcaption>`, on the same page. The HTML for a figure looks like this:

~~~ html
<figure>
    <img src="../Images/myimage.jpg" alt="My pretty image" />  
    <figcaption>This is a beautiful picture.</figcaption>
</figure>
~~~

But if your ebook files are XHTML (rather than HTML), the `<figure>` element is not allowed. By default, Sigil uses XHTML, so `<figure>` doesn't validate. (And, no, in Sigil you can't manually change your DOCTYPE (to `<!DOCTYPE html>`) because Sigil likes to clean your code, and changes it back.) When Sigil supports EPUB3 in future, this won't be an issue.
