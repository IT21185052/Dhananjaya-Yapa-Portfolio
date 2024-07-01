import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import AnimatedLetters from '../AnimatedLetters';
import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.png';
import project4 from '../../assets/images/project-4.png';
import project5 from '../../assets/images/project-5.png';
import project6 from '../../assets/images/project-6.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: 'Learning Management System',
      description: '#Mern-stack #Docker #Stripe',
      github_link: 'https://github.com/MohammedShabry/LMS-DS',
    },
    {
      img: project2,
      name: 'Flight Booking System',
      description: '#Java-Servelets #MySQL',
      github_link: 'https://github.com/IT21185052/Flight_Management_System-Java_Servlet-MySQL',
    },
    {
      img: project3,
      name: 'Uni Management Restful API',
      description: '#NodeJS #JWT #Postman',
      github_link: 'https://github.com/IT21185052/University-Management-Restful-API-Backend-Node.js',
    },
    {
      img: project4,
      name: 'Space Frontend Application',
      description: '#ReactJS #Vite #NasaAPI #Tailwind',
      github_link: 'https://github.com/IT21185052/Space-Frontend-Application-Using-NASA-APIs-React.js-Vite-Tailwind-CSS-Nasa-API-',
    },
    {
      img: project5,
      name: 'Online Event Management System',
      description: '#Html #CSS #JavaScript #Php',
      github_link: 'https://github.com/IT21185052/Spark.lk---Online-Bill-Event-Management-System-HTML-CSS-Javascript-PHP-',
    },
    {
      img: project6,
      name: 'Online Ticket Checking System',
      description: '#React-Native Expo',
      github_link: 'https://github.com/IT21185052/Online-Ticketing-Checking-System-React-Native-Expo',
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
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p align="LEFT">
            As a dedicated Software Engineer undergraduate, I have embarked on numerous projects that 
            demonstrate my technical prowess and creativity in solving real-world problems.
            My work spans across various technologies, including frontend and backend 
            development, where I have built dynamic, responsive web applications, implemented 
            complex algorithms, and crafted user-friendly interfaces. 
          </p>
          <p>
            Each project reflects my commitment to excellence, attention to detail, and passion for
            continuous learning. Whether it's developing interactive applications, 
            optimizing performance, or integrating innovative features, I strive to deliver solutions 
            that not only meet but exceed expectations. Dive into my portfolio to explore my major 
            projects that highlight my journey, skills, and contributions to the field of software development.
          </p>
        </div>
        <div className="slide-container">
          <motion.div
            className="swiper-container"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 1,
            }}
          >
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="project-card">
                    <img src={project_info.img} alt={project_info.name} className="rounded-lg" />
                    <h3 className="text-xl my-4">{project_info.name}</h3>
                    <div className="links">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Github
                      </a>
                      <span className="text-green-400">{project_info.description}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
