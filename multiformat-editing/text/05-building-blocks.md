---
title: Building blocks of books
---

# Building blocks of books
{:.no_toc}

* TOC here
{:toc}

Books have long been made of well-established building blocks, like pages, chapters, frontmatter and endmatter. We'll quickly touch on the building blocks of multi-format books: what's the same, and what's changing?

## Book pages and web pages

There is potential for confusion on multi-format projects about what we mean by 'page'.

- We all know what a book page is in print: the content on one side of a leaf of paper. A single file, laid out, might run into many book pages.
- We can mostly agree on what a web page is: everything that appears on our screen when we go to a given web address. Technically, a web page is actually a single file. In most cases, a web page is longer than our screen and we scroll vertically through it.

Things are less clear when we talk about ebooks.

- On some ebook readers (like iBooks or Adobe Digital Editions) a page is similar to a book page: a rectangle that contains the text and images that happen to fall into it. If a user changes the font size, or resizes the window, more or less content might flow into the page.
- On other ebook readers (like Google Play Books) a page is like a web page: a long column of content that you scroll through vertically.

## Structuring the book

Most parts of a book come to us intuitively. Only when we carefully plan a book's structure are we aware of them. When we create books for multiple formats, we must be very deliberate about how we divide up our book.

What files shall we create? We don't want the whole book in one file. Will each book part be in a separate file?

On many screens, each file will be a separate web page. We don't want users to have to scroll through very long web pages. So do we need to break our chapters up into smaller files?

In the [introduction](0-4-intro.html#focusing-on-people){:.show-page-number} we talked about creating personas: people you invent and whose interests you serve when you make decisions. This is a moment for keeping them in mind.

A multi-format book must have a clear tree-structure, where every part is a child of a parent element. For example, we might structure a book like this:

- Title page
- Copyright page
- Contents page
- Section 1
    - Chapter 1
    - Chapter 2
- Section 2
    - Chapter 3
    - Chapter 4
- Bibliography
- Index

Note that, in this structure, each front- and endmatter element is a *sibling* of sections 1 and 2. When we add headings to each part of the book, the heading levels should reflect that structure:

- Title page `h1`
- Copyright page `h1`
- Contents page `h1`
- Section 1 `h1`
    - Chapter 1 `h2`
    - Chapter 2 `h2`
- Section 2 `h1`
    - Chapter 3 `h2`
    - Chapter 4 `h2`
- Bibliography `h1`
- Index `h1`

Now we can apply that structure to how we organise our documents. We might create a separate file for each element in this list. That would make each element a single web page, when the book exists as a website.

## Double-page spreads

While we get a lot of useful things from multi-format publishing, we also lose a little. One of those trade-offs is control over double-page spreads.

In multi-format typesetting, the final page layout of most formats will be automated, and automated systems cannot lay out double-page spreads as beautifully as a human designer making layout decisions.

It is possible in some publishing systems to control how, say, your print PDF is laid out, and to get pretty close to full double-page-spread control. But this is more time-consuming and therefore expensive than it is when you're creating a print book only, and can work manually in InDesign.

## Reading topography

Another thing that digital formats can't (yet) reproduce is a reading topography. By reading topography I mean the mental map our minds and hands make of a printed book as we read it. The way we form spatial memories as we read.

When you remember a quote you read in a paperback, you remember where it was on the page and in the book. When you find that quote again, your hands know how many pages fell before and after it, and your eyes know to look for it in, say, the top of a right-hand page.

Your minds makes a map of the book that is informed largely by the fixed, physical shape of the book.

On screen everything is fluid, and separated from us by a cold sheet of glass. We are literally at a greater distance from the shifting text. It is almost impossible to form a mental map of the book. As such, digital books have no topography.

When you're designing and editing multi-format books, look for opportunities to make up for that. Here are some techniques you might use.

- Break up the text into smaller sections, defined by headings and features like pullquotes, boxes and sidenotes.
- Create detailed, deep navigation, which might show on screen as a visible, tree-structure menu, where the section being read currently is highlighted.
- In learning materials, write text that keeps a reader informed about where they are in the learning process.
- Keep sections a similar length. A reader will unconciously develop a feeling for the rhythm and length of the chapters. 
- Certain features (like activities and exercises) are milestones for readers, especially if they are numbered. Use the same number and placement of these in each chapter.
- In briefing a designer, use different colours for different parts of chapters. A reader might associate 'the red chapter' with something they read there, and something else for 'the blue chapter'. (Use colours to create casual associations, but avoid using colour for actual meaning, because you cannot rely on those colours being the same in every format and device.)
