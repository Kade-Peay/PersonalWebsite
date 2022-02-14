# What Do I Want This to Do?

I'd ideally like this to showcase a little about me and some of my favorite
projects that I've ever worked on.

I'd like to run this on a Raspberry Pi and be able to serve this to the web. This
way I can put a link to it on my resume.

# How Do I do it?

I could use something like django, that might help me scale the project. However,
I really don't like using Django. It might be better for me to use something like Vue.

This is something I will have to think on, because the last thing I want to do is
refactor the whole project after I've almost finished.

Djanog might be better for importing old projects though, and would likely help
with adding onto the site after the fact.

# What Projects Should I showcase?

I'd like 5-10 projects showcased, depending on the size of them.

Obviously I can't put any of my projects in which I followed a tutorial, that's cheating.
School projects should be fine.

Do I try to run these in the browser?
No, at most I would link to the github, otherwise I should just use screenshots and maybe a video for each.

1. Download Organizer: This one is pretty simple, it's one of my favorite and most used projects
1. Planetary Weather: Not only did I like this but it shows that I have a good understanding of API.
1. Tic Tac Toe: It's a simple project, but it was in Python, and I like it.
1. Password Generator: although maybe it's not as good as it could be, it was a first project that I'm mighty proud of. Potentially I should go back and finish this
1. Hashing Poetry: This is a school project but was fairly challanging and something good to showcase

> of course I can always add more, but changing would likely be challenging.

---

Alright I think that's enough for planning. I think I should get into at least creating the index.

# Design

I'm starting this probably later than I should have, I should have been typing out my design plans for a long time yet here we are.

## Projects Page

---

I've decided that the _projects_ page is going to be another directory that will link to individual pages. In each of these I will break down my design and how I did it.

I'd like to also have those code block snippets so that it would be easy to copy and paste the code. Something like you see on Stack Overflow or other coding tutorial websites. I'll investigate their HTML to see how this works.

Okay after some investigation it looks like they're using a "pre" tag and they have the style "position: relative;", I'll investigate what that style is doing. There is also a "div class="open_grepper_editor"", I think that is my grepper extension but I'll see if I have to add that myself.

After adding one of these, yes, my Grepper extension is injecting that code itself. Sweet.
