import { Project, Skill, Service, EducationItem } from "./types";

export const PERSONAL_INFO = {
  name: "Unnati Solanki",
  title: "Data Analyst | Copywriter | Web Designer | Creative Web Series Writer",
  tagline: "Bridging the gap between empirical data and narrative arts. Transforming numbers into insights, and ideas into compelling screenplays.",
  about: [
    "I am a versatile professional working at the intersection of analytical thinking and creative expression. As a Data Analyst, I uncover hidden patterns in complex datasets to drive structured business decisions. As a Copywriter and Screenwriter, I translate ideas into captivating narratives that resonate deeply with audiences.",
    "My unique cross-disciplinary skill set allows me to bring structural clarity to creative projects and intuitive, user-centric storytelling to technical data dashboards.",
    "Whether developing custom Power BI dashboards, designing responsive web experiences, or scripting the next binge-worthy web series, I focus on delivering clean, precise, and impactful results that matter.",
  ],
  careerGoal: "To synthesize analytical precision and creative storytelling, helping forward-thinking teams transform raw data into visually stunning dashboards and powerful, engaging narratives.",
  contact: {
    email: "unnatisolanki400@gmail.com",
    phone: "+91 7434057085",
    linkedin: "https://www.linkedin.com/in/unnati-solanki-742b222a8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
};

export const SKILLS: Skill[] = [
  // Analytics & Tools
  { name: "Power BI", level: "Advanced", category: "Analytics & Tools", description: "Interactive report modeling, custom DAX formulas, and ETL pipeline design." },
  { name: "Advanced Excel", level: "Advanced", category: "Analytics & Tools", description: "Pivot tables, lookups, statistical functions, and macro automation." },
  { name: "Canva", level: "Advanced", category: "Analytics & Tools", description: "High-fidelity modern layouts, graphic assets, and social media presentation design." },
  { name: "AI Tools", level: "Intermediate", category: "Analytics & Tools", description: "Prompt engineering, automated research assistance, and narrative generation pipelines." },

  // Programming & Web
  { name: "SQL", level: "Advanced", category: "Programming & Web", description: "Complex join operations, aggregations, database schemas, and performance tuning." },
  { name: "Python", level: "Intermediate", category: "Programming & Web", description: "Data manipulation with Pandas, NumPy, and basic automation scripting." },
  { name: "HTML", level: "Advanced", category: "Programming & Web", description: "Semantic, SEO-friendly layout structures." },
  { name: "CSS", level: "Advanced", category: "Programming & Web", description: "Modern page responsive layouts and layout design." },
  { name: "Tailwind CSS", level: "Advanced", category: "Programming & Web", description: "Utility-first clean aesthetic configuration and responsive grid setups." },
  { name: "JavaScript", level: "Intermediate", category: "Programming & Web", description: "Asynchronous interactions, clean state logic, and modern ES6 elements." },
  { name: "React", level: "Intermediate", category: "Programming & Web", description: "State hooks, functional layouts, and dynamic web interfaces." },

  // Writing & Creative
  { name: "Copywriting", level: "Advanced", category: "Writing & Creative", description: "Persuasive marketing copy, technical clarity, landing page copy, and direct-response emails." },
  { name: "Story Writing", level: "Advanced", category: "Writing & Creative", description: "Screenwriting, character design, script outline, and narrative dialogue creation." },
];

export const PROJECTS: Project[] = [
  {
    id: "amazon-sales",
    title: "Amazon Sales Performance Dashboard",
    category: "Data & Analytics",
    description: "An advanced, multi-page Power BI dashboard designed to audit and monitor sales volume, profit margins, distribution logistics, and geographic customer segments.",
    techStack: ["Power BI", "DAX", "Power Query", "Excel"],
    features: [
      "Dynamic sales and profit margin tracking with high-contrast custom gauges.",
      "Geographic sales mapping with region-by-region filtering capabilities.",
      "Product category distribution chart highlighting top-performing SKUs.",
      "Weekly and monthly seasonal trend forecasting model using historical records."
    ],
    keyMetrics: [
      { label: "Analyzed Transactions", value: "100k+" },
      { label: "Total Monitored Sales", value: "$4.2M" },
      { label: "Calculated Profit Margin", value: "18.4%" },
    ],
    insights: [
      "Identified critical sales drop-offs in specific Southern regions during Q3, prompting distribution modifications.",
      "Determined that premium tech categories generated 60% of total profits despite comprising only 35% of total units sold."
    ]
  },
  {
    id: "spotify-dashboard",
    title: "Spotify Streaming Behavior Dashboard",
    category: "Data & Analytics",
    description: "A highly interactive dashboard tracking digital audio streaming history, user track ratings, duration trends, and genre distributions to highlight modern listening patterns.",
    techStack: ["Power BI", "Python", "CSV Data", "Excel"],
    features: [
      "Dynamic genre and artist density cloud visualizing listening frequency.",
      "Custom temporal charts tracking listening patterns by hour of day and day of week.",
      "Interactive audio track duration analyzer categorized by tempo beats-per-minute (BPM).",
      "Saved playlist metrics viewer to isolate primary mood categories."
    ],
    keyMetrics: [
      { label: "Minutes Streamed", value: "84,000" },
      { label: "Unique Genres Analyzed", value: "48" },
      { label: "Most Active Hour", value: "10:00 PM" },
    ],
    insights: [
      "Uncovered a strong correlation between ambient/lo-fi genres and focus hours (9 AM - 1 PM).",
      "Discovered that track skip rates declined by 40% when listening to custom curated playlists compared to automated radio feeds."
    ]
  },
  {
    id: "almost-adult",
    title: "Almost Adult",
    category: "Creative Writing",
    genre: "Comedy-Drama / Coming of Age",
    format: "Web Series (10 Episodes)",
    status: "Completed Script / Pitch Phase",
    logline: "Three post-grad roommates in the city navigate the messy, high-stakes collision between corporate ambition, personal identity, and the mounting stack of utility bills they forgot to pay.",
    description: "A witty, fast-paced comedic drama that exposes the humor and vulnerability of modern adulting. It captures the essence of that transitional period when you are legally an adult but have absolutely no idea what you are doing.",
    techStack: ["Screenwriting", "Character Development", "Storyboarding"],
    features: [
      "Multi-perspective storytelling highlighting distinct personality archetypes.",
      "Rich dialogue loaded with contemporary cultural relevance and dry wit.",
      "Structured episodic arcs designed specifically for modern streaming platforms."
    ],
    episodes: [
      { num: 1, title: "The Security Deposit", synopsis: "To secure their dream apartment, the trio must pass a bizarre reference check while scrambling to locate a missing security deposit check." },
      { num: 2, title: "LinkedIn & Lemonade", synopsis: "Unnati deals with the crushing realities of entry-level analytics applications, while her roommate tries to market an artisanal water brand." },
      { num: 3, title: "Grown-Up Dinner", synopsis: "An attempt to host a mature, adult dinner party devolves into complete chaos when an unexpected ex-partner arrives as an uninvited plus-one." }
    ]
  },
  {
    id: "two-sided",
    title: "Two Sided",
    category: "Creative Writing",
    genre: "Drama / Psychological Anthology",
    format: "Web Series (6 Episodes)",
    status: "In Development / Scripting",
    logline: "Every event has two viewpoints; each episode dissects a single defining moment in a relationship from two completely isolated perspectives, showing how easily truth is distorted.",
    description: "A sharp, introspective drama that explores the limits of memory, emotional bias, and the subjective nature of human relationships. Every episode is split into two halves, each showing one side of the same story.",
    techStack: ["Structural Screenplay", "Anthology Outlining", "Dialogue Polishing"],
    features: [
      "Split-narrative structure designed for engaging dual-point-of-view presentation.",
      "Intense focus on subtle non-verbal cues and subtextual conversations.",
      "Explorations of modern trust, miscommunication, and psychological projection."
    ],
    episodes: [
      { num: 1, title: "The Resignation", synopsis: "Part A shows a senior analyst resigning to protect a colleague; Part B reveals the manager's deep conviction that she was being betrayed." },
      { num: 2, title: "After Midnight", synopsis: "A critical argument in a quiet kitchen, replayed to show how tone of voice and internal anxiety change the meaning of every sentence." }
    ]
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio Website",
    category: "Web Design",
    description: "A beautiful, minimalist editorial portfolio designed and coded entirely by Unnati Solanki to showcase her multi-disciplinary work. Bridges her structured data analyst precision with creative screenplay storytelling.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Lucide React"],
    features: [
      "Bespoke bento-style design with custom typography and smooth layout transitions.",
      "Fully interactive components, including dynamic resume viewer and sleek contact forms.",
      "Adaptive, touch-responsive grid layouts fully optimized for high-density desktop and fluid mobile environments."
    ],
    keyMetrics: [
      { label: "Design Iterations", value: "3" },
      { label: "Load Time Speed", value: "<0.4s" },
      { label: "Interactive States", value: "100%" }
    ],
    insights: [
      "Designed and structured a unified content file schema to feed sections dynamically, optimizing rendering speed and maintainability.",
      "Balanced absolute high-contrast dark-mode aesthetics with elegant borders to guarantee ultimate readability."
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "data-analytics",
    title: "Data Analytics & Dashboard Development",
    description: "I build robust analytical tools that turn raw corporate databases into interactive visual narratives. Focused on creating actionable insights, elegant layout logic, and optimized performance.",
    deliverables: [
      "Custom interactive Power BI Dashboard design & setup",
      "Power Query ETL integration and clean DAX modeling",
      "SQL database query optimization & analytical summaries",
      "Excel spreadsheet reporting system design & formulas"
    ],
    duration: "1–3 weeks per project"
  },
  {
    id: "copywriting",
    title: "Narrative Copywriting & Content Strategy",
    description: "I write high-converting copy that aligns with your brand personality. Whether it is landing pages, direct-response emails, or structured technical case studies, I ensure clarity and action.",
    deliverables: [
      "Landing page copy & website content audits",
      "Brand narrative development & pitch structuring",
      "Direct-response email sequences",
      "SEO-friendly analytical blog posts and whitepapers"
    ],
    duration: "Ongoing or per-project"
  },
  {
    id: "web-design",
    title: "Minimalist Web Design & Development",
    description: "I craft clean, fast, high-contrast digital interfaces that respect user attention. Using modern Tailwind CSS and React setups, I create structural designs emphasizing robust readability.",
    deliverables: [
      "Responsive, single-page website wireframes & designs",
      "React/TypeScript responsive frontend build",
      "Clean CSS layouts optimized for performance",
      "SEO structural audits and mobile responsiveness"
    ],
    duration: "2–4 weeks per project"
  },
  {
    id: "creative-writing",
    title: "Creative Web Series & Screenplay Development",
    description: "I develop compelling dramatic and comedic screenplays, episode outlines, and character guides tailored for streaming platforms and modern narrative formats.",
    deliverables: [
      "Episodic web series pilot & story Bible development",
      "Dialogue polish and screenplay character tuning",
      "Detailed scene outlines, treatments, and loglines",
      "Pitch deck visual-narrative structure and copywriting"
    ],
    duration: "Custom per-project timeline"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "parul-university-diploma",
    subject: "Diploma",
    provider: "Parul University",
    description: "Completed Diploma, establishing strong academic fundamentals and logical reasoning skills.",
    status: "Completed",
    skillsLearned: ["Analytical Foundations", "Logical Thinking", "Problem Solving"]
  },
  {
    id: "baroda-institute-data-analyst",
    subject: "Data Analyst Course",
    provider: "Baroda Institute of Technology",
    description: "Currently pursuing a specialized Data Analyst course, training on Power BI, SQL databases, Python structures, and advanced data visualization metrics.",
    status: "Ongoing",
    skillsLearned: ["Power BI", "SQL", "Python", "Data Analysis", "Dashboard Design"]
  }
];
