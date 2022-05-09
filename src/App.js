import React, { useState } from 'react';
import './App.css';
import Page from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

   return (
     <div>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      <Page currentPage={currentPage} />
      <Footer />
      </div>
   );
}

export default App;
