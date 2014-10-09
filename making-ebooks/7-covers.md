---
book: Making ebooks with Sigil, HTML and CSS
title: Covers
layout: chapter
---

Covers
======

There are many ways to create a front cover in an epub ebook. You could just place an image in the first HTML file in the epub. But I find I get better-looking results with some very specific code.

Here are the steps.

First, get the cover image in jpg format, name it cover.jpg, and add it to the Images folder. Right-click it, select Add Semantics, and tick Cover Image. (This helps some ereaders display the cover properly.) 

Next, add a new HTML document to your Text folder, and click and drag it so that it's the first HTML file. Rename the file 'cover.xhtml'.

Now, in the Code View of that file, replace the head and body elements with this code:

\<head\>
   \<title\>Cover\</title\>
   \<link rel="stylesheet" type="text/css" href="../Styles/styles.css" /\>
 \</head\>
 \<body class="cover"\>
   \<p class="cover"\>\<img class="cover" alt="" src="../Images/cover.jpg" /\>\</p\>
 \</body\>

Note that you may need to change the name of the CSS file here if yours isn't called 'styles.css'.

Finally, add this code to your CSS file:

/\* Cover \*/
 body.cover {
    margin: 0;
    padding: 0;
    text-align: center;
 }
 p.cover {
    margin: 0;
    padding: 0;
    text-align: center;
 }
 img.cover {
    height: 100%;
    margin: 0;
    padding: 0;
 }

That should do the trick. You can find a lot more technical detail about it [on the EBW Knowledge Base here](http://electricbookworks.com/kb/creating-epub-from-indesign/after-indesign-export-to-epub/add-a-cover/).

