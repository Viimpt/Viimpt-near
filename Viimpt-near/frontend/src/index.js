// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// //import store from './redux/store';
// import "bootstrap/dist/css/bootstrap.min.css";


// const listener = () => {
//   ReactDOM.render(
//     <Provider store={store} >
//       <App indexProp="react"/>
//     </Provider>,
//     document.getElementById('root')
//   );
// };

// store.subscribe(listener);
// listener();

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode> 
    <Router> 
      <App />
    </Router>
  </React.StrictMode>
  ,document.getElementById('root')
);