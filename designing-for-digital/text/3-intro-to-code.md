---
title: An intro to HTML and CSS code
---

# An intro to HTML and CSS code

## Content, form and function

All of your work in digital will involve this key principle: in digital
documents, we always separate content from its appearance.

-   Content is your text and raw images (usually stored in HTML).
-   Form is how that content should appear to humans (usually controlled
    by CSS).

We connect content from its appearance by defining its function.
Function is what that content is meant to do: explain, signpost, attract
attention, provide peripheral info.

For people new to ebooks, the biggest shock is usually this: you cannot
determine or control the appearance of an ebook as you can with print.
You don’t decide what your reader will see. You just provide your design
preferences, and hope that your reader’s software and their display
choices won’t make a mess of it. Beyond that, your job is to structure
the content really well, so that no matter how it looks, it can be read
easily in the widest possible number of applications.

I can hear the typographers crying. Why and how has this happened?
Hundreds of years of typography for nothing? Not quite, there are good
reasons for the way things are right now, and they’re all really just
the Internet’s teething problems. But to understand what’s going on, you
have to know about HTML and CSS.

When you read anything on a computer (or mobile phone or ereader),
you’re reading your software’s human-readable representation of
machine-readable information. Here’s an example:

-   Only-machine-readable information: 0110100001101001
-   Human-readable representation: Hi
-   Human and machine-readable: `<html>Hi</html>`

This example does make some assumptions:

| Information | Assumption
|--
| 0110100001101001 | The computer knows you’re using the ascii standard for encoding characters.
| Hi | The human knows you’re speaking English.
| `<html>Hi</html>` | The computer has HTML-capable software installed, and the human knows what HTML looks like.

Those assumptions are very, very important. They define the standards
we’re using. With our assumptions/standards in place, the trick to
making ebooks is to combine machine-readable information and
human-readable information in one, well-crafted package.

Print-centric book design involves working with very little
machine-readable information. Or rather, the tools we use hide the
machine-only stuff from us. For instance, when you apply an InDesign
style to a paragraph, all that really matters for print is that, on your
screen, you get an appearance that is consistent and appealing to human
beings. But behind the scenes, in the depths of your computer, InDesign
is marking that paragraph with technical information that will give the
right instructions about appearance to any future machine that opens
your file.

Ebooks-making tools don’t hide as much of the machine stuff from us (the
latest versions of InDesign do try). This is because the standards for
ebooks are still settling, and the software can’t hide what it can’t
completely standardise.

So, if you’re going to be ebook-aware in your work, you need to know
what’s happening to your machine-readable information behind the scenes.
That starts with learning a little HTML.

HTML is human sentences marked with tags about those sentences. There is
a standard list of possible tags, and the computer needs those tags to
know what’s going on in the document. Adding a tag to content is called
‘marking up’. So HTML is a ‘markup’ language.

Many publishers have been using tagging for human typesetters for years.
For instance, they might have this in an edited manuscript:

~~~
[A head]Carving wooden animals

[box]Here you’ll learn how to carve wooden animals.[end box]
~~~

The tags are in square brackets, and the typesetter is meant to use them
as a guide when applying the design spec, and remove them from the text
as they work through it.

That is exactly what a computer does with HTML.

Let’s do that for our wooden animals example:

~~~ html
<html>

  <h1>

    Carving wooden animals

  </h1>

  <div class="note">

    <p>

        You’ll need a chisel for this chapter.

    </p>

  </div>

</html>
~~~

That may suddenly look a lot more complicated. But just take it step by
step:

The tag `<html>` tells a machine that this is an HTML document. So the
computer knows to follow the rules of HTML when reading it. The tag with
the slash `</html>` says where the HTML document ends. If a web browser
sees that document, it knows what to do with it: display the content as
a web page.

I’ve now got a heading tagged `<h1>` (for heading-level 1).

My note text I’ve put in a `<div>`, for ‘division’. Since a div can be
used to mark off any section of text, I have to say what kind of div
this is. So I’ve put this div in a class I’ve called `note`. I can make
up my own class names, and I think ‘note’ describes this feature’s
function well. A class is an attribute that I use to describe to an
element for the computer, like a `<p>` or a `<h1>` element, much like an
adjective describes an attribute of a noun.

The sentence inside the `<div>` is a paragraph. So I mark it up with a
`<p>` tag.

Note how I’ve indented the lines to show how some elements are nested
inside others (like the paragraph is nested inside the note div). This
makes the structure easier for humans to grasp.

Structure is also important for computers. In addition to its standard
list of tags, HTML has rules about structure. For instance, you can’t
put a paragraph inside a heading, like this:

~~~ html
<h1>

  <p>

    This paragraph shouldn’t be inside heading tags. It’s invalid HTML.

  </p>

