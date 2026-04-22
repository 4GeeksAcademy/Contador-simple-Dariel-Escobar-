import React from 'react'
import ReactDOM from 'react-dom/client'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

import SecondsCounter from './components/Home'; // (si aún se llama Home.jsx)

let counter = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter} />
    </React.StrictMode>
  );
  counter++;
}, 1000);
