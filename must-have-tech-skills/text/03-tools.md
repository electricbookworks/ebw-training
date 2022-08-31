---
title: Choosing tools
---

# Choosing tools
{:.no_toc}

* TOC here
{:toc}

Like a master carpenter collects and curates their tools over a lifetime, you'll develop your own digital toolkit. It takes care and effort and lots of experimenting. Your starter toolkit will include:

- an online app for collaborative editing, like [Google Docs](https://docs.google.com/)
- a text editor, also called a code editor, for working with plain text and regular expressions ('regex', more on this later), like [VS Code](https://code.visualstudio.com/)
- a command-line app, like Terminal on a Mac or the Command Prompt on Windows
- an app for using Git version control, like [GitHub Desktop](https://desktop.github.com/).

In this section we'll talk about editors and regular expressions. We'll get to the command line and Git in later sections.

## Choosing editing software, online and offline

The most important step in tech-savvy publishing is to start using something other than MS Word. Pretty much anything else is an improvement. Good software is designed carefully and deliberately for a specific use. MS Word has not been designed so much as assembled over decades into an usuable monster. Publishers survive in spite of MS Word, not because of it.

As you free yourself of MS Word, wou'll use two main kinds of editing software, each useful in a different context:

- online, collaborative, writer-focused editors like Google Docs, and
- text-only editors, designed for writing in computer syntaxes.

### Online, collaborative editors

Once you leave the treacherous waters of MS Word, collaborative editors completely change the way you write, edit and deliver documents.

What is collaborative editing? In short, you and someone else can edit the same document at the same time online. The most common tool for this is Google Docs, though there are many others. Most collaborative editors are WYSIWYG – what you see is what you get – which means that you're creating the content and the design in the same view.

What are the major pros of collaborative editors?

- Everyone knows where the **master version** of the document is, because there is only one version. No more emailing `ch1-final-v2.docx` five minutes after `ch1-final.docx`.
- They let others provide **input on work in progress**. Publishing is weird because it’s always been a team sport played by lonely freelancers from their own home offices. Collaborative editing instantly makes the team aspect real and useful.
- You can use **commenting for feedback and discussion.** Tracking changes isn’t the same as actual live annotation.

The downsides of collaborative editors are that you must usually be online to make the most of them, and editing in a browser is very slightly slower than working on an installed app on your computer. We find these downsides are definitely worth the upsides.

### Text editors

Text editors are for working on **plain-text files**, and provide lots of shortcuts for making editing more efficient. A text editor that understands the syntax you're using can provide syntax-specific shortcuts, colours and hints as you work.

If you work with narrative content, for instance, you may be working in a syntax called markdown. Developers use text editors for writing code.

If you're online, go to [kramdown.electricbook.works](https://kramdown.electricbook.works) to write some plain-text markdown. Type on the left, and on the right you'll see your markdown transformed into rendered HTML.

This works because the markdown software 'reads' your plain text, and if you use particular characters and spacing, it convert your text into HTML in real time.

Here are some basic markdown conventions:

- A paragraph is any ordinary line of text with a blank line before and after it.
- To type a heading, put a hash and a space at the start of a line:  `# `. The number of hash signs sets the heading level: one hash creates an `h1`, two hashes an `h2` (`## `), and so on to `h6`.
- To create a bulleted list, put a `* `, `- ` or `+ ` at the start of each line.
- To create a numbered list, start each line with a number and a full stop (and a space), like `1. `.
- To create a blockquote, start each line with `> `.

There are many other markdown conventions that let you add links and images, classes and more, depending on the markdown software you have running.

What are the big advantages of text-only editing in markdown?

- Smaller, faster files.
- Computers need perfect consistency (the digital age is a wonderful place for obsessive copy editors). Markdown forces us to be consistent.
- Text-only means fewer copy-paste messes (like when you copy–paste into a new document and the fonts go all weird), because you get only and exactly what you see when you paste: plain text.
- Less file corruption, because there is less behind-the-scenes code to go wrong.
- More version-control options, which we'll talk about later.

Text-only editors can be online (used in a browser) or offline. Some of the most powerful text-only editors are [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), and [Brackets](http://brackets.io/), which can all be used for free.

One of the most powerful features of text editors is regular-expression search-and-replace, or regex. This lets you search and replace *patterns* of text and not just specific words. We'll cover that later.

## WYSIWYG versus plain text

Most collaborative editors, like Google Docs, use a 'WYSIWYG' view: What You See Is What You Get. WYSIWYG refers to the fact that, while you work, you control text and design in the same view. Unlike the markdown editor we mentioned earlier, you don't edit text in one view and see it laid out in another.

WYSIWYG editors work by storing your content and its design in complex code behind the scenes. Most WYSIWYYG editors will not let you see the underlying code: it's the job of the software to create and maintain that code while you edit.

In technical terms, WYSIWYG editors combine content and design in the same file. This can be nice for writing and editing, because your text looks pretty whiel you work. It's bad for book production, because there we want to *separate content and design*. By tempting us to add design flourishes as we write, WYSIWYG editors encourage sloppy document structures that cause production problems down the line.

For instance, to create a heading, many authors and editors will type the heading text as a paragraph, highlight it, and make it big and bold. *But a big, bold paragraph is not a heading.* It's a paragraph that happens to look like a heading. As that document makes its way into production or is processed by machines later on, its 'headingness' can be lost, and the structure of the document can break down. For instance, software that might otherwise create clickable navigation by listing a document's headings will simply skip that little bold paragraph.

There is no good reason to ask *authors* to change their writing tools. If an author is most comfortable creating their text in MS Word, that's fine. But as *editors* we are concierges: it is our job to translate the author's *intentions* into a format that machines can parse.

Plain-text markdown is one useful way to do this, because by limiting our design options, markdown forces us to be explicit about structure: headings, blockquotes, emphasis, links, and so on must be explicitly marked as such. 

Of course, responsible editors can learn how to use their WYSIWYG editor's styling functions to define structure, styling things like headings, so that those elements are correctly marked up in the file's underlying code. However, documents move through a chain of people on their way to publication, and one weak link can spoil things. It's safer to depend on the constraints of plain text.

## Regular expressions

'Regular expressions' is another term for 'patterns in text'. The term, usually shortened to 'regex', refers to an especially powerful way to do search-and-replace.

If you become confident with regex, you will save yourself days in every year. We'll just cover the basics here, and hopefully over time you'll expand your regex skills.

We'll start with a simple example. Let's say you're working on a book containing lots of numbers in the thousands. Some are formatted with spaces, like `50 000`, and some without, like `50000`. You need to add spaces to all the numbers without them. It's not feasible to search manually for every instance. Instead, you could use regex to search for every number with more than four digits.

Any good text editor's search function will have a regex mode. When you're in regex mode, certain characters take on special meanings. To find any *digit*, you type `\d`. So this will find what you're looking for:

```regex
\d\d\d\d\d
```

It's also possible to make this search more sophisticated, but we'll leave it there for now.

### Character sets

A 'character set' is the set of characters represented by a particular expression. Here are some of the most common regex character sets:

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

What if we want to find a string of characters? Maybe we know how many, maybe we don't. We need to add repetition characters to our search. For instance, to find any string of one or more digits, we add a `+` like this: `\d+`. We can add these repetition characters after the expression we're searching for:

- `+` one or more instances
- `*` zero or more instances
- `{3}` three instances
- `{1,50}` one to fifty instances
- `{10,}` ten or more instances

### Anchors

Let's say we want to find the letters 'co', but only at the *start* of a word. That is, we want to find the 'co' in 'co-operate' but not in 'decoy'. We need to anchor our search at a *word boundary* with `\b`: we search for `\bco`.

- `\b` marks the start or end of a word
- `^` marks the start of a line
- `$` marks the end of a line

### Capturing and replacing

Finding is one thing. Replacing is where regex is really special. Let's say I want to replace the hyphen in ranges like '2018-19' with an en dash. I want one search-and-replace that will fix '2018-19', '1850-55' and others in one go.

I need regex to *remember* the years in each case and use them in the replacement string. We say we 'capture' the numbers by wrapping each search pattern in parentheses. The parentheses create what we call a 'capturing group'.

This search will remember the first set of four digits and the second set of two digits:

```regex
(\d\d\d\d)-(\d\d)
```

What do we mean 'remember'? When it does each search, regex stores and labels the text it finds for each capturing group. Those labels are just numbers in order: `1` is what it found in the first group, `2` the second, and so on.

So in our example above, the first group captures the first year's digits and labels it `1`. The second captures the last two digits, labelled `2`.

In the regex's *replacement* field, we can then refer to each group using a `$` followed by the relevant number. Here we want to output, as the replacement text, the first group, an en dash, and then the second group:

```regex
$1–$2
```

Regex will insert the first digits at `$1` and the second at `$2`. Between them, we use an en dash.

While it's tempting to click 'Replace All' on a document, that's very risky! It's hard to know for sure that your pattern only matches what you intend to change. You might change something you don't mean to change (for example, US post codes contain hyphens, not en dashes). It's usually best to use regex to find each instance quickly and eyeball it before clicking 'Replace'.

There is much more to learn about regex. As you do, you'll come across things like lookaheads, lookbehinds, and multi-line searches. You'll also get to know how regex can differ between computer programs and languages. There are many useful regex websites to learn from, like [regexr.com](https://regexr.com/) and [regex101.com](https://regex101.com/).

## Open software and standards

When choosing your tools, there are important questions to consider.

- Who creates and owns them, and under what terms?
- Do they follow common standards?
- Can I find help or documentation easily and quickly?
- What do they cost now, in money or otherwise, and what might they cost in future?

### Open-source software

Open-source software is software that others can copy and modify without permission from the owner.

Open-source software has had a bad reputation in the past, because most early open software was created by volunteers or academics without much investment of money.

These days, open-source software is important to all of the biggest technology companies in the world, and open-source products are increasingly the best you'll find.

For organisations, it's often safest to use good open tools, because you can't get locked in by a specific vendor. That said, when evaluating open software, make sure that your choice of tool has a big, strong, happy community behind it. This will mean it will keep getting better, and you'll be able to find support online easily.

### Open standards

Open standards are public specifications about how something works, and that one can stop you from using. For instance, PDF is an open standard: anyone can read and contribute to the official documents that define how PDFs work, and build software that opens and creates PDFs.

> That was not always the case. The PDF specification was owned by Adobe for many years, and Adobe charged companies to use it. Adobe made the standard open in 2008. This was both generous and useful to Adobe, because they were becoming the premier provider of proprietary software for creating PDFs (with InDesign and Acrobat especially). By making the standard open, they made PDF more important, which made it easier to sell their software. It was a win–win.
{:.box}

For long-term sustainability, look for tools that follow popular open standards. For instance, an editor that stores text as accessible HTML is a far safer choice than an editor that stores text in clever but obscure or proprietary code.

There are standards for almost everything: metadata standards (many of which, like ONIX, are not open), scholarly publishing standards, data standards, textbook standards, accessibility standards, and so on.

You'll never have time to find and understand them all, but before you make choices about editorial tools and processes, make time to learn about the standards that already exist in your field.
