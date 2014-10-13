---
book: InDesign best practice for print and ebooks
title: The table of contents
layout: chapter
---

# The table of contents

Creating an automatic Table of Contents in your InDesign document gets you a Table of Contents in your exported epub file. So always create one, even if you don’t include it on any page in the document. You can just put it on the pasteboard. It doesn’t even need page numbers. It just needs to list all the headings you want in your epub’s clickable Table of Contents.

When creating your TOC in InDesign:

*	Create the TOC style and save it.
*	If you’re working in an InDesign Book, create the Table of Contents in your style-source document. This is not necessarily the first document in your Book.

Note: If you’re working in InDesign CS4 or later, this is doubly important for another reason: upon export to epub, InDesign will then use proper heading tags for your headings, not just `<p>` tags, in the XHTML. Make sure you include all levels of heading in your TOC style in order for InDesign to tag them all as XHTML headings, not paragraphs.

## A TOC on the ‘book page’

In a reflowable ebook, you really don’t need a TOC on the actual ‘pages’ of the book, since it’s part of the software’s navigation system. That said, if you really want a TOC on the pages of the ebook, you can follow [Adobe’s advice](http://www.adobe.com/products/indesign/epub/howto/) on this:

> If you have used the InDesign Table of Contents feature to generate a TOC at the beginning of the book, it is discarded in the exported EPUB file. To create a TOC that appears at the start of an eBook, manually insert the text for the entries and then turn each entry into a hyperlink that jumps to a specific section in the eBook. With InDesign CS4, you can use cross-references instead of hyperlinks to create the TOC. When you use cross-references, each TOC entry is generated from its destination text, so if the destination text is modified, you can easily update its corresponding TOC entry with the new text.
