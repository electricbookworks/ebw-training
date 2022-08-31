---
title: Working with text
---

# Working with text
{:.no_toc}

* TOC here
{:toc}

Let's get into the nitty gritty of dealing with text in digital publications. We'll cover practical tips for dealing with special characters, links, cross-references, capitalisation, and mathematics.

## Special characters: fonts, Unicode glyphs and markup

### Character encoding and unicode

Character encoding is about the most technical thing we're going to cover.

1. **Computers are binary**. That means that at their core they only have two modes: on and off. We humans refer to these two modes as 'yes and no', or 'true and false', or 'one and zero'. Everything computers do must be reduced, ultimately, to a series of switches from one to the other. When we humans write these switches, we use 1 for on and 0 for off.
2. So, in computing, **every character is represented as a pattern of ones and zeros,** e.g. `01000001` can represent the letter 'A', and `01000010` the letter 'B'.
3. There are many characters to encode in this way. Over the years, various organisations have established different official sets of characters. The most important character set is called **Unicode,** which is a list of about 100&nbsp;000 characters (and growing, especially with emojis).
4. Us humans must then agree on which particular sequences of 1s and 0s represent each of those characters. The most common sequences for encoding characters in the Unicode set is called **UTF-8**.
5. In theory, every computer file should note its character encoding in its code, so that your computer knows which characters to display for its 1s and 0s. This is not always the case.
6. If you open a document, or a web page or ebook, and the characters look wrong, it's usually because the document and your computer are using different character encoding. Usually, if your software lets you decide what encoding to use, you can switch to the correct encoding for the file you've opened, and the characters will then appear correctly.

When we're working in simple English, we rarely have to worry. Just keep going and computers will do the work.

When we're working with special characters – anything beyond the Latin alphabet, numbers and English punctuation – it's critical that we use Unicode characters, and use UTF-8 encoding wherever possible.

Let's say you want to insert a degrees symbol: °. That symbol is not on your keyboard, and you're not sure how to insert it. Authors will often insert an o (the lowercase letter 'oh'), and make it superscript using formatting tools. That is a very bad idea!

Let's say you send the file to someone else who copies and pastes your `30°C` into a different software program. Their program handles superscript differently, or doesn't support it at all. Now they have an o where you intended a degree symbol: `30oC`!

This is just one common example. As you work, you'll find many cases where authors misuse incorrect characters, rather than the correct Unicode character. It happens most often in languages other than English, where it's hard to find specialised Unicode characters, and ones with unusual diacritics. In South Africa, this is often a challenge in Tshivenda translations.

**So how do you find the correct character?** There are a host of clever software programs for this that you can use or install, but often the simplest technique is to search online for, say, 'Unicode degrees symbol'. That will show you several official Unicode pages you can copy and paste from.


### Helpful and unhelpful fonts

Fonts can cause extra confusion.

Some fonts *look* like they provide glyphs for special characters, but their characters do not map correctly to Unicode code points. So a character that looks like, say, a '[letter f with hook](https://en.wikipedia.org/wiki/%C6%91)' in that font might actually be encoded as, say, the number 5. If you change the font, you end up with incorrect text.

