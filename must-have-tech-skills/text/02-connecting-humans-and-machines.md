---
title: Connecting humans and machines
---

# Connecting humans and machines
{:.no_toc}

* TOC here
{:toc}

If you're creating content that a machine will process, we need to write in a way that both humans and machines can understand. This is not easy: humans are flexible and love breaking rules; machines are not flexible, and are literally made of rules.

Luckily, in building the Internet, people have come up with all kinds of conventions and techniques for capturing human stories in ways that machines can process.

We need to learn those techniques to make machines do what we want, and not break our work.

## Separating content and design

The fundamental rule in multi-format editing is that **we separate content and design**.

Let's say we're writing an article containing a case study. The case study is made of content and design:

- **Content**: the heading and the story and maybe a picture.
- **Design**: a surrounding box, a font change from the main text, the way the box sits to the right of the main text.

In a different context, say on a small phone, we might use a completely different design that saves space and requires less processing power: a background colour rather than a box, the same font as the main text, and the box will come after the main text in a single column.

The idea here is that:

- **Content** is determined entirely by its creator, and it doesn't change.
- **Design** is guided by its creator, but ultimately determined by to the user and their viewport. It is format- and context-based.

In digital production, then, we aim to create:

- One master version of all content.
- Any number of design stylesheets for different formats and contexts.

**One master version of content** is especially important, because we *never* want to be maintaining the same content in more than one place.

What does separating content and design mean for day-to-day editing? Here are some examples:

1. **Be on the lookout for subtle mixing up of content and design.** For instance, referring to the colours in a graph is risky: what if that graph appears on a black-and-white ereader? What if a reader is using a high-contrast display that changes the colours for readability? What if your reader is blind, and having a computer read the text to them?
2. **Avoid using design features for semantic purposes.** For instance, in a textbook don't write 'learn the words in bold', because in some viewports those words might appear italic, or pink, or highlighted instead. Rather say 'learn the words emphasised *like this*', and tag the phrase in the same way you'd tag a word to learn.
3. **Avoid 'positioning' phrases.** like 'see above' and 'the figure on the right'.

## Basic HTML and CSS

Anyone who worked in publishing twenty years ago remembers marking up text for layout: adding tags like `[start box]` and `[end box]` and inserting instructions for design like `[pullquote]` or `[smallcaps]`.

In well-organised teams, we standardised those tags so that typesetting would be fast and hopefully error-free. With a standardised language for markup in a team, it was not unusual for a book to be final at the third round of page proofs.

While we were doing that, around the world people were doing the same thing for web pages. Though, rather than marking up content for typesetters, they were marking up content for web browsers: machines that would 'typeset' on the fly, on screen, on a user's computer.

There were many attempts to create markup languages. The technique that really caught on used labels in angle-brackets, like `<blockquote>`. A team could create and extend its own markup language for any kind of content. This technique became known as 'extensible markup language', or XML for short. 

There are probably tens of thousands of markup languages created using the XML technique. The most popular by far is HTML, which stands for 'hypertext markup language'. Almost every web page you visit is delivered to your computer in HTML. Your web browser reads the HTML and 'typesets' the page for you automatically.

If well constructed, that HTML markup lets browsers lay out the same content differently, but readably, on an infinite number of viewport shapes and sizes, including printable pages.

To work with digital content, you have to know at least basic HTML.

### Elements

Each tag in HTML marks up an 'element'. Web pages are made of elements.

A paragraph is one kind of element. To tell a machine that a given string of characters is a paragraph, we use a `<p>` tag:

```html
<p>Hello World!</p>
```

The `<p>` is a 'paragraph' tag. We use paragraph tags at the start and end of the paragraph, and the slash in the second tag indicates that it's *closing* the paragraph.

A paragraph marked up with `<p></p>` tags is an 'element'. The word 'element' is also useful in traditional book terms for any piece of a book, for what we often call a feature, like a figure or a blockquote.

HTML includes about a hundred standard elements. Here are the most common ones.

#### Paragraph

```html
<p>
  Hello World!
</p>
```

Note that here we've used line breaks and indentation to make the code easier for humans to read. This could be also be on one line.

#### Unordered list

A list with no particular order.

```html
<ul>
  <li>Apples</li>
  <li>Pears</li>
</ul>
```

A bulleted list is an example of an unordered list. The list marker – bullets, discs, little pictures – depends on the CSS. Solid bullets are the default.

#### Ordered list

A list with a particular order, like 1, 2, 3 or a, b, c.

```html
<ol>
  <li>Down the passage.</li>
  <li>Turn left.</li>
</ol>
```

The markers' scheme depends on the CSS. The default is called 'decimal' and displays as 1., 2., 3. and so on.

#### List item

As you can see in the examples above, the items in a list are marked up with an `<li>` tag.

#### Six levels of heading

```html
<h1>Great Expectations</h1>
  <h2>Part 1</h2>
    <h3>Chapter 1</h3>
```

These heading levels go to `<h6>`.

