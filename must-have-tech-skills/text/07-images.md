---
title: Images
---

# Images
{:.no_toc}

* TOC here
{:toc}

Even if you're not the person creating images, you may brief authors and designers on creating them, and check their quality and appropriateness. Here are some guidelines on what to ask for and look for.

## Bitmap and vector images

There are two kinds of image files: bitmap (or raster) images and vector images.

- A **bitmap image** is a big block of pixels arranged in a grid: a *map* of *bits*. Imagine a big grid where each square (each pixel) has a colour. The image file stores the colour of every block in the grid. If you enlarge bitmap images a lot, they pixelate: you can start to see the individual pixels, and the image looks blocky and blurry.

    Bitmap images are great for photographs and illustrations that contain many colours and shades.

    Bitmap file formats include JPEG, PNG, GIF, and TIFF. The *safest* choice for digital publishing is JPEG. The *smartest* choice will depend on your project.

- A **vector image** is made from points on a set of coordinates. The file contains instructions that say where to draw lines and where to fill areas with colour. Every time a computer opens a vector image, it redraws the image following those instructions. You can make a vector image as big as you like and it will remain crisp on screen, because the computer just keeps redrawing it relative to its new, bigger coordinates.

    Vector images are great for line art and logos with a few shades and far less detail than a photograph. When used for these kinds of images, their file sizes are far smaller than the same image as a bitmap.

    Vector file formats include SVG, AI (Adobe Illustrator), and EPS. Vector images can contain bitmap images. You see this mostly in PDF: PDF is mainly a vector format, but photos in a PDF are usually bitmap images.

## Size, resolution and quality

Most conversations about good images focus on pixels. When you buy a camera, the salesperson talks about megapixels (thousands of pixels). When you scan or save an image, you're told to use '300 PPI', and we take that to mean pixels per inch. This focus on pixels is misleading and confusing, and often tells only half the story. The suitability of an image is more complex than that.

Before we get into the details, we should make clear that when we talk about pixels in an image, we're implying that that's a *bitmap* image, since those are comprised of per-pixel data. The following discussion of pixels does not apply to vector images.

### Pixels and resolution

First we must understand what '300 DPI' means, since it's the most commonly requested image setting.

DPI stands for 'dots per inch'. This phrase comes from printing, because printing presses fill colour by printing thousands of tiny dots. High quality printing often fits a line of 300 dots into an inch. That means that every square inch of high-quality printing contains 300 × 300 dots, or 90&nbsp;000 tiny dots!

In printing, these dots are round, so there are actually tiny white spaces between them (unless, on absorbent paper, the ink soaks beyond the width of each dot).

Sometimes you'll hear the term PPI, for 'pixels per inch'. This is the screen equivalent of DPI, and a more accurate measurement for digital images. Measures of pixel density like this only apply to bitmap images, not to vector images. It's inaccurate to say 'DPI' for pixels, but language is often fuzzy like that.

For many years, each pixel was a single colour: a solid square of coloured light. In the last few years this has got more complicated, because some modern screens – such as Apple's Retina displays – fit four blocks of light into a one-pixel space. This has created beautiful, print-resolution-like screens. It's also created a lot of confusion for web designers and much bigger file sizes for high-end devices like iPhones.

For now, let's put this complication aside and think of each pixel as a single square of colour.

Inside an image file is some information, or metadata, about the image, including its pixel density, or PPI. For instance, let's say an image has a pixel density of 300 PPI. That means at its 'normal size', with no zoom, the image should fill 300 pixels across each inch of your screen.

Now, a bitmap image includes a fixed number of pixels high and wide. There are only so many pixels saved in the image data. So, let's say our designer provides an image file that is 600 pixels across and 1200 pixels high.

We can work out how big the image will be at 'normal size' when we open it:

- 600 pixels ÷ 300 PPI = 2 inches wide
- 1200 pixels ÷ 300 PPI = 4 inches high

Two inches is about 5 centimetres. If we need to use that image across an A4 page, which is 21 centimetres wide, it will be much too small. If we stretched it to the width of an A4 sheet it would pixelate horribly. Each dot of colour would be expanded to over four times its normal size.

That's why defining image quality in terms of pixel density alone is not useful. It is better to define image size in terms of the *total number of pixels* in the image.

If you need an image to be crisp across 21 centimetres when printed at 300 DPI, the image must contain enough pixels for that. To work out what we need:

1. Convert 21 centimetres to inches: 8.3 inches.
2. Then multiply 8.3 inches by 300 DPI: 8.3 × 300 = 2490 pixels.

Now we can ask the designer for an image that is at least 2490 pixels across.

You must also make sure they don't cheat: people who don't understand image pixelation might open the tiny image in a graphics program and enlarge it to 2490 pixels across. All this does is duplicate each dot of colour enough times to make up 2490 pixels. You'll still end up with a blurry image.

The *original* image must be at least 2490 pixels across. *There is no way to add new pixels to an image.* Those original pixels are the only data we have to work with.

The same principle applies if you want a big image to look great on a large Retina display. As we mentioned earlier, these displays effectively contain four times as many pixels as older screens. A new iMac is about 19 inches wide and can show 4096 pixels across. So a full-width image that makes the most of its display needs to be 4096 pixels across. That is a huge image!

### Image 'quality'

The term 'quality' has a special meaning when we're talking about image settings. Specifically, 'quality' matters when we're converting images from one format to another, or reducing their file size. The quality setting determines *how much information in the original image to discard* when we convert or reduce it.

- In bitmap images, reducing quality means discarding information about colours. Some file formats, especially JPEG, *automatically* lose colour information every time you save them. They are called 'lossy' formats.
- In vector images, reducing quality means discarding strokes (lines), fills (areas of colour), and image metadata (information about the image and its elements).

You should keep your master versions of images in a lossless format. For bitmap images, the best format for this is TIFF. You would then convert the TIFF into JPEG for output, carefully choosing pixel numbers, resolution, and quality for each format you're publishing in.

For instance, we might use large 300 DPI JPEG images for print output, and 96 DPI images at 80 per cent quality for screen formats. We adjust these defaults for each project, depending on the best interests of our project personae.

## Colour spaces

As you may know, colour printing uses four inks to create colours: cyan, magenta, yellow and black. These four colours are printed over one another on the printing press to create full-colour images.

This is called the **CMYK colour space** (the K actually stands for 'key plate' in printing, and by convention uses black ink). By default, a CMYK colour space assumes you're printing on white paper. Colours are expressed as percentages of each of C, M, Y and K. So true black is `0, 0, 0, 100`. A light green could be `50, 0, 50, 0`, or 50 per cent cyan combined with 50 per cent yellow.

Screens are different. When screen pixels are off, they are black. Colours on screen are then made of three colours of light: red, green and blue. This is called the **RGB colour space.** Colours are expressed as a combination of these, in increments from 0 to 255. So a light, bright purple would be `200, 0, 200`; that is, most of the available red and blue. Pure white is `255, 255, 255`, which is all the colours combined in full.

## Colour profiles

As you know, different people may see colour differently from other people. The same goes for machines.

A colour like that `200, 0, 200` purple on one machine may be quite different from the same colour on another machine. This applies across printing presses and computers. If you open your organisation's website on two different computers, you will see that the same colours look different.

One reason for this is that the range of *possible* shades from, say, 'zero yellow' to 'maximum yellow' will differ, because some machines will be capable of displaying a more yellow yellow than another machine. We say that some devices, such as screens, are able to show a wider *gamut* of certain colours than another. Likewise, some printers, inks, and papers can create a wider gamut of certain colours than others.

Imagine a gamut as a line representing different shades of a colour, from its least to its most intense. A particular shade will appear at different points on gamuts of different lengths. But points on all gamuts are measured with the same total number of units: 100 for CMYK, and 0 to 255 for RGB. So along one device's RBG gamut, a particular shade might appear at point 200 of 255. On another, that same shade might appear at point 210. If we have both those devices show `200, 0, 200`, they will display different shades.

To manage these differences, we use *colour profiles*. Colour profiles are files (usually with a `.icc` or `.icm` extension) that define colour gamuts. An image file can contain a colour profile inside it. If it does, and if your software knows how to read that profile, the image's colours should look almost the same across devices. At least, it will be as consistent as is feasible.

A PDF document can also contain a colour profile for the whole document. Any PDF you send to a printer should have a colour profile embedded in it, and ideally the same one used for all the images in that document. (Good PDF-creating programs like InDesign automatically embed profiles.)

Most publishing teams don't think about colour profiles as they work, and things work out fine. If you're working on a book where colour accuracy is important, such as photography, agree early on the colour profile you'll use for all original images and documents.

There are any number of colour profiles in the world, including open and proprietary ones. It is possible to get common ones from the [International Colour Consortium](http://www.color.org){:.show-url} and the [European Colour Initiative](http://eci.org){:.show-url}. Good software ships with colour profiles already.