</h1>
~~~

A heading like `<h1>` is completely different from a paragraph `<p>`.
This invalid HTML would just break an ebook.

Now, with the markup in place, the machine can finds its way around the
document. It knows the document is written in HTML. It knows where the
heading, note, and paragraph go. The information about a document is
called metadata – data about data. Metadata has always been a key part
of publishing. For instance, the title of book is metadata about the
book; library catalogue cards are good examples of old-school metadata.

Computers need metadata to automate things, and digital publishing is
all about automation. In digital publishing, in addition to creating
catalogue metadata about titles, author names and prices, we’re now
creating metadata – in the form of markup tags – about every paragraph
or even specific words.

In a very small, very simplified nutshell, that’s HTML. Yes, sure it
gets more complicated, but the point is this: work systematically, and
anyone can recognise and pick their way through HTML, and make changes
to a document if necessary.

You may have noticed, though, that while the computer knows what each
element is, we’ve provided no information about how it must look. What
font size? What colours? Where on the page? It needs a design spec, a
stylesheet. To be specific, cascading style sheets, or CSS.

So what’s CSS? CSS stands for ‘cascading style sheet’.

We all know what a stylesheet is in publishing: it’s a list of elements
or features (headings, paragraph types, page elements, and so on)
describing how each one should look. For instance, first-level headings:
green, 20 point, Helvetica. Body text: black, 12 point, Caslon. And so
on. CSS is a formal way of writing style information for a computer to
read.

CSS code looks different to HTML, since it’s a separate language with
its own syntax. Here’s an example of a CSS file that styles our HTML. As
you will see, it’s pretty intuitive. After the tag name, you put the
style info in curly brackets:

~~~ css
h1 {

  font-family: Helvetica, Arial, sans-serif;

  font-size: 20px;

  color: grey;

}

p {

  font-family: Georgia, Sylfaen, serif;

  font-size: 12px;

  color: black;

  line-height: 130%;

}
~~~

Note that I’ve included some font choices for the machine to choose
from, in order of preference. And, in the case of h1 for example, if the
computer doesn’t have my first two choices installed, any sans-serif
font will have to do.

On the computer, the HTML (content) and the CSS (design) are separate.
To change content, you only edit the HTML files. To change design, you
only edit the CSS. Most websites and ebooks will have one CSS file, and
many HTML files, usually one for each chapter. So to change the design
of a feature, you just change the CSS file, and the change automatically
applies through all the book’s chapters.

There are many things you can do with CSS. There are some great examples
of creative uses of CSS for online ebooks at [ePub Zen
Garden](http://epubzengarden.com/). At ePub Zen Garden, the same content
is made to look radically different just by referring the computer to a
different CSS file.

(I’m not going to go into why cascading style sheets, ‘cascade’. But you
can [look it up](http://en.wikipedia.org/wiki/Cascading_Style_Sheets) if
you’re curious.)

## What are XML and XHTML?

You will have heard the term XML before – most people are confused about
what it is. XML is the family of computer languages that includes HTML.
XML stands for ‘extensible markup language’, and HTML stands for
‘hypertext markup language’. You’ll see why in a moment.

Let’s take a step back first. You know now that, in HTML, content is
marked up with tags in angle brackets. And there is a [specific list of
tags](http://en.wikipedia.org/wiki/HTML_element#List_of_all_HTML_elements) we
can use in HTML, like \<h1\> for a first-level heading and \<p\> for a
paragraph. HTML was designed specifically for the web, and ‘hypertext’
is just a geeky word for text on the web, much like ‘hyperlink’.
Hyperlinks are part of hypertext.

There are [many other kinds of markup
languages](http://en.wikipedia.org/wiki/List_of_XML_markup_languages),
too, in addition to HTML. For instance, MathML is specifically for
marking up mathematics. MARCXML is specifically for marking up
bibliographic information about books, mostly for library catalogues.
They almost all use specific tags in angle brackets to mark up
information.

All of these markup languages are kinds of XML – extensions of it.
That’s why XML is ‘extensible’, it can easily be extended for different
uses.

You may also hear the term ‘XHTML’. Many ebooks contain XHTML rather
than HTML. XHTML, which stands for ‘extensible hypertext markup
language’, is essentially just a stricter variant of HTML.\* By stricter
I mean that if the XHTML code contains a mistake, it can just break the
whole document. In other words, you can bend the rules of HTML and your
ebook will still open in most ereaders, albeit with glitches. But you
can’t break rules in XHTML. Then why even use it? Well, its strictness
ensures that your ebooks will work better on more devices, because it
forces you to follow the standards properly.

\* A note for purists: I’ve simplified the story of XML, HTML and XHTML
here; the full story is a bit more complicated.
