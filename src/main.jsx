/* Imports the necessary modules for React, ReactDOM, 
the main app component and also the CSS file for styling purposes. */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*  Creates a new root for rendering the React application. 
The root element is obtained by selecting the HTML element with the ID 'root' 
using document.getElementById('root'). */

ReactDOM.createRoot(document.getElementById('root')).render(

/* Wraps the <App /> component with <React.StrictMode>. 
This is a development tool provided by React that helps identify potential problems 
in your application during development by enabling additional checks and warnings. */

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
