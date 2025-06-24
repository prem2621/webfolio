import React from 'react'
import App from './App'
// import reportWebVitals from './reportWebVitals';
// import '../node_modules/normalize.css'
import "normalize.css"
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<BrowserRouter>
  <App />
</BrowserRouter>);



