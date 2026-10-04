# HOSPITAL INTERNAL MANAGEMENT SYSTEM

## TECHNOLOGY STACK & ARCHITECTURE MASTER REQUIREMENT

Build a production-ready, fully dynamic **Hospital Internal Management System (HIMS)** for managing complete internal hospital operations.

This document primarily defines the **technology stack, architecture, database architecture, serverless deployment model, security model, coding structure, and development standards**.

The application must be a real working system, not a UI prototype or static dashboard.

---

# 1. MANDATORY TECHNOLOGY STACK

The project MUST use the following technology stack.

## Frontend

* React
* TypeScript
* Modern component-based architecture
* Responsive design
* Mobile-first architecture
* Desktop-responsive architecture

## Backend

* Node.js
* Express.js
* TypeScript

The Express.js backend must be designed specifically for a **serverless environment**.

There must NOT be a traditional continuously running Node.js server in production.

## Database

* Supabase
* PostgreSQL
* SQL

Supabase PostgreSQL will be the primary application database.

## Authentication

* Supabase Authentication

## Authorization

* Role-Based Access Control (RBAC)
* Permission-Based Access Control
* PostgreSQL Row Level Security (RLS)

## File Storage

* Supabase Storage

## Realtime

* Supabase Realtime wherever real-time updates are required.

## Deployment

* Netlify ONLY

Netlify will host:

* React frontend
* Serverless backend functions

Supabase will provide:

* PostgreSQL database
* Authentication
* Storage
* Realtime
* RLS

---

# 2. FINAL ARCHITECTURE

Use the following architecture:

```text
                    USER
                     │
                     ▼
          ┌─────────────────────┐
          │ React + TypeScript  │
          │    Frontend UI      │
          └──────────┬──────────┘
                     │
                     ▼
          ┌─────────────────────┐
          │       Netlify       │
          │                     │
          │ Serverless Functions│
          │   Node.js + Express │
          └──────────┬──────────┘
                     │
                     ▼
          ┌─────────────────────┐
          │      Supabase       │
          │                     │
          │ PostgreSQL          │
          │ Authentication      │
          │ Storage             │
          │ Realtime            │
          │ RLS                 │
          └─────────────────────┘
```

---

# 3. NO SEPARATE SERVER

Do NOT deploy a separate backend server.

Do NOT require:

* VPS
* AWS EC2
* Railway
* Render
* DigitalOcean
* Heroku
* Any separate Node.js hosting

Production deployment must work using:

```text
Netlify
+
Supabase
```

---

# 4. SERVERLESS EXPRESS ARCHITECTURE

Node.js + Express.js must run through Netlify Serverless Functions.

Do NOT use:

```text
app.listen(...)
```

as a production deployment requirement.

Express should be implemented as a reusable application/router that can be invoked by the serverless function.

Architecture:

```text
Netlify Function
       ↓
Express Application
       ↓
Middleware
       ↓
Authentication
       ↓
Authorization
       ↓
Validation
       ↓
Controller
       ↓
Service
       ↓
Supabase
```

---

# 5. DATABASE SOURCE OF TRUTH

Supabase PostgreSQL must be the single source of truth for application data.

Do NOT maintain separate databases.

Do NOT use local JSON files as production storage.

Do NOT use frontend local storage as the primary database.

Do NOT use mock data.

Do NOT hardcode operational data.

---

# 6. SINGLE MAIN.SQL REQUIREMENT

The entire Supabase database structure must be contained in exactly one file:

```text
supabase/main.sql
```

There must NOT be multiple SQL migration files for the final project.

Do NOT create:

```text
supabase/migrations/001.sql
supabase/migrations/002.sql
supabase/migrations/003.sql
```

Instead:

```text
supabase/
└── main.sql
```

---

# 7. WHAT main.sql MUST CONTAIN

`main.sql` must contain the complete database implementation.

This includes:

* PostgreSQL extensions
* Schemas
* Enums
* Custom types
* Tables
* Primary keys
* Foreign keys
* Relationships
* Constraints
* Unique constraints
* Check constraints
* Indexes
* Database functions
* Triggers
* Audit functions
* History functions
* Views
* RLS enablement
* RLS policies
* Required storage policies
* Required database-level business logic

A fresh Supabase project must be able to recreate the required database structure by executing:

```text
supabase/main.sql
```

---

# 8. NO DEMO DATA

Do NOT add demo or fake operational data.

Do NOT insert:

* Fake patients
* Fake doctors
* Fake nurses
* Fake staff
* Fake appointments
* Fake admissions
* Fake rooms
* Fake beds
* Fake medicines
* Fake billing
* Fake laboratory records
* Fake ambulance records
* Fake tasks
* Fake reports

The database must start with **zero operational/demo records**.

Only required structural/system configuration may be created.

