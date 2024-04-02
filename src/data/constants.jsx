import YelpCamp from "../images/Yelpcamp.jpg";
import Todo from "../images/Todo.jpg";
import Dashboard from "../images/Dashboard.png";
import GoFood from "../images/GoFood.png";
import BorrowBucket from "../images/BorrowBucket.png";

export const Bio = {
  name: "Abhinav Sinha",
  roles: ["Full Stack Developer", "Programmer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Abhinav01Sinha",
  resume:
    "https://drive.google.com/file/d/1AMIxRsovKNGqME1SGUNSotLIvM-SkUtH/view",
  linkedin: "https://www.linkedin.com/in/abhinav-sinha-5201aa224/",
  facebook: "https://www.facebook.com/abhinav.sinha.359126/",
  insta: "https://www.instagram.com/sinha_abhinav01/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next.js",
        image: "https://www.datocms-assets.com/98835/1684410508-image-7.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Shadcn",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvQ8P74Q9qIdvz32mDGS6HbBAffF8QUICbBl-jON5Aq3Fqc3uKS9qYdc8NJmr3kSlCN8&usqp=CAU",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image:
          "https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg",
      },
      {
        name: "Express Js",
        image:
          "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },
      {
        name: "Redux",
        image:
          "https://cdn.iconscout.com/icon/free/png-256/free-redux-283024.png",
      },
      {
        name: "Zustand",
        image: "https://img.stackshare.io/service/11559/zustand.png",
      },
      {
        name: "MySQL",
        image:
          "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png",
      },
      {
        name: "MongoDB",
        image:
          "https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-cezvpn3f.png",
      },
      {
        name: "Firebase",
        image:
          "https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png",
      },
      {
        name: "Stripe",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7N3BDXg58ytSvZ7CIKLPbHGBAhdEJX0ZteHdfsnWwZg&s",
      },
    ],
  },
  ,
  {
    title: "Languages",
    skills: [
      {
        name: "C++",
        image:
          "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
      },
      {
        name: "Javascript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        name: "Typescript",
        image:
          "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
      },
      {
        name: "Python",
        image:
          "https://banner2.cleanpng.com/20180806/fv/kisspng-python-scalable-vector-graphics-logo-javascript-cl-coderpete-game-development-5b6819307ca155.2506144815335488485105.jpg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
      },
      {
        name: "Vercel",
        image:
          "https://www.hockeycomputindo.com/assets/img/blog/04/vercels.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://play-lh.googleusercontent.com/sfLqVeky-wikZqOIScnfUnl4yI5S_Bs478tmpib4TFI0I-SC4x8MlvROJI946ps9Eg",
    role: "Subject Matter Expert",
    company: "Unacademy",
    date: "Dec 2021 - July 2022",
    desc: "Worked as a Doubt solving educator for IIT-JEE Chemistry for 8 Months. \n Recorded video solutions of 1800+ doubts for students.",
    skills: ["Teaching", "Chemistry", "JEE / NEET"],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU%2C_Delhi_official_logo.png/200px-DTU%2C_Delhi_official_logo.png",
    school: "Delhi Technological Univeristy , Delhi",
    date: "Dec 2021 - June 2025",
    grade: "8.30 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Engineering at Delhi Technological Univeristy , Delhi. I have completed 4 semesters and have a CGPA of 8.30. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems etc.",
    degree: "Bachelor of Technology - BTech, Computer Engineering",
  },
  {
    id: 1,
    img: "https://childrenartcontest.com/wp-content/uploads/2018/07/Logo-Mayur-Public-School-1.jpg",
    school: "Mayur Public School , Delhi",
    date: "Apr 2019 - March 2021 ",
    grade: "96.6% in CBSE Class XII",
    desc: "I completed my class 12th school education at Mayur Public School , Delhi , where I studied PCM with Computer Science.",
    degree: "CBSE(XII) - Science with Computer Science",
  },
  {
    id: 2,
    img: "https://childrenartcontest.com/wp-content/uploads/2018/07/Logo-Mayur-Public-School-1.jpg",
    school: "Mayur Public School , Delhi",
    date: "Apr 2007 - March 2019 ",
    grade: "92% in CBSE Class X ",
    desc: "I completed my class 10th school education at Mayur Public School , Delhi .",
    degree: "CBSE(X) with Hindi Language ",
  },
];

export const projects = [
  {
    id: 0,
    title: "BorrowBucket Web App",
    date: "Feb 2024",
    description:
      "BorrowBucket is a full-stack web project which is an online renting marketplace facilitating hosts to list over 100s of items for earning, while guests can easily borrow or rent items for a fixed duration at listed prices.",
    image: BorrowBucket,
    tags: [
      "Next.js",
      "Firebase",
      "Typescript",
      "React.js",
      "Node.js",
      "Stripe",
      "Shadcn",
      "MongoDB",
    ],
    category: "web",
    github: "https://github.com/Abhinav01Sinha/nextjs-Borrowbucket",
  },
  {
    id: 1,
    title: "NextDashboard Web App",
    date: "Jan 2024",
    description:
      "NextDashboard is a full-stack web project where Admin can manage 1000s of Products and Clients.This project is being created created using React.js , Next.js , Node.js and MongoDB . Bcrypt is used to handle authentication.  ",
    image: Dashboard,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "MongoDB",
      "Next.js",
      "React.js",
      "Node.js",
    ],
    category: "web",
    github: "https://github.com/Abhinav01Sinha/nextDashboard",
  },
  {
    id: 2,
    title: "Food Ordering Web App",
    date: "Dec 2023",
    description:
      "GoFood is a MERN Stack web app where users can order online food from 3 varieties..This project is being created created using React.js , Express.js , Node.js and MongoDB. Bcrypt is used to handle authentication.",
    image: GoFood,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],
    category: "web",
    github: "https://github.com/Abhinav01Sinha/GoFood",
  },
  {
    id: 3,
    title: "YelpCamp Web App",
    date: "Jun 2023",
    description:
      " YelpCamp is a full-stack website project where users can create and review campgrounds. In order to review or create a campground, you must have an account.This project is being created created using Node.js, Express, MongoDB, and Bootstrap. Passport.js is used to handle authentication. ",
    image: YelpCamp,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "MongoDB",
      "Express",
      "Bootstrap",
      "Node JS",
    ],
    category: "web",
    github: "https://github.com/Abhinav01Sinha/YelpCamp",
  },
  {
    id: 4,
    title: "Todo Web App",
    date: "Oct 2023 ",
    description:
      " A Todo Web App made with React JS and Material UI. Users can see all the tasks and can create a new task and remove the completed tasks. ",
    image: Todo,
    tags: ["React Js", "Local Storage", "Node JS", "Bootstrap"],
    category: "web",
    github: "https://github.com/Abhinav01Sinha/React-ToDo-List",
  },

  {
    id: 5,
    title: "Ongoing ",
    date: "Oct 2023 ",
    description: " Ongoing ",
    image:
      "https://images.assetsdelivery.com/compings_v2/lkeskinen/lkeskinen1612/lkeskinen161211041.jpg",
    tags: ["Python"],
    category: "aiml",
    github: "https://github.com/Abhinav01Sinha/React-ToDo-List",
  },
];
