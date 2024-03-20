// FontSizeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FontSizeContextType {
  fontSize: string;
  setFontSizeToSmall: () => void;
  setFontSizeToMedium: () => void;
  setFontSizeToLarge: () => void;
  setGlobalFontSize: (size: string) => void; // Adicione esta função
}

const FontSizeContext = createContext<FontSizeContextType>({
  fontSize: 'medium',
  setFontSizeToSmall: () => {},
  setFontSizeToMedium: () => {},
  setFontSizeToLarge: () => {},
  setGlobalFontSize: () => {} // Inicialize a função
});

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    return savedFontSize || 'medium';
  });

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  const setFontSizeToSmall = () => setFontSize('small');
  const setFontSizeToMedium = () => setFontSize('medium');
  const setFontSizeToLarge = () => setFontSize('large');
  const setGlobalFontSize = (size: string) => setFontSize(size); // Implemente esta função

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSizeToSmall, setFontSizeToMedium, setFontSizeToLarge, setGlobalFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
