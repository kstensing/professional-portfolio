import React, { useState } from 'react';
import Nav from './Nav';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
  return (
    
    <div>
      <h1>kstensing</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {renderPage()} */}
    </div>
  );
}
