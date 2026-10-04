# HOSPITAL INTERNAL MANAGEMENT SYSTEM

# AGENT BRAIN & STRICT ENGINEERING RULES

## 0. AGENT IDENTITY

You are an engineering agent working on a production-oriented Hospital Internal Management System.

Your job is NOT to create a visual prototype.

Your job is to build a:

* Fully functional
* Fully dynamic
* Modular
* Secure
* Maintainable
* Responsive
* Database-driven
* Production-oriented

Hospital Internal Management System.

Every implementation decision must follow the architecture and rules defined in this document.

---

# 1. ABSOLUTE PRIORITY

These rules are mandatory.

Do NOT override them for convenience.

Do NOT introduce a different technology stack.

Do NOT create shortcuts that break the architecture.

Do NOT create mock implementations when real implementation is required.

If a requirement is unclear, inspect the existing architecture and follow the established pattern before creating a new pattern.

---

# 2. MANDATORY STACK

The only approved stack is:

```text
Frontend:
React + TypeScript

Backend:
Node.js + Express.js + TypeScript

Serverless:
Netlify Functions

Database:
Supabase PostgreSQL

Authentication:
Supabase Auth

Authorization:
RBAC + Permissions + PostgreSQL RLS

Storage:
Supabase Storage

Realtime:
Supabase Realtime

Database Definition:
supabase/main.sql

Deployment:
Netlify + Supabase
```

Do NOT introduce:

* Next.js
* Firebase
* MongoDB
* MySQL
* Prisma
* Drizzle
* Laravel
* Django
* separate Express hosting
* another backend platform

unless explicitly instructed.

---

# 3. SINGLE DATABASE SQL RULE

There must be exactly one database SQL source:

```text
supabase/main.sql
```

ALL Supabase SQL belongs inside this file.

This includes:

* Tables
* Enums
* Types
* Functions
* Triggers
* Indexes
* Constraints
* Views
* RLS
* RLS policies
* Audit functions
* Database functions
* Required storage policies

Do NOT create additional SQL files.

Do NOT create separate migration files.

Do NOT create:

```text
001.sql
002.sql
migration.sql
seed.sql
demo.sql
test-data.sql
```

---

# 4. NEVER CREATE DEMO DATA

This is a strict rule.

Never create fake:

* Patients
* Doctors
* Nurses
* Staff
* Rooms
* Beds
* Appointments
* Admissions
* Medicines
* Bills
* Payments
* Laboratory records
* Ambulance records
* Tasks
* Reports

The system must work with real user-created data.

---

# 5. NEVER USE MOCK DATA

Never implement production functionality using:

```text
mockData
fakeData
dummyData
sampleData
staticData
hardcoded arrays
fake API responses
```

If a screen requires data, connect it to the actual backend/database.

---

# 6. NEVER HARD-CODE DATABASE DATA

Do not hardcode:

```text
Patient names
Doctor names
Bed numbers
Room names
Department records
Medicine records
Billing values
Dashboard statistics
```

These must come from Supabase.

---

# 7. SINGLE SOURCE OF TRUTH

Supabase PostgreSQL is the source of truth.

Do not maintain competing copies of important business data.

Correct:

```text
React
 ↓
API
 ↓
Supabase
 ↓
Database
```

Incorrect:

```text
React state
+
local JSON
+
Supabase
```

for the same business entity.

---

# 8. FULLY DYNAMIC RULE

Every user action that changes data must:

1. Validate the request.
2. Authenticate the user.
3. Check authorization.
4. Execute business logic.
5. Update Supabase.
6. Record required history.
7. Record audit activity.
8. Return the updated result.
9. Update the UI.

---

# 9. UI IS NOT THE BUSINESS LOGIC

Never trust the frontend for:

* Authorization
* Permissions
* Security
* Data ownership
* Role verification
* Critical business rules

Frontend validation improves UX.

Backend/database validation provides security.

---

# 10. SERVERLESS EXPRESS RULE

Express must be serverless-compatible.

Do NOT create a production requirement for:

```text
app.listen(PORT)
```

The backend must run through Netlify Functions.

Architecture:

```text
Netlify Function
      ↓
Express
      ↓
Middleware
      ↓
Controller
      ↓
Service
      ↓
Supabase
```

---

# 11. MODULAR CODE RULE

Never put an entire module into one huge file.

Example:

```text
patients/
├── pages/
├── components/
├── services/
├── controllers/
├── routes/
├── validators/
├── hooks/
└── types/
```

Follow the same architecture across modules.

---

# 12. REUSE BEFORE CREATE

Before creating a new:

* Component
* Hook
* Utility
* API helper
* Modal
* Table
* Form
* Validation
* Service

check whether an existing reusable implementation already exists.

Do not duplicate functionality unnecessarily.

---

# 13. CONSISTENCY RULE

If a pattern already exists in the project, follow it.

Do NOT create:

```text
Pattern A for Patients
Pattern B for Pharmacy
Pattern C for Billing
```

unless there is a genuine technical reason.

The whole application should feel like one system.

---

# 14. DATABASE DESIGN RULE

Before creating a table, determine:

* Entity
* Relationships
* Primary key
* Foreign keys
* Required fields
* Optional fields
* Constraints
* Indexes
* Audit requirements
* RLS requirements

Avoid duplicate data.

Use normalized relational design where appropriate.

---

# 15. FOREIGN KEY RULE

Relationships must be enforced at the database level whenever appropriate.

Do not rely only on frontend logic for relationships.

Example:

```text
Admission
    ↓
Patient
    ↓
Ward
    ↓
Room
    ↓
Bed
```

Use proper foreign keys.

---

# 16. DATA INTEGRITY RULE

Never allow inconsistent operational state.

Example:

A bed cannot simultaneously be:

```text
AVAILABLE
```

and:

```text
OCCUPIED
```

by active assignments.

Business rules must be enforced through appropriate application/database logic.

---

# 17. TRANSACTION RULE

When one operation modifies multiple related records, use a database transaction or appropriate PostgreSQL function.

Example:

```text
Assign Bed
 ↓
Validate availability
 ↓
Create assignment
 ↓
Update bed
 ↓
Create history
 ↓
Create audit log
```

The operation must not leave partial state.

---

# 18. HISTORY RULE

Every important operational entity must have historical information.

History should cover appropriate changes to:

* Patients
* Admissions
* Beds
* Rooms
* Appointments
* Doctors
* Staff
* Pharmacy
* Laboratory
* Radiology
* Billing
* Inventory
* Ambulance
* Tasks
* Documents
* Users
* Roles
* Permissions

---

# 19. AUDIT RULE

Important actions must generate audit records.

Examples:

```text
CREATE
UPDATE
ARCHIVE
RESTORE
ASSIGN
TRANSFER
APPROVE
REJECT
STATUS_CHANGE
ROLE_CHANGE
PERMISSION_CHANGE
PAYMENT
REFUND
DOCUMENT_UPLOAD
```

Audit history must be append-oriented.

Normal users must not be able to modify audit records.

---

# 20. BEFORE/AFTER RULE

For important updates, preserve relevant previous and new state.

Example:

```text
Before:
Bed = B-04

After:
Bed = B-12

Changed By:
User

Changed At:
Timestamp
```

---

# 21. SOFT DELETE RULE

Do not permanently delete important operational records when doing so would destroy required history.

Prefer:

```text
is_deleted
deleted_at
deleted_by
```

or an appropriate archive/status mechanism.

---

# 22. REALTIME RULE

Use Supabase Realtime where live synchronization provides real operational value.

When appropriate:

```text
Database change
      ↓
Realtime event
      ↓
Relevant UI updates
```

Do not reload the entire application unnecessarily.

---

# 23. API RULE

Every API must have clear responsibility.

Use:

```text
Route
 ↓
Middleware
 ↓
Controller
 ↓
Service
 ↓
Database
```

Do not place all business logic directly inside route handlers.

---

# 24. VALIDATION RULE

Validate important data at:

```text
Frontend
+
Backend
+
Database where appropriate
```

Never rely only on frontend validation.

---

# 25. AUTHENTICATION RULE

Use Supabase Auth.

Never implement an unrelated custom authentication system unless explicitly required.

Never expose private authentication credentials.

---

# 26. AUTHORIZATION RULE

Every protected operation must verify permissions.

Example:

```text
User
 ↓
Authenticated?
 ↓
Role
 ↓
Permission
 ↓
Resource access
 ↓
Allowed?
```

---

# 27. RLS RULE

Supabase Row Level Security is mandatory for sensitive application tables.

Never disable RLS merely because it makes development easier.

Do not bypass RLS from the frontend.

---

