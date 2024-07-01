import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Photo from '../../assets/images/my-image.png'; // Add the path to your photo here

const sliderVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    },
  },
};

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['h', 'a', 'n', 'a', 'n', 'j', 'a' ,'y', 'a'];
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '-',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Full Stack Developer
        </motion.div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          </h1>
          <h2>
            <Typewriter
              words={['| Full Stack Developer | Undergraduate |']}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a href="Dhananjaya Yapa Software Engineering Intern Resume.pdf" download="Dhananjaya Yapa Software Engineering Intern Resume.pdf">
          <button className="btn-primary">
            DOWNLOAD CV
          </button>
          </a>
        </div>
        <div className="photo-container">
            <img src={Photo} alt="Profile" />
          </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
