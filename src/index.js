import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header1 from './header';
import App from './App';
import Cheemz from './cheemz';
import Category from './categorySelect';
import './index.css';
import Pakistan from './Paksitan';
import India from './Indian';
import Tom from './Tom';
import Trending from './Trending';
import Others from './Others';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <React.StrictMode>
      <Header1 />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/Cheemz" element={<Cheemz />} />
        <Route path="/Random" element={<App />} />
        <Route path="/Tom" element={<Tom />} />
        <Route path="/Pakistan" element={<Pakistan />} />
        <Route path="/India" element={<India />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Others" element={<Others />} />
      </Routes>
    </React.StrictMode>
  </Router>
);