#### Emphasis

The `<em>` element is for emphasising words.

```html
You <em>must</em> try this.
```

By default, browsers display these words in italics.

#### Strong text

The `<strong>` element makes words stand out.

```html
‘Dog’ is a <strong>noun</strong>.
```

Browsers usually display this as bold.

#### A span for any string of characters

Sometimes you need to mark up a particular string of characters for a purpose that existing HTML tags don't cover. For instance, if you want to display the opening words of a passage in small caps.

```html
<span>It was the best of times,</span>, it was the worst of times …
```

In this case, we might write CSS thats displays the first span in a chapter in small caps. We'll get to writing CSS later.

#### A div for any division

Much like a `span`, a `div` is for any block of content that you need to mark up, and for which there isn't an existing HTML element. For example, a warning message:

```html
<div>
  This is a warning!
</div>
```

We might then write CSS that displays this `div` with a red background.

#### Tables

At its simplest, an HTML table is made of a `<table>` element, which contains table rows (`<tr>`); and each table row contains table data (`<td>`) elements. Each `<td>` is a table cell.

```html
<table>
  <tr>
       <td>One data cell.</td>
  </tr>
</table>
```

#### Links

To create a link we use an `<a>` element. The 'a' happens to stand for 'anchor' (for reasons we don't need to get into now).

The link tag needs extra information: the URL to link to. When we need to give a tag extra information, we include that info as an 'attribute'. In this case, an `href` for 'hyperlink reference':

```html
<a href="http://example.com">
  An example web page.
</a>
```

That will make the phrase '[An example web page.](http://example.com)' clickable. Note how the attribute sits inside the opening tag.

#### Images

The image tag also needs an attribute, a `src` for the source image file.

```html
<img src="selfie.jpg" />
```

Note that the `<img>` tag doesn't wrap around anything. It is self-standing. So it should also close itself with a slash. We call it a self-closing tag.

For accessibility, we should also include an `alt` attribute: text that is the *alternative* to seeing the image. The best `alt` tags describe the image.

```html
<img src="selfie.jpg" alt="A selfie photo of Arthur in the mountains of Slovenia." />
```

A screen reader might read that `alt` text out. And if a browser can't find the image file, it will display the `alt` text instead.

### Stylesheets

When a web browser sees those HTML tags, it *renders* the content inside them. That is, it processes and displays the content.

You'll notice that none of those elements on their own describe what their content should *look like*.

To give the content a design, it follows a stylesheet. Browsers have a very basic, built-in stylesheet, which does things like make headings big and bold.

We then define our own design by adding our own stylesheet. 

To write stylesheets, we use a language called CSS (for 'Cascading Style Sheets'). In CSS, we write each rule by including the element name, and then its design properties in curly braces. For instance, this rule makes all paragraph text grey:

``` css
p { color: grey; }
```

(You'll eventually get used to the American spelling of 'color'.)

We can use any number of properties in a rule. For instance, we can also increase the font-size. A font-size of 120% is 20 per cent larger than the default font size:

``` css
p {
  color: grey;
  font-size: 120%;
}
```

(We could also set font size in units, like `16pt`.)

See the extra line breaks at the braces? That's a code-layout convention for making CSS easier for us humans to read. The line breaks do not affect how the CSS works.

The terms for the display properties (like `color` and `font-size`) are defined in official specifications. Learning CSS is mostly about learning the names of the many properties you can use, and how they interact.

There are about six hundred properties, so you're unlikely to ever learn them all. Just learn them as you need them, by Googling for the effect you want to create. Here are some very common CSS properties:

- `background-color`: sets the colour that fills an element.
- `border`: sets the thickness, style and colour of an element's border.
- `color`: sets the colour of the text in an element.
- `float`: defines whether an element floats to the right or the left, wrapped by its surrounding elements.
- `font-family`: sets the type face of an element's text.
- `font-size`: sets the font size of an element's text.
- `font-style`: mostly used to make text italic.
- `font-weight`: sets the weight of the font, e.g. 'bold'.
- `height`: sets the height of an element.
- `line-height`: sets the height of an element's lines (much like leading in print design)
- `margin`: the space around an element.
- `padding`: the space between an element's content (e.g. text) and the edges of the element box.
- `text-align`: defines whether text is aligned left or right, centred or justified.
- `width`: sets the width of an element.

The values of those properties can be set in different ways. For instance, `width` can be set in units (e.g. pixels) or as a percentage (e.g. `50%`).

### Classes

So now we know how to mark up and style paragraphs. As you may have guessed, though, there are any number of different *kinds* of paragraph. Apart from default body text, a publication might have lead-in text, taglines, epigraphs, dedications, and so on. These are all different kinds of paragraph.

We can't have separate elements for all of them. So in HTML we say there are different *classes* of paragraph. You can just think up classes as you need them. The same goes for any of the elements I listed:

*   lists might be regular bulleted lists, clickable menus, chapter objectives, or glossary entries;
*   images might be portraits, graphs, icons, decorations, or maps;
*   spans might mark computer code, important words, proper names, places, or other special terms;
*   divs might mark sections as sidebars, footnotes, or activities.

And much more.

So HTML lets us invent our own classes, and gives us a way to say what class an element belongs to. We do this by adding an *attribute* to the element's opening tag. Let's say we want to call our paragraph a 'greeting' paragraph:

``` html
<p class="greeting">Hello World!</p>
```

We could have called the class anything we liked, even something silly:

``` html
<p class="frabjous">Hello World!</p>
```

It's best to use class names that are easy to remember and that describe their *purpose* clearly. And it's good to reuse the same classes in your team and across your publications, for consistency.

To define what content in a class looks like in CSS, we use a dot before its name. For example:

``` css
p.greeting {
  text-transform: uppercase;
}
```

That will make any paragraph with a `greeting` class appear in uppercase.

I can also make *any element* (not just paragraphs) with a `greeting` class uppercase by leaving out the element name (the `p`):

``` css
.greeting {
  text-transform: uppercase;
}
```

### Inheritance

Perhaps the most important feature of CSS is that styles can be inherited. What does this mean? Let's say I make all paragraphs grey and all greeting paragraphs uppercase:

```css
p {
    color: grey;
}
p.greeting {
    text-transform: uppercase;
}
```

What colour will the greeting be? Grey. Because *all* paragraphs will inherit the rule for `p`. That's what the 'cascading' means in 'cascading style sheets'.

## Naming design features

When you mark up a document for publication, whether you're working in HTML or something else, you will have to *name its features*. It's very important to name things carefully and clearly. For instance, each article might have:

- a list of learning objectives
- three activities
- two figures, each with a caption and a number
- a glossary
- a bibliography.

It is *very important* to set this list in stone early in a project, and to agree on the **exact name** you will use for each feature. And that name must describe the **purpose of the feature,** and not its design. That is, don't call a feature 'big red box' when you should call it 'key concept'. Also, avoid abbreviations that are confusing to newcomers.

Usually, these features will be used as class names in CSS.

|       Feature       | Good class name | Bad class name |
|---------------------|-----------------|----------------|
| Learning objectives | .objectives     | .list-1        |
| Activities          | .activity       | .red-box       |
| Figure              | .figure         | .fg            |
| Figure caption      | .caption        | .centred-itals |
| Figure number       | .figure-number  | .no            |
| Glossary            | .glossary       | .defs          |
| Bibliography        | .bibliography   | .hang-indent   |

In the simple list above, that's easy. But it can get complicated quickly. In a big textbook we worked on, we had to allow for a range of features, each with potential design features. Here is a selection of those features.

|         Element name         |                         Design preference                          |
|------------------------------|--------------------------------------------------------------------|
| Subheadline                  | Should look like second-level heading                              |
| Great-economists section     | Box, grey brackground, big heading                                 |
| How-economists-learn section | Box, grey background, big heading                                  |
| Videos                       | Embedded in main text on web; thumbnail and URL in margin in print |
| Questions                    | Red background, clickable on web                                   |
| Exercises                    | Red border, sans-serif text, caps heading                          |
| Figures                      | Any combo of images or tables, caption, reference, source          |
| Slideline                    | Clickable 'filmstrip' on web, figure with numbered steps in print  |
| Displayed maths              | Space before and after                                             |
| Sidenotes                    | Notes in the margin                                                |
| Footnotes                    | On web, these are popups, in print they are in the margin          |
| Definition boxes             | Popups on web, in margins in print                                 |

We discovered a few weeks into the project that team members had different ideas about what these features were called and how they were used. That was a huge problem!

## Document trees

As you can tell by now, communicating with machines is about keeping things super organised. A well-organised document also has a clear and consistent tree-like structure. For example, think of a book divided into parts. It might have this structure:

- Introduction
- Part 1
  + Chapter 1
  + Chapter 2

We can map this outline to HTML elements:

- Introduction: `h1`
- Part 1: `h1`
  + Chapter 1: `h2`
  + Chapter 2: `h2`

That tree structure is a valid representation of the book's structure. However, think about the *design* of these elements. Visually, we will want the `h1` 'Introduction' to look like the `h2` 'Chapter 1'. And the `h1` 'Part 1' should be much bigger and heavier, and have its own page.

As editors, we may be tempted to make 'Introduction' an `h2`, so that it looks like the `h2` 'Chapter'; but this would break our tree structure. Computers can't appreciate our designs, they can only follow our structure. It's useful to think how a screen reader would speak out the structure of a page to a blind person: the structure of heading levels is a crucially important way for a blind person to follow the structure of the page.

So we have to look out for the human tendency to break the tree structure because we're thinking visually, and not separating content and design.

The real solution here is to use `h1` for 'Introduction', and to make it *look* less prominent than 'Part 1' in our CSS stylesheets.

Maintaining a consistent tree structure can be harder than it looks. Keep your eyes peeled for broken tree structures in the documents you edit!
