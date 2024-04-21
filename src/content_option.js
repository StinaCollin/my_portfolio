import yourImgUrl from "./assets/images/stina5.png";


const logotext = "STINA.I.COLLIN";
const meta = {
    title: "Stina Collin's Portfolio",
    description: "I’m Stina Collin, just finishing my studies in web development. I'm a dedicated developer fueled by a passion for web development. I thrive on the challenge of creating engaging and innovative websites. With a solid background in various aspects of design, I'm always eager to tackle new projects and push the boundaries of what's possible.",
};

const introdata = {
    title: "Hi there, I'm Stina Collin!",
    animated: {
        first: "I'm a passionate developer...",
        second: "I love coding and...",
        third: "Turning ideas into magical websites <3",
    },
    description: "Based just outside Stockholm, Sweden, I'm a dedicated developer fueled by a passion for web development. I thrive on the challenge of creating engaging and innovative websites. With a solid background in various aspects of design, I'm always eager to tackle new projects and push the boundaries of what's possible.",
    your_img_url: yourImgUrl,
};

const dataabout = {
    title: "Lil about Me, Myself n' I",
    aboutme: "Hi there, it's a pleasure to make your acquaintance! I'm Stina, a lifelong designer and artist. Creativity runs in my blood since birth, thanks to my mother who is a celebrated and eminent artist and dollhouse maker. I founded my first company at just 15, specializing in clothing design, and was self-learned in developing my own webshop. Since then, I've launched two more ventures, honing my skills in various design fields. With a solid background in design, I enrolled at IT Högskolan to gain strong skills in development as well. I'm always eager for new challenges, and I'm a social butterfly, always keen to meet new people and expand my horizons. And last but not least, I'm always wearing a smile and maintaining a positive attitude!",
};
const worktimeline = [{
        jobtitle: "IT högskolan",
        where: "JavaScript Developer",
        date: "2022-2024",
        tasks: `Studying web development and programming with emphasis on:
        - JavaScript, React, Node.js, Testing & TypeScript
        - HTML, CSS
        - UX/UI design
        - Backend development, Databases
        - CRUD, REST API, Git, Agile, LCM`
      },
      {
        jobtitle: "Clothes designer",
        where: "Misumi, own brand & company",
        date: "2001-2018",
        tasks: `Creating website and webshop, managing the production process from design to finished product, and developing marketing strategies to promote the clothing brand and increase sales.
        - Designed and produced clothes, showcasing attention to detail and innovative design concepts.
        - Executed marketing and sales initiatives to enhance brand visibility and drive revenue growth.
        - Employed problem-solving skills to address customer service, needs and preferences, enhancing overall satisfaction.
        `
    },
    {
        jobtitle: "Graphic Design & Media communication",
        where: "Sollentuna Fria Gymnasium",
        date: "2000-2003",
        tasks: `Obtained highest grade in Graphic Design & Computer Science subjects, showcasing proficiency in design and technology.
        - Developed skills in graphic design, web design, and project management, essential for design & development roles.
        - Applied extensive knowledge in graphic design and media communication to create engaging visual content.
        - Gained hands-on experience with various media formats, including print materials, digital media, and video production.
        - Managed projects in the design and media field, ensuring timely completion and high-quality deliverables.
        - Utilized understanding of marketing principles to craft impactful designs and communication strategies.`
    },
    {
        jobtitle: "Lia Internship",
        where: "Nilo Collaborations",
        date: "2023 & 2024",
        tasks: `React & Styled Components Internship Experience at Nilo Collaborations, developing their meeting app for the company.
        During my internship at Nilo Collaborations, I had the opportunity to work on developing their meeting app for the company. Throughout this experience, I undertook a variety of tasks within their meeting website and app, ranging from addressing CSS and HTML issues to tackling more complex CRUD tasks. This hands-on experience allowed me to further refine my skills in front-end development and deepen my understanding of React and Styled Components. I gained valuable insights into the development process and learned how to effectively troubleshoot and solve problems in a dynamic environment. Overall, this internship was a valuable opportunity for me to apply my knowledge in a real-world setting and expand my expertise in web development.
        `
    }     
];

