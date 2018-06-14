---
title: Metadata
---

# Metadata

You can add metadata in the InDesign document (Info > File information). Include at least the title and author in the File Information, since that’s the minimum that an epub needs in order to be a valid epub.

If you’re working in an InDesign Book (.indb), InDesign will export the epub’s metadata from the source/master document.

For CS4, Adobe provides this guidance:

> In the Description tab of the File Information dialog box, complete the following fields:
>
> *	Document Title—Enter the title of the publication.
> *	Author—Enter the author’s full name.
> *	Description—Enter a short description of the publication.
> *	Keywords—Enter the keywords that describe the publication’s subject category.
> *	Copyright Notice—Enter the copyright information for the publication. The information is displayed in most eBook readers. None of the other metadata fields are exported to an EPUB file.

Note: Using InDesign CS3, adding metadata in the InDesign document (Info > File information) has caused problems for us with the resulting epub (usually it doesn’t validate). Rather insert metadata into the epub's content.opf file after export.

Technical note
:	Metadata in an epub should ideally follow Dublin Core formats and guidelines. To add or edit metadata reliably, you can add metadata to the content.opf file in the epub code after export, if you’re technically minded. (You don’t need to be a developer, you just need to keep your wits about you.) Or use an epub editor like Sigil.
