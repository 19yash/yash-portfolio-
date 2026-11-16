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
  photo: '/photo.webp' as string,
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
  { name: 'Next.js', icon: 'nextdotjs', group: 'fe', usedIn: 'AI Interview Prep Kit web app' },
  { name: 'React Native', icon: 'react', group: 'fe', usedIn: 'Marble advisory and OneSNS school apps' },
  { name: 'TypeScript', icon: 'typescript', group: 'fe', usedIn: 'Shared component library' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', group: 'fe', usedIn: 'AI Interview Prep Kit interface' },
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

export const experience = {
  company: 'Daffodil Software',
  dates: 'Jan 2024 – now',
  role: 'Software Engineer · intern Jan–Jun 2024, full-time since',
  summary: 'Full stack and AI work for healthcare, retail and EdTech clients, from UI to API to deployment.',
  // Path to a logo in /public; leave empty to show the initials badge.
  logo: '' as string,
};
