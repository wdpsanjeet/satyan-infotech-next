export type Course = {
  title: string;
  fullPrice: string;
  monthlyPrice?: string;
  dataPrice: string;
  badge?: string;
  topics: string[];
};

export type CourseGroup = {
  title: string;
  subtitle: string;
  courses: Course[];
};

const paymentRules = ["Complete in 1 month → Start Internship", "If not completed → Continue next month"];

export const courseGroups: CourseGroup[] = [
  {
    title: "Our Professional Courses",
    subtitle: "Industry-focused training with real-world project exposure",
    courses: [
      {
        title: "PHP Full Stack – CodeIgniter",
        fullPrice: "₹12,999",
        monthlyPrice: "₹4,500",
        dataPrice: "12999",
        topics: ["HTML/CSS Basics", "PHP Basics", "PHP OOPs", "REST API Development", "jQuery", "AJAX", "CodeIgniter", "MySQL", "ChatGPT"],
      },
      {
        title: "PHP Full Stack – Laravel",
        fullPrice: "₹14,999",
        monthlyPrice: "₹5,500",
        dataPrice: "14999",
        badge: "Most Popular",
        topics: ["HTML/CSS Basics", "PHP Basics", "PHP OOPs", "jQuery", "AJAX", "Laravel Framework", "MySQL", "ChatGPT"],
      },
      {
        title: "PHP Full Stack – CI + Laravel",
        fullPrice: "₹17,999",
        monthlyPrice: "₹6,500",
        dataPrice: "17999",
        topics: ["HTML/CSS Basics", "PHP Basics", "PHP OOPs", "jQuery", "AJAX", "CodeIgniter", "Laravel", "MySQL", "ChatGPT"],
      },
    ],
  },
  {
    title: "Frontend & Mobile Development Courses",
    subtitle: "Modern JavaScript frameworks with real-world projects",
    courses: [
      {
        title: "React JS – Frontend Development",
        fullPrice: "₹13,999",
        monthlyPrice: "₹5,000",
        dataPrice: "13999",
        badge: "High Demand",
        topics: ["JavaScript ES6+ Fundamentals", "React Components & JSX", "State & Props Management", "React Hooks", "API Integration (REST)", "Routing with React Router", "Project Deployment", "ChatGPT"],
      },
      {
        title: "React Native – Mobile App Development",
        fullPrice: "₹15,999",
        monthlyPrice: "₹5,500",
        dataPrice: "15999",
        topics: ["JavaScript & ES6 for Mobile", "React Native Core Concepts", "UI Components & Styling", "API Integration", "Navigation & State Handling", "Android App Build", "Play Store Deployment", "ChatGPT"],
      },
      {
        title: "React JS + React Native – Full Stack Frontend & Mobile",
        fullPrice: "₹19,999",
        monthlyPrice: "₹7,500",
        dataPrice: "24999",
        badge: "Best Value",
        topics: ["JavaScript ES6+ Fundamentals", "React Components, JSX & Hooks", "State Management & Routing", "REST API Integration", "React Native Core & UI Components", "Android App Development", "Web & Mobile Project Deployment", "ChatGPT"],
      },
    ],
  },
  {
    title: "Python & React Career Programs",
    subtitle: "Backend with Python + Modern Web & Mobile Frontend",
    courses: [
      {
        title: "Python + React JS – Full Stack Web Development",
        fullPrice: "₹18,999",
        monthlyPrice: "₹7,000",
        dataPrice: "18999",
        topics: ["Python Basics & Advanced Concepts", "Python OOPs & Project Structure", "REST API Development with Python", "React JS Components & Hooks", "Frontend–Backend API Integration", "Authentication & Data Handling", "Full Stack Web Project Deployment", "ChatGPT"],
      },
      {
        title: "Python + React Native – Backend & Mobile Apps",
        fullPrice: "₹20,999",
        monthlyPrice: "₹7,500",
        dataPrice: "20999",
        badge: "High Demand",
        topics: ["Python Programming Fundamentals", "Backend API Development with Python", "React Native Core & UI Components", "Mobile API Integration", "State Management & Navigation", "Android App Development", "Play Store Deployment", "ChatGPT"],
      },
      {
        title: "Python + React JS + React Native – Full Stack Web & Mobile",
        fullPrice: "₹23,999",
        monthlyPrice: "₹8,500",
        dataPrice: "29999",
        badge: "Best Career Package",
        topics: ["Python Programming & OOPs", "Backend REST API Development", "React JS – Web Frontend Development", "React Native – Mobile App Development", "Web & Mobile API Integration", "Real-Time Full Stack Projects", "Web + Android Deployment", "ChatGPT"],
      },
    ],
  },
  {
    title: "Node.js & MongoDB Career Programs",
    subtitle: "Backend and full stack development with JavaScript",
    courses: [
      {
        title: "Node.js + MongoDB – Backend Development",
        fullPrice: "₹16,999",
        monthlyPrice: "₹7,000",
        dataPrice: "16999",
        topics: ["JavaScript Fundamentals & ES6+", "Node.js Core Concepts", "Express.js Framework", "REST API Development", "MongoDB & Mongoose", "Authentication & Authorization", "Backend Project Deployment", "ChatGPT"],
      },
      {
        title: "Node.js + MongoDB + React JS – Full Stack Web",
        fullPrice: "₹19,999",
        monthlyPrice: "₹7,000",
        dataPrice: "22999",
        badge: "High Demand",
        topics: ["JavaScript ES6+ for Full Stack", "Node.js & Express Backend", "MongoDB Database Design", "React JS Frontend Development", "API Integration (Frontend ↔ Backend)", "Authentication & Role Management", "Full Stack Web App Deployment", "ChatGPT"],
      },
      {
        title: "Node.js + MongoDB + React JS + React Native",
        fullPrice: "₹31,999",
        monthlyPrice: "₹11,000",
        dataPrice: "31999",
        badge: "Best Career Package",
        topics: ["JavaScript & ES6+ Mastery", "Node.js & Express Backend APIs", "MongoDB for Web & Mobile Apps", "React JS – Web Frontend", "React Native – Mobile App Development", "Web & Mobile API Integration", "Web + Android Deployment", "ChatGPT"],
      },
    ],
  },
  {
    title: "Career Foundation Programs",
    subtitle: "Job-oriented training for BTech & MCA students – no prior coding required",
    courses: [
      {
        title: "IT Career Foundation Program",
        fullPrice: "₹8,999",
        dataPrice: "8999",
        topics: ["Programming Basics & Logic Building", "Problem Solving Techniques", "Data Structures Fundamentals", "Git & Version Control Basics", "Real-Time Mini Projects", "Resume Building", "Career Guidance for IT Roles"],
      },
      {
        title: "Job Ready Training Program",
        fullPrice: "₹11,999",
        dataPrice: "11999",
        badge: "Most Popular",
        topics: ["Aptitude & Logical Reasoning", "Technical Interview Preparation", "Mock Interviews (HR + Technical)", "Soft Skills & Communication", "Resume & LinkedIn Optimization", "Real-Time Industry Projects", "Placement Assistance"],
      },
      {
        title: "Internship + Placement Program",
        fullPrice: "₹6,500",
        dataPrice: "15999",
        topics: ["Live Internship Experience", "Industry-Level Project Work", "Mentorship from IT Professionals", "Agile & Team Collaboration", "Company-Level Coding Practices", "Experience Certificate", "Job Opportunity Support"],
      },
    ],
  },
];

export { paymentRules };
