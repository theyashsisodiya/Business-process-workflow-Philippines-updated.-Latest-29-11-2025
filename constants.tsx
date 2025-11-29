import { Actor, WorkflowStep } from './types';

const DETAILED_PHILIPPINES_WORKFLOW: WorkflowStep[] = [
    {
        id: 'PH_P1',
        title: "Phase 1: Registration, Medical & Selection",
        actor: Actor.SYSTEM,
        description: "The initial phase where the candidate registers, undergoes medical screening, and prepares for job selection.",
    },
    {
        id: 'PH1_1',
        title: "1.1 Candidate Registration & Profile Creation",
        actor: Actor.USER,
        description: "Candidate completes bio-data, uploads photo & passport copy, records video interview, and signs registration forms.",
    },
    {
        id: 'PH1_2',
        title: "1.2 Job Scope Acceptance",
        actor: Actor.ADMIN,
        description: "Singapore sales staff emails the detailed Job Scope form to the Manila/Iloilo office. The worker signs to accept the job scope.",
    },
    {
        id: 'PH1_3',
        title: "1.3 Medical Examination",
        actor: Actor.USER,
        description: "Worker proceeds to Holy Angel Medical Clinic with a referral form. Walk-in allowed. Payment is made directly by the worker. Results in 2 working days.",
    },
    {
        id: 'PH1_4',
        title: "1.4 Automated Medical Tracking & Alerts",
        actor: Actor.SYSTEM,
        description: "System prompts candidate (N+1 day), sends reminders, and alerts recruiters if no reply. Captures data like Blood Pressure levels.",
    },
    {
        id: 'PH1_5',
        title: "1.5 Medical Results Handling",
        actor: Actor.ADMIN,
        description: "Admin collects medical certificate. Actions based on results:",
        branches: [
            { id: 'PH1_5a', title: "High BP", actor: Actor.ADMIN, description: "Monitor for 7 days and re-take. Reject if still high." },
            { id: 'PH1_5b', title: "X-Ray Scarring", actor: Actor.ADMIN, description: "Worker is rejected." },
            { id: 'PH1_5c', title: "UTI", actor: Actor.USER, description: "Worker takes medication for 1 week and re-does the test." },
        ]
    },
    {
        id: 'PH1_6',
        title: "1.6 Selection Notification",
        actor: Actor.SYSTEM,
        description: "If selected, system updates progress and notifies the candidate via WhatsApp/Email with referral form attached.",
    },
    {
        id: 'PH_P2',
        title: "Phase 2: Training & Certification",
        actor: Actor.ADMIN,
        description: "Processing required government training (TESDA, PDOS, OWWA) based on the candidate's experience history.",
    },
    {
        id: 'PH2_1',
        title: "2.1 Experience-Based Workflow Routing",
        actor: Actor.SYSTEM,
        description: "The system routes candidates based on prior experience.",
        branches: [
            { 
                id: 'PH2_1a', 
                title: "First Timer", 
                actor: Actor.SYSTEM, 
                description: "Must complete TESDA, PDOS, and OWWA." 
            },
            { 
                id: 'PH2_1b', 
                title: "Ex-Singapore", 
                actor: Actor.SYSTEM, 
                description: "Exempted from TESDA and OWWA. Proceeds directly to PDOS." 
            },
            { 
                id: 'PH2_1c', 
                title: "Ex-Overseas (Non-SG)", 
                actor: Actor.SYSTEM, 
                description: "Exempted from TESDA. Must attend PDOS and OWWA." 
            },
        ]
    },
    {
        id: 'PH2_2',
        title: "2.2 TESDA Course Booking (First Timers)",
        actor: Actor.ADMIN,
        description: "Admin books 3-day course. Worker brings docs/payment. System auto-emails training center (1 week notice).",
    },
    {
        id: 'PH2_3',
        title: "2.3 PDOS Booking",
        actor: Actor.ADMIN,
        description: "Triggered by scanned EC from SG. Admin checks availability and emails request. 1-day online course.",
    },
    {
        id: 'PH2_4',
        title: "2.4 OWWA Course Booking",
        actor: Actor.ADMIN,
        description: "Triggered by PDOS cert. Admin submits online (8-12pm). 1-day physical attendance required for worker.",
    },
    {
        id: 'PH_P3',
        title: "Phase 3: Contract Processing & Insurance",
        actor: Actor.ADMIN,
        description: "Finalizing legal documentation and insurance coverage.",
    },
    {
        id: 'PH3_1',
        title: "3.1 Original Employment Contract (EC) Signing",
        actor: Actor.ADMIN,
        description: "Triggered by receipt of original Embassy-endorsed EC from SG. Worker reports to Manila office to sign.",
    },
    {
        id: 'PH3_2',
        title: "3.2 Contract Receipt Management",
        actor: Actor.SYSTEM,
        description: "Admin updates receipt date. System auto-notifies worker to input reporting date. Escalates to Admin if no reply.",
    },
    {
        id: 'PH3_3',
        title: "3.3 Insurance Purchase",
        actor: Actor.ADMIN,
        description: "Admin manually fills insurance form and emails provider. Policy issued next day. Cash payment by Liaison.",
    },
    {
        id: 'PH_P4',
        title: "Phase 4: OEC Processing & Deployment",
        actor: Actor.ADMIN,
        description: "Final government clearance and travel arrangements.",
    },
    {
        id: 'PH4_1',
        title: "4.1 OEC E-Registration & Submission",
        actor: Actor.USER,
        description: "Worker completes online e-registration and submits original documents (EC, Certificates, etc.) to DMW.",
    },
    {
        id: 'PH4_2',
        title: "4.2 Flight Coordination",
        actor: Actor.ADMIN,
        description: "Once OEC approved, Admin emails OEC to SG to arrange ticket. Admin advises earliest flight date.",
    },
    {
        id: 'PH4_3',
        title: "4.3 Pre-Departure Requirements",
        actor: Actor.USER,
        description: "Worker completes pregnancy serum test (3 days prior), stays in Manila accommodation (2-3 days), and attends pre-departure briefing.",
        isFinal: true
    }
];

const DETAILED_SINGAPORE_WORKFLOW: WorkflowStep[] = [
    {
        id: 'SG_P0',
        title: "Phase 0: Registration, Requirements & Sales Consultation",
        actor: Actor.SYSTEM,
        description: "The initial phase where Clients register, provide detailed requirements, and schedule a consultation.",
    },
    {
        id: 'SG0_1',
        title: "0.1 Client / Sales Account Creation",
        actor: Actor.CLIENT,
        description: "The Sales Team creates an account for the Client, or the Client registers directly, to begin the process.",
        branches: [
            { id: 'SG0_1a', title: "SingPass Authentication", actor: Actor.SYSTEM, description: "Login using the national digital identity. Only basic data (name, contact) is collected." },
            { id: 'SG0_1b', title: "Email + OTP Login", actor: Actor.SYSTEM, description: "Secure login via a One-Time Password. Only basic data is collected." },
        ]
    },
    {
        id: 'SG0_2',
        title: "0.2 Household Requirements Collection",
        actor: Actor.CLIENT,
        description: "The Client provides detailed household information for AI-powered candidate matching.",
        branches: [
            { id: 'SG0_2a', title: "Household Composition & Care Needs", actor: Actor.CLIENT, description: "Details on adults, children, elderly, persons with disabilities, and dwelling type. Primary care needs and work scope are specified." },
            { id: 'SG0_2b', title: "Language & Skills Requirements", actor: Actor.CLIENT, description: "Preferred languages and proficiency levels. Special skills like baking, special diet cooking, or driving." },
        ]
    },
    {
        id: 'SG0_3',
        title: "0.3 Client Preferences & Status",
        actor: Actor.CLIENT,
        description: "The Client specifies their preferences for a Foreign Domestic Worker (FDW) and their own status.",
        branches: [
            { id: 'SG0_3a', title: "FDW Preferences", actor: Actor.CLIENT, description: "Nationality, experience level, age range, and expected start date." },
            { id: 'SG0_3b', title: "Client Status & Budget", actor: Actor.CLIENT, description: "Previous FDW hiring experience, legal status (Citizen/PR/EP), monthly salary budget, and days off willingness." },
        ]
    },
    {
        id: 'SG0_4',
        title: "0.4 Requirements Summary & AI Matching",
        actor: Actor.SYSTEM,
        description: "The Client confirms their requirements, and the AI engine processes them to generate a candidate shortlist for the sales team.",
    },
    {
        id: 'SG0_5',
        title: "0.5 Notification & Consultation Booking",
        actor: Actor.SYSTEM,
        description: "Notifications are sent, and the Client is prompted to book a consultation.",
        branches: [
            { id: 'SG0_5a', title: "Notifications Sent", actor: Actor.SYSTEM, description: "Email sent to Client with a summary. Email sent to Sales Rep with requirements and AI-matched shortlist." },
            { id: 'SG0_5b', title: "Consultation Scheduled", actor: Actor.CLIENT, description: "Client books a consultation via the platform. Sales rep reviews the client's requirements and prepares for the call." },
        ]
    },
    {
        id: 'SG0_6',
        title: "0.6 Informational Dashboard Access",
        actor: Actor.SYSTEM,
        description: "While awaiting consultation, the Client has access to a dashboard with helpful resources.",
        branches: [
            { id: 'SG0_6a', title: "Hiring Process Overview", actor: Actor.SYSTEM, description: "A step-by-step guide to the entire hiring journey." },
            { id: 'SG0_6b', title: "Cost Breakdown", actor: Actor.SYSTEM, description: "An interactive calculator for all associated hiring costs." },
            { id: 'SG0_6c', title: "Client Obligations & Rights", actor: Actor.SYSTEM, description: "Details on legal requirements, working hours, accommodation standards, and medical obligations." },
        ]
    },
    {
        id: 'SG_P1',
        title: "Phase 1: Candidate Selection, Interview & Payment",
        actor: Actor.SYSTEM,
        description: "After consultation, the Client reviews candidates, conducts interviews, and makes a payment to proceed.",
    },
    {
        id: 'SG1_1',
        title: "1.1 Sales Curates & Presents Shortlist",
        actor: Actor.SALES,
        description: "Post-consultation, the sales representative reviews the AI-matched candidates, curates a final shortlist, and presents it to the client for review.",
    },
    {
        id: 'SG1_2',
        title: "1.2 Client Reviews Shortlist & Videos",
        actor: Actor.CLIENT,
        description: "The client reviews the curated candidate profiles and their pre-recorded one-way video interviews, then creates their own shortlist for live interviews.",
    },
    {
        id: 'SG1_3',
        title: "1.3 Sales Coordination of Live Interview",
        actor: Actor.SALES,
        description: "Sales staff schedule and facilitate live video interviews between the Client and shortlisted candidates.",
        branches: [
            { id: 'SG1_3a', title: "Interview Scheduling & Invitations", actor: Actor.SYSTEM, description: "Platform calendar is used to book slots. Invites with video links are sent to both parties." },
            { id: 'SG1_3b', title: "Live Interview", actor: Actor.SYSTEM, description: "Interview conducted via integrated video platform (Zoom/Meet) with features like recording and note-taking." },
            { id: 'SG1_3c', title: "Post-Interview Feedback", actor: Actor.CLIENT, description: "Client provides feedback and decides whether to proceed with the candidate." },
        ]
    },
    {
        id: 'SG1_4',
        title: "1.4 Payment to Secure Candidate",
        actor: Actor.CLIENT,
        description: "After selecting a candidate, the Client makes a payment to secure them.",
        branches: [
            { id: 'SG1_4a', title: "Option A: Full Payment", actor: Actor.SYSTEM, description: "For immediate hiring. Triggers the document collection and speeds up the process." },
            { id: 'SG1_4b', title: "Option B: Booking Fee", actor: Actor.SYSTEM, description: "Reserves the candidate for 7 days. Refundable under certain conditions." },
            { id: 'SG1_4c', title: "Payment Processing", actor: Actor.SYSTEM, description: "Payment is made via PayNow (QR code) or Credit Card (Stripe/PayPal)." },
        ]
    },
    {
        id: 'SG1_5',
        title: "1.5 Comprehensive Multi-Party Notifications",
        actor: Actor.SYSTEM,
        description: "Upon successful payment, automated notifications are sent via In-App, Email, SMS, and WhatsApp to all relevant parties.",
        branches: [
            { id: 'SG1_5a', title: "Recipients", actor: Actor.SYSTEM, description: "Client, Candidate, Overseas Agent, Sales Staff, Admin Staff, Branch Manager, and Super Admin." },
        ]
    },
    {
        id: 'SG_P2',
        title: "Phase 2: MOM Application & IPA Approval",
        actor: Actor.ADMIN,
        description: "The admin team handles the official application to the Ministry of Manpower (MOM).",
    },
    {
        id: 'SG2_1',
        title: "2.1 Document Collection & Verification by Admin",
        actor: Actor.ADMIN,
        description: "Admin staff securely collects sensitive documents (NRIC, income proof) from the Client for the application."
    },
    {
        id: 'SG2_2',
        title: "2.2 Admin Submission of MOM Application",
        actor: Actor.ADMIN,
        description: "Admin prepares and submits the work permit application to MOM and awaits the In-Principle Approval (IPA)."
    },
    {
        id: 'SG_P3',
        title: "Phase 3: Post-MOM Approval & Onboarding",
        actor: Actor.ADMIN,
        description: "After MOM approval, the focus shifts to bringing the candidate to Singapore and finalizing employment.",
    },
    {
        id: 'SG3_1',
        title: "3.1 Flight Booking & Transport Coordination",
        actor: Actor.ADMIN,
        description: "An air travel vendor books the flight. Details are shared with the Client, transport company, and overseas agent."
    },
    {
        id: 'SG3_2',
        title: "3.2 Medical/SIP Arrangements",
        actor: Actor.ADMIN,
        description: "Medical check-up and Safety Awareness Course (SIP) appointments are scheduled for the candidate upon arrival."
    },
    {
        id: 'SG3_3',
        title: "3.3 Handover & Work Permit Issuance",
        actor: Actor.ADMIN,
        description: "On handover day, the Client pays the placement fee. The admin facilitates thumbprinting and work permit issuance.",
    },
    {
        id: 'SG3_4',
        title: "3.4 Automated Post-Placement Follow-Up",
        actor: Actor.SYSTEM,
        description: "Automated surveys are sent to both the Client and FDW at 1 week, 1 month, and 3 months to ensure a smooth transition.",
    },
    {
        id: 'SG_P4',
        title: "Admin Country-Specific Workflows & Processing",
        actor: Actor.ADMIN,
        description: "Additional manual processes for candidates from specific countries, handled by the admin team and partners.",
        branches: [
            { id: 'SG4_a', title: "Embassy Handling", actor: Actor.ADMIN, description: "Manual processing of documents via runners for Myanmar, Indonesia, and Philippines embassies." },
            { id: 'SG4_b', title: "Air Travel Vendor", actor: Actor.ADMIN, description: "Coordination with vendors for flight bookings." },
        ],
        isFinal: true
    }
];

