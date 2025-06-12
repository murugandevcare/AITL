import {FC} from 'react';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {cssInterop} from 'nativewind';

type Mode = 'text' | 'contained' | 'outlined' | 'elevated' | 'contained-tonal';

cssInterop(PaperButton, {
  className: 'style',
});

interface CustomButtonProps {
  mode?: Mode;
  onPress?: (event: GestureResponderEvent) => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  children?: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
  mode = 'contained',
  onPress,
  className,
  style,
  disabled = false,
  children,
  ...props
}) => {
  const combinedClassName = `${className} ${disabled ? 'opacity-65' : ''}`.trim();
  return (
    <PaperButton
      mode={mode}
      style={style}
      className={combinedClassName}
      disabled={disabled}
      {...props}
      onPress={onPress}>
      {children}
    </PaperButton>
  );
};

export default CustomButton;
