import React, {createContext, useState, useContext, useEffect} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const lightTheme = {
  '--text': '#05090a',
  '--background': '#f0f5f9',
  '--primary': '#4a99c4',
  '--secondary': '#93c6e1',
  '--accent': '#6ab4dc',
    '--container': '#fff',
    '--home': 'rgba(145, 197, 225, 0.5)'
  }

  const darkTheme  = {
  '--text': '#f5f9fa',
  '--background': '#060b0f',
  '--primary': '#3b8ab5',
  '--secondary': '#1e516c',
  '--accent': '#236d95',
    '--container': '#2b4c55',
    '--home': 'rgba(46, 64, 73, 0.5)'
  }

  const [theme, setTheme] = useState('light');
  const [colors, setColors] = useState(lightTheme);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    const themeColors = theme === 'light' ? lightTheme : darkTheme;
    Object.keys(themeColors).forEach((key) => {
      root.style.setProperty(key, themeColors[key]);
    });
    setColors(themeColors);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setColors(darkTheme);
    } else {
      setTheme('light');
      setColors(lightTheme);
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
      <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);