export const SINGAPORE_WORKFLOW_DATA: WorkflowStep[] = DETAILED_SINGAPORE_WORKFLOW;
export const PHILIPPINES_WORKFLOW_DATA: WorkflowStep[] = DETAILED_PHILIPPINES_WORKFLOW;


export const ADMIN_WORKFLOW_DATA: WorkflowStep[] = [
  {
    id: 'A1',
    title: "1. Admin Login",
    actor: Actor.ADMIN,
    description: "Admin logs into the platform to access the admin panel.",
  },
  {
    id: 'A2',
    title: "2. Admin Dashboard",
    actor: Actor.ADMIN,
    description: "The central hub for monitoring platform activity. The admin can navigate to different management sections from here.",
    branches: [
      {
        id: 'A2a',
        title: "View Statistics",
        actor: Actor.SYSTEM,
        description: "Dashboard shows hire stats, popular job categories, total users, active employers, new jobs, and pending approvals.",
      },
      {
        id: 'A2b',
        title: "Navigate Panel",
        actor: Actor.SYSTEM,
        description: "Uses the navigation bar to access: Dashboard, Candidate, Employer, and Approval sections.",
      },
    ],
  },
  {
    id: 'A3',
    title: "3. Management Sections",
    actor: Actor.ADMIN,
    description: "Admin performs specific management tasks based on the selected navigation option.",
    branches: [
      {
        id: 'A3a',
        title: "Candidate Management",
        actor: Actor.ADMIN,
        description: "View a list of all candidates. Can view individual profiles including name, contact details, educational background, employment history, skills, and their uploaded documents.",
      },
      {
        id: 'A3b',
        title: "Employer Management",
        actor: Actor.ADMIN,
        description: "View a list of all employers. Can view profiles, verification documents (UOM), and manage their job posting status.",
        branches: [
            { id: 'A3b-1', title: 'Approve Employer', actor: Actor.SYSTEM, description: 'Grant the employer rights to post jobs.' },
            { id: 'A3b-2', title: 'Deny Employer', actor: Actor.SYSTEM, description: 'Reject the employer\'s application.' },
            { id: 'A3b-3', title: 'Status Pending', actor: Actor.SYSTEM, description: 'The default status until a decision is made.' }
        ]
      },
      {
        id: 'A3c',
        title: "Interview Approval",
        actor: Actor.ADMIN,
        description: "Review and approve interview invitations sent from employers to candidates. Approval is required for the interview to proceed.",
      },
    ],
    isFinal: true
  },
];

