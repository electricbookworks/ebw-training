---
title: Collaboration
---

# Version control
{:.no_toc}

* TOC here
{:toc}

To ensure good collaboration, you need good team communication and version control.

We've all sent someone a file named `…final.doc`, only to send them another one hours later called `…final v2.doc`, and then `…final v2 REVISED.doc`. Often we'll include a cover note in our email saying `I had to make a few updates – please use this version!`.

Tip: If you have to name new versions of a file, just add the date in `YYYMMDD` format, e.g. `proposal-20171201.doc`. If you have multiple versions in a folder, they will then be listed alphabetically. If you're creating several versions in one day, add the hour and minute as `-HHMM`: `proposal-20171201-1530`.
{:.sidenote}

Renaming and resending files is a common, crude attempt at version control. Our intentions are good, and we're actually providing two key pieces of a proper version-control system:

1. We're trying to give each version a *unique name*.
2. In our cover note, we're trying to *describe our changes*.

These are the building blocks of good version control: unique names, and descriptions of what changed.

Trying to do version control over email leads to disaster. The wrong version gets designed. Your colleague works on text you've already updated. No one knows who has the master version.

Luckily we don't have to suffer this pain if we use a version-control system. There are two kinds of version-control:

- real-time, centralised version control, and
- asynchronous, distributed version control.

Both are great, for different reasons.

## Real-time version control

In real-time version control, your editing software keeps a history of the document for you. And all collaborators work on the same document at the same time. Changes they make are recorded automatically and stored in a document's history, so that you can roll back to any point in that history. Google Docs does this. To see a Google Doc's history, you go to 'File > Version history'.

Did you know you can have your Google Docs edits played back to you like a video? Saerch for the [Draftback browser extension](https://bit.ly/draftback-ext). You'll notice that you can replay edits from the beginning of a document's history *even if you didn't have access to the document from its beginning.*
{:.sidenote}

A big advantage of real-time version control is that it's automatic: you don't need to do anything to get it.

Compared to distribution version control below, there are also downsides:

- It's a linear history, so you can't track separate versions, or 'branches', at the same time.
- You don't control the history consciously. Everything gets stored: even your idle doodles and messes are stored alongside your big breakthroughs. (Though in Google Docs you can give names to important moments in a document's history.)
- You can't see any context about *why* someone made a particular change, because you don't get to describe what you changed in the document history.
- Depending on the software, it's hard or impossible to get a track-changes-like view of exactly what they changed from version to version.

So automatic version history is really just constant back-up. Purists wouldn't call it 'version control', because it doesn't relly provide 'control'.

## Asynchronous, distributed version control

Software developers and tech-savvy writers use asynchronous, distributed  version control. What does that mean? 

'Asynchronous' means everyone can work on different versions at different times. I can work on my version of a document now, and my colleague on theirs later today, and we'll merge our versions tomorrow.

'Distributed' means we don't have to be working on the same copy of the document. I'll work in my copy, even offline, and Christina will work in hers. Later we'll merge our versions into one master version, which is the ultimate source of truth. We call that original source of truth 'the origin'.

In this system, each contributor:

1. checks out their own copy of the project
2. works on it
3. takes a snapshot of their changes, and
4. sends that snapshot to the origin to be merged in.

Each time you take a snapshot – which is usually called a 'commit' – you describe what you just changed and your snapshot gets a unique ID.

That description and ID are saved in the project's history forever, and anyone can go back, find them, and revisit the files at that point.

Since each team member is working on *their own copy* of the original, team members can have the ability, and authority, to vet each others' changes *before* they're merged into the origin. It is astonishing how many tiny changes get picked up at this point.

This approach makes a bunch of useful things possible:

- Backup and restore: each snapshot (commit) is saved, usually to a safe place online, and you can find and roll back to it.
- Synchronization: each team member can get the latest version of a project online anywhere, any time.
- Reset your work: if you really break your own copy of a project, you can throw it away and check out the last working version from the origin again.
- Find old, hidden mistakes: sometimes you discover that a mistake was introduced a long time ago, and you want to see when and why that happened. You can see the history of *any one paragraph of text*.
- A story of changes: since everyone describes their changes as they make them, usually in a one-liner description, it's easy to read the history of a project and see how it evolved.
- Tracking attribution: each person's contributions carry their name and email address. So you can easily see who changed what through a project's history.
- Branches: a branch is a copy of your copy of a project – a kind of alternative reality. You use branches to try out alternative options for content or features. If the changes in your branch work out well, you just merge them into your main project. Each branch tracks its changes separately.

The downside of this kind of version control is that it is hard to learn. Braches and occasionally conflicting versions can be confusing. You need a level head to resolve problems when they do crop up.

The most popular software for this kind of version control is called Git. In Git, a project is a directory (a folder) whose contents are tracked. We call that directory or project a *repository* – or 'repo' for short.

### Git basics

Git can be used from the command line or with Git software that provides a graphical user interface (GUI), like [GitHub Desktop](https://desktop.github.com/). The GUI effectively handles Git commands for you behind the scenes, and gives you a visual view of what's going on.

Here are the most common Git commands, and what they do. If you're using Git from the command line, you'd type these in while in the project folder.

- `git status`: the current state of the repository. Use this often!
- `git init`: starts Git tracking the contents of the folder, by creating a `.git` folder inside it. You do this once at the beginning of a project.
- `git add`: tell Git to start tracking a new file, as in `git add chapter1.md`.
- `git commit`: take a snapshot of the project.

   It's best to add your description of your changes here, too, in this command: `git commit -m "Your description here."`

- `git pull`: get the latest changes (e.g. changes from your collaborators).
- `git push`: send your committed changes for others to access.

There is much more to Git, but you'll use just those commands 90 per cent of the time.
