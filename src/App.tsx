import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Easy from './components/Easy';
import Medium from './components/Medium';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
