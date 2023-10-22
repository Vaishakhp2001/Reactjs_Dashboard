import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Jobs } from './pages/Jobs';
import { Dashboard } from './pages/Dashboard';
import { Navbar } from './layouts/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/jobs' element={<Jobs />}/>
      <Route path='/' element={<Dashboard />}/>
    </Routes>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
