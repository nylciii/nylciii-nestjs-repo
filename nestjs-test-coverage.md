 Reflection
What the coverage bar tracks:
The coverage bar shows percentage of code executed during tests across statements, branches, functions, and lines. It visually indicates which parts of the codebase are tested vs untested.
Why Focus Bear enforces 80% minimum:

Catches regressions - Changes don't break existing functionality
Forces thinking through edge cases - Writing tests reveals bugs
Safer refactoring - Can confidently improve code
Documentation - Tests show how code should work
Team confidence - New devs can modify code without fear

For a productivity app supporting neurodivergent users, stability is critical - bugs directly impact people's daily routines.
How high coverage can still miss bugs:
Coverage measures execution, not verification:

Examples of weak vs strong assertions:
Weak:
typescriptexpect(result).toBeDefined();
expect(result).toBeTruthy();
expect(mockFunction).toHaveBeenCalled();
expect(array.length).toBeGreaterThan(0);
Strong:
typescriptexpect(result.userId).toBe('123');
expect(result.streakCount).toBe(7);
expect(mockFunction).toHaveBeenCalledWith({ id: '123', action: 'start' });
expect(error.message).toBe('User not found');
expect(response.statusCode).toBe(400);
Strong assertions verify specific expected behavior, not just that something happened.

Balancing coverage with effective tests:
My approach:

Write tests for behavior first - What should this function do?
Check coverage - What did I miss?
Add tests for uncovered branches - Error cases, edge conditions
Review assertions - Does each test verify something meaningful?
Don't just hit 80% - If a test feels pointless, rethink it

Red flags:

Test with no expect() statements
Only checking function was called, not what it returned
Generic assertions like toBeDefined() everywhere
Mocking everything so nothing is actually tested

Good practice:

Each test verifies one specific behavior
Test both success and failure paths
Assert on actual values, not just existence
Integration tests for critical flows (even if slower)

High coverage + meaningful assertions = confidence in code quality.