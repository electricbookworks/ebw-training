---
title: Workflow decisions
---

# Workflow decisions

So you've decided how you're going to store and manage your ebooks. The IT staff are getting some natural light spending time with the production staff, and it's time to make some ebooks.


## Changes to editorial and design processes

Ideally, you should not have to make changes to your workflow. If you outsource your ebook conversion from print files, then that's easy. No changes to production workflow.

In the long run, it's best to develop in-house skills so that you can control quality, innovate from within, and add the value that publishers can to a book product. If you're working in-house, then, you can simply ask typesetters to deliver ebook files in addition to print-ready files at the end of the pre-press process. Good typesetters have to future-proof their roles by learning how to do these things.

It is easiest to manage ebook production in-house if:

* you're only distributing PDF, or
* your books are simple, and your designers and typesetters know how to create epubs from InDesign.

If you plan to do anything else, you will need to make further changes to your workflow. Let's look at each of these options:

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

If that's part of the setting process, then the following steps take ten minutes in Acrobat Pro:

* Check the bookmarks (Table of Contents)
* Add the cover image (as the first page, and add it to the Table of Contents/Bookmarks)
* Metadata (in the file’s Properties add at least the document title and author)
* Set the Initial View ('Bookmarks Panel and Page', 'Single page', 'Fit page', 'Show: Document Title')
* Finally, check the PDF on various devices.


### 2. Creating epub ebooks from simple content

This is more advanced than creating PDF ebooks. Typesetters who produce epubs from InDesign must have a recent version of InDesign, and must have been trained or have spent time learning about this process. If their typesetting is epub-oriented from the start, the final creation of an epub file – from a simple book like a novel or biography – will take about two hours.

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
* edit the CSS file (optional, and often necessary)
* embed video/audio files (if necessary)
* test the epub.

Electric Book Works can provide training or documentation on creating epubs from InDesign.

Epubs can also be created from other file formats, such as MS Word, HTML, and LibreOffice. But this makes version control a little more tricky, if your master document is really the InDesign book.


### 3. More complex digital-product workflows

Any more complex digital product will need a carefully planned workflow, depending on the product and your in-house systems. Here are some principles to keep in mind:

* Give a small team functional authority to develop a new workflow and use it for a few selected titles. Ensure they write everything down in neat how-to documents into a widely accessible company knowledge-base.
* Assume this workflow should scale. That is, you should be able to apply it to lots more books, developed by new staff.
* Aim to work in HTML, or markdown, which can be automatically converted into HTML. (XML systems are powerful but hard to maintain.)
* Develop a clear, written process for managing corrections (in print, these would be reprint corrections) across a range of products.
* Through your workflow, keep your master book document (in print, that's usually an InDesign document) format-agnostic for as long as possible. (We'll talk more about format-agnostic workflows later.)
* At the beginning of every decision-making process, find and discuss the international standards that relate to the task at hand. These could be metadata standards, file formats, XML schemas, catalogue distribution formats, price points, DRM decisions, and so on. If you don't follow major standards, you lock yourself out of future opportunities to integrate with new product types and sales channels.


## Managing in-house learning and knowledge

In a new field like digital publishing, as staff work they will be discovering new tools, techniques and best-practice. This *must* be stored and shared immediately – it's very easy to forget, thinking you'll remember, the many little tricks and tips you develop as you work with ebooks.

Also, staff need access to up-to-date guidelines and how-tos for unfamiliar tasks (like preparing epubs or creating metadata) if their work is to be consistent. Consistency is critical if your content and other databases are going to be useful.

Set up an internal wiki: an online place where anyone in your team can create and edit organised snippets of knowledge. That way, all your staff can contribute to developing your best-practice documents, how-tos and guidelines.


## Expertise and functional authority

If your organisation is going to learn fast and be flexible and responsive to new developments, you have to give your staff *functional authority* over their areas of expertise. That means you have to encourage people to take responsibility for learning, and then trust that they know what they're doing in those areas.

Some organisations do this better than others already. The idea is to put each member of a team in charge of something meaningful to their role. Not even the managing director should be able to interfere with their particular area of expertise and authority. ([This interview with Mark Pincus](https://www.nytimes.com/2010/01/31/business/31corner.html "NY Times interview with Mark Pincus") describes the importance of putting people in charge of something.)

You're going to depend on your staff to gather information about the ebook industry, production best practices, new products that could save you time and money, new services from innovative companies, and so on. If you give them authority over these areas, you encourage them and get the benefit of their eyes and ears on the ebook ground.


## A format-agnostic workflow

Underpinning your decisions should be this principle: make more and more of your production workflow digital, and less focused on paper pages.

Right now, most publishers think in pages – usually as double-page-spreads. This thinking affects the way your staff work at different stages. For some books, page-based thinking starts as early as the commissioning stage, when an author is briefed to write in terms of page length or DPSes. For others, page-based thinking starts when the designer draws up a design in InDesign and the typesetter implements that. For others, like dictionary publishers who already use XML-based systems to edit and typeset, page-based thinking hardly ever intrudes on your workflow, and only becomes important right at the end when you get final print quotes.

Whatever decisions you make now about ebooks, in the medium to long term you need to be keeping more and more of your workflow paper-page-free. The longer you can keep content format-agnostic, not dependent on any particular way of displaying it, the more flexible you can be when deciding what to sell. For example, if you've thought in pages, creating a mobile-phone version of your book will be very difficult and expensive. It will also be expensive (in staff time) to reuse content in other books or provide that content is a usable form to licensees.

Naturally, your ability to do this will depend largely on your resources, and most importantly on your team members.

> EBW's guide on [*Designing for Digital*](https://electricbookworks.com/kb/designing-for-digital-what-print-book-designers-should-know-about-ebooks/) covers a lot of these basic things editors, designers and typesetters should be doing now, in InDesign especially. For instance, they need to be aware of the way they use: text flow; images; fonts; styles and style names; local formatting; pagination and master pages; spacing; text alignment; tables of contents; and metadata.
{:.box}
