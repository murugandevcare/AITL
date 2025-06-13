import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({ isDarkMode: false });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const value = useMemo(() => ({ isDarkMode }), [isDarkMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
