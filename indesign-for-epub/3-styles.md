---
book: InDesign best practice for print and ebooks
title: Thinking ahead about styles and tag names
layout: chapter
---

# Thinking ahead about styles and tag names

When exporting to epub, InDesign uses your style names as part of the tags in the ebook’s XHTML code. Specifically, as class names. This means it is very important to use paragraph and character style names that describe the *purpose* or function of the given style, not its appearance (since appearance might change on screen). This will also make it easier for those who work on the book after you to understand how your book works.

If your style name for first-level headings is `head_a`, InDesign will tag those headings like this:

~~~ html
<p class="head_a">
	Your heading
</p>
~~~

Since CS4, if you’ve correctly used a [Table of Contents](5-toc.html), InDesign will give every heading (if included in the saved TOC style used when you export to epub) a heading tag, e.g. `<h1>`, `<h2>` etc., with a class named for your style name. For instance:

~~~ html
<h1 class="head_a">
	Your heading
</h1>
~~~

InDesign versions
:	From CS6, you can add or override class names for any style in the Export Tags.
:	CS3 doesn't add heading tags, only `<p>` tags for everything, and you have to change the tags manually in the epub after export.

## Local formatting

In InDesign CS3, only defined styles (paragraph styles, character styles and object styles) are exported to epub; all local formatting is discarded when you export to epub.

This means that if you want a single word or phrase in bold type, you need to create a character style (e.g. `bold_text`), and apply this character style to all of the text that you need to be bold. If you then decided that you want some of those words bold and italic, then you must create a second style to apply to those words to be turned bold and italic.

From InDesign CS4, you get to choose when exporting to epub whether to keep your local formatting or use defined styles instead. We recommend not using local formatting for your styles, because exporting local formatting to epub makes a mess of your XHTML and CSS code, which then makes it far harder to change and manage text and formatting in the epub. So, it’s still always strongly recommended to *avoid any local formatting*, and to only use styles for the appearance of text.

## Empty lines

Never use empty lines or empty paragraphs to create space in your books (line spaces created by typing paragraph marks). They will just get ignored in the XHTML of your ebook, so they are effectively lost in the epub. Instead, use styles to add spacing before and after paragraph styles, especially headings and blockquotes.

Search for empty paragraph marks by searching for two ‘End of paragraph’ marks, and solve each instance using the paragraph style’s before-and-after spacing. You may need to create a few new paragraph styles for this to work (e.g. a block quote of three paragraphs would need three separate paragraph styles: a `blockquote_first` with space above, `blockquote_next` with an indented first line, and a `blockquote_last` style with space after.)
