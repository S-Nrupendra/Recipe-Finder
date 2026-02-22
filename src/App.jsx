import React, { useState } from 'react'
import "./App.css";
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = ()=>{
    const newMode = !darkMode
    setDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
  }

  return(
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Home />
    </div>
  )
}

export default App
