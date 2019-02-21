---
title: Choosing tools
---

# Choosing tools
{:.no_toc}

* TOC here
{:toc}

You'll develop your own digital toolkit over time. It will include:

- an online app for collaborative editing, like Google Docs
- a text editor, also called a code editor, for working with plain text and regular expressions
- a command-line app, like Terminal on Mac or the Command Prompt on Windows
- an app for using Git version control.

In this section we'll talk about editors and regular expressions. We'll get to the command line and Git in later sections.

## Choosing editing software, online and offline

The most important step in tech-savvy publishing is to start using something other than MS Word. Pretty much anything else is an improvement. Good software is designed carefully and deliberately for a specific use. MS Word has not been designed so much as assembled by committee into an usuable monster of terrying proportions.

You'll use two main kinds of editing software, each useful in a different context:

- online, collaborative, writer-focused editors like Google Docs, and
- text-only editors, designed for writing in computer syntaxes.

### Online, collaborative editors

Once you leave the dangerous waters of MS Word, collaborative editors completely change the way you write, edit and deliver documents.

What is collaborative editing? In short, you and someone else can edit the same document at the same time online. The most common tool for this is Google Docs. Most collaborative editors are WYSIWYG – what you see is what you get – which means that you're creating the content and the design at the same time.

What are the major pros of collaborative editors?

- They let others **watch while you work.** And you can watch while others work. Publishing is weird because it’s always been a team sport played by lonely freelancers from their own home offices. Collaborative editing instantly makes the team aspect real and useful.
- You can use **commenting for feedback and discussion.** Tracking changes isn’t the same as actual live annotation. No more emailing documents with increasing repetitions of the word ‘final’ in the file name.
- **Instant delivery** of work and **real-time review.** As soon as you’re ready for your colleagues to check something, you can share the doc and the ball’s in their court. A lot of editing is just problem solving, and collaborative editing means the publisher–editor–designer are essentially always working together on the same document at the same time.

It's amazing that Google Docs has been around for years and people are still using MS Word. Don't be a hostage.

The one downside of collaborative editors is that you must usually be online to use them. And editing in a browser is very slightly slower than working on an installed app on your computer.

### Text editors

Text editors are for working on **plain-text files.** If you work with narrative content, for instance, you may be working in a syntax called markdown. Text editors are great for markdown. Developers use text editors for writing code, because a text editor can be aware of the language being written, and can provide all kinds of helpful colours and hints as you work.

If you're online, go to [Stackedit.io](https://stackedit.io/) to write some plain-text markdown. Type on the left, and on the right Stackedit turns your plain text into formatted HTML.

{% include image file="stackeditio.jpg" %}
On the left, you type plain text in a markdown structure. On the right, you get formatted HTML.
{:.image-with-caption}

This works because the markdown software 'reads' your plain text, and if you use particular characters and spacing, it can convert your writing into HTML in real time.

- A paragraph is any line of text with a blank line before and after it.
- To type a heading, put a hash, `# `, at the start of a line. One hash creates an `h1`, two hashes an `h2`, and so on to `h6`.
- To create a bulleted list, put a `* `, `- ` or `+ ` at the start of each line.
- To create a numbered list, start each line with a number and a full stop (and a space), like `1. `.
- To create a blockquote, start each line with `> `.

There are many markdown tricks that let you add links and images, and sometimes classes and more, depending on the markdown software you have running.

What we’re seeing here is the separation of content (which is structured text and image-references only) from formatting and design.

What are the big advantages of text-only editing in markdown?

- Smaller, faster files.
- Computers need perfect consistency (the digital age is a wonderful place for obsessive copy editors). Here the tools force us to be consistent, and we learn to be less sloppy.
- Text-only means fewer copy-paste messes (when you copy paste into a new document and the fonts go all weird), because you get only and exactly what you see when you paste: plain text.
- Less file corruption, because there is simply less going on – less code to go wrong.
- Better version control, which we'll talk about later.

Text-only editors can be online (used in a browser) or offline. Some of the most powerful text-only editors are [Sublime Text](https://www.sublimetext.com/), [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), and [Brackets](http://brackets.io/), which can all be used for free.

One of the most powerful features of text editors is regular-expression search-and-replace, or regex. This lets you search and replace *patterns* of text and not just fixed words. We'll cover that a little later.

## WYSIWYG versus plain text

Most collaborative editors, like Google Docs, use a 'WYSIWYG' view: What You See Is What You Get. WYSIWYG refers to the fact that if you print your document out or send it someone else, it will look the same as when you created it. 

The way they do that is by storing the content in code behind the scenes, often in some kind of XML. Most WYSIWYYG editors will not let you see the underlying code: it's the job of the software to create and maintain that code as you edit. (Some programs do that better than others. MS Word has a notoriously bad underlying code structure, for instance. New software projects like [Texture](http://substance.io/texture/){:.show-url} claim to maintain very clean underlying code.)

In technical terms, WYSIWYG editors combine content and design in the same file. This is nice for writing, and bad for book production, because we want to *separate content and design*. By tempting us to add design flourishes as we write, WYSIWYG editors encourage sloppy thinking, and weakly structured documents. 

For instance, to create a heading, many authors and editors will type the heading text as a paragraph, highlight it, and make it big and bold. *But a big, bold paragraph is not a heading.*

As that document makes its way into production or is processed by machines later on, that heading's 'headingness' might be lost, and the structure of the document will break down. For instance, software that might otherwise create clickable navigation by listing a document's headings will simply skip that little bold paragraph.

There is no good reason to ask *authors* to change their writing tools. If an author is most comfortable creating their text in MS Word, that's fine. But as *editors* we are concierges: it is our job to translate the author's *intentions* into a format that machines can understand.

> In traditional Word–InDesign–PDF workflows, good typesetters act as concierges, translating intended structure into actual document structure. In multi-format editing, there is often no typesetter to do this. So editors now bear this responsibility.

Plain-text markdown is one useful way to do this, because markdown forces us to be explicit about things like headings (and blockquotes, italics, links, and more). Alternatively, responsible editors should learn how to use their WYSIWYG editor's styling functions to 'tag' things like headings, so that those elements are correctly marked up in the file's underlying code.

## Regular expressions

'Regular expressions', or regex, is a tool that comes built into your text editor.

Regex is an incredibly powerful way to search and replace text. I guarantee that if you master regex, you will save days in every year. A full knowledge of regex would take days to teach and weeks to practice, so we'll just cover the basics here.

Another way to think of regex is as pattern-matching. When you search using a regular expression, you're not searching for a specific phrase. You're searching for a pattern in the text. For instance, let's say you need to find all years from 1900 to 1999. You could search manually for each one, or you could search once for any four-digit number that starts with '19'.

Any good text editor's search function will have a regex mode. When you're in regex mode, certain characters take on special meanings. To find any digit, you type `\d`. So this will find what you're looking for:

```regex
19\d\d
```

### Character sets

Here are some of the most common regex character sets:

- `.`: any character (except line breaks, usually)
- `\d`: any digit
- `\s`: any space, including tabs
- `\w`: any word character, such as letters and numbers
- `\t`: tab characters
- `[0-9]`: any digit from 0 to 9 (adjust the range as needed)
- `[a-z]`: any letter from a to z (adjust the range as needed)
- `[abc]`: the letters a, b, or c (or insert any characters)
- `[^abc]`: anything *except* letters a, b, or c, because the `^` in this position means 'not'.
- `a|b`: the letters 'a' *or* 'b'. The `|` means 'or'.

### Repetition

What if we want to find a string of characters? Maybe we know how many, maybe we don't. We need to add repetition characters to our search. For instance, to find any string of one or more digits, we add a `+` like this: `\d+`.

- `+` one or more instances
- `*` zero or more instances
- `{3}` three instances
- `{1,50}` one to fifty instances
- `{10,}` ten or more instances

### Anchors

Let's say we want to find the letters 'co', but only at the *start* of a word. That is, we want to find the 'co' in 'co-operate' but not in 'decoy'. We need to anchor our search at a word boundary with `\b`: we search for `\bco`.

- `\b` marks the start or end of a word
- `^` marks the start of a line
- `$` marks the end of a line

### Capturing and replacing

Finding is one thing. Replacing is where regex is really special. Let's say I want to replace the hyphen in ranges like '2018-19' with an en dash. I want one search-and-replace that will fix '2018-19', '1850-55' and others in one go.

I need regex to *remember* the years in each case and use them in the replace string. We say we 'capture' the numbers by wrapping the search in parentheses:

```regex
(\d\d\d\d)-(\d\d)
```

The first set of parentheses captures the first four digits. The second captures the last two digits. We can refer to each set by its number (`1` and `2`). In the replace field, we refer to each number using a `$` followed by the relevant number:

```regex
$1–$2
```

Regex will insert the first digits at `$1` and the second at `$2`. Between them, I've used an en dash.

Many regex engines also let us use a `\` instead of a `$`. So we might also have used:

```regex
\1–\2
```

While it's tempting to click 'Replace All' on a document, that's very risky! It's hard to know for sure that you won't change something you don't mean to change. It's usually best to use regex to find each instance quickly and eyeball it before clicking 'Replace'.

There is more to learn about regex. As you do, you'll come across character grouping, positive and negative lookaheads and lookbehinds, and multi-line searches. You'll also get to know how regex can differ between computer programs and languages.

## Open software and standards

When choosing your tools, you should also consider:

- who creates and owns them, and under what terms
- do they follow common standards, and
- how much do they cost?

### Open-source software

Open-source software is software that others can copy and modify without permission from the owner.

Open-source software has had a bad reputation in the past, because most early open software was created by volunteers or academics without much investment of money.

These days, open-source software is important to all of the biggest technology companies in the world, and open-source products are increasingly the best you'll find.

For organisations, it's often safest to use good, open tools, because you can't get locked in with a specific vendor. That said, when evaluating open software, make sure that your choice of tool has a big, strong, happy community behind it. This will mean it will keep getting better, and you'll be able to find support online easily.

### Open standards

Open standards are agreements on how things work. For instance, PDF is an open standard: anyone can read and contribute to the official documents that define how PDFs work, and build PDF software.

> That was not always the case. The PDF specification was owned by Adobe for many years, and Adobe charged companies to use it. In a surprising and wonderful move, Adobe made the standard open in 2008. It suited them at that point, too, because they were becoming the premier provider of proprietary software for creating PDFs (with InDesign and Acrobat especially). By making the standard open, they made PDF more important, which made it easier to sell their software. It was a win–win.
{:.box}

For long-term sustainability, look for tools that follow popular open standards. For instance, an editor that stores text as clean HTML is a far safer choice than an editor that stores text in a clever but obscure flavour of XML.

There are standards for almost everything: metadata standards (many of which, like ONIX, are not open), scholarly publishing standards, data standards, textbook standards, accessibility standards, and so on.

You'll never have time to find and understand them all, but before you make choices about editorial tools and processes, *make time* to learn what big standards exist in your field.
