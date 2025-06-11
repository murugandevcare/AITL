import React, { FC } from 'react';
import { Text, TextStyle, View } from 'react-native';
 
type LanguageType = 'English' | 'Tamil';

interface CustomTextProps {
  fontClassName?: string
  language?: LanguageType
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  className?: string;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
}

const CustomText: FC<CustomTextProps> = ({
  style,
  language = 'English',
  children,
  numberOfLines,
  className,
  onLayout,
  ...props
}) => {

  const baseStyle = Array.isArray(style) ? Object.assign({}, ...style) : style || {};
  const finalStyle: TextStyle = {
    ...baseStyle,
  };

  return (
      <Text
        style={finalStyle}
        numberOfLines={numberOfLines}
        onLayout={onLayout}
        className={className}
        {...props}
      >
        {children}
      </Text>
  );
};

export default CustomText;
