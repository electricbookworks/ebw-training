---
order: 218
title: Data-asset-management systems
date: 2010-04-16T18:24:15+00:00
author: Arthur Attwell
parent-page: technology-decisions
previous-page: file-formats
next-page: metadata
---

# Data-asset-management systems

As I mentioned earlier, you&#8217;ll either be making ebook files (the PDFs and epub files you sell) one by one, or you&#8217;ll have a system for generating them on the fly, as they&#8217;re needed. Let&#8217;s call the first method manual and the second automatic.

Manual systems are fine for book production, if each book is very different, or if you don&#8217;t have too many books to manage.

If you have a lot of books (let&#8217;s say more than 50 a year), it gets tricky to manage them manually. Remember, any one book could have a hardback, paperback, print-on-demand, PDF, epub, Kindle, and mobile-app edition. Try implementing a reprint correction across that lot in a hurry!

So you&#8217;ll want to think about implementing an digital-asset-management system, or DAMS. DAMS come in many shapes and sizes, but essentially they&#8217;re large databases for storing master copies of your documents. Usually, they store your content in a given kind of XML. XML is content tagged according to a fixed list of tag names, and a fixed structure (e.g. every B-head has a parent A-head).

In the best DAMS, you can paste and edit text straight into them, using a web-like interface. And  when you want a book file in a particular format (e.g. epub or print-on-demand PDF), you press a button and the DAMS transforms your XML into the format you want instantly and automatically. If your tagging is thorough, a transformation can also pull out only the parts of a book&#8217;s content that you want. For instance, the exercises from a school book, or the recipes in a travel book. You can then start selling bits of your books, in addition to the whole books at once.

As you can imagine, good DAMS are expensive, but important for publishers with large lists, especially if their content is consistently structured. Many dictionary publishers, for instance, already use DAMS for their dictionary content.

### Improvising your own DAMS

If you don&#8217;t or can&#8217;t have a DAMS, the next best thing is to improvise one, not from new software systems but from human systems and your existing in-house network. The key aspects of a DAMS are easy to replicate if all staff work the same way. The suggestions here will cost only your time setting them up:

<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="315">
      <strong>DAMS feature</strong>
    </td>
    
    <td width="321">
      <strong>Improvised alternatives</strong>
    </td>
    
    <td width="0" height="18">
    </td>
  </tr>
  
  <tr>
    <td width="315">
      One place to store metadata (any kind of information about a book)
    </td>
    
    <td width="321">
      One database of titles that you can expand with new metadata fields as needed. In its simplest form, an Excel spreadsheet with columns for <a href="http://dublincore.org/documents/usageguide/elements.shtml">Dublin Core</a> metadata tags. Include the location of the book files.
    </td>
    
    <td width="0" height="18">
    </td>
  </tr>
  
  <tr>
    <td width="315">
      One place to store master files and working files
    </td>
    
    <td width="321">
      A well-organised shared network drive, where folders are created according to an agreed naming and tree structure convention. Particular folders contain the current master document and public-release versions of each output format.
    </td>
    
    <td width="0" height="18">
    </td>
  </tr>
  
  <tr>
    <td width="315">
      One process for editing and saving files (the software you use and the formats you save in)
    </td>
    
    <td width="321">
      A standard set of software tools (e.g. <a href="http://kompozer.net/">KompoZer</a> is a good, free editor for working with XHTML files; <a href="http://calibre-ebook.com/">Calibre</a> is for converting ebooks between formats) and procedures to doing so. (Later we&#8217;ll talk about setting up a knowledge-base for this.)
    </td>
    
    <td width="0" height="18">
    </td>
  </tr>
  
  <tr>
    <td width="315">
      An automated backup system
    </td>
    
    <td width="321">
      Make sure your metadata, files and procedures are saved to backup every night and regularly stored off-site (e.g. backup drives swapped out every week).
    </td>
    
    <td width="0" height="18">
    </td>
  </tr>
</table>