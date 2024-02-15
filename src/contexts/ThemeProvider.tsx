import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const toggleTheme = (): void => {
        setDarkTheme(prevTheme => !prevTheme);
    };

    const value: ThemeContextType = {
        darkTheme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
