# HIMS UI/UX DESIGN SYSTEM

## 1. Overall Design Direction

The entire Hospital Internal Management System must use a **premium, clean, modern Neumorphic UI design**.

The interface should feel:

* Clean
* Soft
* Professional
* Minimal
* Smooth
* Premium
* Easy to use
* Calm
* Medical/healthcare focused
* Enterprise-grade

Do NOT create a generic Bootstrap-style dashboard.

Do NOT use heavy borders, excessive colors, or visually crowded screens.

The UI should primarily use a **soft white / off-white gradient-based Neumorphism design**.

---

# 2. Color System

Primary visual direction:

* White
* Soft white
* Off-white
* Very light grey
* Subtle grey shadows
* Soft gradients

Use a very restrained accent color system for:

* Success
* Warning
* Error
* Information
* Critical medical alerts

The main interface should remain predominantly white and neutral.

Avoid excessive bright colors.

Medical status colors should be used only where they provide meaningful information.

---

# 3. Neumorphism

Use soft Neumorphic surfaces throughout the application.

Components should have:

* Soft outer shadows
* Subtle inner shadows
* Rounded corners
* Slightly raised surfaces
* Soft pressed states
* Smooth hover effects
* Consistent depth

Example visual hierarchy:

```text
Page Background
      ↓
Soft Neumorphic Container
      ↓
Cards
      ↓
Interactive Controls
      ↓
Primary Information
```

Avoid extreme neumorphism.

The design should remain highly readable and accessible.

---

# 4. Background

Use a subtle white gradient background.

Example concept:

```text
White
   ↓
Soft Off-White
   ↓
Very Light Grey
```

The gradient should be extremely subtle.

Do not use strong colorful gradients.

---

# 5. Cards

All major dashboard cards should use soft Neumorphic styling.

Examples:

* Patient card
* Admission card
* Bed card
* Doctor card
* Appointment card
* Emergency card
* Billing card
* Pharmacy card
* Lab card
* Task card
* Report card

Cards should support:

* Hover elevation
* Soft shadow transition
* Click interaction
* Loading state
* Empty state
* Status indicator

---

# 6. Buttons

Buttons should have a soft Neumorphic appearance.

States:

### Default

Raised surface with soft shadow.

### Hover

Slightly increased elevation.

### Active

Subtle pressed/inset effect.

### Disabled

Reduced contrast and shadow.

### Loading

Smooth loading animation.

Avoid unnecessarily large buttons.

---

# 7. Inputs

Inputs should follow the same design language.

Use:

* Rounded corners
* Soft inset shadows
* Clean typography
* Clear focus state
* Proper validation state

Input states:

```text
Default
Focus
Filled
Error
Disabled
Loading
```

Focus state must remain clearly visible for accessibility.

---

# 8. Sidebar

Desktop sidebar:

* Fixed/collapsible
* Neumorphic
* Smooth expansion/collapse
* Module icons
* Active module indicator
* Tooltips when collapsed

Navigation:

```text
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
Reports
Notifications
Audit Logs
Settings
```

---

# 9. Mobile Navigation

The entire system must be fully manageable from mobile devices.

Do NOT simply shrink the desktop interface.

Create a proper mobile experience.

Mobile navigation should support:

* Bottom navigation for important actions
* Slide-out navigation
* Mobile sidebar
* Search
* Notifications
* Quick actions
* Mobile-friendly forms
* Mobile-friendly tables
* Mobile-friendly cards

Hospital staff should be able to perform important operational tasks from a mobile phone.

---

# 10. Responsive Design

The application must be responsive across:

### Mobile

* 320px+
* 375px
* 390px
* 414px
* 430px+

### Tablet

* 768px+
* 820px+
* 1024px

### Desktop

* 1280px
* 1440px
* 1600px
* 1920px+

### Large screens

Support wider screens without unnecessarily stretching content.

Use responsive containers and grids.

---

# 11. Mobile-First Operational Design

Important hospital workflows must work properly on mobile.

Examples:

### Doctor

Doctor should be able to:

* View assigned patients
* View patient history
* Add consultation notes
* Add diagnosis
* Create prescription
* View lab results
* View radiology reports
* Approve relevant workflows

### Nurse

Nurse should be able to:

* View assigned patients
* View room/bed
* Record vitals
* Record nursing notes
* Update medication tasks
* Complete nursing tasks
* View shift information

### Reception

Reception should be able to:

* Register patient
* Search patient
* Create appointment
* Admit patient
* Check bed availability

### Pharmacy

Pharmacy staff should be able to:

* Search medicine
* Issue medicine
* Check stock
* Check expiry
* Update stock

### Ambulance

Ambulance staff should be able to:

* View emergency requests
* Accept trip
* View pickup
* View destination
* Update trip status

---

# 12. Smooth Animations

Use subtle and professional animations.

Animations should feel smooth and fast.

Use animation for:

* Page transitions
* Sidebar opening
* Sidebar closing
* Modal opening
* Modal closing
* Dropdowns
* Tabs
* Cards
* Hover states
* Button states
* Notifications
* Toast messages
* Loading states
* Skeleton loaders
* Table updates
* Dashboard statistics

Do not over-animate.

Avoid distracting animations.

---

# 13. Smooth Scrolling

Implement smooth scrolling throughout the application.

Use smooth scrolling for:

* Dashboard sections
* Long patient profiles
* Patient timeline
* Reports
* Settings
* Documentation
* Modal content where appropriate

For long pages, use:

* Sticky headers
* Section navigation
* Scroll-to-section
* Back-to-top control where useful

---

# 14. Page Transitions

Page navigation should feel smooth.

