/* 
These import various components from the react-router-dom library,
as well as our custom components from ./components 
*/

import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

/* 
- App is a functional component that returns the structure and layout of the application's user interface. 
- The BrowserRouter component from react-router-dom is used to enable client-side routing for the application.
- The code inside the return statement defines the layout of the application, with various components being rendered 
in a specific order. 
- The Navbar and Hero components are nested inside a div element with a bg-hero-pattern CSS class, which sets a 
background image for the element.
- The About, Experience, Tech, Works, and Feedbacks components are rendered in order, each followed by a 
div element with a relative CSS class, which sets the positioning of the elements.
- The Contact and StarsCanvas components are rendered inside another div element with a relative CSS class,
which sets the positioning of the elements.
*/

const App = () => { 
  return (
    <BrowserRouter> 
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> 
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;