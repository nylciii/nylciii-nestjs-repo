# Git Understanding: Staging vs Committing

## What is the difference between staging and committing?

**Staging** is like putting items in your shopping cart - you're saying "I want to include this." **Committing** is like checking out and paying - you're finalizing the purchase.

More technically:
- **Staging** (`git add`) - You're preparing changes to be saved, but nothing is permanent yet
- **Committing** (`git commit`) - You're actually saving those changes to Git history with a message

## Why does Git separate these two steps?

Because you don't always want to commit everything at once. 

For example, I might have:
- Fixed a bug in `user.js`
- Added a new feature in `product.js`  
- Some debug code in `test.js` that I don't want to save

With staging, I can pick and choose: stage only `user.js` and `product.js`, commit them separately with different messages, and leave `test.js` uncommitted.

It gives me control over what gets saved and how I organize my commit history.

## When would you want to stage changes without committing?

Real scenarios I can think of:
- **Reviewing before committing** - I stage files, check `git status` to make sure I'm committing the right things
- **Splitting work into multiple commits** - I modified 5 files but want to commit them separately with different messages
- **Double-checking changes** - Stage everything, review what's staged, unstage stuff I don't want
- **Interrupted workflow** - I'm halfway through a feature, stage my progress, but not ready to commit yet

Basically, staging is my "draft" and committing is "publish." I don't always want to publish immediately after drafting.

## My Experience Today

I experimented with staging and unstaging files. The most useful thing I learned is that `git status` shows me exactly what's staged vs what's not, which helps me avoid committing things I didn't mean to. 

I also realized that earlier I had a `.env` file issue, I committed without carefully checking what was staged. Now I understand I should always check `git status` before committing! Thankfully git has blocking feauter for .env files, since these files usually has important keys, but we should not rely on it.