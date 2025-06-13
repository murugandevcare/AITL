import React from 'react';
import './global.css';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider, useThemeContext} from './src/context/ThemeContext';
import {View} from 'react-native';

const App: React.FC = () => {
  const {isDarkMode} = useThemeContext();
  return (
    <ThemeProvider>
      <View className={isDarkMode ? 'flex-1 dark' : 'flex-1'}>
        <Navigation />
      </View>
    </ThemeProvider>
  );
};

export default App;
