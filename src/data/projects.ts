import type { IconName } from './icons';

export interface ProjectLink {
  label: 'Live demo' | 'GitHub' | 'App Store' | 'Google Play';
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  /** Short text for the home page card. */
  description: string;
  /** Short list for the home page card. */
  stack: string[];
  /** Path to a screenshot in /public; leave empty to show the flow strip or placeholder. */
  image: string;
  imageAlt: string;
  placeholder: string;
  /** Shown in the media area instead of the placeholder when there is no image. */
  flow?: string[];
  links?: ProjectLink[];
  /** Screenshots shown as a swipeable strip on the detail page. */
  gallery?: { src: string; alt: string }[];

  // Detail page
  summary: string;
  overview: string[];
  /** Optional list of what the product covers, shown as a grid under the overview. */
  modules?: { title: string; items: string[] };
  howItWorks?: { title: string; steps: string[] };
  problem: { intro: string; points: { title: string; text: string }[] };
  techStack: { label: string; items: string[] }[];
  role: { title: string; points: string[] };
  decisions?: { title: string; text: string }[];
  /** Shown under the links (or in their place) for client work whose code is not public. */
  linksNote?: string;
}

/** Icons for tech-stack chips; names without an entry show as plain text. */
export const stackIcons: Record<string, IconName> = {
  React: 'react',
  'React Native': 'react',
  'React Native CLI': 'react',
  'Next.js': 'nextdotjs',
  TypeScript: 'typescript',
  'Tailwind CSS': 'tailwindcss',
  'Redux Toolkit': 'redux',
  'Redux-Saga': 'redux',
  'RTK Query': 'redux',
  Python: 'python',
  FastAPI: 'fastapi',
  'Node.js': 'nodedotjs',
  Express: 'express',
  LangGraph: 'langgraph',
  LangChain: 'langchain',
  Pinecone: 'pinecone',
  'OpenAI embeddings': 'openai',
  MongoDB: 'mongodb',
  AWS: 'amazonwebservices',
  Jenkins: 'jenkins',
  Firebase: 'firebase',
};

