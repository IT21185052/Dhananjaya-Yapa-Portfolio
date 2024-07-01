import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FaPhp,FaHtml5,FaCss3Alt,FaJava,FaPython,FaNodeJs,FaReact,FaBootstrap,FaGitAlt } from 'react-icons/fa';
import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus,SiKotlin,SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";


const Skills = () => {

    const skills = [
        {
          logo: <FaHtml5 />,
          level: "Html",
          count: 0,
        },
        {
          logo: <FaCss3Alt />,
          level: "CSS",
          count: 0,
        },
        {
          logo: <RiJavascriptFill />,
          level: "JavaScript",
          count: 0,
        },
        {
          logo: <FaJava />,
          level: "Java",
          count: 0,
        },
        {
          logo: <FaPython />,
          level: "Python",
          count: 0,
        },
        {
          logo: <FaNodeJs />,
          level: "NodeJS",
          count: 0,
        },
        {
          logo: <FaReact />,
          level: "React",
          count: 0,
        },
        {
          logo: <SiCplusplus />,
          level: "C++",
          count: 0,
        },
        {
          logo: <SiKotlin />,
          level: "Kotlin",
          count: 0,
        },
        {
          logo: <FaPhp />,
          level: "Php",
          count: 0,
        },
        {
          logo: <DiMongodb />,
          level: "MongoDB",
          count: 0,
        },
        {
          logo: <TbFileTypeSql />,
          level: "SQL",
          count: 0,
        },
        {
          logo: <FaBootstrap />,
          level: "Bootstrap",
          count: 0,
        },
        {
          logo: <GrOracle />,
          level: "Oracle",
          count: 0,
        },
        {
          logo: <SiPostman />,
          level: "Postman",
          count: 0,
        },
        {
          logo: <FaGitAlt />,
          level: "Git",
          count: 0,
        },
      ];



  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            Experience in Frontend and Backend coding including technologies like 
            <span className="highlight"> Java, JavaScript, Python, Html, CSS, Tailwind CSS, C++, Bootstrap, Kotlin,
            Springboot, ReactJS, NodeJS, ExpressJS, Mern-Satck.</span>
          </p>
          <p align="LEFT">
            As well as experienced in SQL and NoSQL Databases including <span className="highlight">MongoDB, Oracle  
            and MySQL.</span>  Additionally experienced in tools & Technologies like <span className="highlight">Figma, Postman,
            Git.</span> 
          </p>
          <p>
            Visit my <a href="https://www.linkedin.com/in/dhananjaya-yapa-16b14221a/" className="linkedin-link" target="_blank" rel="noopener noreferrer"> LinkedIn </a>profile for more details.
          </p>
        </div>
        <div className="skill-container">
        
  {skills?.map((skill, i) => (
    <div key={i} className="skill-card">
      <div
        style={{
          '--skill-count': `${skill.count}%`,
        }}
        className="skill-progress"
      >
        <div className="skill-logo">
          {skill.logo}
        </div>
      </div>
      <p className="skill-level">{skill.level}</p>
    </div>
  ))}
</div>

        
      </div>
      <Loader type="pacman" />
    </>
  )
};

export default Skills;









