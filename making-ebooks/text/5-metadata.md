---
title: Metadata
---

# Metadata

Metadata is information about information. For instance, your driver's licence is metadata about you.

Epub ebooks must store some information about themselves so that machines know how to deal with them. You have to provide some of this metadata. Some metadata applies to the epub as a whole, some to specific files, and some even to specific elements inside files.

Technical note
:	Book-level and document-level metadata is actually stored in a special file called `content.opf`. Sigil will let you edit that file directly (just double-click it on the left), but editing it directly is not a good idea. You do not want to break something. Rather use Sigil's metadata editing tools.

## Book-level metadata

Just to be a valid epub, epub-level metadata must include:

*   an identifier (like an ISBN)
*   the publisher's name
*   a date of publication or creation.

It's also best practice to include:

*	the title
*	an author.

To add this metadata in Sigil, just go to `Tools > Metadata Editor`. 

## Document-level metadata

In your epub you'll have a bunch of HTML files, and each will likely correspond to a part of a book: cover, title page, copyright page, preface, and so on. If an ereader knows which HTML file represents each book part, it can do useful things. For instance, the first time you open an ebook, most good ereaders will jump you straight to the first chapter, skipping all the frontmatter. That's if it knows which HTML file is the first chapter.

Sigil lets us set this information as document-level metadata. Just right-click each HTML file and go to `Add Semantics…` then tick the book-part that corresponds to that chapter.

Only one file can correspond to each book part. And the most important semantic tag is the one Sigil calls 'Text'. That's the file that ereaders will jump to on first opening a new ebook.

In addition to adding semantics for HTML files, you *must* also add semantics for the cover image, usually `cover.jpg`, in your `Images` folder. Right-click the image file and select `Add Semantics > Cover Image`. This tells ereaders to use that image in its Library display, which is very important to users.

## Element-level metadata

It's rare that you'd deliberately add metadata to elements within files, such as specific paragraphs or phrases, because you really don't have time or a clear need for it. But do keep in mind that it's possible, so that you can experiment with possibilities. For instance, imagine if you were creating a travel guide, and you marked up each phone number – for guest houses, museums, restaurants – [like this](http://schema.org/telephone):

~~~ html
<span itemprop="telephone">+27 21 671 1278</span>
~~~

Ereaders could use this tagging to recognise phone numbers and let you dial them from your smartphone with a single click. 

If you're curious about the possibilities, [read up online about 'microdata'](http://en.wikipedia.org/wiki/Microdata_(HTML)).
