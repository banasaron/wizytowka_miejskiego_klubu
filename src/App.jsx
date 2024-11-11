import { useEffect, useState } from 'react'
import './App.css'
import './assets/fontello-391fdd04/css/fontello.css'

import TOPOLOGY from 'vanta/src/vanta.topology'
import { Nav } from './components/Nav';
import { About } from './components/About';
import { News } from './components/News';
import { Contact } from './components/Contact';


const headings = ['twój miejski klub piłkarski', 'badź na bieżąco!', 'skontaktuj się z nami'];





const App =()=> {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);

  const toggleDarkMode = () =>{
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  }


  useEffect(()=>{
    if (vantaEffect) vantaEffect.destroy();

    const newEffect = TOPOLOGY({
      el: "#root",
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: isDarkMode ? 0xbebebe : 0x7c7c7c,
      backgroundColor: isDarkMode ? 0x6b6b6b : 0xbebebe
    });
    setVantaEffect(newEffect);

    return() =>{
      if(newEffect) newEffect.destroy();
    }
  }, [isDarkMode]);

  
  return (
      <>
        <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    
        <About heading={headings[0]}/>

        <News heading={headings[1]}/>

        <Contact heading={headings[2]}/>

        <p className="text-center pb-10">&copy; 2024 Aron Banaś. Wszelkie prawa zastrzeżone.</p>
      </>
    
  );
}

export default App
