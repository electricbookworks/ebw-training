---
book: InDesign best practice for print and ebooks
title: Fonts
layout: chapter
---

# Fonts

## Font file format

Choosing good fonts for ebooks is often a process of trial and error. Try to use only fonts stored in OpenType format. Many TrueType fonts can work, but OpenType is usually more reliable (especially in the long term, because the Opentype file format is newer and more sophisticated).

## Font licenses

When you include a font in an epub file, you’re including the entire font file. So, technically, you’re redistributing the font (unlike in PDF, where only a subset of the font is embedded in the file). For most fonts, this is illegal.

So, use open-licensed fonts, such as those from the Open Fonts Library. Their licences do not restrict distributing the fonts in the epub file. For instance, fonts that carry an SIL Open Font Licence can be freely redistributed.

The trick is finding an open font with the quality of, say, a Garamond Pro.

*	Good options for text fonts are [Linux Libertine](http://en.wikipedia.org/wiki/Linux_Libertine), [Gentium](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&item_id=Gentium) and [Droid Serif](https://www.google.com/fonts/specimen/Droid+Serif).
*	[Google Fonts](http://www.google.com/fonts) is perhaps the biggest library of open-licensed fonts.
*	There are some lovely fonts with open licences at [the League of Movable Type](http://www.theleagueofmoveabletype.com/).
*	There are several excellent open-licensed fonts on [FontSquirrel](http://www.fontsquirrel.com/). Though be sure the font has an open licence that allows you to redistribute it, sometimes this isn’t absolutely clear. ‘Reuse’ is not the same as ‘redistribute’.

OpenType vs open-licensed
:	Don’t confuse Opentype, a file format, with an open-license, the legal statement of what you can do with a font. They have nothing to do with each other.

## A note on small caps

Small caps must be carefully managed in an InDesign file if you don’t want epub headaches later. See [the EBW Knowledge Base article on small caps](http://electricbookworks.com/kb/epub-production-tips/small-caps) for more information.

## Embedding fonts

All fonts that are used should be embedded, including styled versions of fonts (i.e. bold or italic). In order to embed:

The font family must be specifically named in a character/paragraph style
The style must be applied somewhere in the document (unused styles will not be embedded)
In InDesign CS3, a specific font weight or style (bold, italic, light, etc.) only survives the export to epub if you create a special character style for it that specifies both the weight/style and the font family. So you must create a separate character style (i.e. bold, italic, underlined) for each font family you apply these styles to. You can’t use a generic “bold” style and apply it to different fonts. CS4 has a workaround (exporting to epub using local formatting rather than styles), but it’s unreliable and creates messy code in your epub, so it’s infinitely better to use style consistently.

Note: InDesign tries to encrypt (“mangle”) embedded fonts so that you can use proprietary fonts without infringing their licenses. However, we’ve found that Adobe’s encryption method can make epubs invalid (that is, they don’t meet the requirements of the official specification, and as a result some ereading software may not open them or display them properly). So we recommend not embedding fonts in InDesign, and rather embedding open-licensed fonts by editing the epub code by hand after export. This is really for technically minded folk, though we do provide [step-by-step instructions in our EBW Knowledge Base](http://electricbookworks.com/kb/creating-epub-from-indesign/after-indesign-export-to-epub/add-fonts-to-the-package-manifest-and-css).
