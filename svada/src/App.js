import React, { useEffect, useState, useRef } from 'react';
import './design.css';
import HeaderLogo from './header3.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const outside = useRef();
  const handleClick = e => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  }
  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick);

    return () => {
      getClick()
    }
  }, [])

  return (
    <div className="App" ref={outside}>
      <div className="header"><img src={HeaderLogo} alt="header" /></div>
      {isOpen ? (
        <div className="modal">
          <p>Muntermangsomhet</p>
        </div>
      ) : null}
      <div className="buttonContainer">
        <button className="button" onClick={() => setIsOpen(!isOpen)}> Dagens ord</button>
      </div>
      <div className="buttonContainer">
        <button className="button" onClick={() => setIsOpen(!isOpen)}> Dagens setning</button>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
