import React, {ReactNode} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';

interface CustomScrollViewProps extends ScrollViewProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

const CustomScrollView: React.FC<CustomScrollViewProps> = ({
  children,
  className,
  backgroundColor = 'bg-white dark:bg-black',
  ...props
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      className={`flex-1 ${backgroundColor} ${className ?? ''}`}
      {...props}>
      {children}
    </ScrollView>
  );
};

export default CustomScrollView;
