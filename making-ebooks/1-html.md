---
title: HTML
layout: chapter
---

# HTML, or 'How to Talk Machine Language'

HTML actually stands for 'hypertext markup language', and you'll understand why soon. When you make an ebook you are talking to a machine. That is, you're making a document that a computer will understand.

Look at this:

> Hello World!

What do we humans call this? Words, a sentence, exclamation, line, phrase, paragraph, letters, sign, greeting – and that's just if we're speaking English. To agree on what it is, we need:

*   a language (English)
*   common terms (like the ones I listed above)

When we tell a computer what Hello World! is, we also need a language and a common term. In the ebook world:

*   the language is HTML
*   common terms would be 'paragraph', 'string', 'span'.

To indicate that to a computer, we surround our phrase with special HTML tags. Tags always appear in elbow brackets, like this:

`<p>Hello World!</p>`

The `<p>` is a 'paragraph' tag. We use paragraph tags at the start and end of the paragraph, and the slash indicates that the tag is closing the paragraph. These tags are called 'markup', because they mark up our text for the computer.

## Elements

In HTML terms, a paragraph marked up with `<p>` tags is an 'element'. The word 'element' would also be useful in traditional book terms for any piece of a book, and for what we often call 'features'.

HTML includes a bunch of standard elements. You'll get to know them very well, especially these ones:

*   `<p>` for paragraph
*   `<ul>` for unordered list (i.e. a bulleted list, but it might not actually have visible bullets)
*   `<ol>` for ordered list (e.g. a 1, 2, 3 or a, b, c list)
*   `<li>` for list item, an item in an ordered or unordered list
*   `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` for six levels of heading
*   `<img>` for image
*   `<a>` for a clickable link (the 'a' happens to stand for anchor)
*   `<em>` for emphasising words (as you might use italics in print)
*   `<strong>` for making words stand out (as you might use bold in print)
*   `<span>` for any string of letters you need to mark for any reason (as in, this span `<span>spans three words</span>`)
*   `<div>` for division, any block of text or images you need to mark for any reason
*   `<table>` for a table
*   `<tr>` for a table row
*   `<td>` for a table cell in a row (`td` stands for table data).

You must know these elements to make ebooks. There are others that are less important, and you'll learn about them along the way.

## Classes

As you may have guessed, in most books there are several different kinds of paragraph. In addition to plain body text, there are pull quotes, chapter openers, notes and more. 

In HTML we say there are different *classes* of paragraph. In theory, there are as many different paragraph classes as you could ever think of. The same goes for any of the elements I listed:

*   lists might be regular bulleted lists, clickable menus, chapter objectives, or glossary entries;
*   images might be portraits, graphs, icons, decorations, or maps;
*   spans might mark computer code, important words, proper names, places, or other special terms;
*   divs might mark sections as sidebars, footnotes, or activities.

And much more. We can't just use `<p>` for everything, because then every class of paragraph would look the same.

So HTML lets us invent our own classes, and gives us a way to say what class an element belongs to. We do this by adding an *attribute* to the element's opening tag. Let's say we want to call our paragraph a 'greeting' paragraph:

`<p class="greeting">Hello World!</p>`

We could have called the class anything we liked:

`<p class="frabjous-day">Hello World!</p>`

But of course it's best to use class names that are easy to remember and describe their purpose clearly.

Attribute structure:
	An attribute in a tag always takes the same form: the kind of attribute (e.g. class), an equals sign, and the attribute value in quote marks. Another kind of attribute is an ID, which we cover [here in Links, later](4-links.html#about-ids).)

> If you're sharp, you'll have noticed that none of these elements or classes describe what the text or image they mark up *looks like*. They only describe its *function or purpose*. 

All appearance or formatting is managed separately, in another file called a stylesheet. We'll get to that later.

## HTML document structure

If you're using Sigil, you may know already that it lets you view your book in Book View or Code View. In Book View, things look a lot like a word-processor: what you type is what your end-user will see. What You See Is What You Get: WYSIWYG. In Code View, you see all the tags we've been talking about. We say that an ereader *renders* the code in its intended form.

Now that you know about tags, we can talk about how they're structured. Their structure must follow certain rules.

An ebook might contain several HTML documents. Every HTML document is a separate text file with at least these four parts:

*   a namespace declaration
*   an `<html>` element
*   a `<head>` element
*   a `<body>` element.

Don't worry about the namespace declaration. Sigil puts it in for you at the top of every file. It's two or three lines long, and starts with `<?xml`. This is important info for the computer, but it's rare that you'll need to change it or even look at it closely.

The `<html>`, `<head>` and `<body>` elements always appear in this structure:

~~~ html
<html>
	<head></head>
	<body></body>
<html>
~~~

That is, the whole document is wrapped inside the `<html>` element. And that's divided into two sections: the `<head>` element and the `<body>` element.

*   The `<head>` contains information for the device about the document.
*   The `<body>` contains all the content of the document intended for human readers.

There is only ever one `<html>`, one `<head>` and one `<body>` element. All the tags we discussed earlier (paragraphs, spans, divs, lists, etc.) go inside the `<body>` element to make up the document's content. When you're editing ebooks, 99 per cent of your time will be spent there, inside the `<body>` element.

## XHTML

If you're looking around in Sigil, you might have noticed that files in most epubs are in XHTML, not HTML (see the file extensions in the Text folder). XHTML is essentially a stricter form of HTML, but for our purposes, it's the same thing.