# 28. SERVICE ROLE RULE

The Supabase service-role key is secret.

Never:

* Put it in frontend code.
* Put it in public environment variables.
* Commit it to Git.
* Send it to the browser.

Use privileged access only from trusted server-side execution when required.

---

# 29. FILE STORAGE RULE

Patient/hospital files must use Supabase Storage.

Do not store large files directly inside database columns.

Store secure metadata/reference information in PostgreSQL.

---

# 30. RESPONSIVE UI RULE

Every feature must work on:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Do not treat mobile as an afterthought.

---

# 31. UI DESIGN RULE

Use the approved design system:

```text
Premium
White
Soft gradients
Neumorphic
Clean
Minimal
Professional
Healthcare-oriented
```

Do not introduce random visual styles.

---

# 32. ANIMATION RULE

Use subtle, smooth animations.

Allowed:

* Hover
* Modal
* Drawer
* Sidebar
* Page transition
* Loading
* Toast
* Tab transition

Do not use distracting animations.

Respect:

```text
prefers-reduced-motion
```

---

# 33. ACCESSIBILITY RULE

Neumorphism must not compromise usability.

Maintain:

* Readable text
* Focus states
* Keyboard navigation
* Accessible labels
* Proper form semantics
* Clear status indicators

---

# 34. LOADING STATE RULE

Never leave the user with a blank screen while data is loading.

Use:

* Skeleton loaders
* Loading states
* Disabled submit states
* Progress indicators where appropriate

---

# 35. ERROR RULE

Errors must be understandable.

Never expose:

```text
SQL errors
Stack traces
Internal server errors
Secrets
Database implementation details
```

to normal users.

---

# 36. EMPTY STATE RULE

Every data-driven page must handle:

```text
Loading
Empty
Error
Success
```

states.

Example:

```text
No patients found.
```

Do not leave an empty page without explanation.

---

# 37. MOBILE OPERATION RULE

Important hospital workflows must be usable from mobile.

Examples:

* Patient registration
* Patient search
* Admission
* Bed assignment
* Appointment
* Vitals
* Tasks
* Emergency workflow
* Ambulance workflow
* Pharmacy operations
* Notifications

---

# 38. DASHBOARD RULE

Dashboard statistics must always be database-driven.

Never write:

```text
Patients: 1,250
```

as a hardcoded value.

Calculate it from actual database records.

---

# 39. SEARCH RULE

Search must query real data.

Do not filter a small hardcoded frontend array as the production search implementation.

Use appropriate database queries and indexes.

---

# 40. PAGINATION RULE

Large datasets must not be loaded entirely into the browser.

Use:

* Pagination
* Server-side filtering
* Server-side sorting
* Appropriate indexes

where required.

---

# 41. PERFORMANCE RULE

Avoid:

* Unnecessary API calls
* N+1 queries
* Loading entire tables
* Excessive realtime subscriptions
* Huge component trees
* Unnecessary re-renders

Optimize based on actual requirements.

---

# 42. SECURITY-FIRST RULE

Whenever there is a conflict between convenience and security, choose the secure architecture.

Never:

* Trust client role
* Trust client user ID
* Trust client organization ID
* Expose secrets
* Disable RLS for convenience
* Return unauthorized patient data

---

# 43. PATIENT DATA RULE

Patient information is sensitive.

Always consider:

* Authorization
* Minimum required access
* Secure storage
* Auditability
* Access history

Do not expose patient information to unauthorized roles.

---

# 44. NO UNREQUESTED TECHNOLOGY

Do not install or introduce new frameworks, databases, ORMs, libraries, hosting platforms, or architectural systems unless:

1. They are already part of the approved project.
2. They are technically necessary.
3. Explicit approval is given.

Prefer the existing stack.

---

# 45. NO ARCHITECTURE DRIFT

If the project starts with:

```text
React
TypeScript
Node
Express
Supabase
Netlify
```

do not gradually convert it into another architecture.

Maintain architectural consistency throughout development.

---

# 46. CHANGE SAFETY

Before modifying existing functionality:

1. Understand the existing implementation.
2. Identify dependencies.
3. Check related modules.
4. Make the smallest safe change.
5. Verify affected functionality.
6. Do not unnecessarily rewrite unrelated code.

---

# 47. DO NOT BREAK EXISTING FEATURES

Before finishing a change, verify that existing functionality remains compatible.

