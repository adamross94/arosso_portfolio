/*
A React component that renders a vertical timeline of work experiences using the 
react-vertical-timeline-component library, with animations using the framer-motion 
library.
*/

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

/*
The ExperienceCard component represents an individual work experience card within the vertical timeline. 
It displays the company name, job title, date, and a list of points related to the experience. 
The appearance of the card is customized using various styles and classes, including animations defined 
using the framer-motion library.
*/

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#ffffff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-white text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

/*
The Experience component displays a section title and a heading for "Work Experience". 
It then renders a vertical timeline using the VerticalTimeline component from 
react-vertical-timeline-component, which is populated with work experience data 
from the experiences constant array. For each work experience, it renders 
an ExperienceCard component.
*/

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

/*
The Experience component is wrapped with a higher-order component (HOC) called SectionWrapper, 
which takes care of adding additional styles and functionality to the section. The resulting 
component is then exported as the default export, which means it can be imported and used as 
a component in other parts of the application. The SectionWrapper HOC is passed two arguments, 
Experience component as the base component and the string "work" as a prop, which indicates 
the type of section being wrapped.
*/

export default SectionWrapper(Experience, "work");