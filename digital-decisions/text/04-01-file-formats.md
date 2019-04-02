---
order: 216
title: File formats
date: 2010-04-16T18:24:15+00:00
author: Arthur Attwell
parent-page: technology-decisions
next-page: data-asset-management-systems
---

# File formats

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