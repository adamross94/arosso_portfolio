/*
A React component called CanvasLoader that uses the useProgress hook 
from the "@react-three/drei" library to display a loading spinner and 
progress percentage.
*/

import { Html, useProgress } from "@react-three/drei";

/*
The CanvasLoader component renders an HTML div element at the center of 
the canvas, using the Html component from "@react-three/drei". Inside the div, 
there is a spinner element with a CSS class of "canvas-loader" and a percentage 
value that represents the progress, calculated using the progress variable obtained 
from the useProgress hook. The progress value is displayed as a string with 
two decimal places using the toFixed(2) method.
*/

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

/*
The CanvasLoader component is then exported as the default export, making it 
available for use in other parts of the application.
*/

export default CanvasLoader;