 Reflection
How Supertest helps test API endpoints:
Supertest lets me:

Make real HTTP requests to the app (GET, POST, PUT, DELETE)
Test the full request/response cycle including middleware, guards, pipes
Verify status codes, headers, and response bodies
Test without starting an actual server
Chain assertions cleanly (.expect(200).expect('Content-Type', /json/))

It simulates what the frontend or mobile app would actually do when calling our APIs.
Difference between unit tests and API tests:
Unit tests:

Test individual functions/methods in isolation
Mock all dependencies
Fast to run
Example: Testing a service method directly

typescriptit('userService.findById should return user', () => {
  const user = userService.findById('123');
  expect(user.id).toBe('123');
});
API tests (integration tests):

Test full HTTP request flow through controllers, services, database
Minimal mocking (only external services)
Slower but more realistic
Example: Making actual HTTP request to endpoint

typescriptit('GET /users/123 should return user', async () => {
  await request(app.getHttpServer())
    .get('/users/123')
    .expect(200);
});
API tests catch issues unit tests miss: routing problems, middleware failures, serialization bugs, validation errors.
Why mock authentication in integration tests:
Reasons to mock auth:

Speed - Don't need to generate real JWTs for every test
Simplicity - Focus on testing endpoint logic, not auth system
Isolation - Auth service might hit external providers (OAuth, etc.)
Control - Easily test different user roles/permissions

typescript// Without mocking, would need:
const realToken = await authService.login(testUser);
// Complex setup for each test

// With mocking:
mockAuthGuard.canActivate.mockReturnValue(true);
// Simple, fast, focused
However, should have separate tests specifically for auth flows using real auth logic.


Structuring tests for success and failure cases:
My approach:
typescriptdescribe('POST /focus-sessions', () => {
  // Success cases
  describe('when valid data provided', () => {
    it('should create session and return 201', async () => {
      // Test happy path
    });

    it('should start session with default duration', async () => {
      // Test with optional fields missing
    });
  });

  // Failure cases
  describe('when invalid data provided', () => {
    it('should reject missing required fields (400)', async () => {
      // Test validation
    });

    it('should reject invalid duration format (400)', async () => {
      // Test specific validation rule
    });
  });

  describe('when authentication fails', () => {
    it('should return 401 for missing token', async () => {
      // Test auth requirement
    });

    it('should return 403 for insufficient permissions', async () => {
      // Test authorization
    });
  });

  describe('when business logic fails', () => {
    it('should return 409 if session already active', async () => {
      // Test business rule violation
    });
  });
});
Key principles:

Group related scenarios with describe()
Test one thing per it() block
Cover expected status codes (200, 201, 400, 401, 403, 404, 500)
Verify response body structure and content
Test edge cases (empty strings, null values, boundary conditions)

This ensures APIs work correctly for both users and handle errors gracefully when things go wrong.