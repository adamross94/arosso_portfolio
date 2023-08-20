/* Provides a set of reusable animation variants that can be used with Framer Motion to create various 
animation effects, including fading, sliding, zooming, and staggering animations. These variants help 
simplify the process of applying consistent and appealing animations to React components. */

/* Generates a variant for animating text elements. The hidden state defines initial properties 
(off-screen and transparent). The show state defines the animation properties (movement and opacity) 
with a spring-like transition. */

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
/* Generates a variant for fading in elements. Takes arguments for direction of entry, type of transition, 
delay, and duration. Hidden defines initial properties (off-screen and transparent). Show defines the 
animation properties (opacity and potential movement) with a customizable transition. */

  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
/* Generates a variant for zooming in elements. Takes arguments for delay and duration.
Hidden defines initial properties (scaled down and transparent). Show defines the animation 
properties (full scale and opacity) with a tween-like transition. */

  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
/* slideIn: Generates a variant for sliding in elements. Takes arguments for direction of entry, 
type of transition, delay, and duration. Hidden defines initial properties (off-screen in specified direction).
Show defines the animation properties (movement) with a customizable transition. */

  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
/* staggerContainer: Generates a variant for staggering children animations. Takes arguments for staggering 
children and delaying children. This variant is used to create staggered animations for a container's child 
elements. */

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };