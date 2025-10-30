## Good Commit Messages

### What makes a good commit message?

A good commit message tells me exactly what changed and why, without needing to read the code.

**Good examples:**
- "Fix login bug where users couldn't reset password"
- "Add email validation to registration form"
- "Remove unused API endpoint for old feature"

**Bad examples:**
- "fix"
- "stuff"
- "update"
- "asdfgh"

A good message should answer: "What did I do and why did I do it?"

### How does a clear commit message help in team collaboration?

When my teammate looks at the commit history, they can understand what I did without asking me.

If someone needs to:
- Review my code
- Find when a bug was introduced
- Understand why something was changed
- Revert a specific change

Clear messages make all of this easier. They can see "Oh, this commit added the feature I need" or "This is where the bug came from."

Without good messages, they'd have to read through all the code changes or come ask me directly.

### How can poor commit messages cause issues later?

When I write "fix stuff" or "update," future me (or my teammates) won't know what I actually fixed.

**Real problems this causes:**
- Can't find which commit introduced a bug
- Don't know why a piece of code exists
- Hard to revert changes because I don't know what each commit does
- Waste time reading code instead of reading a clear message
- Have to ask people "what did you change here?" when they might not remember

If I leave the project and someone new joins, they'll struggle to understand the history because my messages don't explain anything.

Basically, bad messages make debugging and collaboration way harder than it needs to be.