---

# 9. FULLY DYNAMIC APPLICATION

The application must be completely dynamic.

Every important action must follow:

```text
User Action
     ↓
React UI
     ↓
Express API
     ↓
Validation
     ↓
Business Logic
     ↓
Supabase PostgreSQL
     ↓
Database Result
     ↓
API Response
     ↓
UI Update
```

Nothing important should be simulated.

---

# 10. MODULAR BACKEND ARCHITECTURE

Use a modular architecture.

```text
src/
│
├── modules/
│   ├── patients/
│   ├── admissions/
│   ├── doctors/
│   ├── nursing/
│   ├── appointments/
│   ├── emergency/
│   ├── icu/
│   ├── pharmacy/
│   ├── laboratory/
│   ├── radiology/
│   ├── operation-theatre/
│   ├── billing/
│   ├── inventory/
│   ├── ambulance/
│   ├── staff/
│   ├── tasks/
│   ├── documents/
│   ├── notifications/
│   ├── reports/
│   └── audit-logs/
│
├── server/
│   ├── app.ts
│   ├── routes.ts
│   ├── middleware/
│   ├── auth/
│   ├── permissions/
│   ├── errors/
│   └── utils/
│
├── components/
├── layouts/
├── hooks/
├── lib/
├── routes/
├── types/
└── config/
```

Each module should contain its own:

```text
components/
pages/
services/
controllers/
routes/
validators/
types/
hooks/
```

where applicable.

---

# 11. FRONTEND ARCHITECTURE

The frontend must use:

```text
React
+
TypeScript
+
Reusable Components
+
Module-Based Architecture
```

Avoid putting the entire application into a few large files.

Do NOT create one giant:

```text
App.tsx
```

containing the complete application.

Keep modules isolated and maintainable.

---

# 12. API ARCHITECTURE

Use REST-style API endpoints through Express.

Example:

```text
/api/patients
/api/admissions
/api/doctors
/api/appointments
/api/beds
/api/emergency
/api/icu
/api/pharmacy
/api/laboratory
/api/radiology
/api/ot
/api/billing
/api/inventory
/api/ambulance
/api/staff
/api/tasks
/api/documents
/api/reports
/api/audit-logs
```

Use appropriate HTTP methods:

```text
GET
POST
PATCH
PUT
DELETE
```

---

# 13. SECURITY ARCHITECTURE

Security must exist at multiple levels.

```text
Frontend
   ↓
Express Authentication
   ↓
Express Authorization
   ↓
Supabase Authentication
   ↓
PostgreSQL RLS
```

Never depend only on frontend permission checks.

---

# 14. RBAC

Implement a proper Role-Based Access Control system.

Support:

```text
Role
   ↓
Permissions
   ↓
Modules
   ↓
Actions
```

Example permissions:

```text
patients.view
patients.create
patients.update
patients.archive

admissions.view
admissions.create
admissions.update

billing.view
billing.create
billing.update

reports.view
audit_logs.view
```

Permissions must be database-driven.

Do not hardcode the complete authorization system only in React.

---

# 15. SUPER ADMIN

The system must support a Super Admin with system-wide administrative access according to the authorization model.

Super Admin should be able to manage:

* Users
* Roles
* Permissions
* Hospital configuration
* Departments
* Modules
* System settings
* Audit logs
* History
* Operational data

---

# 16. ADMIN

Hospital Admin should be able to manage hospital operations according to assigned permissions.

Access must be controlled through RBAC and RLS.

---

# 17. DATABASE RLS

Supabase PostgreSQL Row Level Security is mandatory.

Enable RLS on all sensitive application tables.

Policies must consider the authenticated user's:

* User ID
* Role
* Hospital/organization
* Branch
* Department
* Assigned access
* Required permission

---

# 18. AUDIT AND HISTORY ARCHITECTURE

The system must maintain a complete audit trail.

Important actions must be recorded.

Examples:

```text
CREATE
UPDATE
DELETE
ARCHIVE
RESTORE
ASSIGN
TRANSFER
APPROVE
REJECT
STATUS_CHANGE
LOGIN
LOGOUT
ROLE_CHANGE
PERMISSION_CHANGE
DOCUMENT_UPLOAD
DOCUMENT_DELETE
PAYMENT
REFUND
```

Audit records should include:

```text
actor_user_id
action
module
entity_type
entity_id
old_data
new_data
description
created_at
```

Where applicable also include:

```text
hospital_id
branch_id
department_id
```

---

# 19. HISTORY MUST BE PRESERVED

Important operational records should use soft delete/archive where appropriate.

Do not permanently delete records when doing so would destroy required operational history.

The system must preserve historical information.

---

# 20. REAL-TIME DATA

Use Supabase Realtime for appropriate operational updates.

For example:

```text
Bed Assignment
      ↓
Database Update
      ↓
Realtime Event
      ↓
Dashboard Update
      ↓
Ward View Update
```

The same source of truth must be reflected across modules.

---

# 21. TRANSACTIONAL OPERATIONS

Use PostgreSQL transactions/functions where multiple related operations must succeed together.

Example:

```text
Assign Bed
    ↓
Check Availability
    ↓
Create Assignment
    ↓
Update Bed Status
    ↓
Create History
    ↓
Create Audit Record
```

If a critical step fails, the operation should not leave inconsistent database state.

---

# 22. SUPABASE STORAGE

Use Supabase Storage for files.

Examples:

* Patient documents
* Lab reports
* Radiology reports
* Discharge documents
* Staff documents
* Hospital documents

Store secure file metadata/reference information in PostgreSQL.

Storage access must respect authorization.

---

# 23. ENVIRONMENT VARIABLES

Secrets must never be hardcoded.

Use environment variables for:

```text
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

and any other required server-side secrets.

Never expose service-role credentials to the frontend.

Never commit secrets to Git.

---

# 24. UI TECHNOLOGY REQUIREMENTS

The UI must be:

* Neumorphic
* White / soft-white gradient
* Clean
* Premium
* Professional
* Responsive
* Mobile-friendly
* Desktop-friendly
* Tablet-friendly

Support:

```text
Mobile
Tablet
Desktop
Large Desktop
```

The complete hospital system must be usable from mobile devices.

---

# 25. UI ANIMATION

Use smooth and lightweight animations for:

* Page transitions
* Modals
* Drawers
* Dropdowns
* Cards
* Buttons
* Notifications
* Loading states
* Sidebar
* Tabs

Use smooth scrolling.

Respect:

```text
prefers-reduced-motion
```

Do not over-animate.

---

# 26. RESPONSIVE REQUIREMENT

Do not simply shrink the desktop interface for mobile.

Create proper responsive behavior.

Mobile should support:

* Mobile navigation
* Bottom navigation where appropriate
* Mobile drawers
* Mobile forms
* Responsive tables
* Mobile-friendly cards
* Touch-friendly controls
* Quick actions

All important hospital operations must remain usable on mobile.

---

# 27. PERFORMANCE

The application must be optimized for a serverless environment.

Use:

* Lazy loading
* Code splitting
* Efficient database queries
* Pagination
* Proper indexes
* Optimized React rendering
* Efficient API responses
* Reusable components
* Cached configuration where appropriate

Avoid unnecessary database requests.

---

# 28. ERROR HANDLING

Implement centralized error handling.

Backend must return structured errors.

Frontend must display human-readable messages.

Never expose:

* SQL errors
* Stack traces
* Internal server details
* Secrets

to normal users.

---

# 29. VALIDATION

Validate data on both:

```text
Frontend
+
Backend
```

Backend validation is mandatory.

Never trust client-side validation alone.

---

# 30. PROJECT STRUCTURE

Final project should follow a structure similar to:

```text
hospital-management-system/
│
├── src/
│   ├── modules/
│   ├── components/
│   ├── layouts/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── types/
│   ├── config/
│   └── server/
│
├── netlify/
│   └── functions/
│       └── api/
│
├── supabase/
│   └── main.sql
│
├── public/
│
├── package.json
├── tsconfig.json
├── netlify.toml
└── README.md
```

---

# 31. DEPLOYMENT

Production deployment must be:

```text
Frontend
   ↓
Netlify

Backend
   ↓
Netlify Serverless Functions

Database
   ↓
Supabase PostgreSQL

Authentication
   ↓
Supabase Auth

Storage
   ↓
Supabase Storage

Realtime
   ↓
Supabase Realtime
```

No separate backend hosting.

---

# 32. DEVELOPMENT RULE

Build the system as a real production-oriented application.

Do NOT create:

* Static pages
* Mock dashboards
* Fake API responses
* Demo records
* Hardcoded statistics
* Fake patient data
* Fake hospital data
* Placeholder CRUD that does not connect to Supabase

Every implemented feature must connect to the actual application architecture.

---

# 33. FINAL TECHNOLOGY STACK

The final mandatory stack is:

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

Database SQL:
Single supabase/main.sql

Deployment:
Netlify + Supabase
```

This stack must not be replaced with another framework, backend service, database, or deployment platform without explicit approval.

---

# 34. CORE PRINCIPLE

The application must follow this principle:

```text
React + TypeScript
        ↓
Netlify
        ↓
Node.js + Express.js Serverless API
        ↓
Supabase
        ↓
PostgreSQL + Auth + Storage + Realtime + RLS
```

The result must be a **fully dynamic, secure, scalable and production-oriented Hospital Internal Management System**, with a clean modular codebase and a single reproducible `supabase/main.sql` database definition.
