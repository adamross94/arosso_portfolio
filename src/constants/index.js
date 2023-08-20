/*
    This file represents the single source of truth in terms of the content
    found within the project. It houses the services, technologies, experiences, 
    testimonials and projects content and makes it easier to edit them without
    diving into the app code. 
*/

import {
    javascript,
    typescript,
    react,
    python,
    sql,
    html,
    ai,
    redux,
    tailwind,
    nodejs,
    mongodb,
    figma,
    docker,
    express,
    nhse,
    nhsm,
    nhsbi,
    aisummariser,
    mui,
    tou,
    placeholder,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "github",
      title: "Github",
      url: "https://github.com/adamross94",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/adam-ross-34b79478/",
      target: "_blank",
      rel: "noopener noreferrer",
    }
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "SQL Developer",
      icon: sql,
    },
    {
      title: "JavaScript Developer",
      icon: javascript,
    },
    {
      title: "AI Tools Developer",
      icon: ai,
    }
  ];
  
  const technologies = [
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: react,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
   
    {
      name: "HTML",
      icon: html,
    },
  ];
  
  const experiences = [

    {
      title: "Data Analyst",
      company_name: "Medway NHS Foundation Trust",
      icon: nhsbi,
      iconBg: "#FFFFFF",
      date: "Mar 2020 - Present",
      points: [
        "In this role, I'm responsible for the delivery and assurance of dozens of regular reports deliverable to NHS shareholders on behalf of Medway's Business Intelligence department.",
        "Required to respond to ad-hoc data and FOI requests, for which custom SQL queries need to be written and executed in order to retrieve the necessary data.",
        "Tasked with improving up on existing reports, and creating new reports when required by improving existing processes, and automating where possible.",
        "Enhance processes intuitive techniques, including pushing the agenda towards 1 version of the truth, branded visualisation and automated data flows.",
      ],
    },

    {
      title: "BSc (Honours) Computing and IT",
      company_name: "The Open  University",
      icon: tou,
      iconBg: "#FFFFFF",
      date: "Feb 2019 - Jun 2024",
      points: [
        "Year 1: Development of computing and IT systems, conversion of analogue to digital formats, programming and problem-solving skills, communication networks, the Internet of Things, and how computing relates to modern society.",
        "Year 2: Basic technologies and architecture of the web, including client-server architecture, protocols, content markup, standards, and security; web application architectures and programming languages such as JavaScript, Python and PHP; mobile content and applications; and the planning, design, and development of applications, including project planning, application design, development environments, and application deployment and maintenance.",
        "Year 3: Object-oriented programming using BlueJ, with an emphasis on visualisation and interaction techniques to encourage experimentation and exploration, covering fundamental object-oriented concepts such as inheritance hierarchies, polymorphism, abstract classes, and interfaces; concluding with file input/output and making objects persistent.",
        "Year 4: Service management, requirements, databases, and project management, service management frameworks like ITIL, designing and implementing databases using SQL, and project management techniques, including software development approaches, estimating development effort, and monitoring progress.",
        "Year 5: User-centered design's significance and user diversity. Interactive product skills encompassing analysis, design, and evaluation. Agile software development, exploring processes and techniques. Testing software changes, employing design patterns, and crafting diverse software systems. The roles of cloud and web technologies in modern mobile apps, spanning web foundations, mobile apps, and the cloud. Understand technical and business dimensions, from standards and security to connectivity and deployment approaches.",
      ],
    },

    {
      title: "eRostering Systems Administrator",
      company_name: "Medway NHS Foundation Trust",
      icon: nhsm,
      iconBg: "#FFFFFF",
      date: "Feb 2019 - Feb 2020",
      points: [
        "As part of a team reduced from five to two staff, I took on the main point of contact role for the eRostering system, handling a high volume of inbox queries and phone calls.",
        "I initiated training sessions for colleagues on the specialised software packages for management and personal use, through onboarding events and one-to-one sessions.",
        "Performed systems maintenance, ensuring the rostering software was working as intended and fixing or escalating errors and problems where needed, ensuring staff were using the system as intended and adhering to working time directive and annual leave policies, in tandem with the human resources department.",
      ],
    },
    
    {
      title: "Multiple Administrative Roles",
      company_name: "NHS England",
      icon: nhse,
      iconBg: "#383E56",
      date: "Jun 2015 - Jan 2019",
      points: [
        "In Medical Staffing I filled gaps in the doctor’s rota by vetting doctors for compliance, reporting inadequacies, negotiating with agencies, and logging spend in a purpose-built system.",
        "Provided advice to colleagues as a resourcing officer, coordinating recruitment processes, maintaining staff files, undertaking HR projects, and producing reports with recommendations for improvements.",
        "Assisted nursing colleagues with the retrieval of information from health records using specialist applications, and with bulk data entry.",
        "Learned a lot of generic administrative functions through organizing meetings, taking minutes, inbox upkeep and preparing confidential case files and patient records.",
      ],
    },

    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SQL Query Generator",
      description:
        "A web-based platform built using React, Node.js, and the OpenAI API that allows users to generate a SQL query based upon their provided plain text description.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "text-white",
        },
      ],
      image: placeholder,
      source_code_link: "https://github.com/",
      web_link: "",
    },
    {
      name: "Article Summariser",
      description:
        "A web application built using React, TailwindCSS, Redux Toolkit and OpenAI API that allows users to paste in a URL and have the text from the page summarised.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "text-white",
        },
        
        {
          name: "tailwindcss",
          color: "twc-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
        
      ],
      image: aisummariser,
      source_code_link: "https://github.com/",
      web_link: "https://summariser.arosso.co.uk/",
    },
    {
      name: "Healthcare Dashboard",
      description:
        "A healthcare dashboard built with React and CSS. The data is retrieved through a purpose built API configured with Node & SQL, and rendered with Recharts. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "white-text-gradient",
        },
      ],
      image: placeholder,
      source_code_link: "https://github.com/",
      web_link: "https://summariser.arosso.co.uk/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };