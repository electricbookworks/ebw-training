---
title: Links
layout: chapter
---

Links
=====

There are two kinds of links in an ebook:

-   external links, which point to websites
-   internal links, which point to other locations in the ebook.

In HTML, they look very similar. Let's start with a basic external link:

\<a href="http://electricbookworks.com"\>Click here to go to EBW.\</a\>

As you can see, a link consists of an anchor tag \<a\> with one attribute, the href, or hyperlink reference. The opening and closing tags enclose the text that will be clickable in the ebook, like this:

[Click here to go to EBW.](http://electricbookworks.com)

Now let's create an internal link. For now, let's just jump to the Images chapter. The HTML will look like this:

\<a href="images.xhtml"\>Click here to go to the Images chapter.\</a\>

Which will look and work like this in the ebook:

[Click here to go to the Images chapter.](../Text/images.xhtml)

(If you click this, you'll have to scroll back here or use the Table of Contents to get back.)

As you can see, jumping to the start of another HTML file is this easy, you just use the file name as the href.

But what if we want to jump to a specific element in a chapter, like a specific paragraph? We have to mark that destination paragraph somehow. We do this by assigning it an ID. This is easy: make up an ID name and include it as an attribute in the destination paragraph's opening tag, like this:

\<p id="my-example-id"\>

Then, when we make our link, we use that ID in the href, joining it to the file name with a hash sign:

\<a href="html.xhtml\#my-example-id"\>Click here to go to the specific paragraph I'm linking to.\</a\>

I've planted an ID in another chapter to demo this. [Click here to go there.](../Text/html.xhtml#my-example-id) You'll find a link there, too, to get back here with.

Note: if you're linking to another place in the same HTML document, you don't even need the file name. You could just use:

\<a href="\#another-id"\>Click here to go to a point in this same HTML doc.\</a\>

Note that the link is therefore relative to the file it's in.

