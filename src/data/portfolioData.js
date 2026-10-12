// ============================================================
// All portfolio content lives here. Edit this file to update
// the website - no need to touch the React components.
// Every value below comes from the resume (links were read from
// the hyperlinks embedded in the PDF).
// ============================================================

// --- FORMSPREE SETUP ---------------------------------------
// Replace the placeholder with your own endpoint from formspree.io,
// e.g. "https://formspree.io/f/abcdwxyz". This URL is public by design
// (it is NOT a secret key), so it is safe to keep in frontend code.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// Path to the resume PDF inside /public (served from the site root).
export const RESUME_URL = "/assets/Mujjamil_Kurundwad_Resume.pdf";

export const profile = {
  name: "Mujjamil Kurundwad",
  logo: "MK",
  headline: "Graduate building practical AI/ML and software solutions",
  rotatingRoles: [
    "Aspiring AI Engineer",
    "Generative AI & RAG Builder",
    "Python Developer",
    "LLM Application Developer",
  ],
  intro:
    "B.Tech graduate with hands-on experience building AI-powered applications using Python, Google Gemini, RAG pipelines, Flask and Streamlit. I enjoy turning ideas into practical software and I am looking for entry-level opportunities in AI/ML engineering, Generative AI and software development.",
  location: "Kolhapur, Maharashtra, India",
  email: "mujammilkurundwad@gmail.com",
  phone: "+91 9307984330",
  links: {
    github: "https://github.com/mujammilkurundwad",
    linkedin: "https://www.linkedin.com/in/mujammil-kurundwad-1016a92a1/",
    leetcode: "https://leetcode.com/u/mujammil_mk_07/",
  },
};

export const about = {
  paragraphs: [
    "I recently completed my B.Tech in Electronics and Computer Engineering at Sharad Institute of Technology, College of Engineering, Yadrav (2022 – 2026). Alongside my degree, I focused on Python, backend development and applied AI.",
    "My interests are Generative AI, LLM applications and Retrieval-Augmented Generation. I have built projects that integrate the Google Gemini API, work with embeddings and vector search, and expose features through Flask and Streamlit applications backed by databases such as Supabase and MySQL.",
    "I approach problems by breaking them into small, testable parts and practising data structures and algorithms regularly on LeetCode. As a trainee at Paarsh Infotech, I worked with a team to debug, test and improve application workflows, which taught me how much reliability matters in real software.",
    "I am eager to keep learning and to contribute to teams building useful, scalable AI solutions.",
  ],
  highlights: [
    { label: "Degree", value: "B.Tech, Electronics & Computer Engineering" },
    { label: "Graduating", value: "2026" },
    { label: "Focus", value: "Generative AI, RAG, Backend" },
    { label: "Based in", value: "Kolhapur, Maharashtra" },
  ],
};

// Add or remove skills by editing these arrays.
export const skillCategories = [
  { title: "Programming Languages", skills: ["Python", "Java", "SQL"] },
  {
    title: "AI & Generative AI",
    skills: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Google Gemini API",
      "OpenAPI",
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Flask", "FastAPI", "Streamlit", "LangChain", "LangGraph", "RESTful APIs"],
  },
  { title: "Databases", skills: ["MySQL", "MongoDB", "Supabase"] },
  {
    title: "Developer Tools & DevOps",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Eclipse", "Cloudinary", "Docker"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "RAG Architecture",
      "LLM Application Development",
    ],
  },
];

// Project data. Omit `github` or `demo` (or leave as "") to hide that button.
export const projects = [
  {
    id: "snapclass",
    title: "SnapClass – AI-Powered Attendance Management System",
    visual: "SC",
    problem:
      "Marking classroom attendance by hand is slow; SnapClass automates it using AI-based verification.",
    description:
      "A Streamlit attendance platform with separate teacher and student portals and session-based screen routing.",
    contributions: [
      "Built the Streamlit platform integrating 10+ Python libraries, with 2 role-based portals (teacher and student) and session-based screen routing.",
      "Implemented 2 AI verification methods, face recognition (dlib) and voice embeddings (Resemblyzer), to automate attendance marking.",
      "Integrated a Supabase database and secured user accounts with bcrypt password hashing.",
      "Added QR code and join-code based class enrollment (Segno) so students can auto-enroll via a shared link.",
    ],
    tech: [
      "Python",
      "Streamlit",
      "face_recognition (dlib)",
      "Librosa",
      "Resemblyzer",
      "scikit-learn",
      "Supabase",
      "bcrypt",
      "Segno",
      "Pandas",
      "NumPy",
    ],
    github: "https://github.com/mujammilkurundwad/SnapClass-AI",
    demo: "",
  },
  {
    id: "ai-personal-assistant",
    title: "AI Personal Assistant",
    visual: "AI",
    problem:
      "Generic chatbots lack context; this assistant uses retrieval to ground answers and also summarises emails.",
    description:
      "A Flask and Gemini API assistant that answers natural-language queries with contextual responses.",
    contributions: [
      "Built a Flask and Gemini API assistant that answers natural-language queries with contextual responses.",
      "Implemented RAG with embeddings and vector search to retrieve relevant context and improve LLM response quality.",
      "Added Gemini-based email summarization that generates concise summaries from user-provided email content.",
      "Built RESTful backend endpoints and secured Gemini API credentials using environment variables.",
    ],
    tech: [
      "Python",
      "Flask",
      "Google Gemini API",
      "Google GenAI SDK",
      "RAG",
      "LLMs",
      "Embeddings",
      "Vector Search",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/mujammilkurundwad/AI-Assistant",
    demo: "",
  },
];

export const experience = [
  {
    id: "paarsh",
    organization: "Paarsh Infotech Pvt. Ltd.",
    role: "Trainee",
    location: "Pune, India",
    period: "Dec 2025 – Jun 2026",
    responsibilities: [
      "Developed and integrated AI-powered application components using Python, Flask, Google Gemini API and RESTful APIs, focusing on practical Generative AI and LLM-based solutions.",
      "Built and experimented with RAG (Retrieval-Augmented Generation) pipelines, working with embeddings, vector search and contextual information retrieval for improved AI responses.",
      "Integrated Google Gemini LLM APIs to develop intelligent features including conversational question answering and email summarization.",
      "Collaborated with cross-functional teams to debug, test and optimize application workflows, resolving 30+ functional issues and improving overall application reliability.",
    ],
    tech: ["Python", "Flask", "Google Gemini API", "RESTful APIs", "RAG", "Embeddings"],
  },
];

export const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech) in Electronics and Computer Engineering",
    institute: "Sharad Institute of Technology, College of Engineering, Yadrav",
    period: "2022 – 2026",
    detail: "CGPA: 6.97",
  },
];

// Only entries from the resume. Add `url` to show a "View credential" button.
export const certifications = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    issuer: "LeetCode (practice achievement)",
    description:
      "Completed over 150 algorithmic challenges on LeetCode using Java, improving problem-solving efficiency by 71%.",
    url: "https://leetcode.com/u/mujammil_mk_07/",
    linkLabel: "View LeetCode profile",
  },
  {
    id: "networks",
    title: "Advanced Computer Networks",
    issuer: "NPTEL (IIT)",
    description: "",
    url: "",
    linkLabel: "",
  },
];

// Navigation items. Sections are rendered in App.jsx in the same order.
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
