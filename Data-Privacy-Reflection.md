 Research & Learn
Key takeaways from privacy policy:
We collect personal data (contact info, lifestyle details, usage patterns) under GDPR compliance. Data is shared with trusted third parties like OpenAI for motivational messages and Google Workspace for calendar integration. 
Users can access, correct, delete their data, or withdraw consent anytime via privacy@focusbear.io. 
Types of confidential data:

User personal info (names, emails, payments)
Health/neurodivergent status (sensitive under GDPR)
Usage patterns and productivity habits
Business data (financials, unreleased features, source code)

Best practices:

Only access data you need
Use encrypted connections and strong passwords + 2FA
Never share user data outside approved systems
Lock screens when away
Anonymize data in testing

Responding to suspected breach:

Stop immediately
Document what happened
Report to supervisor right away
Don't delete evidence

 Reflection
How I'll handle data securely as a backend dev:

Check APIs don't leak sensitive fields in code reviews
Never log passwords, tokens, or PII - use IDs instead
Test with fake data only, never production data
Sanitize error messages to hide internal data

Storing, sharing, disposing:

Store: Only in approved encrypted databases
Share: Through company tools, redact sensitive parts
Dispose: Hard delete when requested, don't just mark deleted

Common mistakes:

Logging emails or names directly
Copy-pasting production data to test environments
Leaving debug endpoints active
Committing credentials to git
Not validating who's requesting data in APIs

 Task
One habit I'll adopt:
Weekly data audit every Friday - review what data my recent code touches, check logs for PII exposure, verify API responses aren't leaking fields.
Key security measure:
Structured logging with data classification - only log safe fields like user IDs and durations, never emails or sensitive data.