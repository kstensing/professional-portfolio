import React, { useState } from 'react';
import Nav from './Nav';


export default function Header({ handlePageChange, currentPage }) {

  return (
    
    <div>
      <h1>Kate Stensing</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