const skills = [{
        name: "HTML",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 90,
    },
    {
        name: "CSS",
        value: 90,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "UX/UI Design",
        value: 80,
    },
];

const services = [{
        title: "Web Development",
        description: "With a foundation in web development, I excel at crafting dynamic and interactive websites using a versatile tech stack including HTML, CSS, JavaScript, React, and Node.js. From concept to deployment, I ensure that your website is not only visually stunning but also responsive and user-friendly, catering to your specific requirements. And I always make sure to meet your needs and exceed your highest expectations! Whether it's building from scratch or enhancing existing projects, I'm always eager to embark on new challenges and push the boundaries of what's achievable in the digital realm. ",
    },
    {
        title: "Design, Graphic Design & Visual Communication",
        description: "With a deep-rooted background in design and a passion for color and shapes, I offer a unique expertise in graphic design and visual communication. From my early education in graphic design and media communication to founding my own clothing design company, I've cultivated a keen understanding of the power of aesthetics. By blending my artistic skill with strategic thinking, I craft visual narratives that capture attention and engage the audience. Whether it's designing or developing, I pay meticulous attention to every detail to ensure your design or website stands out. With a strong grasp of color theory, composition, and typography, I always strive to deliver visual solutions that convey your unique vision and strengthen your market presence.",
    },
    {
        title: "UI & UX Design",
        description: "Drawing from a diverse design background, I specialize in creating intuitive and engaging interfaces. Using my understanding of user behavior and design principles, I ensure seamless user experiences that captivate audiences and meet business objectives.",
    },
    {
        title: "Customer Relations",
        description: "My ability to understand and address customers' unique needs is one of my greatest strengths. Through effective communication and responsiveness, I build long-term and mutually beneficial relationships with my clients. I always strive to exceed their expectations and deliver tailored solutions that meet their needs in the best possible way.",
    },
    {
        title: "Innovation, Business Insight & Strategic Visioning",
        description: "With a sharp focus on innovation and a deep understanding of business intricacies, I adept at identifying business opportunities and devising strategies that lead to growth and success. With a profound understanding of business operations and an analytical mindset, I contribute to the advancement of companies.",
    },
];

const dataportfolio = [{
        img: "https://www.stinacollin.com/images/stina_avatar_dark.png",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
        link: "#",
    },
    {
        img: "https://www.stinacollin.com/images/stina_avatar_dark.png",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

];

const projectinfo = [
    {
      what: "11I did... lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.  ", 
      where: "It was.",
      how: "I made all.",
    },
    {
        what: "22I did...",
        where: "It was.",
        how: "I made all.",
    },    
    {
        what: "333I did...",
        where: "It was.",
        how: "I made all.",
      },
    // Fler objekt kan läggas till här om du behöver
  ];

  const funnyFacts = [
    {
        fact: `"` ,
    },
    {
        fact: "I have renovated my entire house almost entirely on my own.",
    },
    {
        fact: "I'm a certified personal trainer.",
    },
    {
        fact: "I bought my own house at the age of 25.",
    },
    {
        fact: "I have hiked 35 km in one go.",
    },
    {
        fact: "I have a hobby business selling crystals.",
    },
    {
        fact: "I've been practicing Yoga for over 25 years, since age of 14.",
    },
    {
        fact:  `"` ,
    },
];


const contactConfig = {
    YOUR_EMAIL: "misumi_wear@yahoo.se",
    YOUR_FONE: "(+46) 70 825 23 26",
    YOUR_CITY: "Brottby north of Stockholm, Sweden",
    description: "Feel free to contact me for potential projects, collaborations, or employment opportunities. I thrive on new challenges and am eager to contribute my skills and expertise to meaningful work. Let's discuss how I can add value to your team or project—I'm always open to new opportunities.",
    YOUR_SERVICE_ID: "service_ii9y4or",
    YOUR_TEMPLATE_ID: "template_1rp74jb",
    YOUR_USER_ID: "UcA1hoEJ89eUGqq8b",
};

const socialprofils = {
    github: "https://github.com/StinaCollin",
    facebook: "https://www.facebook.com/sic1984",
    linkedin: "https://www.linkedin.com/in/stina-collin-906a00254/",
    instagram: "https://www.instagram.com/kristallkluster/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    projectinfo,
    funnyFacts,
};