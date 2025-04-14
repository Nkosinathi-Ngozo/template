import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the theme context
interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Set the initial theme (you can also check localStorage or AsyncStorage for persistent theme)
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
