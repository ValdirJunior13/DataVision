import React from 'react';
import Header from '../src/pages/Header';
import Footer from '../src/pages/Footer';
import Home from '../src/pages/Home'; 

const App = () => {
  console.log("App component rendered");

return (
    <div>
    <Header />
    <main>
    <Home /> 
    </main>
    <Footer />
    </div>
);
};

export default App;
