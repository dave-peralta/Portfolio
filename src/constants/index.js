import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a developer based in the Philippines, currently specializing in Java and continually enhancing my expertise in this area. As an undergraduate Computer Science student at the University of the Philippines Los Baños, my focus is on mastering backend development while also gaining a solid understanding of frameworks such as Spring Boot and React, aiming to integrate these into my growing skillset. My previous work experience includes developing websites and handling web hosting services like AWS and SiteGround for deploying and maintaining websites.`;

export const ABOUT_TEXT = `I'm a 24 year old undergraduate student from the University of the Philippines Los Baños. I'm a huge fan of watching anime, I do a lot of sports such as basketball and boxing, I play a lot of JRPGs and any tactical-based games as I like to think, and I love learning more about the tech world with hopes of understanding both the software and hardware side of things.
`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Web Developer Intern",
    company: "Timefree Innovations, Inc.",
    description: `Coming Soon`,
    technologies: ["Angular", "GraphQL", "C#", "Azure"],
  },
  {
    year: "Aug 2021 - Mar 2023",
    role: "Technology Consultant",
    company: "Razza Consulting Group, Inc.",
    description: `Worked as a consultant providing Web & Mobile Development services. Developed three websites in WordPress from the ground up and assisted in development of over eight other websites. Worked with a team and utilize Agile frameworks for fast delivery and continuous improvement of our products.`,
    technologies: ["WordPress", "AWS", "SiteGround"],
  },
  {
    year: "June 2020 - June 2021",
    role: "Java Developer",
    company: "Springboardbiz Solutions",
    description: `Contributed in the development and maintenance of a Human Capital Information System. Developed RESTful web service endpoints using Springboot and worked on the front-end layer using Angular`,
    technologies: ["Java", "Springboot", "Angular"],
  },
];

export const PROJECTS = [
  {
    title: "Personal Finance Tracker Application",
    image: project1,
    description:
      "A Java-based application designed for managing personal finances. Key features include user authentication, finance dashboard, income and expense management, and budgeting.",
    technologies: ["Java", "Springboot", "React", "PosgreSQL"],
  },
];

export const CONTACT = {
  address: "Quezon City, NCR, Philippines",
  phoneNo: "+639279118450",
  email: "techdotdcp@gmail.com",
};
