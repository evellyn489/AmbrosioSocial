// FontSizeContext.js

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FontSizeContextType {
  fontSize: string;
  setFontSizeToSmall: () => void;
  setFontSizeToMedium: () => void;
  setFontSizeToLarge: () => void;
}

const FontSizeContext = createContext<FontSizeContextType>({
  fontSize: 'medium',
  setFontSizeToSmall: () => {},
  setFontSizeToMedium: () => {},
  setFontSizeToLarge: () => {}
});

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState(() => {
    // Verifica se há um tamanho de fonte salvo no localStorage
    const savedFontSize = localStorage.getItem('fontSize');
    return savedFontSize || 'medium'; // Se não houver, usa 'medium' como padrão
  });

  useEffect(() => {
    // Salva o tamanho da fonte no localStorage sempre que ele mudar
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  const setFontSizeToSmall = () => setFontSize('small');
  const setFontSizeToMedium = () => setFontSize('medium');
  const setFontSizeToLarge = () => setFontSize('large');

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSizeToSmall, setFontSizeToMedium, setFontSizeToLarge }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
