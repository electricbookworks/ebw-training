---
title: Technology decisions
---

# Technology decisions

Your first priority is to start making technology part of the thinking and processes that go into book-making. A common mistake across industries is to separate the technical people in your team from the content-and-design people, creating an us-and-them situation.

Where printed books required book-printing specialists to talk to editors and designers, ebooks require those editors and designers to work alongside technical specialists. Here are some of the key issues they'll be talking about.


## File formats

A dozen years ago, when ebooks first became a serious part of publishing, it was tricky to decide which ebook file formats to work with. Today, things are much simpler. You're making two separate decisions here:

1. **Format:** You're choosing whether to distribute ebooks as PDF or epub. Depending on your business model, you may also want to publish book content in website form.

2. **Production process:** You're deciding whether to create your own digital files manually, outsource their creation, or set up a system that generates digital formats automatically.

### PDF

We all know [PDF](http://en.wikipedia.org/wiki/Portable_Document_Format) as a format for sharing static pages. PDF is directly analogous to the printed page. It’s easy to create with existing tools (like InDesign, Acrobat Pro, Word and Google Docs).

PDF is a pretty remarkable file format, because it actually combines several formats in one: it stores vector and bitmap content, can embed subsets of fonts, contains metadata, and can contain flash video and interactive forms that communicate with a remote server. It’s far more powerful than most people realise. Produced well (from a technical point of view, e.g. tagged behind the scenes with structural information about the document), PDF can be easily navigated, for instance, by reading devices for the visually impaired. All these reasons should make it perfect for ebooks.

It’s downside is that it’s easy, and common, to produce PDFs that are badly created (from a technical point of view: they can be comprehended by humans, but not by machines), rendering them useless to machines that try to navigate them or reflow them. So once something’s in PDF, it usually requires a part-manual process to turn it into anything else.

Not all ereaders read PDF, and those that can do so badly or partly (e.g. they don’t support PDF navigation). More importantly, the biggest retailers – and Amazon in particular – don't accept PDFs for distribution, so it's hard to make money selling them.

### Epub

[Epub](http://en.wikipedia.org/wiki/Epub) has become the standard format for creating reflowable ebooks. It’s an open standard, designed to be fairly easy to create and sophisticated enough to contain a wide variety of information, such as video and audio.

Technically, an epub is a collection of web pages packaged in a zip folder, with the `.zip` file extension changed to `.epub`.

The downside of epub is that it has all the problems of early web development: massive inconsistency in the quality of the software that users use to read it.

Since Amazon has come to completely dominate the ebook market in recent years, there has been little incentive among commercial software companies to develop really good, consistent ebook readers. In addition to a variety of Kindle apps and devices from Amazon, people may use iBooks, Google Play Books, Adobe Digital Editions, VitalSource Bookshelf, Readium, Kobo, Nook, Edge, and others to read epubs. And every one of these will display an epub quite differently.


### Amazon formats

Amazon has developed several proprietary formats for ebooks opened in its [Kindle](http://kindle.amazon.com/) ereaders and apps. Only Amazon can create these formats, so we provide an epub to Amazon for automatic conversion.

Amazon's formats are all more or less descended from the Mobi format. Mobi was originally developed by [Mobipocket](http://www.mobipocket.com/), a French ebook retailer that Amazon bought in 2005 and transformed into Amazon Kindle.


## Data-asset-management systems

As we mentioned earlier, you'll either be making ebook files (the PDFs and epub files you sell) manually, or you'll have a system for generating them automatically, as they're needed.

Manual systems are fine for book production, if each book is very different, or if you don't have too many books to manage.

If you have a lot of books (let's say more than 50 a year), it gets tricky to manage them manually. Remember, any one book could have a hardback, paperback, print-on-demand, PDF, epub, Kindle, and mobile-app edition. Implementing reprint corrections across that lot is difficult and prone to error.

A digital-asset-management system, or DAMS, is meant to make this easier. DAMS come in many shapes and sizes, but essentially they're large repositories for storing master copies of your content. Usually, they store your content in a consistent, structured format that machines can read. Journal publishers often use variations of XML. Many others use HTML or markdown. These are technical syntaxes that anyone can learn.

In the best DAMS, you can paste and edit text straight into them, using a web-like interface. And when you want a book file in a particular format (e.g. epub or print-on-demand PDF), you press a button and the DAMS transforms your content into the format you want instantly and automatically.

If your tagging is thorough, a transformation step can also pull out only the parts of a book's content that you want. For instance, you might only want the exercises from a school book, or the recipes in a travel book. You can then start reusing bits of your books in new products.

As you can imagine, good DAMS are expensive in time and/or money, but they are important for publishers with large lists. Many dictionary publishers, for instance, have to use DAMS for their dictionary content.

### Improvising your own DAMS

If you don't or can't have a DAMS, the next best thing is to improvise one, not from new software systems but from human systems and your existing in-house infrastructure. The key aspects of a DAMS are easy to replicate if all staff work the same way. The suggestions here will cost only your time setting them up:

|                                         DAMS feature                                        |                                                                                                         Improvised alternatives                                                                                                         |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| One place to store metadata (any kind of information about a book)                          | One database of titles that you can expand with new metadata fields as needed. In its simplest form, an Excel spreadsheet with columns for Dublin Core metadata tags. Include the location of the book files.                           |
| One place to store master files and working files                                           | A well-organised shared network drive, where folders are created according to an agreed naming and tree structure convention. Particular folders contain the current master document and public-release versions of each output format. |
| One process for editing and saving files (the software you use and the formats you save in) | A standard set of software tools.                                                                                                                                                                                                       |
| An automated backup system                                                                  | Make sure your metadata, files and procedures are saved to backup every night and regularly stored off-site (e.g. backup drives swapped out every week).                                                                                |


## Metadata

Physical books live on shelves and move in packages that are neatly labelled with all kinds of useful information. In the virtual places that ebooks live, those neat labels are their metadata: lists of information about a book. And in the best ebooks, even their parts (chapters, subsections, even paragraphs) have metadata labels. Without them, ebooks are as useless as boxes in your warehouse with the wrong labels on.

Without good metadata, it's impossible to manage or search more than a few books at a time. At its most basic, metadata includes an identifier like an ISBN, and a title and author name. At its most impressive, metadata labels (or tags) every little piece of a book with potentially useful information.

Any good DAMS will include good systems for managing metadata. And if you don't use a DAMS, you have to have clear policies in-house about what and how metadata is stored in your ebooks. This is partly an administrative issue, and partly a technical one, since there are different systems for storing metadata, and you may have to choose between them.


## Digital Rights Management (DRM)

DRM is any technical measure that restricts what you can do with a file. Usually, DRM is intended to stop people from copying or printing an ebook, in attempt to slow piracy.

There are, broadly speaking, two kinds of DRM:

- Technical DRM physically stops someone from sharing a file. Usually, the file is encrypted, and can only be opened by dedicated software where the legal owner of the ebook is logged in.
- [Social DRM](https://twitter.com/jeremyfelt/status/1114708069345153024?s=19) encourages people not to share by making them uncomfortable about sharing. For instance, the ebook might be generated with the words 'This ebook belongs to Patricia Doyle (patdoyle455@gmail.com) and may not be shared' on the title page.

A common form of ebook DRM that publishers and some booksellers use is the Adobe Content Server, which can add DRM to PDF and epub files. That DRM then only lets you open those files in an application that supports Adobe DRM (such as Adobe Digital Editions), and only when that application has been registered with your Adobe username and password. It is extremely expensive, so only big distributors use it.

Then each of Amazon, Google and Apple have their own in-house DRM systems.

Amazon's DRM allows Amazon to control the ebooks on your Kindle ereader or app. In 2009, Amazon removed an edition of _1984_ on customers' Kindles. This helped show that buying a book with live DRM is really only lending it for a fee. You do not 'own' that ebook in the conventional sense that you might 'own' the books on your shelves at home.

DRM costs a lot to implement, since it is technically complex to create and manage. If as a publisher you want to use DRM, you will either pay a lot for a DRM server of your own, or you'll give up a portion of sales revenue to a distributor who implements DRM on your behalf. You have to consider the costs of DRM (direct and indirect, for instance in the costs of customer support) and weigh up the pros and cons of not using it at all (e.g.customer ease and satisfaction versus the perceived risk of illegal sharing).


### Open formats vs open files

An open format is a file format that anyone can create software to open (e.g. PDF). A closed, or proprietary, format is one that only certain, licensed software applications can open (e.g. MS Word `.doc`).

While epub is an open file format, once wrapped in DRM it essentially becomes proprietary (since the DRM component is closed). This causes a lot of confusion among publishers and consumers. People tend to associate ‘open’ with free (as in speech, and sometimes as in beer), and companies that use epub like to trumpet that they’re using an open standard. But as soon as they apply Adobe DRM to an epub file, there is nothing open about the file at all, because in order to produce software that reads DRM, you have to pay Adobe a licence fee. Epub (or PDF) with DRM is effectively proprietary.

Is that a problem? Well, that’s a personal judgement call. Some downsides of proprietary formats are:

* they are controlled by one organisation, which leaves technical progress at that organisation’s discretion, and
* licence fees to read the format can usually only be paid by bigger companies, or licensing is clumsy and restricted, slowing the broader development of devices and software that support it.

Some would argue that the money to be made from proprietary formats enables or drives innovation and/or consumer adoption, as Amazon did with the Kindle, setting high standards for an e-ink device and for the ease of purchasing content. Others argue that open formats help prevent monopolies and encourage innovation by enabling anyone to improve and innovate existing formats.
