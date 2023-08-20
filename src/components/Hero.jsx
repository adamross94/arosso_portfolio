import { motion } from "framer-motion"; // Library for animations.

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

/*

This is a React component that represents the Hero section of the
portfolio. The component consists of:

x A section element that takes up the full width and height of the screen and is centered horizontally.

x Inside the section, there is a div element that is absolutely positioned to cover the entire section 
and is used to display content in a flexbox layout, with a small gap between the child elements.

x Inside the div, there are two child divs: one with a circular shape and a background color of "#915EFF", 
and another with a vertical gradient background color. These elements are used for visual styling.

x Below the content div, there is a "ComputersCanvas" component, which is a canvas for rendering computer-related visuals.

x At the bottom of the section, there is a div element that is absolutely positioned to be at the bottom center of the section, 
which contains a link to scroll to the About section of the portfolio.

x Inside the link div, there is another div element with a rounded-3xl border and a motion.div element inside, 
which is animated to move up and down repeatedly using Framer Motion's animation features. 
The animated element has a background color of "secondary" and is used for visual styling.

*/

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2bc5cb]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#2bc5cb]'>Adam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I specialise in web app development <br className='sm:block hidden' />
            and data visualisation!
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;