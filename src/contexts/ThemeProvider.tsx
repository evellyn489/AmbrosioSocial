import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextData {
 darkTheme: boolean;
 toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(() => {
    const theme = localStorage.getItem('darkTheme');
    return theme === 'true';
 });

 useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
 }, [darkTheme]);

 const toggleTheme = () => {
    setDarkTheme(!darkTheme);
 };

 return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
 );
};

export function useTheme() {
 return useContext(ThemeContext);
}