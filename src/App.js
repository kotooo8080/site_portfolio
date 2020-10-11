import React from 'react';
import './App.css';
import { Header, Home, About } from './components';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home />
      <About />
    </div>
  );
}

export default App;
