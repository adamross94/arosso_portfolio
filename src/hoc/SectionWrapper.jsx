/*
The code defines a higher-order component (HOC) called StarWrapper that wraps around 
another component, referred to as Component. The StarWrapper HOC applies animations 
and styles to the Component when it is rendered.
*/

import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/*
The StarWrapper HOC uses the motion component from the "framer-motion" library to apply 
animations to the wrapped Component. The animations are defined using the variants prop, 
which is set to the staggerContainer() function from the "../utils/motion" module. 
The initial prop is set to 'hidden', and the whileInView prop is set to 'show', 
meaning that the component is initially hidden and then animate to a "show" state 
when coming into view.

The viewport prop is used to define the viewport settings for triggering the animation. 
In this case, it is set to { once: true, amount: 0.25 }, meaning that the animation will
only play once when the component comes into view and it will start when the component 
is 25% visible in the viewport.

The StarWrapper HOC also adds additional styles to the rendered output. It applies padding,
sets the maximum width to "7xl", centers the component with "mx-auto", and sets the z-index 
to 0 with "relative" positioning.
*/

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

 /*
The StarWrapper HOC is exported as the default export of the module, making it
available for use in other parts of the code.
 */ 

export default StarWrapper;