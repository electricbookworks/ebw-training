---
order: 245
title: Workflow decisions
date: 2010-04-16T18:12:00+00:00
author: Arthur Attwell
parent-page: digital-decisions-what-book-publishers-should-know-about-ebooks
previous-page: tracking-production-and-marketing-costs
next-page: changes-to-editorial-and-design-processes
---

# Workflow decisions

Okay, so you&#8217;ve decided how you&#8217;re going to store and manage your ebooks. The IT staff are getting some natural light spending time with the production staff, and it&#8217;s time to make some ebooks.


## Changes to editorial and design processes

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

## Managing in-house learning and knowledge

In a new field like digital, as staff work they will be discovering new techniques and best-practice. This must be stored and shared immediately – it&#8217;s very easy to forget, thinking you&#8217;ll remember, the many little tricks and tips you develop as you work with ebooks.

Also, staff need access to up-to-date guidelines and how-tos for unfamiliar tasks (like preparing epubs or creating metadata) if their work is to be consistent. Consistency is critical if your content and other databases are going to be useful.

Set up a wiki-based system (e.g. Mediawiki, which runs Wikipedia) on your internal network. That way, all your staff can contribute to developing your best-practice documents, how-tos and guidelines. And you can post there notes like these that are someones quite expensive to buy in, both in time and money.


## Expertise and functional authority

If your organisation is going to learn fast and be flexible and responsive to new developments, you have to give your staff functional authority over their areas of expertise. Some organisations do this better than others already. The idea is to put each member of a team in charge of something meaningful to their role. _Not even the managing director_ should be able to interfere with their particular area of expertise and authority. ([This interview with Mark Pincus](http://www.nytimes.com/2010/01/31/business/31corner.html "NY Times interview with Mark Pincus") describes the importance of putting people in charge of something.)

You&#8217;re going to depend on your staff to gather information about the ebook industry, production best practices, new products that could save you time and money, new services from innovative companies, and so on. If you give them authority over these areas, you encourage them and get the benefit of their eyes and ears on the ebook ground.


## A format-agnostic workflow

Underpinning your decisions should be this principle: make more and more of your production workflow digital, and less paper-page oriented.

This video shows how valuable aspects of a print magazine might translate into a digital environment. As you watch it, think about how the content of the magazine they&#8217;re describing is never constrained by the notion of the page. It has to be stored and reflowed independently of pagination. And yet it&#8217;s somehow familiar in the way that a paper product is.



Right now, most publishers think in pages (usually as double-page-spreads). This thinking affects the way your staff work at different stages. For some books, page-based thinking starts as early as the commissioning stage, when an author is briefed to write in terms of page length or DPSes. For others, page-based thinking starts when the designer draws up a design in InDesign and the typesetter implements that. For others, like dictionary publishers who already use XML-based systems to edit and typeset, page-based thinking hardly ever intrudes on your workflow, and only becomes important right at the end when you get final print quotes.

Whatever decisions you make now about ebooks, in the medium to long term you need to be keeping more and more of your workflow page-free. The longer you can keep content format-agnostic, not dependent on any particular way of displaying it, the more flexible you can be when deciding what to sell. For example, if you&#8217;ve thought in pages, creating a mobile-phone version of your book will be very difficult and expensive. It will also be expensive (in staff time) to reuse content in other books or provide that content is a usable form to licensees.

Naturally, your ability to do this will depend largely on your resources. You may be able to afford an XML-based DAMS. But you can already ask, or train, your editors, designers and typesetters to work in ways that are less page-based.

> EBW&#8217;s [Designing for Digital course](http://www.scribd.com/doc/25576541/Excerpt-Designing-for-digital-What-print-book-designers-should-know-about-ebooks) covers a lot of these basic things editors, designers and typesetters should be doing now, in InDesign especially. For instance, they need to be aware of the way they use: text flow; images; fonts; styles and style names; local formatting; pagination and master pages; spacing; text alignment; tables of contents; and metadata.