Use subtle:

```text
Fade
+
Small vertical movement
+
Fast transition
```

Do not use large or slow page animations.

---

# 15. Loading Experience

Never show blank screens while data loads.

Use:

* Skeleton loaders
* Shimmer effects
* Loading indicators
* Button loading states
* Table skeletons
* Card skeletons
* Dashboard skeletons

Loading animations must match the Neumorphic design.

---

# 16. Empty States

Every module must have a professional empty state.

Example:

```text
No Patients Found

There are no patients matching your search.

[ Register Patient ]
```

Do not leave empty white space.

---

# 17. Error States

Errors should be clear and human-readable.

Example:

```text
Something went wrong

We couldn't load the patient information.

[ Try Again ]
```

Do not expose raw database errors to normal users.

---

# 18. Toast Notifications

Use clean floating notifications.

Examples:

```text
✓ Patient registered successfully

✓ Bed assigned successfully

✓ Appointment created

✓ Report uploaded

! Bed is already occupied

! Payment could not be processed
```

Notifications should animate smoothly.

---

# 19. Tables

Hospital systems require a lot of data.

Tables must remain clean and usable.

Desktop:

* Full table
* Sorting
* Filtering
* Pagination
* Column controls

Mobile:

Do NOT force a huge desktop table onto the mobile screen.

Instead use:

* Responsive table
* Horizontal scroll where necessary
* Card-based row view where appropriate
* Expandable row details

---

# 20. Forms

Forms should be divided into logical sections.

For example:

### Patient Registration

```text
Personal Information
↓
Contact Information
↓
Emergency Contact
↓
Medical Information
↓
Identification
↓
Documents
↓
Review
↓
Submit
```

Use multi-step forms for large workflows.

---

# 21. Patient Profile UI

Patient profile should be one of the most important screens.

Layout:

```text
Patient Header
────────────────────

Patient ID
Name
Age
Gender
Blood Group
Status
Room / Bed

────────────────────

Overview
Medical History
Admissions
Appointments
Consultations
Vitals
Prescriptions
Lab Reports
Radiology
Documents
Billing
Timeline
```

Use tabs or sections with smooth transitions.

---

# 22. Patient Timeline UI

Create a visually clean vertical timeline.

Example:

```text
● Patient Registered
│
● Appointment
│
● Consultation
│
● Admission
│
● Bed Assigned
│
● Lab Test
│
● Medication
│
● Transfer
│
● Discharge
```

Each event should show:

* Date
* Time
* Department
* User
* Action
* Details

---

# 23. Dashboard UI

Dashboard should use:

* Neumorphic cards
* Statistics
* Charts
* Quick actions
* Activity timeline
* Alerts
* Operational status

Example:

```text
┌──────────────────────────────────────────┐
│ Good Morning, Admin                      │
│ Hospital Overview                        │
└──────────────────────────────────────────┘

[ Patients ] [ Admissions ] [ Beds ] [ ICU ]

[ OPD Statistics ]       [ Bed Occupancy ]

[ Emergency ]            [ Pharmacy Alerts ]

[ Recent Activity ]

[ Pending Tasks ]
```

---

# 24. Quick Actions

Provide quick actions on relevant dashboards.

Examples:

```text
+ Register Patient
+ New Admission
+ Book Appointment
+ Assign Bed
+ Create Lab Order
+ Create Task
+ Create Ambulance Request
```

Quick actions should be accessible from mobile.

---

# 25. Accessibility

The UI must maintain accessibility despite the Neumorphic design.

Ensure:

* Readable text
* Sufficient contrast
* Visible focus states
* Keyboard navigation
* Screen-reader-friendly labels
* Accessible forms
* Proper button labels
* Do not rely only on color for status

Neumorphism must not compromise usability.

---

# 26. Responsive Modal / Drawer

Desktop:

Use centered modal where appropriate.

Mobile:

Convert large modals into:

* Full-screen modal
* Bottom sheet
* Mobile drawer

depending on the workflow.

---

# 27. Typography

Use a clean modern sans-serif font.

Typography should have:

* Clear hierarchy
* Strong headings
* Comfortable body text
* Readable table text
* Consistent spacing

Avoid decorative fonts.

---

# 28. Spacing System

Use a consistent spacing system throughout the application.

Avoid random margins/padding.

Use consistent:

* Page padding
* Card padding
* Section spacing
* Form spacing
* Table spacing

---

# 29. Design Consistency

Every module must look like part of the same application.

Patients, Pharmacy, Laboratory, Ambulance, Billing, Inventory, etc. must share:

* Same card style
* Same buttons
* Same inputs
* Same typography
* Same spacing
* Same animation behavior
* Same status system
* Same navigation

Do not design each module independently.

---

# 30. Performance

Animations must not negatively affect performance.

Use:

* CSS transforms
* GPU-friendly transitions
* Lazy loading
* Code splitting
* Virtualized lists where required
* Optimized images
* Efficient rendering

Respect:

```text
prefers-reduced-motion
```

Users who disable animations should receive a reduced-motion experience.

---

# 31. Final UI Requirement

The final interface should look like:

**Premium White Neumorphic Healthcare Enterprise Dashboard**

with:

* Smooth white gradients
* Soft shadows
* Rounded surfaces
* Clean typography
* Minimal colors
* Smooth animations
* Smooth scrolling
* Responsive layouts
* Mobile-first operational workflows
* Desktop enterprise dashboard
* Tablet support
* Accessible interactions

The UI must feel **modern, calm, professional and premium**, while remaining extremely practical for real hospital staff.

The application must be completely usable from both:

**Desktop + Mobile**

without sacrificing functionality on either platform.