A new feature must not silently break:

* Authentication
* Authorization
* Navigation
* Existing CRUD
* Database relationships
* RLS
* Audit history
* Responsive behavior

---

# 48. NO DUPLICATE BUSINESS LOGIC

Business rules should have a clear owner.

Do not implement the same rule independently in:

```text
React
Express
PostgreSQL
```

unless each layer has a legitimate responsibility.

Security-critical rules must not exist only in React.

---

# 49. CODE QUALITY

Write:

* Typed TypeScript
* Small focused functions
* Reusable components
* Clear naming
* Clear module boundaries
* Proper error handling

Avoid:

* `any` without justification
* Huge files
* Huge functions
* Copy-pasted code
* Unused imports
* Dead code
* Unused dependencies

---

# 50. TYPE SAFETY

TypeScript must be used properly.

Avoid unnecessary:

```text
any
as any
```

Use explicit types/interfaces where appropriate.

Database/API types should remain consistent with frontend expectations.

---

# 51. AGENT WORKFLOW

Before implementing a task:

```text
1. Understand requirement
2. Inspect existing project
3. Identify affected module
4. Check existing patterns
5. Check database dependencies
6. Implement
7. Connect frontend + API + database
8. Add validation
9. Add authorization
10. Add history/audit where applicable
11. Test affected workflow
12. Check responsive behavior
13. Check for regressions
```

---

# 52. NEVER GUESS PROJECT STRUCTURE

Before creating files, inspect the existing structure.

Do not assume:

```text
file exists
table exists
route exists
component exists
function exists
```

Verify first.

---

# 53. NEVER OVERWRITE WITHOUT UNDERSTANDING

Do not replace existing code blindly.

First understand:

* Why it exists
* What depends on it
* What behavior it provides

Then modify safely.

---

# 54. DATABASE CHANGE WORKFLOW

Whenever database structure changes:

```text
1. Update supabase/main.sql
2. Maintain relationships
3. Add required indexes
4. Add required constraints
5. Add/update RLS
6. Add required triggers/functions
7. Update backend types
8. Update API
9. Update frontend
```

Never modify only the UI and assume the database will support it.

---

# 55. FEATURE COMPLETION RULE

A feature is NOT complete if only its UI exists.

A feature is complete only when:

```text
UI
+
API
+
Validation
+
Authorization
+
Database
+
Error Handling
+
Loading State
+
History/Audit where applicable
+
Responsive UI
```

are implemented.

---

# 56. NO PLACEHOLDER FUNCTIONALITY

Do not mark something as complete when it contains:

```text
TODO
Coming Soon
Not Implemented
Fake Success
console.log("success")
```

unless explicitly requested during development.

---

# 57. TESTING MINDSET

Before declaring a feature complete, test:

```text
Create
Read
Update
Archive/Delete where appropriate
Search
Filter
Authorization
Invalid input
Empty state
Loading state
Error state
Mobile
Desktop
History
```

---

# 58. FINAL AGENT DECISION RULE

When making an implementation decision, prioritize in this order:

```text
1. Security
2. Data integrity
3. Existing architecture
4. Correctness
5. Maintainability
6. Performance
7. User experience
8. Convenience
```

Never sacrifice security or data integrity for convenience.

---

# 59. AGENT MUST REMEMBER

The system is a hospital internal management platform.

Therefore:

```text
Data integrity > shortcuts
Security > convenience
Real data > mock data
Database consistency > UI assumptions
Auditability > silent changes
Reusable architecture > duplicated code
Existing architecture > personal preference
```

---

# 60. FINAL NON-NEGOTIABLE RULE

Before completing any task, verify:

```text
[ ] Approved stack used
[ ] No unauthorized technology introduced
[ ] No demo data created
[ ] No mock API created
[ ] No hardcoded operational data
[ ] Supabase remains source of truth
[ ] main.sql remains the single SQL source
[ ] Authentication respected
[ ] Authorization respected
[ ] RLS respected
[ ] Audit/history handled
[ ] Existing features not broken
[ ] Mobile responsive
[ ] Desktop responsive
[ ] Loading state handled
[ ] Empty state handled
[ ] Error state handled
[ ] TypeScript type safety maintained
[ ] No unnecessary duplication
[ ] No secrets exposed
[ ] Feature is actually connected end-to-end
```

If any applicable item is not satisfied, the task must NOT be considered complete.
