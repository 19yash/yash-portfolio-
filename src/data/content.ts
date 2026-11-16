import type { IconName } from './icons';

export const profile = {
  name: 'Yash Gupta',
  initials: 'YG',
  role: 'Full Stack AI Engineer',
  tagline:
    'I build complete products with AI inside: React and React Native apps, Python and Node.js APIs, and the RAG and agent systems behind them.',
  location: 'Faridabad, India',
  email: 'yashgupta19082000@gmail.com',
  github: 'https://github.com/19yash',
  linkedin: 'https://www.linkedin.com/in/yash-gupta-a11063236',
  // Drop the PDF into /public and keep this path, or point it at a hosted copy.
  resume: '/Yash_Gupta_Resume.pdf',
  // Set to an image in /public (e.g. '/photo.jpg') to replace the initials avatar.
  photo: '' as string,
};

export const about = {
  heading: "Hi, I'm Yash. Thanks for stopping by.",
  body: "I'm a full stack AI engineer from Faridabad, near Delhi, with nearly three years at Daffodil Software. I work across the whole product: the screens people use, the APIs behind them, the AWS setup they run on, and the LLM features that make them useful. I can join a new team immediately.",
};

export type SkillGroup = 'fe' | 'be' | 'ops' | 'ai';

export interface Skill {
  name: string;
  icon: IconName;
  group: SkillGroup;
  usedIn: string;
}

export const skillGroups: { id: SkillGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'fe', label: 'Frontend' },
  { id: 'be', label: 'Backend' },
  { id: 'ops', label: 'Cloud + Data' },
  { id: 'ai', label: 'AI' },
];

export const skills: Skill[] = [
  { name: 'React', icon: 'react', group: 'fe', usedIn: 'Healthcare dashboards for 3 user roles' },
  { name: 'React Native', icon: 'react', group: 'fe', usedIn: 'StoneX advisor app and school app' },
  { name: 'TypeScript', icon: 'typescript', group: 'fe', usedIn: 'Shared component library' },
  { name: 'Redux Toolkit', icon: 'redux', group: 'fe', usedIn: 'Caching, infinite scroll, cancellation' },
  { name: 'Python', icon: 'python', group: 'be', usedIn: 'Core language for AI services' },
  { name: 'FastAPI', icon: 'fastapi', group: 'be', usedIn: 'Async services with Pydantic validation' },
  { name: 'Node.js', icon: 'nodedotjs', group: 'be', usedIn: 'REST APIs and data pipelines' },
  { name: 'Express', icon: 'express', group: 'be', usedIn: 'Healthcare workflow APIs' },
  { name: 'LangGraph', icon: 'langgraph', group: 'ai', usedIn: 'Agents with retries and memory' },
  { name: 'Pinecone', icon: 'pinecone', group: 'ai', usedIn: 'Hybrid search over patient records' },
  { name: 'MCP', icon: 'modelcontextprotocol', group: 'ai', usedIn: 'Audited data access for AI services' },
  { name: 'OpenAI', icon: 'openai', group: 'ai', usedIn: 'Embeddings and structured outputs' },
  { name: 'AWS', icon: 'amazonwebservices', group: 'ops', usedIn: 'S3, EC2, CloudWatch, CodeDeploy' },
  { name: 'MongoDB', icon: 'mongodb', group: 'ops', usedIn: 'Clinical data for 10,000+ patients' },
  { name: 'SQL', icon: 'postgresql', group: 'ops', usedIn: 'PostgreSQL databases' },
  { name: 'Docker', icon: 'docker', group: 'ops', usedIn: 'Containerised services' },
];

export interface Project {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  // Path to a screenshot in /public; leave empty to show the placeholder.
  image: string;
  imageAlt: string;
  placeholder: string;
  // Shown in the media area instead of the placeholder when there is no image.
  flow?: string[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: 'Patient Care Platform',
    tag: 'healthcare SaaS · 10,000+ patients',
    description:
      "React dashboards for three user roles, FastAPI and Node.js services, and a RAG assistant that answers questions about a patient's history. A central MCP server gives every AI service audited access to the data.",
    stack: ['React', 'FastAPI', 'Node.js', 'LangGraph', 'Pinecone', 'MongoDB', 'AWS'],
    image: '',
    imageAlt: 'Patient Care Platform dashboard with the RAG assistant open',
    placeholder: 'Dashboard + RAG assistant screenshot',
  },
  {
    title: 'AI Interview Prep Kit',
    tag: 'AI pipeline · live demo',
    description:
      'Takes a job description, a company URL and the days you have, and builds a personal interview plan. A research layer crawls and ranks the company site and treats what it scrapes as untrusted. If a must-have requirement is missing from the questions, a second, targeted pass fills the gap. Coverage, scheduling and validation are deterministic, so the LLM only does generation.',
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'LLM'],
    image: '',
    imageAlt: 'AI Interview Prep Kit generated preparation plan',
    placeholder: 'Generated prep plan screenshot',
    flow: ['JD', 'Requirements', 'Company research', 'Questions', 'Flashcards', 'Coverage check', 'Schedule'],
    links: [
      { label: 'Live demo', href: 'https://interview-prep-kit-web-nine.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/19yash/interview-prep-kit' },
    ],
  },
  {
    title: 'StoneX Advisor App',
    tag: 'sales app · offline-first',
    description:
      'Sales advisors use it to guide each client through an appointment, from first meeting to final selection. It works offline first, so the stone catalog opens instantly with no lag, and stone images keep their aspect ratio and full quality so every detail stays clear.',
    stack: ['React Native', 'Offline sync', 'Image caching'],
    image: '',
    imageAlt: 'StoneX Advisor App stone catalog and appointment screens',
    placeholder: 'Stone catalog + appointment screens',
  },
  {
    title: 'Shiv Nadar School App',
    tag: 'edtech · iOS + Android',
    description:
      "An AI lesson planner that follows the school's curriculum and an AI moderator that approves, rejects or escalates comments. I led the release and shipped 20+ features in 3 months.",
    stack: ['React Native', 'FastAPI', 'Firebase', 'LLM'],
    image: '',
    imageAlt: 'Shiv Nadar School App lesson planner and moderation screens',
    placeholder: 'Lesson planner + moderation screens',
  },
];

export const experience = {
  company: 'Daffodil Software',
  dates: 'Jan 2024 – now',
  role: 'Software Engineer · intern Jan–Jun 2024, full-time since',
  summary: 'Full stack and AI work for healthcare, retail and EdTech clients, from UI to API to deployment.',
  // Path to a logo in /public; leave empty to show the initials badge.
  logo: '' as string,
};