export const projects: Project[] = [
  {
    slug: 'patient-care-platform',
    title: 'Patient Care Platform',
    tag: 'healthcare SaaS · 10,000+ patients',
    description:
      "A Transitional Care Management platform for US practices. React dashboards, FastAPI and Node.js services, and a RAG assistant that answers questions about a patient's history.",
    stack: ['React', 'FastAPI', 'Node.js', 'LangChain', 'Pinecone', 'MongoDB', 'AWS'],
    image: '',
    imageAlt: 'Patient Care Platform dashboard with the RAG assistant open',
    placeholder: 'Dashboard + RAG assistant screenshot',
    summary:
      'A Transitional Care Management (TCM) platform that helps US healthcare practices coordinate patient care after a hospital discharge.',
    overview: [
      'The Patient Care Platform receives patient and encounter information from different healthcare systems and brings it into one place. It identifies eligible patient transitions and gives practice staff a single view of each patient and the care tasks that go with them.',
      "We later extended it with an AI chatbot built on retrieval-augmented generation (RAG), so practitioners can ask questions about a patient's history in plain language.",
    ],
    howItWorks: {
      title: 'How it works',
      steps: [
        'Receive patient and encounter data',
        'Identify eligible transitions',
        'Create post-discharge tasks',
        'Alert on upcoming deadlines',
        'Consolidated patient history',
        'Ask the RAG assistant',
      ],
    },
    problem: {
      intro:
        'After a patient leaves a hospital or care facility, their information is spread across different EHR systems and facilities. Care teams had to track by hand whether each patient qualified for TCM, which tasks were needed, and when each one was due.',
      points: [
        {
          title: 'Time-sensitive tasks',
          text: 'Contacting the patient, medication reconciliation, scheduling follow-ups and documentation all have deadlines. The platform tracks each task and alerts staff when something is pending or close to due.',
        },
        {
          title: 'Missed billable care',
          text: 'Finishing the TCM workflow inside the required timeframe helps practices avoid missed TCM encounters and supports billable care.',
        },
        {
          title: 'Fragmented patient history',
          text: 'Encounters, diagnoses, medications and other records are consolidated in one place instead of across several systems and documents.',
        },
        {
          title: 'Slow record lookups',
          text: "The RAG chatbot answers questions about a patient's history, so practitioners don't have to read through every record themselves.",
        },
      ],
    },
    techStack: [
      { label: 'Frontend', items: ['React', 'Redux Toolkit', 'Redux-Saga'] },
      { label: 'Backend', items: ['FastAPI', 'Node.js', 'Express', 'Pydantic'] },
      { label: 'AI', items: ['LangChain', 'LangGraph', 'Pinecone', 'OpenAI embeddings'] },
      { label: 'Data and cloud', items: ['MongoDB', 'AWS', 'Jenkins', 'SFTP'] },
      { label: 'Integrations', items: ['DrFirst', 'Particle Health', 'HL7 / ADT'] },
    ],
    role: {
      title: 'Project lead and primary full stack engineer',
      points: [
        'Led the project and worked directly with the client: understood their requirements, suggested technical solutions, and made sure each release was delivered on time.',
        'Built the RAG pipeline with LangChain and Pinecone, using hybrid retrieval, reranking and structured outputs, with evaluation and observability to monitor retrieval quality.',
        'Designed modular FastAPI and Express REST APIs with request validation and role-based access enforced on the server across Admin, Practices and Facilities workflows.',
        'Engineered a streaming pipeline that moves 500 MB+ JSON payloads straight to AWS S3 without holding them in server memory.',
        'Designed and deployed a self-hosted SFTP server for HIPAA-compliant HL7/ADT data, cutting infrastructure costs by $250+ a month.',
        'Built a reusable UI component library that cut UI development time by about 40%, and used Redux-Saga request cancellation to drop stale API calls.',
        'Integrated the DrFirst and Particle Health APIs and standardised their data across dashboards and modules.',
        'Improved reliability with CloudWatch log persistence, EC2 Auto Scaling and Jenkins/CodeDeploy automation.',
      ],
    },
    linksNote: 'Client project. The code and the live product are private.',
  },
  {
    slug: 'ai-interview-prep-kit',
    title: 'AI Interview Prep Kit',
    tag: 'AI pipeline · live demo',
    description:
      'Takes a job description, a company URL and the days you have, and builds a personal interview plan. Coverage, scheduling and validation are deterministic, so the LLM only does generation.',
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'LLM'],
    image: '',
    imageAlt: 'AI Interview Prep Kit generated preparation plan',
    placeholder: 'Generated prep plan screenshot',
    flow: ['JD', 'Requirements', 'Company research', 'Questions', 'Flashcards', 'Coverage check', 'Schedule'],
    links: [
      { label: 'Live demo', href: 'https://interview-prep-kit-web-nine.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/19yash/interview-prep-kit' },
    ],
    summary:
      'An AI app that turns a job description, a company URL and your available days into a personalised interview preparation plan.',
    overview: [
      'You give it the job description, the company website and how many days you have. It extracts the requirements, researches the company, generates questions and flashcards, checks that every important requirement is covered, and lays everything out as a day-by-day schedule.',
      'The interesting part was not calling an LLM. It was designing a reliable system around it and deciding where AI adds value and where plain, deterministic code works better.',
    ],
    howItWorks: {
      title: 'The pipeline',
      steps: ['JD', 'Requirement extraction', 'Company research', 'Question generation', 'Flashcards', 'Coverage check', 'Schedule'],
    },
    problem: {
      intro:
        'Preparing for an interview means reading the job description closely, researching the company and planning study time. Generic question lists miss what this particular role asks for.',
      points: [
        {
          title: 'Questions that match the role',
          text: 'Questions and flashcards are generated from the requirements extracted from the job description, not from a generic list.',
        },
        {
          title: 'No important gaps',
          text: 'A coverage check confirms every must-have requirement is covered before the kit is returned.',
        },
        {
          title: 'A plan that fits your time',
          text: 'The schedule spreads the material across the number of days you actually have.',
        },
      ],
    },
    techStack: [
      { label: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'TypeScript'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
      { label: 'AI and data', items: ['LLM', 'Web scraping'] },
    ],
    role: {
      title: 'Designed and built the whole app',
      points: [
        'Split the work into a multi-step pipeline instead of one large prompt, so each stage can be validated, debugged and improved on its own.',
        'Built a company research layer: fetching pages, cleaning HTML, resolving relative and absolute URLs, crawling and ranking relevant pages, and finding Careers, Hiring and About content.',
        'Handled large pages, timeouts and unavailable content, and treated all scraped text as untrusted data.',
        'Kept requirement coverage, schedule allocation and validation of the generated kit deterministic, and used the LLM only for generation and reasoning.',
        'Added a second, targeted generation pass that runs when a must-have requirement is missing from the questions.',
      ],
    },
    decisions: [
      {
        title: 'AI where it adds value',
        text: 'Not every problem needs an LLM. Coverage, scheduling and validation are plain code, which makes them predictable and testable.',
      },
      {
        title: 'Honest with imperfect data',
        text: 'When a request fails, hiring information is missing or research is partial, the kit says so instead of making anything up.',
      },
      {
        title: 'Biggest takeaway',
        text: 'The hard part of an AI application is not generating content. It is building a reliable system around that generation.',
      },
    ],
  },
  {
    slug: 'marble-advisory-app',
    title: 'Marble Advisory App',
    tag: 'tablet sales app · offline-first',
    description:
      'A tablet app sales executives use to guide clients through choosing marble in the showroom. Offline first, so stone images open instantly, at full quality and in their true proportions.',
    stack: ['React Native CLI', 'Offline cache', 'Firebase', 'Zoho SSO'],
    image: '',
    imageAlt: 'Marble Advisory App stone catalog and appointment screens',
    placeholder: 'Stone catalog + appointment screens',
    summary:
      'A React Native tablet app that sales executives use to guide clients through choosing marble and stone during a showroom appointment.',
    overview: [
      'The app digitises the in-showroom client journey. A sales executive opens the appointment, walks the client through the stone catalogue, and can show stone images on a large display while they talk.',
    ],
    howItWorks: {
      title: 'A client appointment',
      steps: ['Sign in with Zoho', 'Open the appointment', 'Browse stones', 'Show on the big screen', 'Client selection'],
    },
    problem: {
      intro:
        'In a showroom the conversation depends on showing stone quickly and accurately. Slow images, or images that lose quality, interrupt the client and make it hard to judge the stone.',
      points: [
        {
          title: 'No lag, even on a poor network',
          text: 'Stone data and images are cached on the tablet, so they appear without delay whatever the showroom connection is like.',
        },
        {
          title: 'True detail',
          text: 'Images keep their aspect ratio and full resolution, so the veining and texture of each stone stay clearly visible.',
        },
        {
          title: 'Bigger screen, same quality',
          text: 'Stone images can be shown on an external display with minimal lag and no loss of quality.',
        },
        {
          title: 'One company login',
          text: 'Sales executives sign in with their Zoho company accounts.',
        },
      ],
    },
    techStack: [
      { label: 'Mobile', items: ['React Native CLI'] },
      { label: 'Offline', items: ['Image caching', 'Local data persistence'] },
      { label: 'Services', items: ['Firebase', 'Zoho OAuth (SSO)'] },
    ],
    role: {
      title: 'React Native engineer',
      points: [
        'Built the React Native tablet app that sales executives use to guide clients through stone selection.',
        'Built the offline-first layer with image caching and local data persistence, so high-resolution stone images load with minimal delay even on poor networks.',
        'Implemented screen sharing to external displays with minimal lag between tablet and display and no loss of image quality.',
        'Integrated Firebase push notifications with deep links that open the relevant screen.',
        'Implemented Zoho login so sales executives sign in securely with their company accounts.',
      ],
    },
    linksNote: 'Client project. The code and the app are private.',
  },
  {
    slug: 'sns-mobile-app',
    title: 'SNS Mobile App',
    tag: 'edtech · iOS + Android',
    description:
      'A cross-platform app that coordinates school activities across and within SNS campuses, from attendance and fees to lesson plans and the sickbay.',
    stack: ['React Native CLI', 'RTK Query', 'Firebase', 'LangGraph'],
    image: '/projects/sns/cover.webp',
    imageAlt: 'OneSNS app screens: home with attendance, transport and meal plan; the SNS community feed; and the meal plan',
    placeholder: 'App screens',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/onesns/id6783798696' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.sns_mobile' },
    ],
    gallery: [
      { src: '/projects/sns/screen-1.webp', alt: 'Home screen with attendance, bus transport, meal plan and quick access' },
      { src: '/projects/sns/screen-2.webp', alt: 'Calendar of school events and activities' },
      { src: '/projects/sns/screen-3.webp', alt: 'Meal plan with the day’s menu and nutrition' },
      { src: '/projects/sns/screen-4.webp', alt: 'Editing a student profile' },
      { src: '/projects/sns/screen-5.webp', alt: 'Visitor management: choosing a reason for the visit and the student to pick up' },
      { src: '/projects/sns/screen-6.webp', alt: 'Activity details for an art showcase' },
      { src: '/projects/sns/screen-7.webp', alt: 'SNS Feed with community posts' },
    ],
    summary:
      'A cross-platform iOS and Android app, published as OneSNS, that coordinates school activities across SNS campuses and within each campus.',
    overview: [
      "One app brings the school's day-to-day operations together, from attendance and fees to transport, events and report cards, so they can be coordinated within each campus and across campuses.",
    ],
    modules: {
      title: "What's in the app",
      items: [
        'Attendance',
        'Admission',
        'Fees',
        'Transportation',
        'Food',
        'Uniform',
        'Events',
        'Community Feed',
        'Visitor Management',
        'Lesson Plans',
        'Report Cards',
        'Help Desk',
        'Policies',
        'Sickbay',
      ],
    },
    problem: {
      intro:
        'A school group runs many activities at once, at several campuses. Coordinating them is hard when each one runs separately.',
      points: [
        {
          title: 'One place for school life',
          text: 'Fourteen areas, from admissions to the sickbay, live in a single app instead of separate processes.',
        },
        {
          title: 'Across and within campuses',
          text: 'Activities can be coordinated inside one campus and across the whole school group.',
        },
        {
          title: 'Less manual planning',
          text: 'An AI lesson-planning chatbot helps teachers create curriculum-aware lesson plans.',
        },
      ],
    },
    techStack: [
      { label: 'Mobile', items: ['React Native CLI', 'Redux Toolkit', 'RTK Query'] },
      { label: 'Backend and AI', items: ['FastAPI', 'LangGraph'] },
      { label: 'Services', items: ['Firebase'] },
    ],
    role: {
      title: 'Mobile lead for the release',
      points: [
        'Owned the end-to-end iOS and Android release cycle, from build and testing through App Store and Play Store deployment.',
        'Shipped 20+ features to production in 3 months.',
        'Built an AI lesson-planning chatbot with LangGraph that generates curriculum-aware lesson plans and structured recommendations for teachers.',
        'Implemented backend-driven authorization, so permissions change without a new app release.',
        'Integrated Firebase Cloud Messaging and Crashlytics for push notifications and real-time crash monitoring.',
        'Improved performance with RTK Query caching and infinite scrolling.',
      ],
    },
    linksNote: 'Client project, so the code is private. The app is live on both stores.',
  },
];

export const findProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);
