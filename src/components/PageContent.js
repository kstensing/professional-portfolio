import React from 'react';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PageContent({ currentPage }) {

  const renderPage = () => {
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
  };

  return (
    
    <div>
      {renderPage()}
    </div>
  );
}
