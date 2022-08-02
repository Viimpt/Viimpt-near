// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App'
// import { initContract } from './assets/js/near/utils'

// const container = document.querySelector('#root')
// const root = createRoot(container) // createRoot(container!) if you use TypeScript

// window.nearInitPromise = initContract()
//   .then(() => {
   
//   })
//   .catch(console.error)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
