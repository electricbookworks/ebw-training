---
title: Practical typesetting for print and digital
---

# Practical typesetting for print and digital

By now, you’ve worked through a lot of information, much of it new and
technical. Well done even getting this far. Now we’re really getting to
the nitty gritty of making books that work for print and digital.

It makes a huge difference if your existing way of designing and
typesetting follows rules that make for easy ebook conversion. So I’m
going to work through some practical design and typesetting issues that
make conversion to ebook formats easier and more reliable, particularly
for EPUB. For instance, you don’t want to discover, when it’s too late,
that a text box you create on page 150 doesn’t appear in your ebook, or
that your ebook won’t open on a Sony Reader because of the way you’ve
set up your InDesign documents.

So, the practical suggestions here are meant as best practice whether
you’re designing and typesetting for print or for digital. Just make
them part of how you work.

And one more thing: the key here is discipline. The guides here are
worth very little if, from time to time, you let your guard down and get
sloppy. Maybe you forget to add metadata to the File Info, or
unconsciously use local formatting in a section of a book – you’ll
understand soon why those things can let you down. Now that you’re
creating books that computers must understand, being disciplined about
how you structure and process content is critically important.
Computers, alas, are unforgiving automatons.

## Text flow

There are two rules of thumb for managing text flow:

1.  Set each chapter in a separate document, and gather them in an
    InDesign Book. Inside an EPUB, each chapter will then be in a
    separate HTML file. This means the software only has to open one
    chapter at a time, making your EPUB open more quickly and read more
    smoothly. (Old Sony Readers can’t even open an HTML file that’s
    bigger than 300K.) This also creates a nice page-break effect in the
    final EPUB, without having to add a page-break tag to the code.
2.  Thread (join together) all your text frames in one story flow. If
    you have any text boxes floating in your document, not threaded into
    the main story flow, after export that text will appear right at the
    end of your EPUB. (If you must have floating text boxes, anchor
    them, and give them their own paragraph style. This can make it
    easier to fix the threading problem after export later on. InDesign
    CS6 tries to get around this by detecting where boxes fall on the
    page, but it can be unreliable.)

## Images

Like floating text boxes, any image that isn’t anchored won’t appear
next to the relevant text after exporting to EPUB. (Again, CS6 will try
to detect their position.) So, anchor all your images.

Unfortunately, an anchored frame can’t contain other frames, so you
can’t anchor an image and a caption in the same anchored object. To add
a caption, you’re going to need to work on the actual the HTML code (for
instance, using Sigil).

Finally, if you have very large images in your book, you may need to
resize them, because some devices can’t display images larger than 10MB.
(From InDesign CS4 you can choose to have InDesign automatically resize
your images when you export to EPUB, which saves you the hassle. Just
make sure all images export as JPG, and not GIF or on auto – the GIFs
lose too much image quality.)

## Fonts

Fonts in ebooks are tricky. To display text in a given font, the device
that opens it must have access to the font files. So if you want a
reader to see your text in a specific font, you have to actually include
the font files in the ebook. This is called embedding the font.

When you make PDFs, most PDF software (like InDesign by default) will
embed the font files inside the PDF. That’s why fonts usually look fine
when you open PDFs from someone else, even though you don’t have their
fonts installed on your computer – the font files you need are inside
the PDF. But importantly, by default the PDF only includes a subset of
the font’s characters; just those characters the file needs. So if the
letter ‘q’ is not used anywhere in the document, the font file for ‘q’
might not be included in the PDF.

This is very useful for two reasons: one, it makes the PDF smaller than
if the entire font was embedded. Two, it means that when you send a PDF
to someone, you’re not sending them the full font files, which could be
a violation of the font’s owner’s copyright.

So PDF is easy, but EPUB is harder: you cannot embed a subset of a font
in an EPUB. You either include the whole font or nothing. If you include
the whole font in the EPUB file, you may be violating the font owner’s
copyright. If you include nothing, the reader won’t see the fonts you
intended. Their device will just pick another font they do have
installed already.

There is another problem: even if you do embed a font, many ebook
readers will simply ignore it anyway, and display the text in its own
font instead. Why? First, its software developers might not have had the
time to include code that reads fonts. Second, it’s likely that software
developers (e.g. Amazon and Apple) know that many publishers create
ebooks badly, including using ugly fonts, and they don’t want their
customers having a bad, inconsistent experience. Companies like Amazon
and Apple need their customers to have a consistently elegant
experience, even if it means overriding some good designs. In 2014
Amazon Kindle started allowing Kindle users to manually switch to seeing
the publisher’s font, rather than the Kindle default.

