# Hospital Internal Management System (HIMS)

## 1. Project Overview

Build a complete, production-ready **Hospital Internal Management System (HIMS)** for managing the complete internal operations of a hospital from one centralized web application.

The system should manage:

* Patients
* Admissions
* Beds
* Rooms
* Wards
* Doctors
* Nurses
* Staff
* Appointments
* OPD
* Emergency
* ICU
* Pharmacy
* Laboratory
* Radiology
* Operation Theatre
* Billing
* Inventory
* Ambulance
* Departments
* Tasks
* Notifications
* Documents
* Reports
* Hospital administration
* User management
* Roles and permissions
* Audit logs
* System configuration

The application should be designed as a **large-scale modular hospital operations platform**, not as a basic CRUD application.

The target is to have **100+ functional features**.

---

# 2. Core Architecture

Build the application with:

* Modern responsive web application
* Desktop-first hospital dashboard
* Mobile responsive interface
* Secure authentication
* Role-Based Access Control (RBAC)
* Permission-based authorization
* Department-based access
* Audit logging
* Centralized notification system
* Search and filtering
* Dashboard analytics
* File/document management
* Configurable hospital settings

Use **Supabase** as the primary backend platform.

Supabase should handle:

* PostgreSQL database
* Authentication
* Row Level Security (RLS)
* Storage
* Database functions where required
* Realtime functionality where useful

The application should be structured so that future integrations and additional hospital branches can be added without redesigning the entire system.

---

# 3. User Hierarchy

Create the following access hierarchy.

## Level 1 — Super Admin

Super Admin has complete access to the entire platform.

Super Admin can:

* View all hospitals/branches
* View all departments
* View all users
* Create/edit/delete users
* Create roles
* Configure permissions
* View all patients
* View all admissions
* View all rooms and beds
* View all doctors
* View all staff
* View all financial information
* View all reports
* View audit logs
* Configure system settings
* Configure hospital settings
* Manage modules
* Manage notifications
* Manage master data
* Access all dashboards
* Override operational restrictions where authorized
* Lock/unlock users
* Reset user access
* View system activity

Super Admin should have unrestricted administrative visibility.

---

# 4. Admin Role

Hospital Admin should have access to almost all hospital operations.

Admin can manage:

* Patients
* Admissions
* Beds
* Rooms
* Wards
* Doctors
* Nurses
* Staff
* Departments
* Appointments
* OPD
* Emergency
* Pharmacy
* Laboratory
* Radiology
* OT
* Inventory
* Billing
* Ambulance
* Reports
* Notifications
* Tasks
* Documents

However, sensitive system-level configuration should remain restricted to Super Admin.

---

# 5. Additional Roles

Create configurable roles such as:

* Doctor
* Nurse
* Receptionist
* Front Desk
* Billing Staff
* Pharmacist
* Lab Technician
* Radiology Technician
* OT Staff
* ICU Staff
* HR Staff
* Inventory Manager
* Store Manager
* Accountant
* Ambulance Coordinator
* Hospital Manager
* Department Manager
* IT/Admin Staff
* Custom Role

Super Admin should be able to create additional custom roles.

---

# 6. Permission System

Implement granular permissions.

Examples:

* patients.view
* patients.create
* patients.update
* patients.delete
* patients.export
* admissions.view
* admissions.create
* admissions.update
* beds.view
* beds.assign
* beds.transfer
* doctors.view
* doctors.manage
* billing.view
* billing.create
* billing.refund
* pharmacy.view
* pharmacy.issue
* pharmacy.manage_stock
* reports.view
* reports.export
* users.manage
* roles.manage
* audit_logs.view

Permissions should support:

* View
* Create
* Edit
* Delete
* Approve
* Export
* Print
* Assign
* Transfer
* Manage

---

# 7. Patient Management — Features

Implement:

1. Patient registration
2. Unique Patient ID / UHID
3. Patient profile
4. Patient photo
5. Patient contact details
6. Emergency contact
7. Address
8. Identification information
9. Date of birth
10. Gender
11. Blood group
12. Allergies
13. Medical history
14. Surgical history
15. Previous admissions
16. Previous consultations
17. Previous prescriptions
18. Patient timeline
19. Patient documents
20. Patient notes
21. Patient alerts
22. Patient search
23. Advanced patient filters
24. Duplicate patient detection
25. Merge duplicate patient records
26. Patient status
27. Active/inactive patient
28. Patient transfer history
29. Discharge history
30. Complete patient activity history

---

# 8. Admission Management

31. New admission
32. Admission number
33. Admission date/time
34. Admission type
35. Emergency admission
36. Planned admission
37. Referral admission
38. Doctor assignment
39. Department assignment
40. Ward assignment
41. Room assignment
42. Bed assignment
43. Admission notes
44. Admission diagnosis
45. Attending doctor
46. Patient transfer
47. Ward transfer
48. Bed transfer
49. Room transfer
50. Transfer history
51. Discharge request
52. Discharge approval
53. Discharge summary
54. Discharge date/time
55. Discharge reason
56. Patient discharge status

---

# 9. Bed / Room / Ward Management

57. Hospital building management
58. Floor management
59. Ward management
60. Room management
61. Bed management
62. Bed types
63. ICU beds
64. General beds
65. Private rooms
66. Semi-private rooms
67. Emergency beds
68. Isolation beds
69. Bed availability
70. Occupied beds
71. Reserved beds
72. Maintenance beds
73. Bed transfer
74. Bed cleaning status
75. Bed availability dashboard
76. Room occupancy dashboard
77. Ward occupancy dashboard

Use real-time status where possible.

Example:

AVAILABLE → RESERVED → OCCUPIED → CLEANING → AVAILABLE

---

# 10. Doctor Management

78. Doctor profile
79. Doctor ID
80. Specialization
81. Department
82. Qualification
83. Contact information
84. Consultation schedule
85. OPD schedule
86. Duty schedule
87. Leave schedule
88. Patient assignment
89. Doctor availability
90. Doctor workload
91. Doctor notes
92. Doctor activity history

---

# 11. Appointment & OPD

93. Appointment creation
94. Appointment calendar
95. Doctor-wise appointments
96. Department-wise appointments
97. Appointment status
98. Queue management
99. Token generation
100. OPD registration
101. Walk-in patients
102. Follow-up appointments
103. Appointment rescheduling
104. Appointment cancellation
105. Consultation notes
106. Diagnosis
107. Prescription
108. Follow-up date
109. Consultation history

---

# 12. Nursing Management

110. Nurse profile
111. Nurse assignment
112. Nursing station
113. Shift management
114. Patient assignment
115. Patient rounds
116. Nursing notes
117. Vitals recording
118. Blood pressure
119. Pulse
120. Temperature
121. SpO2
122. Respiratory rate
123. Blood sugar
124. Medication administration
125. Nursing task checklist
126. Shift handover
127. Nursing history

---

# 13. Emergency Department

128. Emergency registration
129. Emergency patient queue
130. Triage
131. Emergency priority
132. Emergency doctor assignment
133. Emergency nurse assignment
134. Emergency bed assignment
135. Emergency notes
136. Emergency vitals
137. Emergency medication
138. Emergency investigations
139. Emergency transfer
140. Emergency discharge
141. Emergency admission
142. Emergency activity timeline

---

# 14. ICU Management

143. ICU bed management
144. ICU patient assignment
145. ICU monitoring
146. ICU vitals
147. ICU notes
148. Ventilator information
149. Critical care notes
150. ICU medication records
151. ICU doctor assignment
152. ICU nurse assignment
153. ICU transfer history
154. ICU occupancy dashboard

---

# 15. Pharmacy Management

155. Medicine master
156. Medicine categories
157. Medicine batches
158. Batch number
159. Expiry date
160. Purchase records
161. Supplier management
162. Stock management
163. Stock in
164. Stock out
165. Stock adjustment
166. Low stock alerts
167. Expiry alerts
168. Medicine issue
169. Prescription-based issue
170. Return medicine
171. Pharmacy billing
172. Pharmacy transaction history

---

# 16. Laboratory Management

