---
title: Images
---

# Images
{:.no_toc}

* TOC here
{:toc}

While as an editor you might not be creating images, you will probably be briefing authors and designers and checking the quality and appropriateness of images. Here are some guidelines on what to ask for and look for.

## Bitmap and vector images

There are two kinds of image files: bitmap (or raster) images and vector images.

- **Bitmap image files** are a set of pixels: a *map* of *bits*. Imagine a big grid where each square (each pixel) has a colour. The image file stores the colour of every pixel. If you enlarge bitmap images a lot, they pixelate: that is, you can start to see the individual pixels, and the image looks blocky and blurry. Bitmap images are great for photographs or illustrations that contain many colours and shades.

    Bitmap file formats include JPEG, PNG, GIF, and TIFF. The safest bet for multi-format publishing is JPEG.

- **Vector image files** are a set of coordinates: instructions that say where to draw lines and where to fill areas with colour. Every time a computer opens a vector image, it actually redraws it following those instructions. You can make a vector image as big as you like and it will remain crisp on screen, because the computer just keeps redrawing it relative to its new, bigger coordinates. Vector images are great for line art and logos with few shades and less detail than a photograph. When used for these kinds of images, their file sizes are far smaller than the same image as a bitmap.

    Vector file formats include SVG, AI (Adobe Illustrator), and EPS. PDF is mainly a vector format, too, but can include bitmap elements.

## Size, resolution and quality

Most conversations about good images focus on pixels. When you buy a camera, the salesperson talks about megapixels (thousands of pixels). When you scan an image, you're supposed to scan at '300dpi or higher'. This focus on pixels is misleading and confusing, and often tells only half the story. The suitability of an image depends on several factors.

### Pixels and resolution

First we must understand what '300 DPI' means, since it's the most commonly requested image setting.

DPI stands for dots per inch. This phrase comes from printing, because printing presses fill colour by printing thousands of tiny dots. High quality printing often fits 300 dots into an inch. (Note that that means 300 × 300 dots per square inch, or 90&nbsp;000 dots.) These dots are round, so there are actually tiny white spaces between them (unless on absorbent papers the ink soaks beyond the width of the dots).

Sometimes you'll hear the term PPI, for pixels per inch. This is the screen equivalent of DPI, and a more accurate measurement for digital images.

Each pixel used to be a single colour: a solid square dot. In the last few years this has got more complicated, because on some screens a single pixel can now carry more than one colour. Put another way, some screens fit four pixels into what was once a one-pixel space. This has created beautiful screens and a lot of confusion for web designers!

For now, let's put this complication aside and think of each pixel as a single dot of colour.

Inside an image file is some information, or metadata, about the image, including its pixel density. For instance, let's say an image has a pixel density of 300 DPI.

An image is also a fixed number of pixels high and wide. There are only so many pixels saved in the image. So, let's say our author provides an image that is 600 pixels across and 1200 pixels high.

We can work out how big the image will be when we open it:

- 600 pixels / 300 DPI = 2 inches wide
- 1200 pixels / 300 DPI = 4 inches high

If we need to use that image on an A4 page, it will be much too small. Two inches is only about 5 centimetres! If we stretch it to the width of an A4 sheet, 21 centimetres, it will pixelate horribly: each dot of colour would be over four times its normal size.

Now we can see why defining image quality in terms of pixel density is not useful. It is better to define image size in terms of the number of pixels in the image.

If you need an image to be 300 DPI crisp across 21 centimetres, the image must contain enough pixels for that. To work it out:

1. Convert 21 centimetres to inches: 8.3 inches.
2. Then multiply that width by 300 DPI: 8.3 × 300 = 2490 pixels.

Now we can ask the author for an image that is at least 2490 pixels across.

You must also make sure they don't cheat: people who don't understand image pixelation might open the tiny image and enlarge it to 2490 pixels across. All this does is duplicate each dot of colour enough times to make up 2490 pixels. You'll still end up with a blurry image.

The *original* image must be at least 2490 pixels across. *There is no way to add new pixels to an image.*

### Image 'quality'

The term 'quality' has a special meaning when we're talking about image settings. Specifically, 'quality' matters when we're converting images from one format to another, or reducing their file size. The quality setting determines how much information in the original image to discard when we convert or reduce it.

- In vector images, reducing quality means discarding strokes (lines), fills (areas of colour), and image metadata (information about the image and its elements).
- In bitmap images, reducing quality means discarding information about colours. Some file formats *automatically* lose colour information every time you save them, especially JPEG, which is called a 'lossy' format as a result.

You should keep your master versions of images in a lossless format. The best format for this is TIFF. You would then convert the TIFF into JPEG for output, carefully choosing pixel numbers, resolution, and quality for each format you're publishing in.

For instance, by default we use large 300 DPI JPEG images for print output, and 96 DPI images at 80 per cent quality for screen formats. We may adjust these for each project, depending on our personas' best interests.

## Colour spaces and colour profiles

As you may know, colour printing uses four inks to create colours: cyan, magenta, yellow and black. This is called the CMYK colour space (the K actually stands for 'key plate' in printing). By default, a CMYK colour space assumes you're printing on white paper. Colours are expressed as percentages of each of C, M, Y and K. So true black is `0, 0, 0, 100`. A simple light green could be `50, 0, 50, 0`.

Screens are different. When a screen is off, it's black. So colours on screen are made of three colours of light: red, green and blue light. This is called the RGB colour space. Colours are expressed as a combination of these, in increments from 0 to 255. So a light, bright purple would be `200, 0, 200`, and pure white is `255, 255, 255`.

That sounds simple enough, but there's a catch! A colour on one machine may look quite different from the same colour on another machine. This applies across printing presses and computers. If you open your organisation's website on two different computers, you will see that the same colours look different. One reason for this is that the range from, say, 'zero yellow' to 'maximum yellow' will differ: some screens will be able to show a wider range, or gamut, of yellows than another. And some printers, inks, and papers can create a wider gamut than others.

To reduce these differences, we use colour profiles. Most colour profiles are files (usually with a `.icc` or `.icm` extension) that define colour gamuts. An image can, and should, contain a colour profile. That way, it should look almost the same across devices. At least, it will be as consistent as possible.

A PDF document can also contain a colour profile. Any PDF you send to a printer should have a colour profile embedded, and ideally the same one used for all the images in that document.

Most publishing teams don't think about colour profiles as they work, and things work out fine. If you're working on a book where colour accuracy is important, such as photography, agree on the colour profile you'll use for original images, and the colour profiles you'll use for conversions into other formats.

There are any number of colour profiles in the world, including open and proprietary ones. It is possible to get common ones from the [International Colour Consortium](http://www.color.org){:.show-url} and the [European Colour Initiative](http://eci.org){:.show-url}.

## Text in images

Where possible and practical, avoid including text in images. Text in images can be unreadable on small screens, it can't be found by searching in a document, and it makes translation projects much more expensive, because images have to be recreated for each language.

Sometimes you have to put text in images. For instance, graphs must have axes and labels. When that happens, you must create a detailed stylesheet for your team that defines image sizes, font sizes and styles, and colours to use.

## Further reading

- [Colour models, XKCD](https://xkcd.com/1882/), a funny take on learning about colour.
