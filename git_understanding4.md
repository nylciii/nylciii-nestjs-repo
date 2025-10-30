

## Advanced Git Commands I Learned

### `git checkout main -- <file>` - Restore a File

**What it does:** Brings back a file from the `main` branch, replacing my current version.

**When I'd use it:**
- I messed up a file and want the clean version back
- I'm on a feature branch and need the original file from `main`
- I accidentally deleted something and need to recover it

**Real scenario:** I'm working on a feature, break `config.js`, and just want the working version back without losing my other changes.

### `git cherry-pick <commit>` - Pick Specific Commits

**What it does:** Takes ONE commit from another branch and applies it to my current branch, without bringing everything else.

**When I'd use it:**
- Someone fixed a critical bug on another branch, I need that fix NOW on `main`
- I accidentally committed something useful on the wrong branch
- I want one feature from a branch but not the whole thing

**Real scenario:** A teammate fixed a security bug on their feature branch. Instead of waiting for their whole feature to be ready, I cherry-pick just that bug fix to `main`.

### `git log` - View History

**What it does:** Shows me the commit history - who changed what and when.

**When I'd use it:**
- Finding when a bug was introduced
- Understanding what changed recently
- Checking if someone already implemented something
- Writing release notes

**Real scenario:** The app broke after deployment. I use `git log` to see what changed in the last few days to figure out which commit caused it.

**Useful variations I found:**
- `git log --oneline` - Compact view
- `git log --graph --all` - Visual tree of branches
- `git log --author="Donyl"` - Only my commits

### `git blame <file>` - Who Changed What

**What it does:** Shows who last modified each line in a file and when.

**When I'd use it:**
- Finding out why a line of code exists
- Tracking down who introduced a bug
- Understanding context behind a change
- Knowing who to ask about confusing code

**Real scenario:** There's a weird line of code I don't understand. I use `git blame`, see who wrote it and when, then ask them why they did it that way.

**Note:** It's called "blame" but I shouldn't use it to actually blame people! It's for understanding context.

### What Surprised Me

**Git log has SO many options:** I can filter by date, author, file, even search commit messages. It's like a search engine for my code history.

**Git blame shows the full story:** It doesn't just show "who," it shows the commit message too. So I can see WHY someone made that change, not just who did it.

**These commands are lifesavers for big projects:** When I had that `.env` secret issue, `git log`. It helped me find exactly which commit had the problem. `git blame` would show me when I added it. These tools make debugging way faster.

### My Biggest Takeaway

Git isn't just for saving code - it's a time machine. I can go back, see what happened, grab specific changes, and understand the full history of any line of code. That's incredibly powerful when things go wrong or when I need to understand legacy code.