Many fonts do not include glyphs for many less-common Unicode characters. If the font you are using in your editor does not show a character you have inserted, you might see a little box instead, as a [substitute character](https://en.wikipedia.org/wiki/Substitute_character) (sometimes called 'tofu'). You may need to change the font you are using to one that supports a bigger glyph set. A good option is [Noto](https://www.google.com/get/noto/){:.show-url}, because Google has deliberately aimed to include a massive glyph set in the Noto font.


## Non-breaking spaces

If your text will reflow every time it appears on someone's screen, you can't control where lines will break. A line may break, for instance, in the space in `100 mm`, or the number `100 000`, or around an ellipsis, `…`. To avoid this, use a non-breaking space.

A non-breaking space is a Unicode character.

In many Mac programs, you type a non-breaking space with Alt + Space. On Windows the shortcut varies between programs. If you're writing in markdown or raw HTML, you represent a non-breaking space by typing `&nbsp;`. (This is called an HTML entity. HTML entities always start with `&` and end with `;`.)


## Discretionary hyphens

If you need to break a long word over two lines with a hyphen, never use an actual hyphen character. While it may look fine in your current layout, when that text reflows the hyphen might appear in the middle of a line.

Instead, insert a *discretionary hyphen*, also called a soft hyphen. A soft hyphen is a character that remains hidden until it's needed. If a word has a soft hyphen in it, you won't notice the hyphen unless the word can't fit at the end of a line, at which point the soft hyphen will appear, and the word will break over the line.

A soft hyphen is a Unicode character. If you're writing markdown or raw HTML, type `&shy;` to represent a soft hyphen. (This is easy to remember, because a soft hyphen is shy.)


## Links and linking

A common dilemma for editors is how to handle links to websites in publications that will appear both in print and on screens:

- In print, links are not clickable, so the URL needs to be visible and easy to read and retype.
- On screen, text relevant to the link should be clickable, and ugly URLs should be invisible.
- In any format, if a URL must be visible, it shoud be short and readable. Use a link shortener to simplify longer links. More on this below.


### Long, unwieldy links

Some websites have very long, clumsy URLs. In text, these links are unreadable, and so long that they cause horrible line breaks. You'd never want them appearing in your body text.

You can use a URL shortener like [bit.ly](https://bit.ly) or [goo.gl](https://goo.gl/) to create short links that will redirect to the long, clumsy one.

Some links contain long strings of characters that don't actually need to be there for the link to work. These strings are called 'query strings', and they usually carry extra info that is only useful to the website (for instance, for tracking purposes), but not to the user.

If you spot a `?` in a URL, it's likely that the `?` and everything after it isn't necessary. Try chopping it off and see if the link still works.


### Links can break

Websites change and disappear all the time. Assume all links are temporary. You can't always check every link, and even if you check it today, it might not work tomorrow. You can save the page at the [Internet Archive](http://archive.org/web/){:.show-url} and link to the archived version – in the hope that the wonderful Internet Archive lasts a long time!

For important links you may even want to make and keep a [screenshot](https://support.mozilla.org/en-US/kb/firefox-screenshots) of the page, in case you need it in future.

You can also use (or have a developer create for you) a URL-redirection service that lets you:

1. Create readable short links, including ones that use your own domain name
2. Change where those links point to as needed.

This way, you can use short, readable links in all your publications, and when the links they point to break, you just change where they point to. Then you don't have to change the text of your publications.

[EasyRedir](https://www.easyredir.com/) is an example of a paid service for this. If you're going to be using a lot of links in several publications, it might be worth setting up your own system so that you own the domain that you use for short URLs. That way, you won't have all your links break if the service you're using goes away.


### Links in print

When writing for the web only, we don't show the URL of a link, we just turn some text into a clickable link. And when writing for print only, we write out the URL for people to read. What do we do when our text will appear in both print and web formats?

First we have to decide which links *really* need to appear in print. Links are ugly in print and, since not all links are important, we can make all links just clickable text, as if we were writing for the screen. And then, by adding a tag to important links, we display the full URL in those instances.

In our stylesheets at Electric Book Works, we add a `show-url` tag to links that should show as URLs in print. That way, we create all links as clickable text, and display URLs for the ones that are important enough to show in full in print.

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

Those tags are only possible if you're using kramdown, a particular version of markdown that supports tags.

### Creating internal links

An internal link is one that links to another point in the same document, like a cross reference in a book.

How you create internal links depends on the software you're editing in. If you're writing in markdown or using an HTML editor, creating an internal link is fairly simple. The trick is knowing where you're linking to.

In our books, we keep all book parts in files in the same folder. This makes internal links easy: we link to the document name (with an `html` file extension) followed by a `#` ID that identifies the text we're linking to. For example:

``` md
[Change and the living Internet](01-context.html#change-and-the-living-internet)
```

All of our headings automatically have an ID that is the *slug* of the heading text. A slug is text reduced to lowercase letters and hyphens, and no spaces. For this subsection's heading we would use `#creating-internal-links`. To link to this subsection from another file in this book, we'd link to `06-text.html#creating-internal-links`.

## Cross references: page numbers and purple numbers

In print, cross-references are done in two ways:

- we name the section we're referring to (e.g. 'See Chapter 1') or
- we refer to a page number (e.g. 'See page 50').

On screens, cross references are almost always text as clickable links, where the text is the word that names the thing you're linking to, and you're linking to a location in your book. That is, you use an *internal link*.

For instance, we might just write, 'See the section on [discrectionary hyphens](#discretionary-hyphens)' where the phrase 'discrectionary hyphens' is the clickable, linked text.

Page numbers are super useful to readers, but in multi-format publications, we certainly don't want page numbers showing on screen, where they are meaningless because 'pages' are not fixed.

So it's usually best to *name the section you're referring to*, rather than using page-number references. In some books, it's appropriate to number sections, and those numbers can be useful for cross-referencing. That said, numbering sections can be ugly, and make a book feel like a boring textbook.

In some PDF software, it's possible to get the software to detect the page on which a link target appears and insert the page number automatically. When we use PrinceXML to create PDFs, for instance, our stylesheets tell PrinceXML to insert a page reference when we add a `show-page-number` class to a link. For instance, we might write this in markdown:

``` md
The [introduction](0-4-intro.html){:.show-page-number} lists some possible output formats.
```

If you're reading a PDF version of this that we created, you'll see the correct page number here:

> The [introduction](0-4-intro.html#introduction){:.show-page-number} lists some possible output formats.

And if you're reading this on the web or in an ebook, you'll just see that the word 'introduction' is a link to that section.

### Purple numbers

'Purple numbers' are regular numbers that sit alongside passages of text. Each number stays alongside its passage in every format. When they were first described, they were purple, hence their name. They are a kind of digital equivalent of traditional page numbers, and you can use them to refer to parts of a document.

For some publications, this might be an appropriate way to create multi-platform cross-referencing scheme.

One of the common uses of purple numbers is in classroom settings, where different students might be using different formats of a textbook. By referring to purple numbers, a teacher can point all students to the same place in the book across all formats.

## Capitalisation

A simple rule to follow: *never use all-lowercase or all-uppercase letters* for your text. Whether to display, say, headings as all lowercase or uppercase is a *design* consideration, not a *content* one. Use only normal 'Sentence case', and 'Title Case' when appropriate for titles (if that's your house style for titles).

If in a given format the designer wants certain features to display all lowercase or all uppercase, they can code that into their stylesheets.

## Maths

Producing complex maths is notoriously hard. There are two ways to include maths in digital publications:

1. As images.
2. Using TeX, a markup language for maths.

It is technologically simpler to use images: create an image of every piece of maths and insert it like any other image. However, there are a few reasons to avoid using images:

- Images are never great containers for text. They might be unreadable on small screens, or pixelated on large ones.
- You can't search for text in images.
- Users can't copy and paste from images.
- Images make file sizes really big.
- If authors provide ugly or inconsistent images, designers can introduce errors when they recreate those images to look good, and proofreaders rarely check complex maths for accuracy.

If your editing and production software supports it, you can create maths using TeX, a syntax for writing complex maths in plain text, so that a TeX processor can display it as proper maths. The most popular processor for converting TeX to beautiful maths on the web is [MathJax](https://www.mathjax.org/). [KaTeX](https://katex.org/) is an increasingly popular alternative.

Another maths markup syntax is MathML. MathML is a kind of XML (which we touched on in '[Connecting humans and machines](02-connecting-humans-and-machines.html#markup)'). MathML stands for 'maths markup language'. It's almost impossible to write MathML code by hand. Generally you'd use dedicated maths software to create it, and then paste the code into your manuscript. Only [a few browsers](https://caniuse.com/#feat=mathml) support MathML, so it's likely it will be phased out.
{:.box}

TeX is easy to write. At Electric Book Works, we use TeX and MathJax. For instance, we write `$$E = mc^2$$` and we get *E* = *mc*². (The `$$` signs wrap any TeX maths we want converted.)

It is very important to establish right at the beginning of a project, even before authors start writing, how maths will be created and processed through production.
