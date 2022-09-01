import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtube = new Youtube('AIzaSyDyJyuKjkFf7sFJ7qgf9Wy5or87E8XWwLg');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);

// If
