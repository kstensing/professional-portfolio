// import logo from './logo.svg';
import React from "react";
import './App.css';
import PortfolioComponent from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
   return (
     <div>
      <Header />
        <PortfolioComponent />
      <Footer />
      </div>
   );
}

export default App;
