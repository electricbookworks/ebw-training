---
title: Interactivity
---

# Interactivity
{:.no_toc}

* TOC here
{:toc}

The great promise of digital formats, especially in educational books, is interactivity. Everyone defines interactivity differently. Usually, we simply mean that the user gets to *do something* other than read text and look at pictures.

Depending on time, talent and budgets, we might mean adding video and audio, slides, self-marking questions, charts that change as you mouse over or tap them, or embedding small games and applications into the pages.

## Video and audio

Video and audio files are very similar technically, and we can treat them in similar ways. To work for a user, we have to provide:

- the actual video or audio file, which may be saved originally in formats like MP4, MP3, WAV, and so on; and
- controls: some way to play and stop, and perhaps pause, change volume, view in full screen, and so on.

When we add video or audio to a publication, we have three options:

- save or **embed** the video or audio file on our webserver or in the ebook package
- use an HTML **iframe** element, which streams the video or audio over the Internet
- simply include a **link** to a website that hosts the video or audio track.

If we **embed** the actual file, it will always be available to our readers, even when they are offline. But the file will make our ebook *very* big, and our website very data heavy. We will also have to provide playback controls on our website, which might cost money, or depend on our users having devices that provide built-in controls, which may not always be the case.

If we include an **iframe** (such as from YouTube, Vimeo or Soundcloud), our readers must be online to watch or listen. And we have to rely on the host site always being available. The iframe includes the controls. Luckily, good video and audio host sites handle data streaming intelligently, automatically sending lower-quality streams over low-bandwidth connections.

If we decide to simply provide a **link** to a website that hosts the video or track, we're hoping our users' devices can follow links, and that they are online.

Of these three options, we usually recommend the **iframe,** but you will need to make a case-by-case decision in your persona's best interests.

### Video and audio in print

Once we've decided how video and audio will work in our screen formats, we have to decide how to treat them in print output. This is a case-by-case decision.

In educational material, a key question is whether the videos are crucial to the learning process. If they are, you can include a big screenshot of the video in the body text area, followed by a short URL that users can type into a web browser to take them to the video online. If the video is not crucial, you could omit videos completely or describe them in sidenotes.

When choosing or developing your production workflow and software, investigate whether they allow for automating these alternative layouts. For instance, in our Electric Book workflow, we can create alternative templates for each output format, so that the same source files produce different treatments of videos in, say, print, epub and web versions.

Some publishers have tried putting video and audio material on CDs or flash drives distributed with print copies. Anecdotal evidence suggests that this is not effective. Readers may not go to the effort of loading the CD or flash drive, or their devices might not accommodate CDs (like many small, new computers) or flash drives (like phones). Also, navigating file structures on CDs or flash drives is a poor user experience, and software that could make them easy to navigate is very expensive to develop.

## Slides

Another useful form of interactivity is slides: a series of images that a user can click through in place. For example, open-access publisher CORE uses slides to let students [click through economics graphs](https://core-econ.org/the-economy/book/text/01.html#figure-1-2). As a student clicks through the slides, they can see how the graph is built up.

## Questions

Questions are the most popular form of interactivity in educational material. Multiple-choice questions are often best, because it's often possible to make them self-marking. That is, the user can click on an answer and immediately get feedback on whether they have chosen correctly.

Depending on your production software, it should be possible for multiple-choice questions in print to display as a static list.

In some formats, interactive questions may even be able to send users' scores to a server online. This can be useful for analysis. Just keep in mind that there are ethical and legal obligations to consider when you collect data from users like this.

Your production software may have certain requirements for how questions are set up. Wherever possible, establish very early on whether you need authors to create their questions in a particular way. For instance, can your multiple-choice questions have more than one correct answer? How many answer options are allowed? Can you include images in questions and answers? Do you want to give users more feedback than simply whether they are right or wrong?

## Charts

In recent years, more and more websites include interactive charts and other data visualisations. These sometimes even allow users to click and drag elements or enter figures and see the graph adjust like magic before their eyes (see [EconGraphs.org](https://www.econgraphs.org/) for examples). Most of these are created with SVG and Javascript, which can be embedded in epub ebooks, too (though they won't yet work on Kindle).

It can be very expensive, in book-publishing terms, to create these, so they're rare in books.

Like video and audio, you also need to decide case by case how to provide a static alternative for print and a fallback for formats or devices that don't support SVG and Javascript.

## Games and applications

While it's still rare, it's also possible to develop games or simple applications (like spreadsheets or image editors) and embed them for people to use inside a publication. The technical requirements for these games vary immensely, depending how they're built.

Games written in Javascript can be included in most ebooks and websites fairly easily. Usually, they are included in iframes, and streamed much like video when a user is online.
