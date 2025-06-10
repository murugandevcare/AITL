import React, { FC } from 'react';
import { Text, TextStyle, Platform, View } from 'react-native';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8'| 'h9';
type PlatformType = 'android' | 'ios';

interface CustomTextProps {
  variant?: Variant;
  fontFamily?: 'tamil_regular' | 'tamil_bold' | 'roboto_black' | 'roboto_bold';
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  className?: string;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
}

const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
  h1: { android: 48, ios: 46 },
  h2: { android: 40, ios: 38 },
  h3: { android: 36, ios: 34 },
  h4: { android: 32, ios: 30 },
  h5: { android: 28, ios: 26 },
  h6: { android: 24, ios: 22 },
  h7: { android: 20, ios: 18 },
  h8: { android: 16, ios: 14 },
  h9: { android: 14, ios: 12 },
};

const CustomText: FC<CustomTextProps> = ({
  variant,
  style,
  children,
  numberOfLines,
  className,
  onLayout,
  ...props
}) => {
  const platform = Platform.OS as PlatformType;

  const fontSize = variant ? fontSizeMap[variant]?.[platform] : undefined;

  const computedFontSize = fontSize !== undefined ? fontSize : undefined;

  const baseStyle = Array.isArray(style) ? Object.assign({}, ...style) : style || {};

  const finalStyle: TextStyle = {
    ...baseStyle,
    ...(computedFontSize !== undefined ? { fontSize: computedFontSize } : {}),
  };

  return (
    <View>
      <Text
        style={finalStyle}
        numberOfLines={numberOfLines}
        onLayout={onLayout}
        className={className}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
};

export default CustomText;
