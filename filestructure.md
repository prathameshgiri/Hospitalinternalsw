hospital-management-system/
│
├── patients/
│   ├── patient-list
│   ├── patient-registration
│   ├── patient-profile
│   ├── patient-medical-history
│   ├── patient-allergies
│   ├── patient-documents
│   ├── patient-timeline
│   ├── patient-visits
│   ├── patient-admission-history
│   └── patient-discharge-history
│
├── admissions/
│   ├── admission-list
│   ├── new-admission
│   ├── admission-details
│   ├── doctor-assignment
│   ├── ward-assignment
│   ├── room-assignment
│   ├── bed-assignment
│   ├── patient-transfer
│   ├── transfer-history
│   ├── discharge-request
│   ├── discharge-approval
│   └── discharge-summary
│
├── beds-rooms/
│   ├── buildings
│   ├── floors
│   ├── wards
│   ├── rooms
│   ├── beds
│   ├── bed-availability
│   ├── bed-transfer
│   ├── bed-maintenance
│   └── occupancy-dashboard
│
├── doctors/
│   ├── doctor-list
│   ├── doctor-profile
│   ├── specialization
│   ├── departments
│   ├── schedules
│   ├── opd-schedule
│   ├── duty-schedule
│   ├── patient-assignment
│   └── doctor-availability
│
├── nursing/
│   ├── nurse-list
│   ├── nurse-profile
│   ├── nursing-station
│   ├── patient-assignment
│   ├── patient-rounds
│   ├── nursing-notes
│   ├── vitals
│   ├── medication-administration
│   ├── nursing-tasks
│   └── shift-handover
│
├── appointments/
│   ├── appointment-list
│   ├── appointment-calendar
│   ├── new-appointment
│   ├── doctor-appointments
│   ├── queue-management
│   ├── token-management
│   ├── reschedule
│   ├── cancellation
│   └── follow-up
│
├── opd/
│   ├── opd-registration
│   ├── opd-queue
│   ├── consultation
│   ├── diagnosis
│   ├── prescription
│   └── consultation-history
│
├── emergency/
│   ├── emergency-registration
│   ├── emergency-queue
│   ├── triage
│   ├── emergency-doctor
│   ├── emergency-nurse
│   ├── emergency-bed
│   ├── emergency-vitals
│   ├── emergency-medication
│   ├── emergency-investigation
│   ├── emergency-transfer
│   └── emergency-discharge
│
├── icu/
│   ├── icu-beds
│   ├── icu-patients
│   ├── patient-monitoring
│   ├── vitals
│   ├── ventilator
│   ├── icu-notes
│   ├── icu-medications
│   ├── doctor-assignment
│   ├── nurse-assignment
│   └── icu-transfer-history
│
├── pharmacy/
│   ├── medicine-master
│   ├── medicine-categories
│   ├── medicine-batches
│   ├── suppliers
│   ├── stock-in
│   ├── stock-out
│   ├── stock-adjustment
│   ├── medicine-issue
│   ├── medicine-return
│   ├── low-stock-alerts
│   ├── expiry-alerts
│   └── pharmacy-history
│
├── laboratory/
│   ├── test-master
│   ├── test-categories
│   ├── lab-orders
│   ├── sample-collection
│   ├── sample-tracking
│   ├── technician-assignment
│   ├── result-entry
│   ├── result-verification
│   ├── doctor-approval
│   └── lab-reports
│
├── radiology/
│   ├── test-master
│   ├── xray
│   ├── ct-scan
│   ├── mri
│   ├── ultrasound
│   ├── scan-scheduling
│   ├── technician-assignment
│   ├── radiologist-assignment
│   ├── report-entry
│   └── radiology-history
│
├── operation-theatre/
│   ├── ot-master
│   ├── ot-availability
│   ├── ot-booking
│   ├── surgery-scheduling
│   ├── surgeon-assignment
│   ├── anesthesia
│   ├── ot-staff
│   ├── pre-operative
│   ├── post-operative
│   ├── ot-consumables
│   ├── ot-equipment
│   └── surgery-history
│
├── billing/
│   ├── invoices
│   ├── invoice-items
│   ├── admission-charges
│   ├── room-charges
│   ├── doctor-charges
│   ├── lab-charges
│   ├── radiology-charges
│   ├── pharmacy-charges
│   ├── ot-charges
│   ├── payments
│   ├── pending-payments
│   ├── refunds
│   ├── receipts
│   └── billing-reports
│
├── inventory/
│   ├── inventory-master
│   ├── categories
│   ├── suppliers
│   ├── purchase-orders
│   ├── goods-received
│   ├── stock-movement
│   ├── stock-issue
│   ├── stock-return
│   ├── reorder-alerts
│   ├── expiry-tracking
│   ├── assets
│   └── asset-maintenance
│
├── ambulance/
│   ├── ambulance-master
│   ├── vehicle-number
│   ├── driver-assignment
│   ├── ambulance-availability
│   ├── emergency-request
│   ├── trip-management
│   ├── pickup-location
│   ├── destination
│   ├── trip-history
│   ├── fuel-records
│   └── vehicle-maintenance
│
├── staff/
│   ├── employee-list
│   ├── employee-profile
│   ├── departments
│   ├── designations
│   ├── shifts
│   ├── attendance
│   ├── leave-management
│   ├── duty-roster
│   ├── staff-documents
│   └── staff-activity
│
├── tasks/
│   ├── task-list
│   ├── create-task
│   ├── assigned-tasks
│   ├── department-tasks
│   ├── task-comments
│   ├── task-attachments
│   ├── overdue-tasks
│   └── task-history
│
├── documents/
│   ├── patient-documents
│   ├── medical-reports
│   ├── lab-reports
│   ├── radiology-reports
│   ├── discharge-summaries
│   ├── staff-documents
│   └── hospital-documents
│
├── notifications/
│   ├── all-notifications
│   ├── unread
│   ├── alerts
│   └── notification-settings
│
├── announcements/
│   ├── announcements
│   ├── department-announcements
│   ├── important-notices
│   └── announcement-history
│
├── reports/
│   ├── patient-reports
│   ├── admission-reports
│   ├── discharge-reports
│   ├── bed-reports
│   ├── opd-reports
│   ├── emergency-reports
│   ├── pharmacy-reports
│   ├── laboratory-reports
│   ├── radiology-reports
│   ├── ot-reports
│   ├── billing-reports
│   ├── inventory-reports
│   ├── staff-reports
│   └── audit-reports
│
├── users/
│   ├── user-list
│   ├── user-profile
│   ├── create-user
│   ├── user-access
│   ├── account-status
│   └── user-activity
│
├── roles-permissions/
│   ├── roles
│   ├── permissions
│   ├── role-permissions
│   ├── user-permissions
│   └── access-control
│
├── audit-logs/
│   ├── activity-logs
│   ├── user-activity
│   ├── patient-activity
│   ├── system-activity
│   └── security-logs
│
├── settings/
│   ├── hospital-settings
│   ├── branch-settings
│   ├── department-settings
│   ├── billing-settings
│   ├── appointment-settings
│   ├── notification-settings
│   ├── system-settings
│   └── backup-settings
│
└── dashboard/
    ├── super-admin-dashboard
    ├── admin-dashboard
    ├── doctor-dashboard
    ├── nurse-dashboard
    ├── pharmacy-dashboard
    ├── laboratory-dashboard
    └── department-dashboard











    src/
│
├── modules/
│   ├── patients/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── validations/
│   │
│   ├── ambulance/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── validations/
│   │
│   ├── pharmacy/
│   ├── laboratory/
│   ├── billing/
│   ├── inventory/
│   └── ...
│
├── components/
│   ├── ui/
│   ├── tables/
│   ├── forms/
│   ├── modals/
│   ├── charts/
│   └── layouts/
│
├── lib/
│   ├── supabase/
│   ├── auth/
│   ├── permissions/
│   └── utils/
│
├── routes/
├── types/
└── config/









supabase/
├── migrations/
├── functions/
│   ├── patients/
│   ├── admissions/
│   ├── billing/
│   ├── pharmacy/
│   └── ...
├── seed/
└── config.toml