---
book: Making ebooks with Sigil, HTML and CSS
title: On advanced tricks and bug fixing
layout: chapter
---

# On advanced tricks and bug fixing

In this course we rarely get to talk through advanced tricks and serious bug fixing. Those are things you're going to have to tackle when they arise. Things that'll come up at some stage:

*   Mathematical notation: this is a real headache. usually, the only solution is to include images for every instance of maths.
*   Sub-titles: note that `<h2>` can't be used as a sub-title to `<h1>`, because `<h2>` is a second-level of heading in the hierarchy, and signals the start of a new sub-section. Sub-titles usually have to be paragraphs with a special class, like `p.h1-subtitle`. Or just run them onto the `h1` with a colon, e.g. `Chapter 1: We set out early`.
*   Transparency in images: gif and png images can have transparent areas. So if you have black line art, do you make your backgrounds white or transparent? 
	*	On sepia-background ereaders, images with white backgrounds look ugly, but
	*	on white-text-on-black ereader settings (aka 'night mode'), black line art on a transparent background will be invisible.
*   Embedding or linking to video: this is a real headache that you should [read more about online](http://electricbookworks.com/kb/epub-production-tips/embedding-video-and-audio/).

Many other challenges await you. Always search and ask online, because someone out there has probably faced them before. And when you hit on a solution, be sure to share it to help others.
