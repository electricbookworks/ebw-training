---
title: Data as content
---

# Data as content
{:.no_toc}

* TOC here
{:toc}

Once you start making multi-format books, and using web technologies to make them, you can also start managing some of your content less like a manuscript and more like a database. Good examples are glossaries and bibliographies in books and books that are directories and dictionaries.

For some books, you may also be managing search indexes.

## Glossaries and bibliographies

In traditional, print-centric workflows, editors and proofreaders spend a lot of their time trying to make glossaries and bibliographies consistent across books.

Glossaries and bibliographies are small databases: regular, repeatable elements of information that must be presented consistently, and often repeated in various places in a book.

When we treat these lists like running text in manuscripts, we're relying on editors and proofreaders to do menial, painstaking work better suited to computers. That work can be made far easier by working with them as data.

Depending on your production software, you may be able to store glossaries and bibliographies in a spreadsheet or a list-like format like YAML. For example, this is a snippet of a glossary stored as a YAML list from a textbook:

``` yaml
- term: "abatement"
  definition: "Practices to limit or reverse environmental damages."
  cross-reference: "See also: abatement policy."
- term: "abatement policy"
  definition: "A policy designed to reduce environmental damages."
  cross-reference: "See also: abatement."
```

## Directories and dictionaries

Sometimes, entire books are databases. Directories and dictionaries are good examples. Established dictionary publishers already use databases to manage their content.

By storing entire books as databases, it becomes possible to create variations of the data that can become entirely new books. For instance, the same database that powers a school dictionary might be used to create a small book of science concepts for children.

And digital versions of the book can become more interactive. For example, a dictionary of baby names could easily become a baby-names app; or extended into an app that tells you the meanings of your phone contacts' names.

## Manuscripts as spreadsheets

Most good book-production software provides ways to import data and lay it out largely automatically onto the pages of a book. Adobe InDesign can import XML and lay it out according to predefined style sheets. And our Electric Book template can import CSV or YAML data and lay it out on book pages and web pages automatically.

To make this possible, look for opportunities to store book content in spreadsheets rather than text documents.

When you do this, you're also forced (in a good way) to think carefully about the structure and consistency of your content.

## Search indexes

If you're creating website versions of your books, those websites might include a search function. Search can be very useful to readers, especially because digital formats of books rarely include indexes.

When you do, you may be involved in ensuring that its search index is up to date. Search indexes are built in different ways, but they usually comprise a database of:

1. all the words, phrases, or parts of words and phrases, in a book, and
2. a list of where those words or phrases appear.

They are usually generated automatically by software, which runs through the whole book and assembles the search index. An editor or web developer can usually adjust settings for that software, for instance giving extra importance to words in headings, or excluding certian common words (like 'and') from the search index.

In ebooks, a search function is usually built into the ereader software.
