/*
This code is a React component that renders a section displaying technology icons
in a grid layout using the BallCanvas component. It imports BallCanvas, SectionWrapper,
and technologies from different files
*/

import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

/*
The Tech component maps over an array of technologies and renders BallCanvas 
components for each technology, with the technology's icon as a prop. 
The BallCanvas components are wrapped in divs with a width and height of 28 units, 
and they are displayed in a flexbox container with a row direction, wrap property, 
and justified content. 
*/

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-16'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

/*
Finally, the Tech component is exported with SectionWrapper as a higher-order component 
(HOC) with an empty string as the second argument.
*/

export default SectionWrapper(Tech, "");