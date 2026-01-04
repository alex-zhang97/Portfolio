export const siteConfig = {
  name: "Alex Zhang",
  title: "Software Engineer",
  description: "Portfolio website of Alex Zhang",
  accentColor: "#1d4ed8",
  social: {
    email: "your-alexczhang03@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexczhang03/",
    // twitter: "N/A",
    github: "https://github.com/alex-zhang97",
    resume: "Alex_Zhang_Resume.pdf",
  },
  aboutMe:
    "I’m a computer science senior at Ohio State with experience building full-stack and AI-powered applications. I enjoy working on products that blend strong engineering with thoughtful user experience, and I’m especially interested in back-end development, machine learning, system design, and real-world problem solving. Outside of class, I’ve led student organizations, competed in hackathons, and enjoy turning ideas into polished, usable software.",
  skills: ["TypeScript", "React", "Node.js", "Python", "Java", "Ruby", "Kotlin"],
  projects: [
    {
      name: "Digital Wardrobe App",
      description:
        "An AI-powered digital wardrobe that automatically tags clothing and generates outfit recommendations based on style and context.",
      link: "https://github.com/SCWARM/WardrobeApp",
      skills: ["Kotlin", "Jetpack Compose", "Firebase"],
    },
    {
      name: "GooseChase",
      description:
        "A location-aware trip planner that turns itineraries into interactive scavenger-style experiences.",
      link: "https://github.com/alex-zhang97/goose-chase",
      skills: ["TypeScript", "Next.js"],
    },
    {
      name: "GRAiD",
      description:
        "A Canvas-like educational platform that provides personalized supplemental material and webcam proctoring.",
      link: "https://devpost.com/software/graid",
      skills: ["Flutter", "Python", "MediaPipe Face Mesh"],
    },
    {
      name: "See Food",
      description:
        "A cross platform solution to detect food items, identify potential allergies, and provide calorie information.",
      link: "https://github.com/danielgof/HackAI2024",
      skills: ["Flutter", "Python"],
    },
  ],
  experience: [
    {
      company: "Infinity Labs",
      title: "Software Engineering Intern",
      dateRange: "May 2024 - August 2025",
      bullets: [
        "Owned the end-to-end design and implementation of a full-stack internal security tool for visitor access control across 4+ oﬃce locations, working cross-functionally with PMs and security stakeholders to translate requirements into a production system.",
        "Designed computer vision system of an autonomous robot using RGB cameras and 3D LiDAR on NVIDIA Jetson",
        "Part of the first intern class at a leading Defense startup that does $30M in annual revenue (~70 engineers)",
      ],
    },
    // {
    //   company: "Startup Inc",
    //   title: "Full Stack Developer",
    //   dateRange: "Jun 2020 - Dec 2021",
    //   bullets: [
    //     "Built and launched MVP product from scratch using React and Node.js",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //     "Collaborated with product team to define technical requirements",
    //   ],
    // },
    // {
    //   company: "Digital Agency",
    //   title: "Frontend Developer",
    //   dateRange: "Aug 2018 - May 2020",
    //   bullets: [
    //     "Developed responsive web applications for 20+ clients",
    //     "Improved site performance scores by 35% on average",
    //     "Introduced modern JavaScript frameworks to legacy codebases",
    //   ],
    // },
  ],
  education: [
    {
      school: "The Ohio State University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "4 Year Maximus Scholarship recipient (Top 3% of Class)",
        "Dean's List all semesters",
        "President of Lambda Phi Epsilon",
      ],
    },
    // {
    //   school: "Online Platform",
    //   degree: "Full Stack Development Certificate",
    //   dateRange: "2019",
    //   achievements: [
    //     "Completed 500+ hours of coursework",
    //     "Built 10+ portfolio projects",
    //     "Specialized in React and Node.js",
    //   ],
    // },
  ],
};
