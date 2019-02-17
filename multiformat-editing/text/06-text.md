---
title: Text
---

# Text
{:.no_toc}

* TOC here
{:toc}

In this section we'll get to the nitty gritty of dealing with text for multi-format publications. We'll cover practical tips for dealing with special characters, links, cross-references, capitalisation, indexing, and mathematics.

## Special characters: fonts, Unicode glyphs and markup

In the [Connecting humans and machines section](02-connecting-humans-and-machines.html#character-encoding-and-Unicode){:.show-page-number} we explained how character encoding works.

What does that mean for editors?

When we're working in simple English, this means almost nothing. Just keep going and computers will do the rest.

But as soon as you start working with special characters, it's critical that you use Unicode characters.

Let's say you want to insert a degrees symbol, '°'. That symbol is not on your keyboard, and you're not sure how to insert it. Authors will often insert an o (the lowercase letter 'oh'), and make it superscript using formatting tools. That is a Very Bad Idea!

Let's say you send the file to someone else, who copies and pastes your `30°C` into a different software program. Their program handles superscript differently, or doesn't support it at all. Now they have an o where you intended a degree symbol: `30oC`!

This is just one common example. As you work, you'll find many cases where authors misuse incorrect characters, rather than the correct Unicode character. It happens most often in languages other than English, where it's hard to find specialised Unicode characters, and ones with unusual diacritics. In South Africa, this is often a challenge in Tshivenda translations.

**So how do you find the correct character?** There are a host of clever software programs for this that you can use or install, but often the simplest technique is to search online for, say, 'Unicode degrees symbol'. That will show you several official Unicode pages you can copy and paste from.

### Helpful and unhelpful fonts

Fonts can cause extra confusion.

Some fonts *look* like they provide glyphs for special characters, but their characters do not map correctly to Unicode code points. So a character that looks like, say, a '[letter f with hook](https://en.wikipedia.org/wiki/%C6%91)' in that font might actually be encoded as, say, the number 4. If you change the font, you end up with incorrect text.

Many fonts do not include glyphs for many less-common Unicode characters. If the font you are using in your editor does not show a character you have inserted, you might see a little box instead, as a [substitute character](https://en.wikipedia.org/wiki/Substitute_character) (sometimes called 'tofu'). You may need to change the font you are using to one that supports a bigger glyph set. A good option is [Noto](https://www.google.com/get/noto/){:.show-url}. 

## Non-breaking spaces

If your text will reflow every time it appears on someone's screen, you can't control where lines will break. A line may break, for instance, in the space in `100 mm`, or the number `100 000`, or before an `…` ellipsis. To avoid this, use a non-breaking space.

A non-breaking space is a Unicode character.

In many Mac programs, you type a non-breaking space with Alt + Space. On Windows the shortcut varies between programs. If you're writing in markdown or raw HTML, you represent a non-breaking space by typing `&nbsp;`. (This is called an HTML entity. HTML entities always start with `&` and end with `;`.)

## Discretionary hyphens

If you need to break a long word with a hyphen, never use an actual hyphen character. While it may look fine on your screen, when that text reflows the hyphen might appear in the middle of a line.

Instead, insert a discretionary hyphen, also called a soft hyphen. A soft hyphen is a character that remains hidden until it's needed. If a word has a soft hyphen in it, you won't notice the hyphen unless the word can't fit at the end of a line, at which point the soft hyphen will show, and the word will break over the line.

A soft hyphen is a Unicode character. If you're editing markdown or raw HTML, type `&shy;` to represent a soft hyphen. (This is easy to remember, because a soft hyphen is shy.)

## Links and linking

A common dilemma for editors is how to handle links to websites in multi-format books. 

### Long, unwieldy links

Some websites have very long, clumsy URL schemes, creating links so long that they cause horrible line breaks. And you'd never want them appearing in your body text. You can use a URL shortener like [bit.ly](https://bit.ly) or [goo.gl](https://goo.gl/) to create short links that will redirect to the long, clumsy one.

Some links contain long strings of characters that don't actually need to be there for the link to work. (These strings are called parameters, and they carry extra info that is only useful to the website for tracking purposes, but not to the user.) If you spot a `?` in a URL, it's possible that the `?` and everything after it isn't necessary. Try chopping it off and see if the link still works.

### Links can break

Websites change and disappear all the time. So links can be temporary. You can't always check every link, and even if you check it today, it might not work tomorrow. If you're worried about this, you can save the page at the [Internet Archive](http://archive.org/web/){:.show-url} and link to the archived version.

For important links you may even want to make and keep a [screenshot](https://support.mozilla.org/en-US/kb/firefox-screenshots) of the page, in case you need it in future.

### Links in print

When writing for the web only, we don't show the URL of a link, we just turn some text into a clickable link. And when writing for print only, we have to write out the URL for people to read. What do we do when our text might appear in both formats?

First we have to decide which links need to appear in print. Links are ugly in print, and since **not all links are important** we can choose which ones to show in print. So we either:

1. make all links just clickable text, and choose which ones to show as full URLs in print, or
2. include all full URLs, and choose which ones to hide on screen.

Since your publication will appear on more screens you don't control than on printed pages you don't control, option 1 is best.

In our stylesheets at Electric Book Works, we let editors add a `show-url` tag to links they want to show in print. That way, they create all links as clickable text, and ones that are important enough to show in full in print will display in full.

If working in markdown, a link might look like this:

``` md
You can search on [Google](https://google.com).
```

To make that URL appear in print, we add a tag:

``` md
You can search on [Google](https://google.com){:.show-url}.
```

This text outputs like this (in whichever format you're reading this):

> You can search on [Google](https://google.com){:.show-url}.

## Cross references: page numbers and purple numbers

In print, cross-references are done in two ways:

- we name the section we're referring to (e.g. 'See Chapter 1') or
- we refer to a page number (e.g. 'See page 50').

On the web, cross references are almost always text as clickable links, where the text is the word that names the thing you're linking to, and you're linking to a location in your book. That is, you use an *internal link*.

For instance, we might just write, 'To see how indexes work, [see the Indexing section](#indexing),' the phrase 'see the Indexing section' is the clickable, linked text.

Page numbers are super useful to readers, but in multi-format publications, we certainly don't want page numbers showing on screen, where they are meaningless because pages are not fixed.

So it's usually best to name the section you're referring readers to, rather than using page-number references. In some books, it's appropriate to number sections, and those numbers can be useful for cross-referencing; but numbering sections can also be ugly, and make a book feel bureaucratic.

In some PDF software, it's possible to get the software to detect the page on which a link target appears and insert the page number automatically. When we use PrinceXML to create PDFs, our stylesheets tell PrinceXML to insert a page reference when we add a `show-page-number` tag to a link. For instance, we might write this in markdown:

``` md
The [introduction](0-4-intro.html){:.show-page-number} lists some possible output formats.
```

If you're reading a print version of this that we created, you'll see the correct page number here:

> The [introduction](0-4-intro.html#introduction){:.show-page-number} lists some possible output formats.

And if you're reading on screen, you'll just see that the word 'introduction' is a link to that section.

### Purple numbers

'Purple numbers' is a name for creating regular numbers alongside text that stay with the text in every format. (When they were first described, they were purple.) They are a kind of digital equivalent of traditional page numbers, and you can use them to refer to parts of a document.

For some publications, this might be an appropriate way to create multi-platform cross-referencing scheme.

One of the common uses of purple numbers is in classroom settings, where different students might be using different formats of a textbook. By referring to purple numbers, a teacher can point all students to the same place in the book across all formats.

### Creating internal links

How you create internal links depends on the software you're editing in. If you're writing in markdown or using an HTML editor, creating an internal link is fairly simple. The trick is knowing where you're linking to.

In our books, we keep all book parts in files in the same folder. This makes internal links easy: we link to the document name (with an `html` file extension) followed by a `#` ID that identifies the text we're linking to. For instance, all of our headings automatically have an ID that is the 'slug' of the heading text. A slug is text reduced to lowercase letters and hyphens, and no spaces. So for this subsection's heading we use `#creating-internal-links`. To link to this subsection from another file in this book, we'd link to `06-text.html#creating-internal-links`.

## Capitalisation

A simple rule to follow: never use all-lowercase or all-uppercase letters for your text, because that choice is almost always a *design* consideration. Use only normal sentence case, and title case when appropriate for titles (if that's your house style for titles).

If in a given format the designer wants certain features to display all lowercase or all uppercase, they can program that into their stylesheets.

## Indexing

Traditionally, book indexes are entirely page-based. They are created by professional indexers, who work through a book once its pagination is final. They create a long list of index entries, each with page numbers. A great index is a work of literature in itself.

Because traditional indexes rely entirely on page numbers, they can only be created at the end of the book-production process. After they're created, pagination cannot change without breaking the index (and wasting lots of time and money). And indexes cannot be reused in reflowable ebooks where page numbering no longer applies. An ereader's search function is a very poor substitute for a well-crafted index, which might list themes and structure ideas in ways that search can't replicate.

A book index may include:

- section headings (e.g. A, B, C to make long lists easily navigable)
- entries
- subentries
- cross references (e.g. see, see also)

In HTML, a book index should be structured as an unordered list, so that it can be easily formatted with CSS.

Each entry and subentry is followed by one or more locators. While most locators refer to a specific point in text, some refer to a range, 'from point A to point B' (e.g. 'geek 5, 12–16').

In PDF output, locators should be page numbers (in our case page numbers are generated from links by PrinceXML when we create PDFs). In ebooks and on the web, the locators should be a sequence of numbers from 1, each linking to a point in the book's text. Where print might have 'geek 5, 12–16' in its page-based index, an ebook might have 'geek 1, 2–3', where the numbers only refer to the order in which geeks appear in the text.

So in our markup, we need to do two things:

1. Create IDs in the body text, so we can link to those places
2. Manually write the index, linking numbers to those places.

We let our print stylesheet, executed by PrinceXML in our case, replace the numbers with page references when creating a PDF version.

This is all very labour intensive, so real indexes are very rare in multi-format books.

## Maths

Maths is notoriously hard to get right in book publishing, and always has been. There are two ways to include maths in multi-format books:

1. As images.
2. Using special maths markup, like MathML or LaTeX.

It is technologically simpler to use images: create an image of every piece of maths and insert it like any other image. However, there are a few reasons images are second-prize:

- images are never great containers for text. They might be unreadable on small screens, or pixelated on large ones.
- Search functions don't work on images.
- Users can't copy and paste from images.
- Images make file sizes really big.
- If authors provide ugly or inconsistent images, designers can introduce errors when they recreate those images to look good, and proofreaders can rarely check complex maths for accuracy.

If our editing and production software supports it, we can create maths using some kind of special maths markup. The two main options are MathML and LaTeX.

MathML is a kind of XML (which we touched on in '[Connecting humans and machines](02-connecting-humans-and-machines.html#markup)'): 'maths markup language'. It's almost impossible to write MathML code by hand. Generally you'd use dedicated maths software to create it, and then paste the code into your manuscript.

LaTeX is much easier to write, if your software supports it. At Electric Book Works, we use LaTeX, because our software automatically converts it for each of our output formats. For instance, we write `$$E = mc^2$$` and we get *E* = *mc*². (The `$$` signs wrap any LaTeX maths we want converted.)

It is very important to establish right at the beginning of a project, even before authors start writing, how maths will be created in the manuscript and processed through production.

## Text in images

As we mentioned in passing earlier, avoid including text in images where possible. Text in images can be unreadable on small screens, it can't be found by searching in a document, and it makes translation projects much more expensive, because images have to be recreated for each language.

Sometimes you have to put text in images. For instance, graphs must have axes and labels. When that happens, you must create a detailed stylesheet for your team that defines image sizes, font sizes and styles, and colours to use when placing text in images.
