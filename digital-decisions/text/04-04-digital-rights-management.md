---
order: 223
title: Digital Rights Management
date: 2010-04-16T18:24:15+00:00
author: Arthur Attwell
parent-page: technology-decisions
previous-page: metadata
---

# Digital Rights Management

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

<td width="321">
</td>

<td width="0" height="18">
</td>