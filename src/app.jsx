import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Contents from './components/contents';

function app(props) {
  return (
    <>
      <Navbar></Navbar>
      <Contents></Contents>
    </>
  );
}

export default app;
