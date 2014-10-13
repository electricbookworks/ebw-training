---
book: InDesign best practice for print and ebooks
title: Design considerations
layout: chapter
---

# Design considerations

If after InDesign you're working on the design of your epub – that is, on the CSS – here are some things to keep in mind from the start.

## Assume you control only structure

It's entirely possible that your user's ereader ignore all styling instructions. That means that it will have only your HTML to go on. If your HTMl is really well structured, the book will probably read just fine. So: be very strict and consistent with headings, and never rely on formatting for sense, only for aesthetics.

## Text alignment

It’s best not to use justified text. On very small screens this causes big spaces between words, especially if text ever wraps around images. Rather use any of Left (ragged right), Right (ragged left), or Centered alignment.

Note: Some intelligent ereading systems will override your settings either way, to provide a good-looking, easy-reading experience for the reader. But not all ereading systems are intelligent, so you should take the lousiest common denominator into account!

## Background colours

We’ve had mixed results trying to create an off-white ebook page. We don’t recommend doing this, though. It’s almost always wasted time, and page colour is now often determined by the ebook-reading device software for difference contexts (e.g. dim or reversed out for low-light situations).

If background colour is really important to you, the best place to change that is in the CSS file of the epub itself (more about editing CSS later), by adding a background colour to the body section.

## Small caps

Small caps can wreak havoc with compatibility between InDesign's print output and what you get in an ereader. 

The golden rule is that in InDesign, you should never lowercase your proper nouns in your text just to get small caps from a font that can't do Opentype All Small Caps (that is, don't change 'the Lord said' to 'the lord said'). If small caps don't work in your epub, you'll end up with actual lowercase.

If you're going to need small caps, we highly recommend reading [the 'Small caps' article](http://electricbookworks.com/kb/epub-production-tips/small-caps/) on the EBW Knowledge Base so that you're equipped to make an informed decision.

## Superscripts and subscripts

Superscripts and subscripts can be problematic in epubs. The simplest guideline is to use InDesign's automatic super or sub positioning in a character style. Do not rely on manual baseline shift and font-shrinking. 