173. Test master
174. Test categories
175. Test pricing
176. Lab order
177. Sample collection
178. Sample ID
179. Sample status
180. Sample tracking
181. Technician assignment
182. Test processing
183. Result entry
184. Result verification
185. Doctor approval
186. Lab report generation
187. Report download
188. Lab history

---

# 17. Radiology Management

189. Radiology test master
190. X-Ray requests
191. CT requests
192. MRI requests
193. Ultrasound requests
194. Scan scheduling
195. Technician assignment
196. Radiologist assignment
197. Report entry
198. Report verification
199. Report approval
200. Report attachment
201. Radiology history

---

# 18. Operation Theatre

202. OT master
203. OT availability
204. OT booking
205. Surgery scheduling
206. Surgery type
207. Surgeon assignment
208. Assistant assignment
209. Anesthesia assignment
210. OT staff assignment
211. Pre-operative checklist
212. Post-operative notes
213. OT consumables
214. OT equipment
215. Surgery status
216. OT history

---

# 19. Billing & Finance

217. Billing profile
218. Invoice generation
219. Admission charges
220. Room charges
221. Bed charges
222. Doctor charges
223. Nursing charges
224. Lab charges
225. Radiology charges
226. Pharmacy charges
227. OT charges
228. Emergency charges
229. Discount management
230. Payment recording
231. Cash payment
232. Online payment
233. Partial payment
234. Pending payment
235. Refund
236. Receipt generation
237. Invoice history
238. Financial reports

---

# 20. Inventory Management

239. Inventory master
240. Item categories
241. Item suppliers
242. Purchase orders
243. Goods received
244. Stock movement
245. Stock issue
246. Stock return
247. Minimum stock level
248. Reorder alerts
249. Expiry tracking
250. Inventory audit
251. Asset management
252. Equipment maintenance
253. Equipment status
254. Equipment assignment

---

# 21. Ambulance Management

255. Ambulance master
256. Vehicle number
257. Driver assignment
258. Ambulance availability
259. Emergency request
260. Trip management
261. Pickup location
262. Destination
263. Trip history
264. Fuel records
265. Vehicle maintenance

---

# 22. Staff Management

266. Employee profile
267. Employee ID
268. Department
269. Designation
270. Role
271. Joining date
272. Shift
273. Attendance
274. Leave management
275. Duty roster
276. Staff availability
277. Staff documents
278. Staff activity

---

# 23. Task Management

Create an internal hospital task management system.

Features:

279. Create task
280. Assign task
281. Department task
282. Priority
283. Due date
284. Task status
285. Comments
286. Attachments
287. Task history
288. Overdue task alerts
289. Task dashboard

Statuses:

* Open
* Assigned
* In Progress
* On Hold
* Completed
* Cancelled

---

# 24. Document Management

Support:

* Patient documents
* Medical reports
* Lab reports
* Radiology reports
* Discharge summaries
* Staff documents
* Hospital documents
* Internal documents
* Upload/download
* Document categorization
* Access control
* Document history

Use Supabase Storage with secure access policies.

---

# 25. Notification System

Implement centralized notifications.

Notification types:

* New admission
* Bed assigned
* Bed transfer
* Discharge request
* Appointment
* Emergency case
* Low pharmacy stock
* Medicine expiry
* Inventory low stock
* Lab result ready
* Radiology report ready
* Task assigned
* Task overdue
* System announcement

Support:

* In-app notifications
* Read/unread
* Notification history
* Role-based notifications
* Department-based notifications

---

# 26. Internal Communication

Create an internal communication module.

Features:

* Announcements
* Department announcements
* Important notices
* Internal messages
* Comments
* Mentions
* Attachments
* Read receipts
* Announcement history

---

# 27. Dashboard

Create role-specific dashboards.

## Super Admin Dashboard

Show:

* Total patients
* Today's patients
* Active admissions
* Today's admissions
* Today's discharges
* Total beds
* Occupied beds
* Available beds
* ICU occupancy
* Emergency cases
* OPD appointments
* Pending bills
* Revenue
* Pharmacy alerts
* Lab pending tests
* Pending tasks
* Staff overview
* System activity

