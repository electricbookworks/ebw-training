---
title: Covers
---

# Covers

There are many ways to create a cover in an epub ebook. You could just place an image in the first HTML file in the epub. But we generally get better-looking results with some very specific code.

## Prepare the image

Get the front cover as a jpg image, name it cover.jpg, and add it to the `Images` folder of your epub. 

To tell ereaders that it's the cover image, right-click it, select `Add Semantics`, and tick `Cover Image`. (Some ereaders won't display the cover in their library view unless you do this.) 

## Create the cover HTML

Next, add a new HTML document to your `Text` folder, and click-and-drag it so that it's the first HTML file in the list. Name the file 'cover.xhtml'.

Now, in the Code View of that file, replace the `<head>` and `<body>` elements with this code:

~~~ html
<head>
	<title>Cover</title>
	<link rel="stylesheet" type="text/css" href="../Styles/styles.css" />
</head\>

<body class="cover">
	<p class="cover">
		<img class="cover" alt="Cover" src="../Images/cover.jpg" />
	</p>
</body>
~~~

Change the name of the CSS file here if yours isn't called `styles.css`.

## Add the cover to CSS

Finally, add this code to your CSS file:

~~~ css
\* Styles for cover.xhtml \*
body.cover {
	margin: 0;
	padding: 0;
	text-align: center;
}
p.cover {
	margin: 0;
	padding: 0;
	text-align: center;
}
img.cover {
	height: 100%;
	margin: 0;
	padding: 0;
}
~~~

That should do the trick on most good ereaders. Like every piece cover code I've found, it won't work perfectly everywhere.

You can find more technical detail about covers [on the EBW Knowledge Base](http://electricbookworks.com/kb/creating-epub-from-indesign/after-indesign-export-to-epub/add-a-cover/).
