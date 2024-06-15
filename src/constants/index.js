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
    nhspydocu,
    safestaffingdashboard,
    sqlserver,
    dash,
    plotly,
    css,
    
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
      title: "Python Developer",
      icon: python,
    },
    {
      title: "JavaScript Developer",
      icon: javascript,
    },
    {
      title: "SQL Developer",
      icon: sql,
    },
    {
      title: "React Developer",
      icon: react,
    }
  ];
  
  const technologies = [
    
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "SQL Server",
      icon: sqlserver,
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
      name: "Dash by Plotly",
      icon: dash,
    },
    {
      name: "Plotly",
      icon: plotly,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    
  ];
  
  const experiences = [

    {
      title: "Business Intelligence Analyst",
      company_name: "Medway NHS Foundation Trust",
      icon: nhsbi,
      iconBg: "#FFFFFF",
      date: "Mar 2020 - Present",
      points: [
        "Spearheaded the delivery and quality assurance of over twenty critical NHS reports, ensuring accurate and timely information dissemination to stakeholders.",
        "Mastered SSRS and SQL Server to manage and optimise extensive databases, writing and maintaining tens of thousands of lines of SQL code to enhance data retrieval processes.",
        "Responded to numerous ad-hoc data inquiries and Freedom of Information (FOI) requests by crafting custom SQL queries, demonstrating exceptional problem-solving and technical prowess.",
        "Championed the integration of Python for advanced data visualisation, significantly improving report comprehension and stakeholder engagement.",
        "Innovated the reporting process by automating data flows, enforcing a unified data truth, and standardising visual branding, leading to increased efficiency and consistency across all deliverables.",
        "Pioneered the development of new reports, adhering to strict guidelines and styling conventions, thereby expanding the department's analytical capabilities and report catalogue.",
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
        "Stepped into a critical role during a significant staff reduction, transitioning from a five-member team to a duo, ensuring seamless eRostering system operations.",
        "Emerged as the primary contact for the eRostering system, efficiently managing high volumes of inquiries and support requests via inbox and phone calls.",
        "Initiated and led training sessions for colleagues, enhancing their proficiency with the eRostering software for both managerial and personal applications.",
        "Dedicated the majority of efforts to system maintenance, including troubleshooting, error resolution, and escalation, guaranteeing optimal software performance and compliance with organisational policies in collaboration with the human resources department.",
      ],
    },
    
    {
      title: "Multiple Administrative Roles",
      company_name: "NHS England",
      icon: nhse,
      iconBg: "#383E56",
      date: "Jun 2015 - Jan 2019",
      points: [
        "Managed the job recruitment lifecycle from job advertisement to final appointment, ensuring a smooth and efficient process for all candidates.",
        "Played a foundational role in a newly established service, offering comprehensive administrative support across various professions, including School Nurses and Health Visitors.",
        "Served as a vital liaison between the NHS and the Department for Education, ensuring the precise and timely distribution of vaccination consent forms by coordinating with schools in the catchment area, fostering effective information and data exchange.",
        "Entrusted with the critical responsibility of filling vacancies in the Trust's doctor's rota within specified timelines, ensuring cost-efficiency and compliance with budget constraints.",
        "Developed and maintained a detailed spreadsheet to track the Trust's expenditure on agency doctors, providing key insights into potential cost-saving opportunities through data analysis.",
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
      name: "NHS Python / Data Analyst Documentation Site",
      description:
        "This project explores Python's application in data analysis within the NHS, covering contrasts with SQL, data cleaning, visualisation using Plotly, statistical analysis with NumPy and SciPy, predictive modeling using TensorFlow, dashboard development with Dash, automation scripts, and insights into leveraging ChatGPT for workflow efficiency.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "text-white",
        },
        {
          name: "heroku",
          color: "purple-text-gradient",
        },
      ],
      image: nhspydocu,
      source_code_link: "https://github.com/",
      web_link: "https://nhspycomdocu-d50cecae6387.herokuapp.com/",
    },
    {
      name: "Article Summariser",
      description:
        "'AI Article Summariser' is a straightforward web application constructed upon OpenAI's API infrastructure, employing the GPT-4 model to efficiently condense and summarise the contents of a given URL. The application seamlessly integrates various technologies such as ReactJS, TailwindCSS, Redux Toolkit, and RapidAPI, amalgamating their capabilities to deliver a cohesive and user-friendly platform for summarisation tasks.",
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
        {
          name: "netlify",
          color: "green-text-gradient",
        },
        
      ],
      image: aisummariser,
      source_code_link: "https://github.com/adamross94/ai_article_summariser",
      web_link: "https://summariser.arosso.co.uk/",
    },
    {
      name: "A Data Dashboard built with Dash by Plotly",
      description:
        "This project created a web dashboard using Dash, Plotly, Pandas, and NumPy to visualise healthcare staffing data, including metrics like fill rates and care hours per patient day (CHPPD). It offers intuitive navigation with dropdown menus for dynamic filtering and presents insights through various charts, aiding resource allocation decisions.",
      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "dash",
          color: "white-text-gradient",
        },
        {
          name: "plotly",
          color: "white-text-gradient",
        },
        {
          name: "heroku",
          color: "purple-text-gradient",
        },
       
      ],
      image: safestaffingdashboard,
      source_code_link: "https://github.com/",
      web_link: "https://enigmatic-meadow-20597-4e8150c7aaf3.herokuapp.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };