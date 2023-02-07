
import { createContext, useState } from 'react';
import './App.css';
import Footer from './components/Footer';

export const ThemeContext= createContext('');

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme =()=>{
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={'wrapper' + theme}>
        <div className='toggler' onClick={toggleTheme}>
          <svg
            className={`dark-mode-toggle__icon ${
              theme === 'dark' && 'dark-mode-toggle__icon--moon'
            }`}
            width="">
              

          </svg>

        </div>
        
          <button onClick={()=>{
            setTheme('light');
          }}
          >
            *
          </button>
          <button onClick={()=>{
            setTheme('dark')
          }}
          >
            sar
          </button>
        
          <h1> My blog</h1>
          <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
