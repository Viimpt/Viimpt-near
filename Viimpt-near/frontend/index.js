// // import React from 'react'
// // import { createRoot } from 'react-dom/client'
// // import App from './App'
// // import { initContract } from './assets/js/near/utils'

// // const container = document.querySelector('#root')
// // const root = createRoot(container) // createRoot(container!) if you use TypeScript

// // window.nearInitPromise = initContract()
// //   .then(() => {
   
// //   })
// //   .catch(console.error)


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