export const CANDIDATE_WORKFLOW_DATA: WorkflowStep[] = [
  {
    id: 'C1',
    title: "1. Accessing the Website",
    actor: Actor.USER,
    description: "A candidate visits Minghwee.com to begin their job search journey.",
  },
  {
    id: 'C2',
    title: "2. Candidate Login",
    actor: Actor.USER,
    description: "The candidate logs in based on their geographical location.",
    branches: [
      { 
        id: 'C2a', 
        title: "Singapore Candidate", 
        actor: Actor.SYSTEM, 
        description: "Candidates from Singapore have two login options.",
        branches: [
            { id: 'C2a-1', title: 'Single Pass Login', actor: Actor.SYSTEM, description: 'A quick, unified login system.' },
            { id: 'C2a-2', title: 'OTP Login', actor: Actor.SYSTEM, description: 'Secure login via a One-Time Password.' }
        ]
      },
      { 
        id: 'C2b', 
        title: "International Candidate", 
        actor: Actor.SYSTEM, 
        description: "Candidates from all other countries use OTP.",
        branches: [
            { id: 'C2b-1', title: 'OTP Login', actor: Actor.SYSTEM, description: 'Secure login via a One-Time Password.' }
        ]
      },
    ],
  },
  {
    id: 'C3',
    title: "3. New Candidate Registration",
    actor: Actor.USER,
    description: "Candidate completes their profile by providing detailed information, documents, and preferences through a multi-step application process.",
    branches: [
      {
        id: 'C3a',
        title: "1. Fill Up Biodata",
        actor: Actor.USER,
        description: `• Personal Info: Full Name, DOB, Nationality, Gender
• Contact Details: Phone, Email, Address
• Educational Background
• Employment History
• Skills & Qualifications
• Emergency Contact`,
      },
      {
        id: 'C3b',
        title: "2. Upload Photo",
        actor: Actor.USER,
        description: `• Specs: Recent, high-res passport-sized photo.
• Background: Neutral (white/light).
• Format: JPEG/PNG, under 2MB.`,
      },
      {
        id: 'C3c',
        title: "3. Video Interview",
        actor: Actor.USER,
        description: `• Instructions: Record in a quiet, well-lit space with professional attire.
• Questions: Background, job interest, strengths, etc.
• Guidelines: 5-7 mins max, MP4/MOV format.`,
      },
      {
        id: 'C3d',
        title: "4. Passport Copy",
        actor: Actor.USER,
        description: `• Required: Clear, scanned copy of personal details page.
• Validity: Must be valid for at least 6 months.
• Format: PDF/JPEG/PNG, under 3MB.`,
      },
      {
        id: 'C3e',
        title: "5. Select Job Interests",
        actor: Actor.USER,
        description: `• Job Categories: Choose preferred industry/roles.
• Location Preferences: Indicate desired locations.
• Salary Expectations: Provide a salary range.
• Job Type: Full-time, part-time, contract, temporary.`,
      },
      {
        id: 'C3f',
        title: "6. Complete & Sign Forms",
        actor: Actor.USER,
        description: `• Forms to Sign: Employment Contract, Medical Form, Confidentiality Agreement.
• Signature: Review all terms and provide a digital or manual signature.`,
      },
    ],
  },
  {
    id: 'C4',
    title: "4. Automated Job Matching",
    actor: Actor.SYSTEM,
    description: "Once the profile is created, the platform’s automation system matches the candidate to relevant job openings based on their profile.",
  },
  {
    id: 'C5',
    title: "5. Internal Review Process",
    actor: Actor.SYSTEM,
    description: "Behind the scenes, matched profiles are reviewed by employers, who can then send interview invites that require admin approval.",
    branches: [
      { id: 'C5a', title: 'Employer Sends Invite', actor: Actor.ADMIN, description: 'An employer reviews the matched candidate and initiates an interview invite.' },
      { id: 'C5b', title: 'Admin Approves Invite', actor: Actor.ADMIN, description: 'The admin must approve the invite before it is sent to the candidate.' },
    ],
  },
  {
    id: 'C6',
    title: "6. Receive Interview Invite",
    actor: Actor.USER,
    description: "Once approved, the interview invite appears on the candidate's dashboard with job details.",
    branches: [
        { id: 'C6a', title: 'Accept Invite', actor: Actor.SYSTEM, description: 'Candidate accepts and proceeds to scheduling.' },
        { id: 'C6b', title: 'Reject Invite', actor: Actor.SYSTEM, description: 'Candidate declines the interview. The process ends for this job.', isFinal: true },
    ]
  },
  {
    id: 'C7',
    title: "7. Interview Scheduled",
    actor: Actor.SYSTEM,
    description: "Upon acceptance, an interview link is automatically sent to both the candidate and the employer.",
  },
  {
    id: 'C8',
    title: "8. Post-Interview Decision",
    actor: Actor.USER,
    description: "After the interview, if selected, the candidate decides whether to proceed with the hiring process.",
     branches: [
        { id: 'C8a', title: 'Proceed to Next Step', actor: Actor.SYSTEM, description: 'Candidate wishes to continue to the documentation stage.' },
        { id: 'C8b', title: 'Withdraw Application', actor: Actor.SYSTEM, description: 'Candidate is no longer interested. The process ends.', isFinal: true },
    ]
  },
  {
    id: 'C9',
    title: "9. Submit Pre-uploaded Documents",
    actor: Actor.USER,
    description: "Candidate confirms and sends their complete, pre-uploaded document profile for verification for this specific job."
  },
  {
    id: 'C10',
    title: "10. Document Verification by Sales Team",
    actor: Actor.SALES,
    description: "The Sales Team reviews the candidate's submitted documents and provides a status.",
     branches: [
      { id: 'C10a', title: "Documents Approved", actor: Actor.SYSTEM, description: "All documents are verified. The process moves to the offer letter stage." },
      { 
        id: 'C10b', 
        title: "Additional Documents Requested", 
        actor: Actor.SALES, 
        description: "The sales team requests missing or corrected documents. The candidate is prompted to upload them.",
        branches: [
            {
                id: 'C10b-1',
                title: 'Upload Other Documents',
                actor: Actor.USER,
                description: 'The candidate uploads the specific additional documents requested by the sales team. The documents are then re-verified.'
            }
        ]
      },
      { id: 'C10c', title: "Application Rejected", actor: Actor.SYSTEM, description: "Documents do not meet requirements. Process ends.", isFinal: true },
    ],
  },
  {
    id: 'C11',
    title: "11. Offer Letter & Post-Arrival Procedures",
    actor: Actor.ADMIN,
    description: "An offer is sent and signed. After the worker arrives in Singapore, a series of procedures are executed to finalize employment and documentation.",
    branches: [
      {
        id: 'C11a',
        title: "1. Medical Clearance",
        actor: Actor.SYSTEM,
        description: "Wait for transport company to confirm worker's medical clearance, then confirm fetch date/time with employer.",
      },
      {
        id: 'C11b',
        title: "2. Placement Fee Payment",
        actor: Actor.ADMIN,
        description: "Remind employer to pay placement fee (loan) on fetching day.\nModes: PayNow, Cash, Cheque.",
      },
      {
        id: 'C11c',
        title: "3. Document Collection",
        actor: Actor.ADMIN,
        description: "On handover day, collect original employment contract and worker’s SIP certificate. Provide a copy of the SIP certificate to the employer.",
      },
      {
        id: 'C11d',
        title: "4. Handover Briefing",
        actor: Actor.ADMIN,
        description: "Brief worker and employer on documents for signing. Ensure the In-Principle Approval (IPA) form is signed by both parties.",
      },
      {
        id: 'C11e',
        title: "5. Schedule Thumbprint",
        actor: Actor.ADMIN,
        description: "Arrange a date with the employer for the worker’s thumbprinting. Transport will be arranged to pick up the worker.",
      },
      {
        id: 'C11f',
        title: "6. Request IC Details",
        actor: Actor.ADMIN,
        description: "Request IC details of up to three authorized persons for work permit collection for the MOM portal.",
      },
      {
        id: 'C11g',
        title: "7. Work Permit Delivery",
        actor: Actor.SYSTEM,
        description: "After thumbprinting at MOM is complete, the work permit card is delivered to the employer's designated address.",
      },
    ],
  },
  {
    id: 'C12',
    title: "12. Finalizing the Hire",
    actor: Actor.SYSTEM,
    description: "Once the work permit is delivered, the candidate is officially hired, and the onboarding process begins.",
  },
  {
    id: 'C13',
    title: "13. Additional Philippine Agency Processes",
    actor: Actor.ADMIN,
    description: "For first-time workers from the Philippines, a series of government-mandated courses and certifications must be completed before departure.",
    branches: [
      {
        id: 'C13a',
        title: "TESDA Course",
        actor: Actor.ADMIN,
        description: "Admin books the 3-day TESDA course. Worker attends with required documents. System tracks progress and sends reminders.",
      },
      {
        id: 'C13b',
        title: "PDOS Course",
        actor: Actor.ADMIN,
        description: "Admin books the 1-day online Pre-Departure Orientation Seminar. Certificate can be collected same day.",
      },
      {
        id: 'C13c',
        title: "OWWA Course",
        actor: Actor.ADMIN,
        description: "Admin books the OWWA course online and submits required forms and documents on behalf of the worker.",
      },
      {
        id: 'C13d',
        title: "Insurance",
        actor: Actor.ADMIN,
        description: "Admin fills out insurance form and pays on behalf of the worker. Policy is emailed to the worker.",
      },
      {
        id: 'C13e',
        title: "OEC (Overseas Employment Cert.)",
        actor: Actor.USER,
        description: "Worker completes e-Registration. Admin submits all course certificates and documents. Once approved, admin arranges flight bookings.",
      },
      {
        id: 'C13f',
        title: "Final Preparations",
        actor: Actor.ADMIN,
        description: "A pregnancy serum test is required 3 days before departure. Worker stays in Manila accommodation for 2-3 days for a pre-departure briefing.",
      },
    ],
    isFinal: true,
  },
];

