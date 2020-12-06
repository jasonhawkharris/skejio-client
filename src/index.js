import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CloudinaryContext } from 'cloudinary-react';

import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <CloudinaryContext>
          <App />
        </CloudinaryContext>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
