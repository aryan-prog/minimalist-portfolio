export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "TechStack", link: "#techstack" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PrepWise",
    des: "An AI-driven tool that generates custom interview questions, conducts mock interviews, and provides instant feedback to help users improve their interview skills.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://dancing-biscotti-c8fe9a.netlify.app",
  },
  {
    id: 2,
    title: "CloudVault",
    des: "A modern cloud storage app offering secure file uploads, real-time syncing, powerful search, and smooth drag-and-drop functionality across devices.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.png"],
    link: "https://cloud-vault2.netlify.app/",
  },
  {
    id: 3,
    title: "Care Pulse",
    des: "A healthcare appointment system that streamlines patient bookings, admin scheduling, and real-time SMS notifications through a fast and intuitive interface.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.png"],
    link: "https://carepulse9.netlify.app/",
  },
  {
    id: 4,
    title: "AI Text Summariser",
    des: "A smart summarization tool that quickly extracts key points from articles and documents, making information easier and faster to consume.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.png"],
    link: "https://ai-summarizer-23.netlify.app/",
  },
  {
    id: 5,
    title: "Google Portfolio",
    des: "A visually engaging portfolio website inspired by Google's clean design, showcasing projects, skills, and experiences with an intuitive interface.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/css.svg", "/js.png","html.svg"],
    link: "https://aryan-seth-28.netlify.app/",
  }  
];

export const techstack = [
  {
    id: 1,
    title: "React",
    icon: "/re.svg",
    href: "https://react.dev/",
  },
  {
    id: 2,
    title: "Next.js",
    icon: "/next.svg",
    href: "https://nextjs.org/",
  },
  {
    id: 3,
    title: "TailwindCSS",
    icon: "/tail.svg",
    href: "https://tailwindcss.com/",
  },
  {
    id: 4,
    title: "TypeScript",
    icon: "/ts.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    title: "JavaScript",
    icon: "/js.png",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 6,
    title: "HTML5",
    icon: "/html.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    id: 7,
    title: "CSS3",
    icon: "/css.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 8,
    title: "C++",
    icon: "/c.svg", // Update icon if you want a proper C++ icon
    href: "https://cplusplus.com/",
  },
  {
    id: 9,
    title: "Firebase",
    icon: "/firebase.svg", // Should replace this with a Firebase logo!
    href: "https://firebase.google.com/",
  },
  {
    id: 10,
    title: "Redux Toolkit",
    icon: "/redux.svg", // Update with Redux logo if possible
    href: "https://redux-toolkit.js.org/",
  },
  {
    id: 11,
    title: "Material UI",
    icon: "/material.svg",
    href: "https://mui.com/",
  },
  {
    id: 12,
    title: "Bootstrap",
    icon: "/bootstrap.svg",
    href: "https://getbootstrap.com/",
  },
  {
    id: 13,
    title: "Shadcn UI",
    icon: "/shadcn.png",
    href: "https://ui.shadcn.dev/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
