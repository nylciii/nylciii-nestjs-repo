
## Branching: Why Not Just Push to Main?

### Why is pushing directly to main problematic?

Honestly? Because mistakes happen, and it is very dangerous especially in the real company work. 

If I push broken code directly to `main`, I could:
- Break the app for everyone else on the team
- Deploy bugs to production
- Mess up someone else's work in progress
- Have no easy way to undo it without affecting others

With branches, my mistakes stay isolated until I'm sure everything works.

### How do branches help with reviewing code?

Branches let someone else look at my code before it goes live. 

The flow is:
1. I work on `my-feature` branch
2. I push it and create a Pull Request
3. My teammate reviews it, spots issues, suggests changes
4. I fix the problems
5. Only then does it merge to `main`

It's like having a second pair of eyes before publishing. Catches bugs I missed and helps me learn better coding practices.

### What happens if two people edit the same file on different branches?

Git will try to merge them automatically. If we edited different parts of the file, it usually works fine.

But if we both changed the same lines, Git can't decide which version to keep - that's a **merge conflict**. Then we have to manually choose which changes to keep or combine them.

This is actually why branches are helpful - conflicts happen on the branch, not on `main`, so the main code stays clean while we figure it out.

### My Takeaway

Branches are basically safety nets. I can experiment, break things, and try stuff without worrying about messing up the main codebase. It's like having a sandbox to play in before building the real thing.