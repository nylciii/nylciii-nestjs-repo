 Reflection
How breakpoints help vs console logs:
Breakpoints let me:

Pause execution and explore state at exact moment
Inspect all variables in scope, not just what I logged
Step through code line by line to see flow
Modify variables on the fly to test scenarios
See call stack to understand how I got there
No code changes needed - don't clutter code with logs

Console logs only show what I thought to print, breakpoints show everything.
Purpose of launch.json:
Tells VS Code how to start the debugger:

What runtime to use (Node.js)
What command to run (npm run start:debug)
Debug port configuration
Source map settings (maps TypeScript to JavaScript)
What files to skip during debugging

Without it, VS Code doesn't know how to attach to NestJS process.
Inspecting request parameters and responses:

Set breakpoint in controller method
When request hits, debugger pauses
Request params: Hover over @Param(), @Body(), @Query() decorators or check Variables panel
Response data: Step through to return statement, inspect what's being returned
Use Debug Console: Type variable names to evaluate them (e.g., req.user, dto.email)
Watch expressions: Add variables to Watch panel to track changes

Debugging background jobs:
For jobs that don't run in request-response:

Set breakpoints in job handlers/cron methods
Debugger must be running when job triggers
For scheduled jobs: Wait for cron to execute or manually trigger
For queue workers: Process a job and debugger will catch it
Use debugger; statement in code as alternative to force pause
Check job logs to confirm it's running, then debug next execution