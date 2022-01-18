import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App';
import { BackgroundProvider } from "./components/context/background";

ReactDOM.render(
  <Router>
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  </Router>,
  document.getElementById('root')
);
