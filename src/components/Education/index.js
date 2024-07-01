import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import logo from "../../assets/images/2.png";
import logo2 from "../../assets/images/1.png";
import logo3 from "../../assets/images/4.png";
import { motion } from 'framer-motion';
import './index.scss'

const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container education-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              idx={15}
            />
          </h1>
          <p>
            I have built a solid educational foundation that underpins my expertise 
            as a Software Engineer. Currently, I am an undergraduate, continuously 
            enhancing my knowledge and skills. Explore this to learn more about my 
            educational background, achievements.
          </p>
        </div>
        <div className="education">
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          style={{ fontWeight: 'bold' }}
          iconStyle={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={<img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />}
          date="2021-Present"
          dateClassName="date"
        >
          <motion.h2
            style={{ fontWeight: 'bold' }}
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
            Bachelor's Degree
          </motion.h2>
          <motion.small
            style={{ color: '#000' }}
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
            Sri Lanka Institute Of Information Technology (SLIIT)
          </motion.small>
          <div className="description">
            <motion.p
              style={{ fontWeight: 'bold',fontSize:10 }}
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
              Currently reading for my Bachelors' Degree in Software Engineering (BSc. (Hons) Information Technology Specialization in Software Engineering) at Sri Lanka Institute of Information Technology (SLIIT).
            </motion.p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          style={{ fontWeight: 'bold' }}
          iconStyle={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={<img src={logo3} alt="Logo" style={{ width: '50px', height: '50px' }} />}
          date="2019-2020"
          dateClassName="date"
          
        >
          <motion.h2
            style={{ fontWeight: 'bold' }}
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
            Diploma In English
          </motion.h2>
          <motion.small
            style={{ color: '#000' }}
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
            Esoft Metro Campus
          </motion.small>
          <div className="description">
            <motion.p
              style={{ fontWeight: 'bold',fontSize:10 }}
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
              Completed Diploma in English with A grade at Esoft Metro Campus Kurunegala.
            </motion.p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={<img src={logo2} alt="Logo2" style={{ width: '50px', height: '50px' }} />}
          date="2019"
          dateClassName="date"
        >
          <motion.h2
            style={{ fontWeight: 'bold' }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 1,
            }}
          >
            G.C.E (Advanced Level)
          </motion.h2>
          <motion.small
            style={{ color: '#000', fontWeight: 'bold' }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 1,
            }}
          >
            St. Anne's College, Kurunegala
          </motion.small>
          <div className="description">
            <motion.p
              style={{ fontWeight: 'bold' ,fontSize:10}}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeIn',
                duration: 1,
              }}
            >
              Passed General Certificate Advanced Level Exam in Other stream with 3 C (Combined Maths, Physics, ICT) Passes.<br />
              INDEX NO: 8155070
            </motion.p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Education