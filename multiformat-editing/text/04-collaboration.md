---
title: Collaboration
---

# Collaboration
{:.no_toc}

* TOC here
{:toc}

While we're learning to use new techologies, we should make the most of two of its biggest gifts: easier collaboration and proper version-control.

## Team roles

In a traditional workflow, the most common team roles are these, and everyone works on every book:

|   Title    |          Role         |       Tools        |
|------------|-----------------------|--------------------|
| Author     | Creates content       | MS Word or similar |
| Editor     | Refines content       | MS Word or similar |
| Designer   | Develops page designs | InDesign           |
| Typesetter | Executes page design  | InDesign           |

That works really well for print books. When you're making more than print books, these roles and tools might change. The exact changes will vary among teams and projects, but common ones might look like this:

|   Title   |                              Role                             |         Tools         |
|-----------|---------------------------------------------------------------|-----------------------|
| Author    | Creates content                                               | MS Word or similar    |
| Editor    | Refines content, creates computer-readable text and structure | Google Docs, markdown |
| Designer  | Develops stylesheet templates                                 | CSS                   |
| Developer | Maintains systems                                             | Code libraries        |

Importantly, the designer and developer might not work on every book. They create templates and systems that are simply repeated without intervention.

What does not change is that every team needs to develop it's own processes. No amount of technology removes the need to establish processes and team culture that make great books.

## Version control

We've all sent someone a file named `final.doc`, only to send them another one hours later called `final revised.doc`, or `final FINAL.doc`. Often we'll include a cover note in our email saying `I changed the numbers; please use this version!`.

> Tip: The best way to name files is to use the date in `YYYMMDD` format. For instance, `proposal-20171201.doc`. This way, if you have multiple versions in a folder, they will be listed alphabetically. If you're creating several versions in one day, add the hour and minute as `HHMM`: `proposal-20171201-1530`.
{:.sidenote}

That is our crude attempt at version control. There are two things we're trying to do here:

1. We're trying to name each version of a file uniquely.
2. In our cover-note email, we're trying to describe what changes we made in that version.

Those are the building blocks of good version control: unique names, and descriptions of what changed.

Trying to do version control over email leads to disaster. The wrong version gets designed. Your colleague works on text you've already updated. No one knows who has the master version.

Luckily we don't have to suffer this pain if we use a version-control system. There are two kinds of version-control: real-time and turn-based. Both are great, for different reasons.

### Automatic version history

With automatic version history, changes you make are recorded automatically and stored in a document's history, so that you can roll back to any point in that history. Google Docs uses this. To see a Google Doc's history, you go to 'File > Version history'.

> Did you know you can have your Google Docs edits played back to you like a video? Go to [draftback.com](http://draftback.com/) to try it out. Also, you'll notice that you can replay edits from the beginning of a document's history *even if you didn't have access to the document from its beginning.*
{:.sidenote}

A big advantage of automatic version history is that it's automatic: you don't need to do anything to get it. A downside is that it's a linear history, and you don't control it consciously. You can't see any context about why someone made a particular change, because you don't get to describe what you changed as the document history is saved. And you can't (currently) get a track-changes-like view of exactly what they changed.

So automatic version history is really just constant back-up. Purists wouldn't call it 'version control', because there's not enough 'control' involved.

### Turn-based version control

In the version control that software developers use, each team member:

1. checks out the project
2. works on it
3. takes a snapshot of their changes, and
4. checks the project back in.

Each time you take a snapshot (usually called a 'commit'), you describe what you just changed and your snapshot gets a unique ID.

That description and ID are saved in the project's history forever, and anyone can go back, find them, and revisit the files at that point.

In addition, each team member is working on *their own copy* of the original. When they check their work in, it is *merged* into the original document. This way, no history is lost, and one person can be given the task of vetting all changes before they're merged into the original.

This approach makes a bunch of useful things possible:

- Backup and restore: each snapshop (commit) is saved, usually to a safe place online, and you can find and roll back to it.
- Synchronization: each team member can get the latest version of a project online.
- Reset your work: if you really break your own copy of a project, you can just throw it away and check out the last working version of the original again.
- Find old, hidden mistakes: sometimes you discover that a mistake was introduced a long time ago, and you want to see when and how that happened.
- A story of changes: since everyone describes their changes as they make them, usually in a one-liner, it's easy to read the history of a project and see how it evolves.
- Track attribution: each person's contributions carry their name. So you can easily see who changed what through a project's history.
- Branches: a branch is a copy of your copy of a project. You use branches to try new things in. If the changes in your branch work, you just merge them into your main project. Each branch tracks its changes separately.

The most popular software for this kind of version control is called **Git.** Git is very geeky, so it's not simple to use on its own. Luckily there are new software programs being developed that make Git easier to use, especially for non-technical teams. Electric Book Works is developing its [Electric Book Manager](https://electricbookworks.github.io/electric-book-gui/) for this. And Fog Creek is developing a tool called [Glitch Rewind](https://medium.com/glitch/reinventing-version-control-with-glitch-rewind-914c350da442) that makes Git very easy to use.

You might never have to use version-control software like Git, but it's important that you know it exists and you decide on workflows for the books you edit.
