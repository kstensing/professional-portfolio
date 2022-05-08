import React, { useState } from 'react';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PageContent({ currentPage }) {
  // const [currentPage] = useState('Home');

  const renderPage = () => {
    console.log(currentPage)
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    } if (currentPage === 'Contact') {
      return <Contact />;
    }
    //return <About />;
  };

  //const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div>
      {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {renderPage()}
    </div>
  );
}
