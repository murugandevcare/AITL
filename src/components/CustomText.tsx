import React, {FC} from 'react';
import {Text as PaperText} from 'react-native-paper';
import {cssInterop} from 'nativewind';
import { TextStyle } from 'react-native';

cssInterop(PaperText, {
  className: 'style',
});

type LanguageType = 'English' | 'Tamil';

interface CustomTextProps {
  language?: LanguageType;
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
  return (
    <PaperText
      style={style}
      className={className}
      numberOfLines={numberOfLines}
      onLayout={onLayout}
      {...props}
    >
      {children}
    </PaperText>
  );
};

export default CustomText;
