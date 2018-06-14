---
title: Tables of contents
---

# Tables of Contents

In an ebook, the table of contents can take two forms:

*	a 'Contents' page among the book's opening pages, as in a print book;
*	a navigation list displayed by the ereading software (e.g. a menu in a slide-out panel or navigation screen).

It's optional whether to include a 'Contents' page. I generally avoid it, because it's extra work and an ereader's navigation menu is usually easier to use while reading. If you do create one, it's essentially a list of headings in the book, each hyperlinked to the relevant point in the book.

The navigation list, however, is mandatory. You store this list in a special file listing links to chapter or other headings in the book. Each ereader displays this table-of-contents list in a different way: for instance, as a navigation bar, a slide-out panel, a menu list, and so on.

At this point, the way we create the navigation list depends on whether we're creating epubs according to the EPUB2 or EPUB3 spec. Right now, Sigil only supports EPUB2. So we'll start there.

## EPUB2 tables of contents

In EPUB2, you store the navigation list in a `toc.ncx` file (`toc` for Table of Contents, of course). You can see this file in Sigil, but *you do not want to edit it yourself*. The syntax is a real headache. Let Sigil code the `toc.ncx` file for you: use `Tools > Table Of Contents > Generate Table Of Contents…` to create and edit it.

Note that Sigil generates the TOC by collating all heading elements, from `<h1>` to `<h6>`. You can edit this manually in the TOC editor, but try to keep edits to a minimum. Ideally your heading levels should be so well-constructed that editing isn't necessary.

## EPUB3 table of contents

In EPUB3 you store the navigation list in a dedicated XHTML file with any name you like. It's common to call it `nav.xhtml`, and to refer to it as the `toc nav`. You can then choose whether or not to include this XHTML file as content in your book – that is, as a 'Contents' page among the book's opening pages. (Technically speaking, the file is always listed in the OPF `manifest`, but only included in the `spine` if it must appear in the book content.)

We aren't going to go into detail about how to create that file here, since we're focusing on EPUB2 with Sigil. But you can [read up about it online](http://epubzone.org/news/epub-3-navigation) if you're curious.

Technical note: EPUB3 with EPUB2 fallback
:	The EPUB3 specification allows for an epub to include a [toc.ncx file as a fallback](http://www.idpf.org/epub/30/spec/epub30-publications.html#ncx-superseded) for ereaders that don't support EPUB3's EPUB Navigation Document. Hopefully, when Sigil becomes EPUB3 capable, it'll provide this fallback automatically.

### Further reading: *EPUB 3 Best Practices*

If you want a great reference book, go get *[EPUB 3 Best Practices](http://shop.oreilly.com/product/0636920024897.do)* from O'Reilly Media.
