

/*--------------- Home Page ----------------*/

export const DEFAULT_GREETING_ITEMS = {
  title: "Hello 👋.",
  title2: "Sanket",
  logo_name: "sanket.b()",
  nickname: "sanket",
  full_name: "Sanket Bondre",
  subTitle: "A Electronics and Telecommunication Graduate. Always learning 🔥",
  resumeLink:
  "https://drive.google.com/file/d/1Uihl6IR6hpyqBgx_m6Rpcr9CT4x7kiKH/view?usp=drive_link",
  mail: "mailto:sanketbondre1789@gmail.com",
};


/*---------Your Social Media Link ----------*/

export const DEFAULT_SOCIALMEDIA_LINKS = {
  github: "https://github.com/sanketbondre01",
  linkedin: "https://www.linkedin.com/in/sanket-bondre-0b0357248/",
  gmail: "sanketbondre1789@gmail.com",
  instagram: "https://www.instagram.com/sankettbondre/",
};



/*--------------- Skills ----------------*/

export const DEFAULT_SKILL_ITEMS = [
  [
    {
      title: "I'm Proficient in",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using HTML, CSS, JavaScript & React.JS",
        
        "⚡ Integration of third party services such as Firebase, Heroku",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          src: "Images/html.png"
        },
        {
          skillName: "CSS3",
          src: "Images/css.png"
        },
        {
          skillName: "Java",
          src: "Images/java.png"
        },
        {
          skillName: "Springboot",
          src: "Images/springboot.png"
        },
        
      ],
    }
  ],
  [
    {
      title: "My Technical Knowledge",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Strong foundation in algorithmic thinking using Java and Springboot to solve complex challenges.",
        "⚡ Experience working with databases like MySql",
        "⚡ Experience hosting and managing websites",
        
      ],
      softwareSkills: [
        {
          skillName: "Java",
          src: "Images/java.png"
        },
        {
          skillName: "Springboot",
          src: "Images/springboot.png"
        },
        {
          skillName: "MySQL",
          src: "Images/MySQL.png"
        },
        
      ],
    }
  ]
]






  // -------- CertificationCard Page ---------


  export const DEFAULT_CERT_CARD_ITEMS = [

      {
        title: "Programming using Java",
        subtitle: "Infosys Springboard",
        src: "Images/java.png",
        certificate_link: "https://drive.google.com/file/d/1BCc6ACfbBtgDj_PDTa8n6wkzpPoZYFLF/view?usp=drive_link",
        alt_name: "Java Course",
        color_code: "#1d1d1d",
      },
      {
        title: "Data Structures & Algorithms using Java",
        subtitle: "Infosys Springboard",
        src: "Images/DSA.png",
        certificate_link:
          "https://drive.google.com/file/d/1_nkV1Oph_ff8Jms6TJpiHpIQ_RepKjvz/view?usp=drive_link",
        alt_name: "DSA Course",
        color_code: "#1d1d1d",
      },
      {
        title: "HTML Workshop",
        subtitle: "GeeksforGeeks",
        src: "Images/html.png",
        certificate_link:
          "https://drive.google.com/file/d/11NJIFt-ZuKnay5-N7yXAvNJqC68FJBRm/view?usp=drive_link",
        alt_name: "HTML Workshop",
        color_code: "#1d1d1d",
      },
  ];


// ------------ ExperienceCard Page -------------


export const DEFAULT_EXPERIENCE_CARD_ITEMS = {
  
    name: "Web Developer Intern",
    subTitle:"Elite Software Pvt.Ltd.",
    src: "https://drive.google.com/file/d/1hd0asbYXzbxco2IVZWe8zWMBQ9KI-GG-/view?usp=drive_link",
    description:
    [
    "• Gained hands-on experience in Java, HTML, CSS, & JavaScript through developing and maintaining web applications.",
    "• Redesigned and improved existing websites for enhanced user experience.",
    ],
    logos: [
      {
        language:"HTML",
        src: "Images/html.png"
      },
      {
        language:"CSS",
        src: "Images/css.png"
      },
      {
        language:"JavaScript",
        src: "Images/js.png"
      },    
    ],
}
  
  
   
  
  
  // ------------ ProjectCard Page -------------

  const projectsHeader = {
    title: "Projects",
    description:
      "My projects make use of a vast variety of latest technology tools. My best experience is to create JavaScript & React Project. Below are some of my projects.",
    avatar_image_path: "projects_image.svg",
  };
  
  export const DEFAULT_PROJECT_CARD_ITEMS = [
     {
        id: "0",
        name: "My-PortFolio",
        projectView:"https://ashutosh-wagh-portfolio.netlify.app/",
        url: "https://github.com/AshutoshWagh12/Portfolio",
        description:
          "My personal portfolio website. Built using React, react-router-dom and other usefull libraries.Adaptive to any screen width i.e Responsive.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          {
            language:"React",
            src: "Images/react.png"
          },
          
        ],
      },
      {
        id: "1",
        name: "QuizApp Monorepo",
        projectView:"#",
        url: "https://github.com/sanketbondre01/QuizApp-Monorepo",
        description:
          "QuizApp is a Spring Boot-based application designed to create, manage, and take quizzes. It provides REST APIs to handle quizzes and questions with full CRUD functionality, backed by a MySQL database.",
        logos: [
          {
            language:"Springboot",
            src: "Images/springboot.png"
          },
          {
            language:"MySQL",
            src: "Images/MySQL.png"
          },    
        ],
      },
      {
        id: "2",
        name: "Snake-Game",
        projectView:"https://sanketbondre01.github.io/Snake-Game/",
        url: "https://github.com/sanketbondre01/Snake-Game",
        description:
          "Simple our childhood loved game Snake built using HTML, Css & Js with audio support.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          
        ],
      },
      {
        id: "3",
        name: "Calculator",
        projectView:"https://sanketbondre01.github.io/Calculator/",
        url: "https://github.com/sanketbondre01/Calculator",
        description:
          "A user-friendly Simple Calculator designed for basic mathematical operations. With a clean interface and efficient functionality, this calculator ensures quick and accurate calculations for everyday use.",
        logos: [
          {
            language:"HTML",
            src: "Images/html.png"
          },
          {
            language:"CSS",
            src: "Images/css.png"
          },
          {
            language:"JavaScript",
            src: "Images/js.png"
          },
          
        ],
      },
      {
        id: "4",
        name: "Blood Donor Management System Using Microservices",
        url: "https://github.com/sanketbondre01/Blood-Donor-Management-Using-Microservices",
        description:
          "The Blood Donor Management System is a microservices-based application built using Spring Boot and Spring Cloud. It manages blood donors, blood availability, and requests while integrating monitoring and documentation tools.",
        logos: [
          {
            language:"Springboot",
            src: "Images/springboot.png"
          },
          {
            language:"Microservices",
            src: "Images/microservices.png"
          }, 
          {
            language:"MySQL",
            src: "Images/MySQL.png"
          },    
        ],
    },
      
]



/* ----------- Contact & Resume ------------ */


export const DEFAULT_CONTACTPAGE_ITEMS = {
  title: "Contact Me",
  profile_image: "Images/My_Pic.jpg",
  description:
    "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",

};