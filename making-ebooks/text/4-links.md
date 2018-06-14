---
title: Links
---

# Links

A link is clickable text or a clickable image that, when clicked, takes the reader somewhere else. There are two kinds of links in an ebook:

*   internal links, which point to other locations in the ebook;
*   external links, which point to websites.

Internal links are most commonly used for cross-references and footnotes. External links for further reading (or watching and listening, as the case may be). External links will almost always open in a separate program, like a web browser or app. For instance, if you're reading an ebook on a smartphone and click a link to a YouTube video, the video will open either in the phone's default web browser, or in the YouTube app if it's installed.

In HTML, internal and external links look very similar. First, I'll explain how they work. Then I'll show you how to add them really easily in Sigil.

## External links

Let's start with a basic external link:

~~~ html
<a href="http://electricbookworks.com">This link points to EBW's website.</a>
~~~

As you can see, a link consists of:

*	an anchor tag `<a>`
*	with one attribute, the `href`, or hyperlink reference.

The opening `<a>`and closing `</a>` tags enclose the text that will be clickable in the ebook, like this:

[This link points to EBW's website.](http://electricbookworks.com)

## Internal links

Let's create an internal link in this document to the 'Working with images' chapter. The HTML will look like this:

~~~ html
<a href="3-images.html">Click here to go to the 'Working with images' chapter.</a>
~~~

When rendered, this will look like this in the ebook:

[Click here to go to the 'Working with images' chapter.](3-images.html)

(If you're reading this as an ebook, this will work as an internal link. It might not work if you're reading this elsewhere. Note you'll have to scroll back here or use the Table of Contents to get back to this chapter.)
{:.non-printing}

As you can see, jumping to the start of another HTML file is easy, you just use the file name as the `href` value, e.g. `href="filename.xhtml"`.

But what if we want to jump to a specific point in a chapter? For instance, to a specific element like a paragraph or heading or image? We have to mark that destination element somehow, so that we can point an `href` to it. 

We do this by giving the element an ID. This is easy to do:

*	make up an ID name (it must be unique in that HTML file),
*	use no spaces, avoid capital letters, and don't start with a number, and 
*	include it as an attribute in the element's opening tag, like this: `<p id="bobsyouruncle">`

Then, when we make our link, we use that ID as the `href`, joined to the file name with a hash sign:

~~~ html
<a href="1-html.html#bobsyouruncle">Click here to go to the specific paragraph I'm linking to.</a>
~~~

I've planted an ID in another chapter to demo this. [Click here to go there](1-html.html#bobsyouruncle). You'll find a link there, too, to get back here with.
{:#backtobob .non-printing}

If you're linking to another place in the same HTML document, you don't even need the file name. You could just use a hash sign with the `id`:

~~~ html
<a href="#another-id">This goes to a point in this same HTML doc.</a>
~~~

So link paths are relative to the file they're in.

## Clickable images

It can be really useful to make an image clickable. To do this, you just wrap the `<a>` element around the `<img>` element, like this:

~~~ html
<a href="somewhere.xhtml">
	<img src="bob.jpg" alt="Uncle Bob" />
</a>
~~~

However, some ereaders, including some versions of Adobe Digital Editions, don't support clickable images, which is annoying. So use them, but don't rely on them to work 100 per cent, every time.

## Adding links with Sigil

Sigil can create the link code for you. Whew!

*	Highlight the text you want to make clickable.
*	Go to `Insert > Link…`.
	*	If you're creating an internal link, pick a target from the list. Sigil lists all the HTML files and IDs in the book.
	*	If you're creating an external link, paste the full URL in the `Target` field.
*	Click 'OK'

If you're linking internally, and the element you want to link to isn't in the `Targets in the Book` list, you need to give that element an ID before linking to it. To do this:

*	go to the element you're linking to, and highlight it;
*	go to `Insert > ID…`;
*	make up an ID (no spaces, don't start with a number, and avoid uppercase letters);
*	click 'OK'.

Now that element's ID will be listed in the `Targets in the Book` list when you insert a link.
