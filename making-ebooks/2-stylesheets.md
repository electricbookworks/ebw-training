---
title: Stylesheets
layout: chapter
---

Stylesheets
============

In your HTML documents, your job is to mark up text and images according to its function or purpose. Never its appearance. All the appearance work is done in a separate file called a stylesheet. In the stylesheet, for instance, you get to say what a heading marked `<h1>` looks like: colour, size, font, spacing, and so on. This way, you can change and control the appearance of all the elements in your book in one place, keeping formatting consistent everywhere.

We create stylesheets in a language called CSS, for Cascading Style Sheets. (Don't worry now about how they cascade: that'll become clear later.) In Sigil, HTML documents are stored in the Text folder of your epub, and CSS documents in the Styles folder.

CSS looks different to HTML, because it's a different language with its own syntax. Let's say you want to control the appearance of your default paragraphs. In CSS, you'd start by typing:

p {}

The p refers to the HTML `<p>` element, obviously. All your formatting instructions will go inside the braces, {}. For instance:

p {
 font-size: 12pt;
 font-family: serif;
 }

I've put each instruction on its own, new line to make it easier for us humans to read – the computer doesn't mind. It's the same as writing this:

p {font-size: 12pt; font-family: serif;}

But when CSS documents get long and complicated, you really want things laid out neatly.

Now, what about our classes? Like \<p class="greeting"\>Hello World!\</p\>? In CSS, we use a full-stop to indicate 'in class', like this:

p.greeting {
 color: pink;
 }

Once we've added that, our Hello World! will show in pink in our ebook. (Note the American spelling of color. Same goes for instructions like text-align: center;.)

Open this ebook in Sigil and take a look at the CSS file to see a longer, but still very simple stylesheet. Note that you can add comments for humans that the computer will ignore by putting them between /\* and \*/.

Linking HTML and CSS files
--------------------------

Once you've created a CSS file, you have to tell your HTML file about it. That is, you have to link your HTML to the relevant CSS file. We do this by adding a \<link\> element inside the \<head\> section of the HTML document. Let's say your CSS file is called 'styles.css'. In Sigil, your \<link\> tag will look like this:

\<link href="../Styles/styles.css" rel="stylesheet" type="text/css" /\>

This link element contains three attributes:

*   \<href=…\> (href for 'hyperlink reference') says where the stylesheet is, relative to the HTML document: two full-tops mean 'go up out of the Text folder', and the /Styles/styles.css means 'go into the Styles folder and find the 'styles.css' file;
*   rel="stylesheet" says that the file's relationship to the HTML is that of a stylesheet;
*   type="text/css" says that the file will be in plain text and in the CSS language.

Note the slash at the end of the tag: the link element needs only one tag, because it doesn't mark up any text. So it closes itself with a self-closing slash. Two other common HTML elements that close themselves are:

*   the line break: \<br /\>
*   the image tag: \<img /\>

Right. In the course, we might try a challenge at this point.

Challenge
---------

Here are several things you might want to do with CSS. Pick one, get onto Google, and take 5 minutes to have a guess how you'd write the CSS:

*   make the background of your whole ebook yellow;
*   put a paragraph in a box;
*   make a paragraph float to one side, with the body text flowing around it;
*   make one word appear in a different font to the surrounding text;
*   make a heading appear in uppercase, without changing the letters to uppercase in your HTML;
*   create a list inside a list (a sub-list);
*   make a numbered list number in roman numerals.


