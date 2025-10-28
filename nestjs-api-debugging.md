 Reflection: Inspecting API Requests & Responses
 How can logging request payloads help with debugging?

Logging request payloads helps me see exactly what data is being sent to the server. When something goes wrong, it’s often because the client sent the wrong data, or a field was missing. By logging it, I can confirm if the backend is receiving what I expect.

 What tools can you use to inspect API requests and responses?

I can use:

Postman – great for manually testing endpoints and checking headers/body.

Bruno – a lighter, open-source alternative to Postman.

curl – perfect for quick terminal checks or scripting tests.

 How would you debug an issue where an API returns the wrong status code?

I’d start by:

Checking the controller or service logic – maybe it’s not throwing the right exception.

Inspecting interceptors or middleware – they might be overriding the response.

Using logs or HttpException to confirm the flow.

 What are some security concerns when logging request data?

Logging is useful, but it can also expose sensitive information if not handled properly.
I should avoid logging things like:

Passwords

Access tokens

Personal user data (email, phone numbers, etc.)