---
title: Testing and validation
---

# Testing and validation

Ebooks should be thoroughly checked, sometimes even proofread, just like print books. There are two parts to checking ebooks:

1.	validating the code, and
2.	checking the ebook on ereaders.

## Validating the code

Sigil includes a useful validation tool that checks the technical correctness (validity) of your epub file. (It's called 'FlightCrew'.) Go to `Tools > Validate EPUB with FlightCrew` or hit the green tick button. If there are technical errors, Sigil will give you a list of them, and you can click on the items in the list to jump to the problem.

## Checking on ereaders

Always, always test on a few different ereaders, and scroll through the whole book for a visual check. We recommend that you try to test on:

*	a good reading app on a tablet and/or phone like iBooks, Google Play Books, Aldiko;
*	a web-based reader like Google Play Books or Ibis Reader, or in Firefox using the EpubReader addon;
*	Adobe Digital Editions on a computer (ADE has lots of problems, but it's still the biggest computer-screen ereader next to Kindle);
*	an e-ink reader (e.g. Sony, COOL-ER, BeBook, etc.).

These tests should include a device with a small screen (less than, say, 5” diagonal; this can detect various formatting problems) and one with a large screen (above, say, 19”; this can detect low-res covers and missing page breaks).

A range of options like this will usually also include a device with an Adobe engine (i.e. one based on the Adobe Reader Mobile SDK, such as Sony Readers and B&N Nook), and a device with a WebKit engine (e.g. Ibis Reader, iBooks).