export const COMBINED_WORKFLOW_DATA: WorkflowStep[] = [
    {
        id: 'COMB_P1',
        title: "Phase 1: Registration & Requirements",
        actor: Actor.SYSTEM,
        description: "The initial phase where both Clients and Candidates register on the platform and provide their respective information.",
        branches: [
            {
                id: 'COMB_P1_CLIENT',
                title: "Client Journey",
                actor: Actor.CLIENT,
                description: "The client registers and outlines their household needs.",
                branches: [
                    { id: 'SG0_1', title: "0.1 Account Creation", actor: Actor.CLIENT, description: "Client or Sales Team creates an account via SingPass or Email + OTP." },
                    { id: 'SG0_2', title: "0.2 Requirements Collection", actor: Actor.CLIENT, description: "Client details household composition, care needs, and skill requirements." },
                    { id: 'SG0_3', title: "0.3 Preference & Status", actor: Actor.CLIENT, description: "Client specifies FDW preferences, budget, and their own hiring status." },
                ]
            },
            {
                id: 'COMB_P1_CANDIDATE',
                title: "Candidate Journey",
                actor: Actor.USER,
                description: "The candidate registers and builds a comprehensive profile.",
                branches: [
                    { id: 'C1', title: "1. Access Website", actor: Actor.USER, description: "Candidate visits the platform." },
                    { id: 'C2', title: "2. Candidate Login", actor: Actor.USER, description: "Candidate logs in via location-specific methods." },
                    { id: 'C3', title: "3. Complete Profile", actor: Actor.USER, description: "Candidate provides biodata, photos, video interview, and signs initial forms." },
                ]
            }
        ]
    },
    {
        id: 'COMB_P2',
        title: "Phase 2: Matching & Consultation",
        actor: Actor.SYSTEM,
        description: "The system matches candidates to client requirements, and the sales team consults with the client.",
        branches: [
            {
                id: 'COMB_P2_CLIENT',
                title: "Client Journey",
                actor: Actor.CLIENT,
                description: "The client's requirements are processed and a consultation is booked.",
                 branches: [
                    { id: 'SG0_4', title: "0.4 AI Matching", actor: Actor.SYSTEM, description: "AI engine generates a candidate shortlist for the sales team." },
                    { id: 'SG0_5', title: "0.5 Consultation Booking", actor: Actor.CLIENT, description: "Client is notified and books a consultation with the sales team." },
                ]
            },
            {
                id: 'COMB_P2_CANDIDATE',
                title: "Candidate Journey",
                actor: Actor.USER,
                description: "The candidate's profile is automatically matched to jobs.",
                branches: [
                    { id: 'C4', title: "4. Automated Job Matching", actor: Actor.SYSTEM, description: "The system matches the candidate to relevant job openings." },
                ]
            }
        ]
    },
    {
        id: 'COMB_P3',
        title: "Phase 3: Interview & Selection",
        actor: Actor.SYSTEM,
        description: "The client and candidate interact through interviews, leading to the selection of a final candidate.",
         branches: [
            {
                id: 'COMB_P3_CLIENT',
                title: "Client Journey",
                actor: Actor.CLIENT,
                description: "The client reviews the shortlist and conducts interviews.",
                 branches: [
                    { id: 'SG1_1', title: "1.1 Sales Presents Shortlist", actor: Actor.SALES, description: "Sales team curates and presents the best candidates to the client." },
                    { id: 'SG1_2', title: "1.2 Client Reviews", actor: Actor.CLIENT, description: "Client reviews profiles and pre-recorded videos." },
                    { id: 'SG1_3', title: "1.3 Live Interview", actor: Actor.SALES, description: "Sales team coordinates a live interview between the client and candidate." },
                ]
            },
            {
                id: 'COMB_P3_CANDIDATE',
                title: "Candidate Journey",
                actor: Actor.USER,
                description: "The candidate receives and responds to interview invitations.",
                branches: [
                    { id: 'C5', title: "5. Internal Review", actor: Actor.SYSTEM, description: "Client's interview request is approved by an admin." },
                    { id: 'C6', title: "6. Receive Invite", actor: Actor.USER, description: "Candidate receives the interview invitation on their dashboard." },
                    { id: 'C7', title: "7. Interview Scheduled", actor: Actor.SYSTEM, description: "An interview link is automatically sent upon acceptance." },
                ]
            }
        ]
    },
    {
        id: 'COMB_P4',
        title: "Phase 4: Payment & Documentation",
        actor: Actor.SYSTEM,
        description: "The client secures the candidate with a payment, and both parties proceed with documentation.",
        branches: [
            {
                id: 'COMB_P4_CLIENT',
                title: "Client Journey",
                actor: Actor.CLIENT,
                description: "The client makes a payment and the admin begins the MOM application.",
                branches: [
                    { id: 'SG1_4', title: "1.4 Payment", actor: Actor.CLIENT, description: "Client pays either a booking fee or the full amount to secure the candidate." },
                    { id: 'SG_P2', title: "Phase 2: MOM Application", actor: Actor.ADMIN, description: "Admin collects documents from the client and submits the application to MOM." },
                ]
            },
            {
                id: 'COMB_P4_CANDIDATE',
                title: "Candidate Journey",
                actor: Actor.USER,
                description: "The candidate confirms their interest and submits their documents for verification.",
                branches: [
                    { id: 'C8', title: "8. Post-Interview Decision", actor: Actor.USER, description: "Candidate decides whether to proceed with the hiring process." },
                    { id: 'C9', title: "9. Submit Documents", actor: Actor.USER, description: "Candidate submits their pre-uploaded document profile." },
                    { id: 'C10', title: "10. Document Verification", actor: Actor.SALES, description: "The Sales Team reviews and verifies the candidate's documents." },
                ]
            }
        ]
    },
    {
        id: 'COMB_P5',
        title: "Phase 5: Onboarding & Finalization",
        actor: Actor.SYSTEM,
        description: "Final steps to bring the candidate to Singapore, finalize legal documentation, and complete the hire.",
         branches: [
            {
                id: 'COMB_P5_CLIENT',
                title: "Client Journey",
                actor: Actor.CLIENT,
                description: "The client is involved in the final onboarding and handover.",
                branches: [
                     { id: 'SG_P3', title: "Phase 3: Onboarding", actor: Actor.ADMIN, description: "Admin coordinates flights, medical checks, and the final handover." },
                ]
            },
            {
                id: 'COMB_P5_CANDIDATE',
                title: "Candidate Journey",
                actor: Actor.USER,
                description: "The candidate receives their offer and goes through post-arrival procedures.",
                branches: [
                     { id: 'C11', title: "11. Offer & Post-Arrival", actor: Actor.ADMIN, description: "Admin manages medical clearance, payment, and work permit issuance." },
                     { id: 'C12', title: "12. Hire Finalized", actor: Actor.SYSTEM, description: "Candidate is officially hired once the work permit is delivered." },
                ]
            }
        ],
        isFinal: true
    }
];