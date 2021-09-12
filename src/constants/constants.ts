//Contact Logos
import email from "../assets/Contact/email.png";
import facebook from "../assets/Contact/facebook.png";
import github from "../assets/Contact/github.png";
import linkedin from "../assets/Contact/linkedin.png";
import resume from "../assets/Contact/resume.png";
import Resume from "../assets/Resume.pdf";

//Interests Pictures
import music from "../assets/Interests/music.jpg"
import swimming from "../assets/Interests/swimming.jpg";

//Profile Picture
import cameronMcCuaig from "../assets/CameronMcCuaig.jpg";

//Telus Job Pictures
import telus from "../assets/Telus/telus.png";
import telusTransparent from "../assets/Telus/telus-transparent.png"
import testing from "../assets/Telus/testing.png";
import binpacking from "../assets/Telus/binpacking.png";

//iS5 Job Pictures
import iS5 from "../assets/iS5/iS5.png";
import iS5Transparent from "../assets/iS5/iS5Transparent.png";
import iS5Docker from "../assets/iS5/docker.png";
import iS5Snmpsim from "../assets/iS5/snmpsim.png";
import iS5Syslog from "../assets/iS5/syslog.png";

//Necessary Types, Enums, and Interfaces
import {
  IContactState,
  IInterestState,
  IProfileState,
  IExperienceState,
  RoutesEnum,
  IJob,
} from "./interfaces";

//Information for Contact Me Section
export const contactInfo: IContactState = {
  mediaInfo: [
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/in/cameron-mccuaig-269992193/`,
      logo: linkedin,
    },
    {
      title: "GitHub",
      link: `https://github.com/cdmccuaig`,
      logo: github,
    },
    {
      title: "Facebook",
      link: `https://www.facebook.com/cameron.mccuaig.9`,
      logo: facebook,
    },
    {
      title: "Email",
      link: `mailto:cdmccuaig@gmail.com`,
      logo: email,
    },
    {
      title: "Resume",
      link: Resume,
      logo: resume,
    },
  ],
  title: "Let's Connect!",
  info:
    "Reach out whenever I'm always open to talk. I'm always looking for any opportunity to work with different people and learn new technologies!",
};

//Information for Interests Section
export const interestInfo: IInterestState = {
  title: "Interests and Hobbies",
  info: "A few things about me.",
  interestInfo: [
    {
      title: "Competitive Swimming",
      info: `I'm on the Waterloo Varsity Swim Team and have been swimming competitively for over 11 years. Competing as a para swimmer, I have broken 2 Canadian Para Swimming records in the 50 and 100 metre backstrokes, in the S9 class. In 2014 I represented Canada internationally at the International Children's Games.`,
      image: swimming,
    },
    {
      title: "Music",
      info: `In my free time, I enjoy listening to and playing music. I have played piano in the past and I have been playing cello for over 8 years. My favourite genre of music to listen to is classic rock.`,
      image: music,
    },
  ],
};


//Information for Profile Section
export const profileInfo: IProfileState = {
  background: cameronMcCuaig,
  title: "Hi, I'm Cameron",
  subtitle:
    "Computer Scientist & Competitive Swimmer.",
  info: `I'm a university student at the University of Waterloo. I love learning new technologies and working with new people. As of right now, some of my interests include web development, game development and algorithms. I'm keen on learning and love finding innovative solutions to challenging problems`,
};

//Information for Telus Job
export const telusInfo: IJob = {
  title: "Telus Health",
  description: `As a Software Developer in Test at Telus, I had the opportunity to design and maintain automated test cases for an EMR (Electronic Medical Record), an application that stores medical files for doctors. I also had the opportunity to work on other projects, in order to improve the quality of the testing framework. Telus taught me a lot about how to build proper code that is scalable and allows a full team of developers to work together throughout developing and refining a project.`,
  position: "Software Developer in Test",
  dateRange: "January-April 2020",
  logo: telus,
  website: `https://telus.com/`,
  link: RoutesEnum.TELUS,
  htmlName: "telus",
  navbarLogo: telusTransparent,
  projects: [
    {
      title: "Automated Testing",
      info: `Implemented and maintained over 300+ automated test cases for a web-based EMR. I also
      constantly looked for ways to improve the testing framework, which included removing duplicate 
      methods and replacing hard-coded wait times with dynamic wait times.`,
      picture: testing,
      technologies: [
        "Python",
        "Selenium",
        "Robot Framework",
        "Jenkins",
      ],
      htmlName: "testing",
    },
    {
      title: "Load-Balancing Algorithm",
      info: `Designed and implemented a fix to the load-balancing algorithm, an algorithm which split test cases across multiple servers.
      The algorithm was implemented using a binpacking algorithm library that is found in python. The implementation reduced nightly execution times by over 6%.`,
      picture: binpacking,
      technologies: ["Python", "Jenkins"],
      htmlName: "balancing-algorithm",
    },
  ],
};

export const iS5Info: IJob = {
  title: "iS5 Communications Inc.",
  description: `As a Software Developer in at iS5 Communications Inc., I had the opportunity to use industry standard tools such as Docker and Gitlab pipelines to re-inforce CI / CD development principles in iS5 repositories. I also had the chance to work on an snmp simulator, and got a little bit of experience working on the backend of Java based web application.`,
  position: "Software Developer - Innovation Team",
  dateRange: "May-August 2021",
  logo: iS5,
  website: `https://is5com.com/`,
  link: RoutesEnum.iS5,
  htmlName: "iS5",
  navbarLogo: iS5Transparent,
  projects: [
    {
      title: "SNMP Simulator",
      info: `Dockerized an open source SNMP simulator called snmpsim, and cloned iS5 ethernet device data using
      snmpwalk to simulate a real time iS5 Communications Inc. iES20GF ethernet switch. This simulated device can be added
      to an instance of iS5 Communciations Inc.'s RAPTOREye (a network management system).`,
      picture: iS5Snmpsim,
      technologies: [
        "Python",
        "Docker",
      ],
      htmlName: "snmpsim",
    },
    {
      title: "RFC 5424 Syslog Parser",
      info: `Designed and tested an RFC 5424 Syslog parser for iS5's RAPTOREye, a network management system. Along with co-workers, 
      the ability to receive RFC 5424 Syslog messages and properly display important messages was accomplished.`,
      picture: iS5Syslog,
      technologies: ["Java"],
      htmlName: "syslog",
    },
    {
      title: "Gitlab Pipelines",
      info: `Implemented multiple gitlab pipelines to automatically build iS5 Projects whenever a code change was pushed to the Gitlab repository.
      One of the projects was to automatically build iS5 documentation when there was a code change, as opposed to building it manually.`,
      picture: iS5Docker,
      technologies: ["Docker", "Gitlab Pipelines"],
      htmlName: "docker",
    },
  ],
};

//Information for Experience Section
export const experienceInfo: IExperienceState = {
  title: "My Experience",
  jobs: [telusInfo, iS5Info],
};

//Information for Project Section
export const projectInfo = {
  title: "Projects",
  info: "A few of the projects I've worked on",
  projects: [
    {
      title: "Nowhere to Go",
      info: "",
      image: "",
      technologies: [],
    },
  ],
};

//Resume id to access online
export const resumeId: string = "1zLIG6ByMmqk_DagaXowzMIjvcyGL8RZy";
