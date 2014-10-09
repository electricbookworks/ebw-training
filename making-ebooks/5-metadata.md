---
book: Making ebooks with Sigil, HTML and CSS
title: Metadata
layout: chapter
---

# Metadata

Metadata is information about information. For instance, your driver's licence is metadata about you.

Epub ebooks must store some information about themselves so that machines know how to deal with them. You have to provide some of this metadata. At the very least:

*   an identifier (like an ISBN)
*   the publisher's name
*   a date of publication or creation.

To add metadata in Sigil, just go to `Tools > Metadata Editor.`

The metadata is actually stored in a special file called `content.opf`. Sigil will let you edit that file directly (just double-click it on the left), but editing it directly is not a good idea. You do not want to break something.
