

📌 Mocking API Calls in Jest


1. Mocking API calls is important because real API requests slow tests down, make them inconsistent, and depend on outside networks. Tests should run fast and always give the same result. Mocking gives full control over the response so the test only checks the logic inside the code and not the behavior of the actual server.

2. Common pitfalls when testing asynchronous code include forgetting to wait for the async operation to finish, letting promises fail silently, and mixing real timers with fake ones. Another problem is testing logic that depends on timing, which often leads to flaky tests. Clear handling of async calls and proper mocking prevent these issues.