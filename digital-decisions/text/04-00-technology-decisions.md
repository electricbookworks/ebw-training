---
order: 214
title: Technology decisions
date: 2010-04-16T18:12:00+00:00
author: Arthur Attwell
parent-page: digital-decisions-what-book-publishers-should-know-about-ebooks
previous-page: exercise-what-do-you-sell-when-copies-are-free
next-page: file-formats
---

# Technology decisions

Bluntly put: it&#8217;s time to get the IT department out of the basement and into a big open-plan office with your designers and editors. Where printed books required book-printing specialists to talk to editors and designers, ebooks require those editors and designers to work alongside technical specialists. Here are some of the key issues they&#8217;ll be talking about.


## File formats

A few years ago, it was tricky to decide which ebook file formats to work with. Today, it&#8217;s the one easy decision to make. You&#8217;re making two separate decisions here:

1. You&#8217;re choosing to distribute ebooks in one or a combination of PDF and epub.

2. You&#8217;re deciding whether to create your own files one by one, outsource their creation, or set up an XML-based system that generates them on the fly.

### PDF

We all know [PDF](http://en.wikipedia.org/wiki/Portable_Document_Format) as a format for sharing static pages. PDF is directly analogous to the printed page. It’s easy to create with existing tools (like InDesign, Acrobat Pro, Word and OpenOffice).

PDF is a pretty remarkable file format, because it actually combines several formats in one: it stores vector and bitmap content, can embed subsets of fonts, contains metadata, and can contain flash video and interactive forms that communicate with a remote server. It’s far more powerful than most people realise. Produced well (from a technical point of view, e.g. tagged behind the scenes with structural information about the document), PDF can be easily navigated, for instance, by reading devices for the visually impaired. All these reasons should make it perfect for ebooks.

It’s downside is that it’s easy, and common, to produce PDFs that are badly created (from a technical point of view: they can be comprehended by humans, but not by machines), rendering them useless to machines that try to navigate them or reflow them. So once something’s in PDF, it usually requires a part-manual process to turn it into anything else.

Not all ereaders read PDF, and those that can do so badly or partly (e.g. they don’t support PDF navigation). This changes and improves literally every month, so things are getting better.

### Epub {#epub}

[Epub](http://en.wikipedia.org/wiki/Epub) is the fastest-growing format around right now. It’s an open standard developed by members of the [International Digital Publishing Forum](http://idpf.org/) (IDPF). It’s young (officially published in 2007), so it has its technical teething issues, but on the whole it’s simple enough to (eventually) be easy to create, while being sophisticated enough to contain a wide variety of information, including flash video and SVG (a format for storing vector artwork).

In a nutshell, epub is web pages packaged in a zip folder.

The downside of having a format that stores its content much like a website is that it has all the downsides of web development: massive inconsistency in the quality of the product and the software that reads and renders it.

The most popular software for reading epub is [Adobe Digital Editions](http://www.adobe.com/products/digitaleditions/), which is a free, downloadable application available for Windows and Mac. (For a long time it was the only software that supported [Adobe digital rights management]({{ site.baseurl }}/kb/simple-ebook-operational-issues/adobe-drm-a-guide-for-publishers) (DRM) for epub and PDF ebooks.)

A simple epub example is EBW’s free ebook of John Siracusa’s article, ‘[The Once and Future Ebook]({{ site.baseurl }}/kb/abcs/the-once-and-future-ebook-by-john-siracusa/)’. You’ll need epub-reading software to open it. Some examples are:

  * On Windows or Mac computers: [Adobe Digital Editions](http://www.adobe.com/products/digitaleditions/), [NOOKstudy](http://www.barnesandnoble.com/nookstudy/)
  * [](http://www.barnesandnoble.com/nookstudy/)On various devices (PC, iPad, iPhone, Android): Barnes & Noble&#8217;s [NOOK app](http://www.barnesandnoble.com/u/free-nook-apps/379002321/?cds2Pid=34763)
  * On an iPhone: [Stanza](http://www.lexcycle.com/), [txtr](http://reader.txtr.com/services/iphone-app.html)
  * On an Android-based phone: [Aldiko](http://www.aldiko.com/)
  * On the web: [Bookworm](http://bookworm.oreilly.com/) or [Bookglutton](http://www.bookglutton.com/)
  * On the web or iPhone or elsewhere: [Ibis Reader](http://ibisreader.com/ "Ibis Reader")
  * In a Firefox web browser: the [EPUBReader](https://addons.mozilla.org/en-US/firefox/addon/45281) addon
  * The built-in software on any e-ink reader except the Kindle (e.g. Sony Reader, COOL-ER)
  * In [iBooks for the Apple iPad](http://www.apple.com/ipad/features/ibooks.html) (iBooks is also available for iPhone and iPod Touch)

### AZW and mobi

[AZW](http://wiki.mobileread.com/wiki/AZW) (likely standing for Amazon Whispernet) is Amazon’s proprietary format for its [Kindle](http://kindle.amazon.com/) ereader. Only Amazon can create AZW files. Like epub, it’s built around HTML, like a website. AZW is just a slightly modified version of a format called mobi. Mobi is the format developed by [Mobipocket](http://www.mobipocket.com/), and ebook retailer that Amazon bought several years ago. If you’re publishing an ebook to the Kindle (e.g. through [Amazon’s Digital Text Platform](http://dtp.amazon.com/)), you can upload a mobi file confident that the Kindle will display it properly.

You can create mobi files using Mobipocket’s free [Creator](http://www.mobipocket.com/en/DownloadSoft/ProductDetailsCreator.asp) software.

_Tech note: Mobi is actually based on the same predecessor standards as epub. So mobi and epub are very similar. This makes it very easy to convert between mobi and epub. For converting, the best tool is the free, open-source_ [_Calibre_](http://calibre-ebook.com/)_._

## Data-asset-management systems

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


## Metadata

Physical books live on shelves and move in packages that are neatly labelled with all kinds of useful information. In the virtual places that ebooks live, those neat labels are their metadata: lists of information about a book. And in the best ebooks, even their parts (chapters, subsections, even paragraphs) have metadata labels. Without them, ebooks are as useful as boxes of books in your warehouse with inaccurate or absent packaging labels.

Without good metadata, it&#8217;s impossible to manage or search more than a few books at a time. At its most basic, metadata includes an identifier like an ISBN, and a title and author name. At its most impressive, metadata labels (or tags) every little piece of a book with potentially useful information. (See [this piece by provocative but insightful blogger Mike Cane](http://ebooktest.blogspot.com/2009/07/dumb-ebooks-must-die-smart-ebooks-must.html "Mike Cane on ebook metadata") for an idea of how detailed metadata could be.)

Any good DAMS will include good systems for managing metadata. And if you don&#8217;t use a DAMS, you have to have clear policies in-house about what and how metadata is stored in your ebooks. This is partly an administrative issue, and partly a technical one, since there are different systems for storing metadata, and you may have to choose between them. Again, get the IT people out of the basement!


## Digital Rights Management

DRM is any technical measure that restricts what you can do with a file. Usually, DRM stops you from copying or printing an ebook, as the publisher’s or retailer’s attempt to slow piracy. The industry standard for wrapping ebooks in DRM (neither Amazon&#8217;s Kindle DRM nor Barnes & Noble&#8217;s in-house variant) is the Adobe Content Server, which can add DRM to PDF and epub files. That DRM then only lets you open those files in an application that supports Adobe DRM (such as Adobe Digital Editions (ADE) or a Sony ereader), and only when that application has been registered with your Adobe username and password.

Amazon&#8217;s DRM is more restrictive, since it is &#8220;live&#8221;: it allows Amazon to literally control the ebooks on your Kindle (or more accurately, ebooks associated with your Kindle account; since those ebooks are viewable from Kindle software on the iPhone or a PC). In 2009, Amazon removed (or, if you like, turned off access to) an edition of _1984_ on customers&#8217; Kindles. This helped consumers see that buying a book with &#8220;live&#8221; DRM is really only lending it for a fee. You do not &#8220;own&#8221; that ebook in the conventional sense that you might &#8220;own&#8221; the books on your shelves at home.

DRM costs money, since it is technically complex to create and manage. As a publisher using DRM, you will either pay for a DRM server of your own, or you&#8217;ll give up a portion of sales revenue to a distributor who has one. You have to consider the costs of DRM (direct and indirect, for instance in customer support) and weigh up the pros (e.g. customer ease and satisfaction) and cons (e.g. the perceived risk of illegal sharing) of not using it at all.

### Open file format vs open file

Note that while epub is an open file format, once wrapped in Adobe DRM it essentially becomes proprietary (since the DRM component is closed). This causes a lot of confusion among publishers and consumers. People tend to associate ‘open’ with free (as in speech, and sometimes as in beer), and companies that use epub like to trumpet that they’re using an open standard. But as soon as they apply Adobe DRM to an epub file, there is nothing open about the file at all, because in order to produce software that reads Adobe DRM, you have to pay Adobe a licence fee. Epub (or PDF) with Adobe DRM is effectively proprietary.

Is that a problem? Well, that’s a personal judgement call. The only obvious downsides of proprietary formats are that

  * they are controlled by one organisation, which leaves technical progress at that organisation’s discretion, and
  * licence fees to read the format can usually only be paid by bigger companies, or licensing is clumsy and restricted, slowing the broader development of devices and software that support it.

Some would argue that the money to be made from proprietary formats enables or drives innovation and/or consumer adoption, as Amazon did with the Kindle, setting high standards for an e-ink device and for the ease of purchasing content. You decide, if you care enough to have an opinion.

> In the course, we discuss DRM if we have time, and if enough people are interested in getting into this contentious area.

