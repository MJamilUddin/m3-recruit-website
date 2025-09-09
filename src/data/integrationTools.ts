// Integration tools data
// Using Clearbit API for logo images: https://logo.clearbit.com/domain.com

export interface IntegrationTool {
  id: string;
  name: string;
  description: string;
  category: string;
  logoUrl: string;
}

export const integrationTools: IntegrationTool[] = [
  {
    id: 'a-check-global',
    name: 'A-Check Global',
    description: 'Global background check and verification services',
    category: 'Background Check',
    logoUrl: 'https://logo.clearbit.com/acheckglobal.com'
  },
  {
    id: 'ab-global',
    name: 'AB Global',
    description: 'International background screening solutions',
    category: 'Background Check',
    logoUrl: 'https://logo.clearbit.com/abglobal.com'
  },
  {
    id: 'accurate-background',
    name: 'Accurate Background',
    description: 'Comprehensive background screening services',
    category: 'Background Check',
    logoUrl: 'https://logo.clearbit.com/accuratebackground.com'
  },
  {
    id: 'accusourcehr',
    name: 'AccusourceHR',
    description: 'HR solutions and background verification',
    category: 'Background Check',
    logoUrl: 'https://logo.clearbit.com/accusourcehr.com'
  },
  {
    id: 'adp',
    name: 'ADP®',
    description: 'Payroll, HR, and talent management platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/adp.com'
  },
  {
    id: 'affintus',
    name: 'Affintus',
    description: 'Talent assessment and testing solutions',
    category: 'Candidate Testing',
    logoUrl: 'https://logo.clearbit.com/affintus.com'
  },
  {
    id: 'agora',
    name: 'Agora',
    description: 'Recruitment process optimization platform',
    category: 'Optimization Tools',
    logoUrl: 'https://logo.clearbit.com/agora.com'
  },
  {
    id: 'ai-ropes',
    name: 'AI Ropes',
    description: 'AI-powered candidate assessment platform',
    category: 'Candidate Testing',
    logoUrl: 'https://logo.clearbit.com/airopes.com'
  },
  {
    id: 'ai-screened',
    name: 'AI Screened',
    description: 'AI-powered candidate screening and optimization',
    category: 'Optimization Tools',
    logoUrl: 'https://logo.clearbit.com/aiscreened.com'
  },
  {
    id: 'ai4jobs',
    name: 'AI4JOBS by ThisWay',
    description: 'AI-powered job matching and candidate sourcing',
    category: 'Candidate Sourcing',
    logoUrl: 'https://logo.clearbit.com/thisway.com'
  },
  {
    id: 'aim-careerlink',
    name: 'AIM Careerlink',
    description: 'Healthcare job board and career platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/aimcareerlink.com'
  },
  {
    id: 'allied-travel-careers',
    name: 'Allied Travel Careers',
    description: 'Travel healthcare and allied health job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/alliedtravelcareers.com'
  },
  {
    id: 'amazinghiring',
    name: 'AmazingHiring',
    description: 'AI-driven recruitment and candidate matching',
    category: 'Candidate Sourcing',
    logoUrl: 'https://logo.clearbit.com/amazinghiring.com'
  },
  {
    id: 'apideck',
    name: 'Apideck',
    description: 'Unified API for job boards and HR systems',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/apideck.com'
  },
  {
    id: 'appcast-analytics',
    name: 'Appcast',
    description: 'Job board analytics and performance tracking',
    category: 'Job Board Analytics',
    logoUrl: 'https://logo.clearbit.com/appcast.io'
  },
  {
    id: 'appcast-organic',
    name: 'Appcast Organic',
    description: 'Free organic job posting platform',
    category: 'Free Job Posts',
    logoUrl: 'https://logo.clearbit.com/appcast.io'
  },
  {
    id: 'applink-careerbuilder',
    name: 'Applink by CareerBuilder',
    description: 'Job board integration and application tracking',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/careerbuilder.com'
  },
  {
    id: 'arbeitnow',
    name: 'Arbeitnow',
    description: 'European job board and recruitment platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/arbeitnow.com'
  },
  {
    id: 'arc',
    name: 'Arc',
    description: 'Job board and recruitment marketing platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/arc.dev'
  },
  {
    id: 'arya-leoforce',
    name: 'Arya by Leoforce',
    description: 'AI-powered recruitment optimization platform',
    category: 'Optimization Tools',
    logoUrl: 'https://logo.clearbit.com/leoforce.com'
  },
  {
    id: 'asana',
    name: 'Asana',
    description: 'Work management platform for teams',
    category: 'Productivity',
    logoUrl: 'https://logo.clearbit.com/asana.com'
  },
  {
    id: 'asurint',
    name: 'Asurint',
    description: 'Background screening and verification services',
    category: 'Background Check Services',
    logoUrl: 'https://logo.clearbit.com/asurint.com'
  },
  {
    id: 'ashby',
    name: 'Ashby',
    description: 'Modern applicant tracking system and recruiting software',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/ashbyhq.com'
  },
  {
    id: 'atipica',
    name: 'Atipica',
    description: 'Global talent sourcing and recruitment platform',
    category: 'Candidate Sourcing',
    logoUrl: 'https://logo.clearbit.com/atipica.com'
  },
  {
    id: 'attract-ai',
    name: 'Attract.ai',
    description: 'AI-powered candidate attraction and sourcing',
    category: 'Candidate Sourcing',
    logoUrl: 'https://logo.clearbit.com/attract.ai'
  },
  {
    id: 'autoview',
    name: 'Autoview by Aspiring Minds',
    description: 'AI-powered video interviewing platform',
    category: 'Video Interviewing',
    logoUrl: 'https://logo.clearbit.com/aspiringminds.com'
  },
  {
    id: 'aviation-job-search',
    name: 'Aviation Job Search',
    description: 'Aviation and aerospace job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/aviationjobsearch.com'
  },
  {
    id: 'azure-ad',
    name: 'Azure Active Directory',
    description: 'Microsoft cloud identity and access management',
    category: 'Single Sign-On',
    logoUrl: 'https://logo.clearbit.com/microsoft.com'
  },
  {
    id: 'bal',
    name: 'Berry Appleman & Leiden (BAL)',
    description: 'Legal and compliance solutions for HR',
    category: 'Other Integrations',
    logoUrl: 'https://logo.clearbit.com/bal.com'
  },
  {
    id: 'bandana',
    name: 'Bandana',
    description: 'Job board and career page platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/bandana.com'
  },
  {
    id: 'basic-pay',
    name: 'Basic Pay, LLC',
    description: 'Payroll and HR services platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/basicpay.com'
  },
  {
    id: 'beamery',
    name: 'Beamery',
    description: 'Talent acquisition and relationship platform',
    category: 'Candidate Sourcing',
    logoUrl: 'https://logo.clearbit.com/beamery.com'
  },
  {
    id: 'benchmarket',
    name: 'Benchmarket',
    description: 'Compensation benchmarking and analytics',
    category: 'Other Integrations',
    logoUrl: 'https://logo.clearbit.com/benchmarket.com'
  },
  {
    id: 'biospace',
    name: 'BioSpace',
    description: 'Life science and biotech job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/biospace.com'
  },
  {
    id: 'blind',
    name: 'Blind',
    description: 'Anonymous professional networking and job board',
    category: 'Free Job Posts',
    logoUrl: 'https://logo.clearbit.com/blind.app'
  },
  {
    id: 'bluepipes',
    name: 'BluePipes',
    description: 'Healthcare staffing and job board platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/bluepipes.com'
  },
  {
    id: 'boon',
    name: 'Boon',
    description: 'Employee experience and engagement platform',
    category: 'Other Integrations',
    logoUrl: 'https://logo.clearbit.com/boon.com'
  },
  {
    id: 'broadbean',
    name: 'Broadbean',
    description: 'Job distribution and recruitment marketing platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/broadbean.com'
  },
  {
    id: 'bullhorn',
    name: 'Bullhorn',
    description: 'Leading applicant tracking system and CRM for staffing agencies',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/bullhorn.com'
  },
  {
    id: 'built-for-teams',
    name: 'Built for Teams',
    description: 'Team collaboration and management platform',
    category: 'Other Integrations',
    logoUrl: 'https://logo.clearbit.com/builtforteams.com'
  },
  {
    id: 'call-center-jobs',
    name: 'Call Center Jobs',
    description: 'Call center and customer service job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/callcenterjobs.com'
  },
  {
    id: 'calendly',
    name: 'Calendly',
    description: 'Meeting scheduling and calendar automation',
    category: 'Scheduling Tools',
    logoUrl: 'https://logo.clearbit.com/calendly.com'
  },
  {
    id: 'calendarhero',
    name: 'CalendarHero (Zoom.ai)',
    description: 'AI-powered meeting scheduling and calendar management',
    category: 'Scheduling Tools',
    logoUrl: 'https://logo.clearbit.com/zoom.ai'
  },
  {
    id: 'canvass',
    name: 'Canvass',
    description: 'Video interviewing and assessment platform',
    category: 'Video Interviewing',
    logoUrl: 'https://logo.clearbit.com/canvass.com'
  },
  {
    id: 'candor-iq',
    name: 'Candor IQ',
    description: 'Employee feedback and engagement platform',
    category: 'Other Integrations',
    logoUrl: 'https://logo.clearbit.com/candoriq.com'
  },
  {
    id: 'careerbuilder',
    name: 'CareerBuilder',
    description: 'Global job board and recruitment platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/careerbuilder.com'
  },
  {
    id: 'careerrookie',
    name: 'CareerRookie.com',
    description: 'Entry-level and graduate job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/careerrookie.com'
  },
  {
    id: 'careerstructure',
    name: 'CareerStructure',
    description: 'Construction and engineering job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/careerstructure.com'
  },
  {
    id: 'caterer',
    name: 'Caterer.com',
    description: 'Hospitality and catering job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/caterer.com'
  },
  {
    id: 'checkr',
    name: 'Checkr',
    description: 'Background check and verification platform',
    category: 'Background Check Services',
    logoUrl: 'https://logo.clearbit.com/checkr.com'
  },
  {
    id: 'cisco-webex',
    name: 'Cisco Webex',
    description: 'Video conferencing and collaboration platform',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/webex.com'
  },
  {
    id: 'clearspeed',
    name: 'Clearspeed',
    description: 'Automated reference checking platform',
    category: 'Reference Checks',
    logoUrl: 'https://logo.clearbit.com/clearspeed.com'
  },
  {
    id: 'clearance-jobs',
    name: 'Clearance Jobs',
    description: 'Government and security clearance job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/clearancejobs.com'
  },
  {
    id: 'clickatell',
    name: 'Clickatell',
    description: 'SMS and communication platform',
    category: 'SMS / Texting',
    logoUrl: 'https://logo.clearbit.com/clickatell.com'
  },
  {
    id: 'cloud-cti',
    name: 'Cloud CTI',
    description: 'Cloud-based computer telephony integration',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/cloudcti.com'
  },
  {
    id: 'cloudcall',
    name: 'CloudCall',
    description: 'Cloud-based phone and communication platform',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/cloudcall.com'
  },
  {
    id: 'computerjobs',
    name: 'ComputerJobs / ComputerWork',
    description: 'IT and technology job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/computerjobs.com'
  },
  {
    id: 'contractjobhunter',
    name: 'ContractJobHunter',
    description: 'Contract and freelance job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/contractjobhunter.com'
  },
  {
    id: 'corporate-gray-online',
    name: 'Corporate Gray Online',
    description: 'Executive and senior-level job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/corporategray.com'
  },
  {
    id: 'cronofy',
    name: 'Cronofy',
    description: 'Calendar API and scheduling platform',
    category: 'Scheduling Tools',
    logoUrl: 'https://logo.clearbit.com/cronofy.com'
  },
  {
    id: 'crosschq',
    name: 'Crosschq',
    description: 'Reference checking and background verification',
    category: 'Reference Checks',
    logoUrl: 'https://logo.clearbit.com/crosschq.com'
  },
  {
    id: 'ctjobs',
    name: 'Ctjobs.com',
    description: 'Connecticut job board and career platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/ctjobs.com'
  },
  {
    id: 'cv-library',
    name: 'CV-Library',
    description: 'UK and European job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/cv-library.co.uk'
  },
  {
    id: 'cwjobs',
    name: 'CWJobs',
    description: 'IT and technology job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/cwjobs.co.uk'
  },
  {
    id: 'datapeople',
    name: 'Datapeople',
    description: 'Job board analytics and candidate insights',
    category: 'Job Board Analytics',
    logoUrl: 'https://logo.clearbit.com/datapeople.com'
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Voice, video and text communication platform',
    category: 'Communication',
    logoUrl: 'https://logo.clearbit.com/discord.com'
  },
  {
    id: 'docusign',
    name: 'DocuSign',
    description: 'Electronic signature and agreement platform',
    category: 'Electronic Signatures',
    logoUrl: 'https://logo.clearbit.com/docusign.com'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'File hosting service for cloud storage',
    category: 'Storage',
    logoUrl: 'https://logo.clearbit.com/dropbox.com'
  },
  {
    id: 'dropbox-sign',
    name: 'Dropbox Sign',
    description: 'Electronic signature solution by Dropbox',
    category: 'Electronic Signatures',
    logoUrl: 'https://logo.clearbit.com/dropbox.com'
  },
  {
    id: 'efinancialcareers',
    name: 'eFinancialCareers',
    description: 'Financial services and banking job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/efinancialcareers.com'
  },
  {
    id: 'emissary',
    name: 'Emissary',
    description: 'Candidate communication and texting platform',
    category: 'Candidate Texting',
    logoUrl: 'https://logo.clearbit.com/emissary.com'
  },
  {
    id: 'employdrive',
    name: 'EmployDrive',
    description: 'HR and payroll management platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/employdrive.com'
  },
  {
    id: 'engineering-central',
    name: 'Engineering Central',
    description: 'Engineering and technical job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/engineeringcentral.com'
  },
  {
    id: 'esc-testing',
    name: 'ESC',
    description: 'Employment screening and testing platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/esctesting.com'
  },
  {
    id: 'eskill',
    name: 'eSkill',
    description: 'Online skills assessment and testing platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/eskill.com'
  },
  {
    id: 'evercheck',
    name: 'EverCheck',
    description: 'Automated reference checking platform',
    category: 'Reference Checking',
    logoUrl: 'https://logo.clearbit.com/evercheck.com'
  },
  {
    id: 'brevo',
    name: 'Brevo',
    description: 'Email marketing and automation platform for sequencing',
    category: 'Email & Productivity',
    logoUrl: 'https://logo.clearbit.com/brevo.com'
  },
  {
    id: 'exchange-microsoft-365',
    name: 'Exchange (Microsoft 365)',
    description: 'Microsoft email and productivity suite',
    category: 'Email & Productivity',
    logoUrl: 'https://logo.clearbit.com/microsoft.com'
  },
  {
    id: 'fingercheck',
    name: 'FingerCheck',
    description: 'Time and attendance tracking platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/fingercheck.com'
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative interface design tool',
    category: 'Design',
    logoUrl: 'https://logo.clearbit.com/figma.com'
  },
  {
    id: 'georgia-diversity',
    name: 'Georgia Diversity',
    description: 'Diversity and inclusion job board for Georgia',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/georgiadiversity.com'
  },
  {
    id: 'ghrr',
    name: 'GHRR',
    description: 'Global HR and background verification services',
    category: 'Background Check Services',
    logoUrl: 'https://logo.clearbit.com/ghrr.com'
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Development platform for version control and collaboration',
    category: 'Development',
    logoUrl: 'https://logo.clearbit.com/github.com'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    description: 'DevOps platform for software development',
    category: 'Development',
    logoUrl: 'https://logo.clearbit.com/gitlab.com'
  },
  {
    id: 'glider',
    name: 'Glider',
    description: 'Assessment and testing platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/glider.ai'
  },
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Email service for sending and receiving messages',
    category: 'Communication',
    logoUrl: 'https://logo.clearbit.com/gmail.com'
  },
  {
    id: 'goodtime-hire',
    name: 'GoodTime Hire for High-Volume',
    description: 'High-volume candidate texting and communication',
    category: 'Candidate Texting',
    logoUrl: 'https://logo.clearbit.com/goodtime.io'
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: 'Web analytics service for tracking website traffic',
    category: 'Analytics',
    logoUrl: 'https://logo.clearbit.com/google.com'
  },
  {
    id: 'google-chrome-extension',
    name: 'Google Chrome Extension',
    description: 'Browser extension for candidate research and enrichment',
    category: 'Candidate Enrichment',
    logoUrl: 'https://logo.clearbit.com/google.com'
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    description: 'Spreadsheet tool for data analysis and collaboration',
    category: 'Productivity',
    logoUrl: 'https://logo.clearbit.com/google.com'
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    description: 'Google productivity and collaboration suite',
    category: 'Productivity',
    logoUrl: 'https://logo.clearbit.com/google.com'
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    description: 'Comprehensive recruiting and applicant tracking system',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/greenhouse.io'
  },
  {
    id: 'grayscale',
    name: 'Grayscale',
    description: 'Candidate messaging and texting platform',
    category: 'Candidate Texting',
    logoUrl: 'https://logo.clearbit.com/grayscale.com'
  },
  {
    id: 'gusto',
    name: 'Gusto',
    description: 'HR, payroll, and benefits platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/gusto.com'
  },
  {
    id: 'gustav-vms',
    name: 'Gustav VMS',
    description: 'Vendor management and procurement platform',
    category: 'Vendor Management Systems',
    logoUrl: 'https://logo.clearbit.com/gustavus.com'
  },
  {
    id: 'health-ecareers',
    name: 'Health eCareers',
    description: 'Healthcare job board and career platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/health-ecareers.com'
  },
  {
    id: 'healthcarejobsite',
    name: 'HealthCareJobSite',
    description: 'Healthcare staffing and job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/healthcarejobsite.com'
  },
  {
    id: 'healthjobsnationwide',
    name: 'Healthjobsnationwide.com',
    description: 'Nationwide healthcare job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/healthjobsnationwide.com'
  },
  {
    id: 'hire-health',
    name: 'Hire Health',
    description: 'Healthcare recruitment and job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/hirehealth.com'
  },
  {
    id: 'hireright',
    name: 'HireRight',
    description: 'Employment background screening services',
    category: 'Background Check Services',
    logoUrl: 'https://logo.clearbit.com/hireright.com'
  },
  {
    id: 'hipeople',
    name: 'HiPeople',
    description: 'Candidate reference and feedback platform',
    category: 'Reference Checks',
    logoUrl: 'https://logo.clearbit.com/hipeople.io'
  },
  {
    id: 'hospital-jobs-online',
    name: 'Hospital Jobs Online',
    description: 'Hospital and healthcare facility job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/hospitaljobsonline.com'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'CRM and marketing automation platform',
    category: 'CRM',
    logoUrl: 'https://logo.clearbit.com/hubspot.com'
  },
  {
    id: 'icetrak',
    name: 'Icetrak',
    description: 'SMS tracking and communication platform',
    category: 'SMS / Texting',
    logoUrl: 'https://logo.clearbit.com/icetrak.com'
  },
  {
    id: 'icims',
    name: 'iCIMS',
    description: 'Talent acquisition and applicant tracking system',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/icims.com'
  },
  {
    id: 'ifttt',
    name: 'IFTTT',
    description: 'Connect apps and automate workflows with applets',
    category: 'Automation',
    logoUrl: 'https://logo.clearbit.com/ifttt.com'
  },
  {
    id: 'ikm',
    name: 'IKM',
    description: 'Knowledge measurement and assessment platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/ikmnet.com'
  },
  {
    id: 'indeed',
    name: 'Indeed',
    description: 'Job search and recruitment platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/indeed.com'
  },
  {
    id: 'indeed-apply',
    name: 'Indeed Apply',
    description: 'Indeed job application and tracking platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/indeed.com'
  },
  {
    id: 'indeed-sponsored',
    name: 'Indeed Sponsored Jobs',
    description: 'Sponsored job listings on Indeed',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/indeed.com'
  },
  {
    id: 'intelligence-careers',
    name: 'Intelligence Careers',
    description: 'Intelligence and security career platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/intelligencecareers.gov'
  },
  {
    id: 'irishjobs',
    name: 'IrishJobs',
    description: 'Irish job board and career platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/irishjobs.ie'
  },
  {
    id: 'joveo-cms',
    name: 'Joveo CMS',
    description: 'Employer branding and content management',
    category: 'Employer Branding',
    logoUrl: 'https://logo.clearbit.com/joveo.com'
  },
  {
    id: 'jsfirm',
    name: 'JSfirm.com',
    description: 'Technical and engineering job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/jsfirm.com'
  },
  {
    id: 'jazzhr',
    name: 'JazzHR',
    description: 'Simple and powerful applicant tracking system',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/jazzhr.com'
  },
  {
    id: 'jobfeed',
    name: 'JobFeed',
    description: 'Automated job posting and distribution platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/jobfeed.com'
  },
  {
    id: 'jobdiva',
    name: 'JobDiva',
    description: 'Comprehensive recruitment management and ATS platform',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/jobdiva.com'
  },
  {
    id: 'jobvite',
    name: 'Jobvite',
    description: 'Unified talent acquisition and onboarding platform',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/jobvite.com'
  },
  {
    id: 'just-engineers',
    name: 'Just Engineers',
    description: 'Engineering job board and recruitment',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/justengineers.net'
  },
  {
    id: 'just-tech-jobs',
    name: 'Just Tech Jobs',
    description: 'Technology and IT job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/justtechjobs.com'
  },
  {
    id: 'justcall',
    name: 'JustCall',
    description: 'Business phone and texting solution',
    category: 'Candidate Texting',
    logoUrl: 'https://logo.clearbit.com/justcall.io'
  },
  {
    id: 'juro',
    name: 'Juro',
    description: 'Contract automation and e-signature platform',
    category: 'Electronic Signatures',
    logoUrl: 'https://logo.clearbit.com/juro.com'
  },
  {
    id: 'keeyora',
    name: 'Keeyora',
    description: 'Candidate engagement and texting platform',
    category: 'Candidate Texting',
    logoUrl: 'https://logo.clearbit.com/keeyora.com'
  },
  {
    id: 'lawlogix',
    name: 'LawLogix',
    description: 'Compliance and assessment platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/lawlogix.com'
  },
  {
    id: 'lever',
    name: 'Lever',
    description: 'Modern applicant tracking system for teams',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/lever.co'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Professional networking and job platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/linkedin.com'
  },
  {
    id: 'linkedin-rsc',
    name: 'LinkedIn Recruiter System Connect',
    description: 'LinkedIn integration for ATS and CRM systems',
    category: 'LinkedIn RSC',
    logoUrl: 'https://logo.clearbit.com/linkedin.com'
  },
  {
    id: 'linkedin-recruiter',
    name: 'LinkedIn Recruiter',
    description: 'Advanced LinkedIn recruiting tools',
    category: 'Candidate Enrichment',
    logoUrl: 'https://logo.clearbit.com/linkedin.com'
  },
  {
    id: 'liveops',
    name: 'Liveops',
    description: 'Cloud contact center and communication platform',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/liveops.com'
  },
  {
    id: 'locum-jobs-online',
    name: 'Locum Jobs Online',
    description: 'Locum and temporary healthcare job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/locumjobsonline.com'
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Email marketing and automation platform',
    category: 'Marketing',
    logoUrl: 'https://logo.clearbit.com/mailchimp.com'
  },
  {
    id: 'make',
    name: 'Make',
    description: 'Visual workflow automation platform',
    category: 'Automation',
    logoUrl: 'https://logo.clearbit.com/make.com'
  },
  {
    id: 'meta-facebook-jobs',
    name: 'Meta (Facebook Jobs)',
    description: 'Meta and Facebook career opportunities',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/meta.com'
  },
  {
    id: 'michigan-works',
    name: 'Michigan Works',
    description: 'Michigan workforce development and job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/michiganworks.org'
  },
  {
    id: 'microsoft-dynamics-365-bc',
    name: 'Microsoft Dynamics 365 Business Central',
    description: 'ERP and business management platform',
    category: 'Financial Tools & ERP',
    logoUrl: 'https://logo.clearbit.com/microsoft.com'
  },
  {
    id: 'microsoft-dynamics-gp',
    name: 'Microsoft Dynamics GP',
    description: 'ERP and financial management platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/microsoft.com'
  },
  {
    id: 'microsoft-entra-id',
    name: 'Microsoft Entra ID (SCIM)',
    description: 'Identity and access management platform',
    category: 'Single Sign-On',
    logoUrl: 'https://logo.clearbit.com/microsoft.com'
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    description: 'Unified communication and collaboration platform',
    category: 'Communication',
    logoUrl: 'https://logo.clearbit.com/microsoft.com'
  },
  {
    id: 'milwaukeejobs',
    name: 'MilwaukeeJobs',
    description: 'Milwaukee and Wisconsin job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/milwaukeejobs.com'
  },
  {
    id: 'mitel',
    name: 'Mitel',
    description: 'Business communication and collaboration platform',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/mitel.com'
  },
  {
    id: 'monmouth-telecom',
    name: 'Monmouth Telecom',
    description: 'Telecommunications and VoIP services',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/monmouth.com'
  },
  {
    id: 'monster',
    name: 'Monster',
    description: 'Global job board and career platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/monster.com'
  },
  {
    id: 'netTemps',
    name: 'NetTemps',
    description: 'Temporary and contract staffing platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/nettemps.com'
  },
  {
    id: 'nexxt',
    name: 'Nexxt',
    description: 'Job board and recruitment marketing platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/nexxt.com'
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes and collaboration',
    category: 'Productivity',
    logoUrl: 'https://logo.clearbit.com/notion.so'
  },
  {
    id: 'nurse-com',
    name: 'Nurse.com',
    description: 'Nursing and healthcare job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/nurse.com'
  },
  {
    id: 'office-365',
    name: 'Office 365',
    description: 'Microsoft productivity and collaboration suite',
    category: 'Email & Productivity',
    logoUrl: 'https://logo.clearbit.com/microsoft.com'
  },
  {
    id: 'onespan-sign',
    name: 'OneSpan Sign',
    description: 'Digital agreement and signature platform',
    category: 'Electronic Signatures',
    logoUrl: 'https://logo.clearbit.com/onespan.com'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'AI-powered conversational assistant for content creation and analysis',
    category: 'AI',
    logoUrl: 'https://logo.clearbit.com/openai.com'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'AI and machine learning platform',
    category: 'AI',
    logoUrl: 'https://logo.clearbit.com/openai.com'
  },
  {
    id: 'oracle-netsuite',
    name: 'Oracle NetSuite',
    description: 'Cloud ERP and financial management platform',
    category: 'Financial Tools & ERP',
    logoUrl: 'https://logo.clearbit.com/oracle.com'
  },
  {
    id: 'paychex',
    name: 'Paychex',
    description: 'Payroll and HR services platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/paychex.com'
  },
  {
    id: 'paycom',
    name: 'Paycom',
    description: 'HR and payroll management platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/paycom.com'
  },
  {
    id: 'paylocity',
    name: 'Paylocity',
    description: 'HR and payroll software platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/paylocity.com'
  },
  {
    id: 'people2-0',
    name: 'People2.0',
    description: 'HR and payroll management platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/people2.com'
  },
  {
    id: 'phoneburner',
    name: 'PhoneBurner',
    description: 'Cloud-based dialer and communication platform',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/phoneburner.com'
  },
  {
    id: 'physician-job-board',
    name: 'Physician Job Board',
    description: 'Physician and medical job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/physicianjobboard.com'
  },
  {
    id: 'professional-advantage',
    name: 'Professional Advantage (1Staff)',
    description: 'Staffing and workforce management platform',
    category: 'Financial Tools & ERP',
    logoUrl: 'https://logo.clearbit.com/1staff.com'
  },
  {
    id: 'pulse-jobs',
    name: 'Pulse',
    description: 'Healthcare job board and career platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/pulse.jobs'
  },
  {
    id: 'pure-michigan-talent',
    name: 'Pure Michigan Talent Connect',
    description: 'Michigan talent and job connection platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/puremichigan.org'
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    description: 'Accounting and financial management software',
    category: 'Financial Tools & ERP',
    logoUrl: 'https://logo.clearbit.com/quickbooks.intuit.com'
  },
  {
    id: 'reed',
    name: 'Reed.co.uk',
    description: 'UK job board and recruitment platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/reed.co.uk'
  },
  {
    id: 'relias',
    name: 'Relias',
    description: 'Healthcare assessment and training platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/relias.com'
  },
  {
    id: 'recruitmilitary',
    name: 'RecruitMilitary',
    description: 'Military and veteran job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/recruitmilitary.com'
  },
  {
    id: 'recruitee',
    name: 'Recruitee',
    description: 'Simple and powerful recruiting software',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/recruitee.com'
  },
  {
    id: 'recruiterflow',
    name: 'Recruiterflow',
    description: 'Modern applicant tracking and CRM platform',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/recruiterflow.com'
  },
  {
    id: 'resume-library',
    name: 'Resume-Library',
    description: 'Resume database and job matching platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/resume-library.com'
  },
  {
    id: 'retail-choice',
    name: 'Retail Choice',
    description: 'Retail and hospitality job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/retailchoice.com'
  },
  {
    id: 'ringcentral',
    name: 'RingCentral',
    description: 'Cloud-based phone and communication platform',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/ringcentral.com'
  },
  {
    id: 'rigzone',
    name: 'Rigzone',
    description: 'Oil and gas industry job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/rigzone.com'
  },
  {
    id: 'rippling',
    name: 'Rippling',
    description: 'HR, payroll, and IT management platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/rippling.com'
  },
  {
    id: 'roadtrip-explorer',
    name: 'Roadtrip Explorer',
    description: 'Job board exploration and analytics platform',
    category: 'Job Board Analytics',
    logoUrl: 'https://logo.clearbit.com/roadtripnation.com'
  },
  {
    id: 'sage',
    name: 'Sage',
    description: 'Accounting and payroll software',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/sage.com'
  },
  {
    id: 'sage-intacct',
    name: 'Sage Intacct',
    description: 'Cloud financial management platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/sage.com'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'Customer relationship management platform',
    category: 'CRM',
    logoUrl: 'https://logo.clearbit.com/salesforce.com'
  },
  {
    id: 'sanfranjobs',
    name: 'SanFranJobs',
    description: 'San Francisco and Bay Area job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/sanfranjobs.com'
  },
  {
    id: 'sologig',
    name: 'Sologig',
    description: 'Gig economy and freelance job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/sologig.com'
  },
  {
    id: 'sonetel',
    name: 'Sonetel',
    description: 'Cloud telephony and communication platform',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/sonetel.com'
  },
  {
    id: 'staffing-future',
    name: 'Staffing Future',
    description: 'Staffing industry news and job distribution platform',
    category: 'Jobs Distribution / Staffing Websites',
    logoUrl: 'https://logo.clearbit.com/staffingfuture.com'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Payment processing platform for online businesses',
    category: 'Finance',
    logoUrl: 'https://logo.clearbit.com/stripe.com'
  },
  {
    id: 'talent-com',
    name: 'Talent.com',
    description: 'Global job board and recruitment platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/talent.com'
  },
  {
    id: 'techfetch',
    name: 'TechFetch',
    description: 'Technology and IT recruitment platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/techfetch.com'
  },
  {
    id: 'techscore',
    name: 'TechScore',
    description: 'Technical skills assessment platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/techscore.com'
  },
  {
    id: 'telecomcareers',
    name: 'TelecomCareers',
    description: 'Telecommunications job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/telecomcareers.net'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Cloud-based instant messaging platform',
    category: 'Communication',
    logoUrl: 'https://logo.clearbit.com/telegram.org'
  },
  {
    id: 'tempworks',
    name: 'TempWorks',
    description: 'Temporary staffing and payroll software',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/tempworks.com'
  },
  {
    id: 'tempsplus',
    name: 'TempsPLUS',
    description: 'Temporary staffing and payroll platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/tempsplus.com'
  },
  {
    id: 'texas-diversity',
    name: 'Texas Diversity',
    description: 'Texas diversity and inclusion job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/texasdiversity.com'
  },
  {
    id: 'textus',
    name: 'TextUs',
    description: 'Business texting and SMS platform',
    category: 'SMS / Texting',
    logoUrl: 'https://logo.clearbit.com/textus.com'
  },
  {
    id: 'totaljobs',
    name: 'Totaljobs',
    description: 'UK job board and recruitment platform',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/totaljobs.com'
  },
  {
    id: 'travel-nurse-source',
    name: 'Travel Nurse Source',
    description: 'Travel nursing and healthcare job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/travelnursesource.com'
  },
  {
    id: 'trello',
    name: 'Trello',
    description: 'Visual project management with boards, lists, and cards',
    category: 'Productivity',
    logoUrl: 'https://logo.clearbit.com/trello.com'
  },
  {
    id: 'trustid',
    name: 'TrustID',
    description: 'Digital identity and background verification',
    category: 'Background Check Services',
    logoUrl: 'https://logo.clearbit.com/trustid.com'
  },
  {
    id: 'twitter-jobs',
    name: 'Twitter Jobs',
    description: 'Twitter and social media career opportunities',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/twitter.com'
  },
  {
    id: 'typeform',
    name: 'Typeform',
    description: 'Interactive form and survey builder',
    category: 'Productivity',
    logoUrl: 'https://logo.clearbit.com/typeform.com'
  },
  {
    id: 'una-testing',
    name: 'UNA',
    description: 'Assessment and testing platform',
    category: 'Skills Assessment / Testing',
    logoUrl: 'https://logo.clearbit.com/una.com'
  },
  {
    id: 'vincere',
    name: 'Vincere',
    description: 'Recruitment CRM and applicant tracking system',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/vincere.io'
  },
  {
    id: 'vensure',
    name: 'Vensure',
    description: 'HR and payroll services platform',
    category: 'Payroll & HR',
    logoUrl: 'https://logo.clearbit.com/vensure.com'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Frontend cloud platform for static sites and serverless functions',
    category: 'Development',
    logoUrl: 'https://logo.clearbit.com/vercel.com'
  },
  {
    id: 'vetty',
    name: 'Vetty',
    description: 'Pet care background check and verification',
    category: 'Background Check Services',
    logoUrl: 'https://logo.clearbit.com/vetty.co'
  },
  {
    id: 'vivian-health',
    name: 'Vivian Health',
    description: 'Healthcare staffing and job board',
    category: 'Job Boards',
    logoUrl: 'https://logo.clearbit.com/vivian.com'
  },
  {
    id: 'voip-office',
    name: 'VoIP Office',
    description: 'VoIP and business phone services',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/voipoffice.com'
  },
  {
    id: 'vonage-business',
    name: 'Vonage Business',
    description: 'Business VoIP and communication services',
    category: 'VOIP & Communication',
    logoUrl: 'https://logo.clearbit.com/vonage.com'
  },
  {
    id: 'workable',
    name: 'Workable',
    description: 'Cloud-based recruiting software and ATS platform',
    category: 'CRM / ATS',
    logoUrl: 'https://logo.clearbit.com/workable.com'
  },
  {
    id: 'workday-custom-sync',
    name: 'Workday Custom Options Sync',
    description: 'Custom synchronization with Workday systems',
    category: 'Workday®',
    logoUrl: 'https://logo.clearbit.com/workday.com'
  },
  {
    id: 'workday-hire-link',
    name: 'Workday Hire Link',
    description: 'Workday integration for hiring and onboarding',
    category: 'Workday®',
    logoUrl: 'https://logo.clearbit.com/workday.com'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'Video conferencing and online meeting platform',
    category: 'Communication',
    logoUrl: 'https://logo.clearbit.com/zoom.us'
  },
  {
    id: 'zoominfo-salesos',
    name: 'ZoomInfo SalesOS',
    description: 'Sales intelligence and CRM platform',
    category: 'CRM / Sales Tools',
    logoUrl: 'https://logo.clearbit.com/zoominfo.com'
  },
  {
    id: 'zoominfo-talentos',
    name: 'ZoomInfo TalentOS',
    description: 'Talent intelligence and candidate enrichment platform',
    category: 'Candidate Enrichment',
    logoUrl: 'https://logo.clearbit.com/zoominfo.com'
  }
];
