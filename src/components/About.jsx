/*
The code defines a React component called About that represents a section of a website's
about page. It uses several other components, animations, and styles to create a 
responsive layout.
*/

import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

/*
The About component renders a title and introductory text with motion animations 
using the motion component from the "framer-motion" library. The introductory text 
has a fade-in animation effect applied to it using the variants prop.

Below that is a section with multiple ServiceCard components rendered in a flexbox 
layout with a gap of 10 units between each card. The ServiceCard component represents 
a service card item and takes in index, title, and icon as props to display the service 
title and icon. The ServiceCard component also has motion animations applied to it, 
including fade-in animation and tilt animation using the Tilt component from the 
"react-tilt" library.
*/

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-secondary text-[19px] max-w-3xl leading-[30px]'
      >
       I'm a skilled web app developer with expertise in React and SQL. I thrive on tackling intricate projects and strive to make them streamlined, expandable, and intuitive. I embrace progressive technologies to enhance user experiences, utilising modern charting libraries like ChartJS for dynamic data visualisation, and conducting comprehensive data analysis with modern AI tools. I'm committed to remaining current with the most recent advancements in the field, ensuring I'm able to integrate state-of-the-art approaches into projects.
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

/*
The About component is then wrapped with the SectionWrapper higher-order component (HOC), 
which adds additional styles and functionality to the section, and it is exported as the
default export. The SectionWrapper HOC takes in the About component as its child and 
applies styles with the "about" CSS class, making it suitable for use as a section in a 
larger website or application.
*/

export default SectionWrapper(About, "about");