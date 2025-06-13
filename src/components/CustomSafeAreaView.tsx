import React, {ReactNode} from 'react';
import {ViewStyle, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useThemeContext} from '../context/ThemeContext';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  className?: string;
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
}

const CustomSafeAreaView: React.FC<Props> = ({
  children,
  style,
  className,
  backgroundColor = "bg-theme-color",
  statusBarBackgroundColor = 'white',
  ...props
}) => {
  const {isDarkMode} = useThemeContext();

  return (
    <SafeAreaView style={style} className={`flex-1 ${backgroundColor} ${className ?? ''}`} {...props}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={statusBarBackgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
