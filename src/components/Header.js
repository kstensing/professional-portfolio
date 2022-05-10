import React from 'react';
import Nav from './Nav';


export default function Header({ handlePageChange, currentPage }) {

  return (
    
    <div className='header'>
      <h1>Kate Stensing</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
