---
order: 247
title: Changes to editorial and design processes
date: 2010-04-16T18:24:14+00:00
author: Arthur Attwell
parent-page: workflow-decisions
next-page: managing-in-house-learning-and-knowledge
---

# Changes to editorial and design processes

Ideally, you should not have to make changes to your workflow. If you outsource your ebook conversion from print files, then that&#8217;s easy. No changes to production workflow. (You just need a distributor, and your marketing team just needs to include the digital products in their marketing plans.)

In the long run, it&#8217;s best to develop in-house skills so that you can control quality, innovate from within, and add the value that publishers can to a book product. If you&#8217;re working in-house, then, you can simply ask typesetters to deliver ebook files in addition to print-ready files at the end of the pre-press process. (Good typesetters _must_ and will future-proof their roles by learning these things.) This is possible if:

  * you&#8217;re only distributing PDF, or
  * your books are simple, and your designers and typesetters know how to create epubs from InDesign.

If you plan to do anything else, you will need to make further changes to your workflow. Let&#8217;s look at each of these options:

1. A PDF ebook workflow

2. A simple-epub workflow

3. More complex digital-product workflows.

### 1. Creating PDF ebooks

To add PDF ebooks to your production workflow, get your typesetters or in-house staff to produce PDF ebooks in Acrobat Pro working from print-ready InDesign or PDF files. If the InDesign files have been created well, this will take about ten minutes per book.

They should do as much of the work in InDesign as possible, before tweaking the ebook in Adobe Acrobat Professional. Most of these things should be done as part of the design and typesetting process. In InDesign, the setter should see to:

  * Bookmarks (mainly using the automatic Table of Contents feature)
  * Hyperlinks (to places on the web and for email addresses)
  * Format and font (if you’re not using the print-edition layout, you might use a squarish page format to better fit a screen, and a larger-than-normal font)
  * Symmetrical margins and centred page numbers (same margins left and right, since an ebook is usually read page by page, not in spreads; unequal margins make the text jump from side to side when scrolling; same for page numbers)
  * Colour (for headings, if you like, or put off-white frames behind your page features in your master pages to avoid a glaring white page)
  * Metadata (add metadata in the File Info dialogue box)
  * PDF export settings (see below)

If that&#8217;s part of the setting process, then this takes ten minutes in Acrobat Pro:

  * Check the bookmarks (Table of Contents)
  * Add the cover image (as the first page, and add it to the Table of Contents/Bookmarks)
  * Metadata (in the file’s Properties add at least the document title and author)
  * Set the Initial View (“Bookmarks Panel and Page”, “Single page”, “Fit page”, “Show: Document Title”)
  * Finally, check the PDF on various machines.

### 2. Creating epub ebooks from simple content

This is more advanced than creating PDF ebooks. Typesetters who produce epubs from InDesign must have InDesign CS4, and must have been trained or have spent time learning about this process. If their typesetting is epub-oriented from the start, the final creation of an epub file – from a simple book like a novel or biography – will take about two hours.

While working on the book, the designer and typesetter will need to have seen to:

  * how the book is made up (e.g. you’ll break up long documents into shorter ones, and gather them in an InDesign Book)
  * the fonts
  * the spacing before and after paragraph styles
  * the colours of fonts
  * how text in frames is threaded
  * master pages
  * images that need anchoring.

After they’ve exported a basic epub from InDesign, there’s more to do to improve the epub to a standard you can be confident selling. They will have to work with the epub code to:

  * add a cover (can be done in InDesign, but not as well)
  * add all fonts to the manifest (if fonts are to be embedded)
  * make images resizable (optional)
  * check the order of book parts
  * add page breaks, and possibly fix spacing problems
  * add an ADE page-template file (optional; InDesign adds one by default)
  * check that the Table of Contents works, and fix problems
  * add metadata (optional but recommended)
  * edit the CSS file
  * embed video/audio files (if necessary)
  * replace head tags with structured HTML head tags (optional, for best results in ereaders)
  * test the epub.

EBW can provide training or documentation on creating epubs from InDesign.

Epubs can also be created from other file formats, such as MS Word, HTML, and OpenOffice. But this makes version control a little more tricky, if your master document is effectively the final InDesign book.

### 3. More complex digital-product workflows

Any more complex digital product will need a carefully planned workflow, depending on the product and your in-house systems. Here are some principles to keep in mind:

  * Give a small team functional authority to develop a new workflow and use it for a few selected titles. Ensure they write everything down in neat how-to documents into a widely accessible company knowledge-base.
  * Assume this workflow should scale. That is, you should be able to apply it to lots more books, developed by new staff.
  * Aim for XML. If your team can&#8217;t handle that, it must at least be XHTML. (Epub is made mostly of XHTML.)
  * Include a system for managing corrections (in print, these would be reprint corrections) across a range of products.
  * Keep your master book document (in print, that&#8217;s usually an InDesign document) format-agnostic for as long as possible. (XML and pure XHTML are format-agnostic.)
  * At the beginning of every decision-making process, find and discuss the international standards that relate to the task at hand. These could be metadata standards, file formats, XML schemas, catalogue distribution formats, price points, DRM decisions, and so on. If you don&#8217;t follow major standards, you lock yourself out of future opportunities to integrate with new sales channels.