## Admin Dashboard

Show operational information relevant to hospital management.

## Doctor Dashboard

Show:

* Today's appointments
* Assigned patients
* Admitted patients
* Pending consultations
* Pending reports
* Tasks
* Notifications

## Nurse Dashboard

Show:

* Assigned patients
* Bed/room
* Vitals pending
* Medication tasks
* Nursing tasks
* Shift information

Other roles should receive their own relevant dashboard.

---

# 28. Reports

Create a centralized reporting module.

Reports should include:

* Patient report
* Admission report
* Discharge report
* Bed occupancy report
* Ward occupancy report
* ICU report
* OPD report
* Appointment report
* Doctor report
* Nursing report
* Pharmacy report
* Medicine stock report
* Expiry report
* Lab report
* Radiology report
* OT report
* Surgery report
* Billing report
* Revenue report
* Payment report
* Inventory report
* Staff report
* Attendance report
* Task report
* Ambulance report
* Audit report

Reports should support:

* Date filters
* Department filters
* Doctor filters
* Status filters
* Export
* Print
* PDF/CSV/Excel where appropriate

---

# 29. Audit Log

Every important action must be logged.

Audit log should contain:

* User
* Role
* Action
* Module
* Record
* Timestamp
* IP/device information where appropriate
* Previous value
* New value

Examples:

PATIENT_CREATED

PATIENT_UPDATED

ADMISSION_CREATED

BED_ASSIGNED

BED_TRANSFERRED

DISCHARGE_APPROVED

BILL_CREATED

PAYMENT_RECEIVED

USER_CREATED

ROLE_UPDATED

PERMISSION_CHANGED

The audit system should be append-only for normal users.

---

# 30. Search System

Create global search.

Users should be able to search according to their permissions:

* Patient ID
* Patient name
* Admission number
* Doctor
* Employee ID
* Appointment
* Room
* Bed
* Invoice
* Lab report
* Medicine
* Inventory item
* Task

Use advanced filters and pagination.

---

# 31. Hospital Configuration

Super Admin should be able to configure:

* Hospital name
* Logo
* Address
* Contact details
* Departments
* Wards
* Rooms
* Beds
* Charges
* Appointment settings
* Billing settings
* Notification settings
* User roles
* Permissions
* Document settings
* System preferences

---

# 32. Multi-Branch Architecture

The architecture should support multiple hospital branches.

Structure:

Hospital
→ Branch
→ Building
→ Floor
→ Department
→ Ward
→ Room
→ Bed

Users can be assigned to:

* Hospital
* Branch
* Department

Super Admin can see everything.

---

# 33. Security Requirements

Security is critical because the system will handle sensitive healthcare information.

Implement:

* Supabase Authentication
* Strong password policy
* Session management
* Role-Based Access Control
* Permission-Based Access Control
* Row Level Security
* Secure storage policies
* Protected routes
* Server-side authorization
* Input validation
* API validation
* Audit logs
* Secure file access
* Least-privilege access
* Session expiry
* Account lock/disable
* Password reset
* Optional MFA support

Never rely only on frontend permission checks.

All sensitive authorization must also be enforced at backend/database level.

---

# 34. UI/UX Requirements

Create a professional hospital enterprise dashboard.

Design requirements:

* Clean
* Modern
* Professional
* Fast
* Easy to understand
* Minimal unnecessary animations
* Responsive
* Accessible
* Consistent components
* Clear status indicators
* Data tables
* Cards
* Charts
* Filters
* Modal forms
* Confirmation dialogs
* Toast notifications
* Loading states
* Empty states
* Error states

The application should feel like a serious enterprise hospital management platform.

---

# 35. Data Table Requirements

Every major management module should have:

* Search
* Filters
* Sorting
* Pagination
* Column visibility
* Export
* Bulk actions where appropriate
* Row actions
* Status badges
* View details
* Edit
* History

---

# 36. Patient Timeline

Every patient should have a centralized timeline.

Example:

Patient Registered
↓
Appointment
↓
Consultation
↓
Admission
↓
Bed Assigned
↓
Lab Test
↓
Radiology
↓
Medication
↓
Doctor Notes
↓
Transfer
↓
Discharge
↓
Billing

The timeline should show date/time, user, department, and activity.

---

# 37. Workflow System

Important hospital processes should follow defined workflows.

Example:

Admission:

Registration
→ Admission
→ Doctor Assignment
→ Ward Selection
→ Room Selection
→ Bed Assignment
→ Active Admission

Discharge:

Discharge Request
→ Doctor Approval
→ Billing Clearance
→ Pharmacy Clearance
→ Final Summary
→ Discharge
→ Bed Released

Lab:

Test Ordered
→ Sample Collected
→ Processing
→ Result Entered
→ Verification
→ Doctor Approval
→ Report Available

Use status-based workflows rather than allowing arbitrary state changes.

---

# 38. Database Requirements

Use **Supabase PostgreSQL**.

Database must be normalized and modular.

Create separate tables for:

* Users
* Profiles
* Roles
* Permissions
* Role permissions
* Hospitals
* Branches
* Buildings
* Floors
* Departments
* Wards
* Rooms
* Beds
* Patients
* Patient contacts
* Patient medical history
* Patient allergies
* Admissions
* Admission transfers
* Doctors
* Nurses
* Staff
* Appointments
* Consultations
* Prescriptions
* Prescription items
* Nursing records
* Vitals
* Emergency records
* ICU records
* Medicines
* Medicine batches
* Pharmacy transactions
* Lab tests
* Lab orders
* Lab samples
* Lab results
* Radiology tests
* Radiology orders
* Radiology reports
* Operation theatres
* Surgeries
* OT records
* Bills
* Bill items
* Payments
* Refunds
* Inventory items
* Inventory transactions
* Suppliers
* Purchase orders
* Assets
* Asset maintenance
* Ambulances
* Ambulance trips
* Tasks
* Task comments
* Notifications
* Announcements
* Documents
* Audit logs
* System settings
* Hospital settings

The detailed database schema, relationships, indexes, constraints, enums, RLS policies and SQL migrations will be designed separately in the next phase.

---

# 39. Database Design Principles

Use:

* UUID primary keys
* Foreign keys
* Proper indexes
* Unique constraints
* Check constraints
* Timestamps
* created_at
* updated_at
* created_by
* updated_by where applicable
* Soft delete where appropriate
* Status fields
* Audit fields

Avoid:

* One giant table
* Duplicate patient data
* Hardcoded roles
* Hardcoded departments
* Hardcoded room/bed information
* Frontend-only authorization
* Storing sensitive information unnecessarily
* Unstructured JSON for data that should be relational

JSON/JSONB can be used only where flexible structured metadata is genuinely required.

---

# 40. Supabase Requirements

Use Supabase for:

### Authentication

* Login
* Logout
* Password reset
* Session management
* MFA-ready architecture

### PostgreSQL

All core business data.

### RLS

Implement RLS based on:

* User
* Role
* Permission
* Hospital
* Branch
* Department

### Storage

Buckets/categories for:

* Patient documents
* Medical reports
* Lab reports
* Radiology reports
* Staff documents
* Hospital documents

Files must not be publicly accessible unless explicitly intended.

Use signed URLs/protected access.

### Realtime

Use realtime where useful:

* Bed availability
* Emergency queue
* Notifications
* Task updates
* Appointment queue
* Dashboard operational status

---

# 41. Performance

The application should support large datasets.

Implement:

* Server-side pagination
* Database indexes
* Efficient queries
* Lazy loading
* Debounced search
* Query caching where appropriate
* Optimized dashboard queries
* Avoid fetching unnecessary columns
* Proper relational joins
* Pagination for audit logs

Do not load thousands of records into the browser unnecessarily.

---

# 42. Error Handling

Every module should have:

* Loading state
* Empty state
* Error state
* Retry option
* Validation messages
* Confirmation dialogs
* Success notifications
* Failure notifications

Never silently fail.

---

# 43. Data Validation

Validate:

* Patient information
* Phone numbers
* Email
* Dates
* Admission dates
* Discharge dates
* Billing amounts
* Medicine quantities
* Stock levels
* Required fields
* Duplicate records

Both frontend and backend validation should be implemented.

---

# 44. Navigation Structure

Main sidebar:

Dashboard

Patients

Admissions

Beds & Rooms

Appointments

OPD

Emergency

ICU

Doctors

Nursing

Pharmacy

Laboratory

Radiology

Operation Theatre

Billing

Inventory

Ambulance

Staff

Tasks

Documents

Announcements

Reports

Audit Logs

Settings

User Management

Role & Permissions

---

# 45. Development Requirements

Build the project module-by-module.

Do not create fake functionality just to make the UI look complete.

Every major UI action should be connected to real backend/database functionality.

Use reusable components.

Use a consistent design system.

Use reusable:

* Forms
* Tables
* Modals
* Filters
* Status badges
* Cards
* Charts
* Pagination
* Confirmation dialogs
* Notification components

---

# 46. Important Business Rules

Examples:

1. A bed cannot be assigned to two active patients at the same time.

2. A discharged patient cannot remain marked as occupying a bed.

3. A patient transfer must preserve transfer history.

4. Only authorized users can approve discharge.

5. Only authorized users can modify billing.

6. Refunds must be logged.

7. Medicine stock cannot become negative unless explicitly configured.

8. Expired medicines should not be issued.

9. Completed audit logs must not be editable by normal users.

10. Users should only see data allowed by their role/department/branch.

11. Doctors should see patients assigned to them unless their permissions allow broader access.

12. Nurses should see their assigned patients and relevant ward information.

13. Pharmacy users should not automatically receive access to unrelated financial or medical information.

14. Role and permission changes must be audited.

15. Critical patient information changes must be logged.

---

# 47. Super Admin Control Center

Create a dedicated Super Admin Control Center.

Sections:

### Organization

* Hospitals
* Branches
* Departments
* Wards
* Rooms
* Beds

### Users

* Users
* Roles
* Permissions
* User access
* Account status

### Operations

* Patients
* Admissions
* Appointments
* Emergency
* ICU
* Pharmacy
* Lab
* Radiology
* OT

### Finance

* Billing
* Payments
* Refunds
* Reports

### System

* Settings
* Notifications
* Audit Logs
* Storage
* System activity

Super Admin should have a complete global overview.

---

# 48. Future Scalability

The architecture should allow future addition of:

* Multiple hospitals
* Multiple branches
* Insurance management
* Blood bank
* Diet management
* Mortuary management
* Blood donor management
* Telemedicine
* Patient portal
* Doctor portal
* Mobile application
* SMS integration
* Email integration
* WhatsApp notifications
* Payment gateway
* External laboratory integration
* Insurance API
* Government healthcare integrations
* Advanced analytics
* AI-assisted reporting

These should not be implemented initially unless required, but the architecture should not prevent adding them later.

---

# 49. Final Product Goal

The final product should function as a centralized:

**Hospital Internal Operations & Management Platform**

It should allow hospital management to manage the complete internal workflow from one system.

The core principle is:

**One Patient → One Complete Digital Timeline**

and:

**One Hospital → One Centralized Operational System**

The application must be secure, scalable, modular, permission-based, database-driven, and production-ready.

Do not build this as a simple demo or static dashboard.

Build it as a real enterprise-grade application architecture with Supabase PostgreSQL, Authentication, RLS, Storage, realtime functionality where appropriate, and properly connected frontend/backend workflows.

## Phase 1

First finalize:

1. Complete feature requirements
2. User roles
3. Permission matrix
4. Module hierarchy
5. Business workflows

## Phase 2

Then design:

1. Complete PostgreSQL database schema
2. All tables
3. Columns
4. Data types
5. Primary keys
6. Foreign keys
7. Relationships
8. Indexes
9. Constraints
10. Enums
11. RLS policies
12. Storage buckets
13. Database functions/triggers
14. SQL migration structure

Do not start Phase 2 until Phase 1 requirements are finalized.