So, in the end, I recommend not embedding fonts in EPUBs. The defaults
in good ereading apps like Kindle and iBooks are fine.

However, if you have really good reasons for embedding a font, here are
some guidelines.

Try to use font files in
[OpenType](http://en.wikipedia.org/wiki/OpenType) format. Many TrueType
fonts can work, but OpenType is usually more reliable.

As I explained earlier, when you include a font in an EPUB file, you’re
including the entire font file. So, technically, you’re redistributing
the font. For most fonts, this is illegal. InDesign offers to encrypt
fonts (also called font mangling) to get around this, but that
encryption can cause technical problems with your EPUB, and is best
avoided.

So, use open-licensed fonts, such as those from the [Open Fonts
Library](http://en.wikipedia.org/wiki/Open_Font_Library). Or use [Google
Fonts](http://www.google.com/fonts), which are all open-licensed. You
may redistribute open-licensed fonts, so embedding them in an EPUB is
not illegal. Good options for text fonts are [Linux
Libertine](http://linuxlibertine.sourceforge.net/Libertine-EN.html) and
[Gentium](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&item_id=Gentium).

### InDesign CS3 quirks

In InDesign CS3, a specific font weight or style (bold, italic, light,
etc.) only survives the export to EPUB if you create a special character
style for it that specifies both the weight/style and the font family.
So you must create a separate character style (i.e. bold, italic,
underlined) for each font family you apply these styles to. You can’t
use a generic ‘bold’ style and apply it to different fonts. CS4 and
later are much more forgiving, but actually it’s good practice anyway to
do this, because it makes for better, more flexible CSS code in your
ebook in the end.

## Styles

Good designers always use paragraph and character styles to format text,
and never local formatting. That is, they never highlight a word and
click the ‘Italic’ button on the toolbar. They’d create a character
style, perhaps called ‘emphasis’, highlight the word, and apply that
style to it. This is best practice for all formatting, because you’re
then controlling all formatting in a book from one place: your styles
list.

But even good designers name their styles badly. What is a bad style
name? A bad style name is any name that describes the style’s
appearance. A good style name described the style’s purpose, or
function. For instance, it’s bad to name a heading style ‘blue-head’.
‘Blue’ is how it looks, now its function. It’s function might be to
start all the quiz sections. In that case, a better style name might be
‘quiz-head’.

Why? Well in your print book the heading might be green, but on a
grayscale ereader screen it will appear dark grey. And on a computer,
blue is usually used only for clickable links, and you don’t want to
confuse people with something that looks like a link. So you might use
CSS to make the quiz-heads pink, for instance.

Remember how we said you must always separate content and appearance?
This is an instance of applying that principle:

-   Function: ‘this paragraph is an item in an unordered list’.
-   Appearance: font, size, colour, line-height, margins, etc.

So, always name your styles by their function not their appearance. For
example, use ‘chapter-title’ for your main level of heading, not
‘large-bold’.

When you export your InDesign book to EPUB, your style names will become
part of the tags in the HTML code. Remember how we used a class
attribute to define a \<div\> as a ‘note’ in our HTML example earlier?
Your style names in InDesign will be the class names in your EPUB’s
HTML. That is very important to remember!

Another important implication of this is that you should always make
your style names lower-case, and never use spaces or special characters.

So, a paragraph styled with a style called ‘note’ in InDesign will look
like this in your EPUB’s HTML:

~~~ html
<p class="note">

  Your note text goes here.

</p>
~~~

Technically, InDesign is categorising that paragraph with a class that
uses the style name you chose: ‘note’. In the CSS InDesign creates for
you, it will define the appearance of that class of paragraph much like
this:

~~~ css
p.note {

  font-family: “Helvetica”;

  font-size: 10pt;

}
~~~

(When creating CSS, InDesign tries to create CSS styles that follow the
appearance of your InDesign styles, but the result won’t be exactly the
same as the text on your printed page.)

## Local formatting

In InDesign CS3, only defined styles (paragraph styles, character styles
and object styles) are exported to EPUB; all local formatting is
discarded when you export to EPUB.

This means that if you want a single word or phrase in bold type, you
need to create a character style (e.g. ‘strong-text’), and apply this
character style to all of the text that you need to be bold. If you then
decide that you want some of those words bold and italic, you must
create a second style to apply to those words to be turned bold and
italic (e.g. ‘strong-emphasis-text’).

In InDesign CS4, you get to choose when exporting to EPUB whether to
keep your local formatting or use your defined styles instead. However,
you shouldn’t use local formatting for your styles anyway. Local
formatting in the resulting EPUB makes a mess of your HTML and CSS code,
which then makes it far harder to change and manage text and formatting
in the EPUB later on. So, avoid any local formatting, and only use
styles to control the appearance of text.

## Pagination and master pages

PDF ebooks have pages like print books. But reflowable formats, like
EPUB and MOBI, have no fixed pages as such. So there is no pagination.
So when you export an InDesign file to EPUB, it will ignore:

-   text on master pages, including headers, footers, page numbers,
-   margins or page size.

So don’t put any important content, necessary for understanding the
book, on a master page.

## Spacing

Never use empty lines or empty paragraphs to create space in your books.
They will get ignored in the HTML of your ebook, and paragraphs you’ve
separated with space will lose that space. Rather, use your styles to
add spacing before and after paragraph styles, especially headings and
blockquotes.

You may need to search your document for empty paragraphs by searching
for two ‘End of paragraph’ marks, and solve each instance using the
paragraph style’s before-and-after spacing. You may need to create a few
new paragraph styles for this to work (e.g. a block quote of three
paragraphs would need three separate paragraph styles: a
‘blockquote-first’ with space above, ‘blockquote-next’ with an indented
first line, and a ‘blockquote-last’ style with space after.)

A tip: If you want to risk a global search-and-replace, you can’t just
remove all paragraph marks, or you’d end up with one long paragraph! So
first change all instances of two ‘End of paragraph’ marks with a
totally unusual sequence of special characters, like %\^@. Then replace
all instance of %\^@ with one paragraph mark. This can be a bad idea,
though. For instance, in many novels the author may have typed an extra
line space to create a break between sections, and you don’t want to
lose those. They should be individually managed by applying a style to
the first paragraph in the new section that has extra Space Above.

## Text alignment

It’s best not to use justified text in ebooks. On very small screens
this causes big spaces between words, especially if text ever wraps
around images. Rather use Left (ragged right), Right (ragged left), or
Centered.

## Background colours

I once tried to create an off-white ebook page, much like a paper book
might be printed on creme paper. I don’t recommend spending time on
this, it’s almost always wasted. Page colour is now often determined by
the ebook-reading device software for different contexts (e.g. dim or
reversed out for low-light situations). Sometimes users (like myself)
even choose to read their ebooks as white text on a black background,
completely subverting the designer’s intentions!

## Tables of contents

Most setters create tables of contents manually, typing in page numbers
by hand, and updating them manually when they change. Many don’t know
that InDesign lets you create a table of contents automatically. There
are a couple of good reasons why it’s worth learning how, even though
setting up styles for an automated table of contents can be a lot of
work.

The two good reasons are:

-   an automatic table of contents tell InDesign which paragraphs in
    your book are headings
-   it helps InDesign create your EPUB’s clickable navigation.

InDesign needs to know which of your paragraph styles are headings, and
which are text paragraphs, because when exporting to EPUB, in the code
your paragraphs need \<p\> tags and headings each need one of `<h1>`,
`<h2>`, `<h3>`, `<h4>`, `<h5>` or `<h6>` tags. There’s no real way for
InDesign to tell the difference between `<p>` and the six `h`s from your
styles alone – the table of contents does that.

InDesign needs you to use its ‘Insert Table of Contents’ feature to
signal which paragraph styles are headings, and which level of heading
they represent. In the EPUB code, InDesign will then tag those
paragraphs you include in your table of contents as HTML headings
(`<h1>` etc.), not as `<p>` paragraphs.

Why is this important? Well, some ereading software will not read your
CSS file at all, or only in part, and will instead impose its own CSS
based on [standard HTML
tags](http://www.w3schools.com/tags/default.asp). That means it ignores
your classes, and won’t show the fonts, colours, weights and so on that
you’ve so carefully defined. So if in your HTML both your headings and
your regular paragraphs are tagged as `<p>`, such software will not
distinguish between them, no matter what classes they’re in, and your
headings will look like regular text.

Note: If you export to EPUB from CS3, you have to change the tags in the
EPUB code manually. If you use CS4 or later, create an automatic Table
of Contents style in your InDesign document, where you include your
heading levels in the Table of Contents.

Importantly, creating an automatic table of contents in your InDesign
document also gets you a table of contents in your exported EPUB file,
which ereaders display as a clickable list. So always create one, even
if you don’t include it on any page in the for-print document. You can
just put it on the pasteboard, off page. It doesn’t even need page
numbers. It just needs to list all the headings you want in your EPUB’s
clickable table of contents.

Some tips:

-   When creating the Table of Contents in InDesign, create the TOC
    style and save it. You can then import the same TOC style into other
    InDesign documents with similar style names, saving you time later
    on.
-   If you’re working in an InDesign Book, create the Table of Contents
    in your style-source document. This is not necessarily the first
    document in your Book. When exporting to EPUB, InDesign will ignore
    any tables of contents created in other documents in the Book.
-   Avoid special characters in headings. For technical reasons (related
    to character-encoding), they can occasionally upset the EPUB code
    (the .ncx file) and break your table of contents and your ebook. (If
    your table of contents seems to get cut off early in your EPUB,
    check for special characters in the code.)

## Covers

Most setters create separate files for the cover of a book and its
interior. There are good reasons for this: a cover document that
includes a spine and back cover is a completely different size from
interior pages, and is often created by a separate designer anyway.

However, if there isn’t a front cover in your InDesign file, InDesign
can’t add it to the EPUB, right? You have to add it manually to the EPUB
after exporting from InDesign, using an EPUB editing program like Sigil.
If you do this, keep the image almost, but just below, 1000 pixels on
its longest side – that’s best for most ereaders.

There is another option: in your InDesign Book, include a one-page
document that contains only the front cover. You might call it
‘front-cover.indd’, for instance. Make it the first document in the
Book. When you export to EPUB, include it in the export. When you export
to PDF for printing, don’t include it. Remember that adding a single
page to the start of your Book will by default make the first interior
page of your book a left-hand page, which you don’t want. You’ll have to
set up your Book to keep the first interior page a right-hand page.

## Metadata

Some basic information about the book must be included in the EPUB file
itself. Some information is mandatory:

-   the title
-   the creator (usually the author)
-   a unique identifier of some sort (such as an ISBN or UUID; InDesign
    generates a UUID for you when you export to EPUB).
-   a date of publication or creation.

InDesign can add this metadata for you if you enter it in the InDesign
document’s File Info (Info \> File information). In InDesign CS3, this
has been known to cause problems with the EPUB code, but it’s still a
good idea to include at least the title and author in the File
Information, since that’s the minimum that an EPUB needs in order to be
a valid EPUB.

InDesign CS4 and 5 don’t let you add the publication date to the EPUB,
which is required by the EPUB specification. You may need to add the pub
date metadata by hand in the EPUB code, or using an editor like Sigil or
Calibre’s metadata-editing tools.

## Embedding multimedia

Here’s an irony: in the early days (around 2006 to 2010) embedding
multimedia like soundtracks and video was surprisingly easy to do.
Usually, it involved including a Flash video in your EPUB. Then Apple
brought out the iPad and decided it would not support Flash. This
effectively made putting Flash in EPUBs a waste of time. And as a
result, there’s currently no easy way to embed video or music in an
EPUB. No matter how you do it, only a handful of applications will be
able to open and play it, and that’s just not good enough.

So I suggest placing video or audio on a media-sharing site (like
YouTube, Vimeo, or Soundcloud), embed it on your own branded site if you
like, and then simply link to it from the ebook. This does mean readers
will have to be online to get the video or audio, and be on a device
that opens web pages (i.e. not an e-ink reader), but it’s the simplest,
cheapest way to link to video or audio.

## Getting inside the EPUB

You can edit almost anything in an EPUB using the free, open-source
editor [Sigil](https://code.google.com/p/sigil/), though you do need to
know (or be willing to learn) a bit about EPUB structure, HTML and CSS.

If you want or need to really get your hands dirty and open up an EPUB
yourself, just change the .epub file extension to .zip, and unzip the
file. Easy as that. Zipping it up again is not entirely straightforward.
Most importantly, the order in which files go back into the zip archive
is important (mimetype file first!). See the [EBW Knowledge
Base](http://electricbookworks.com/kb/) for details.

## Checking ebooks

Many people think that ebook conversions are quick and reliable. Sadly,
creating ebooks presents many opportunities for gremlins to creep in.
Check ebooks thoroughly before releasing them. A human being must at
least glance over every page, click on most or all of the links, and
open it on a variety of devices.
