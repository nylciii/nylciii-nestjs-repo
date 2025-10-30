
## Pull Requests (PRs)

### Why are PRs important in a team workflow?

PRs are basically a way to say "Hey, I made some changes, can you check them before we add them to main?"

**Why this matters:**
- **Code review:** Someone else spots bugs or issues I missed
- **Knowledge sharing:** My team sees what I'm working on and learns from it
- **Discussion:** We can talk about better approaches before merging
- **Quality control:** Keeps broken or messy code out of main
- **Documentation:** The PR itself becomes a record of why we made changes

Without PRs, everyone would push directly to main and we'd have chaos - broken code, conflicts, no oversight.

### What makes a well-structured PR?

**Good title:** Clear and specific
- Good: "Fix user login timeout bug"
- Bad: "Fix bug" or "Update code"

**Good description:** Explains what and why
- What problem does this solve?
- What changes did I make?
- How can someone test it?
- Any side effects or concerns?

**Small and focused:** One thing at a time
- Easier to review
- Less likely to have conflicts
- Faster to merge

**Linked to issue:** If there's a related bug report or feature request, link it

**Example structure:**
```
## Problem
Users were getting logged out after 5 minutes

## Solution  
Increased session timeout to 30 minutes in config

## Testing
- Log in and wait 10 minutes
- Verify user stays logged in
```

### What did I learn from reviewing an open-source PR?

I looked at React PRs on GitHub and noticed:

**Discussions are detailed:** People don't just say "looks good" - they ask questions, suggest improvements, point out edge cases I wouldn't have thought of.

**Multiple reviewers:** Big projects have several people checking the code, not just one. Everyone brings different perspectives.

**Testing is crucial:** Reviewers always ask "did you test this?" or "what about this edge case?" They want proof it works.

**Respectful feedback:** Even when pointing out mistakes, people are professional and helpful. It's "have you considered..." not "this is wrong."

**Iteration is normal:** PRs often go through multiple rounds of changes before merging. The first version is rarely perfect.

**CI/CD runs automatically:** Tests run on every PR. If tests fail, it won't merge. This catches issues early.

**The biggest thing:** PRs aren't just about code - they're about communication. The discussion in the comments is sometimes more valuable than the code itself because it explains the "why" behind decisions.