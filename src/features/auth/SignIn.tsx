import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignIn: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-green-400 h-2/4 relative gap-y-2">
        <Text className="text-6xl font-bold text-green-900 tracking-widest text-center mt-16">
          W E L C O M E
        </Text>
        <Text className="text-2xl text-center">to</Text>
        <Text className="text-xl text-center mt-3">
          American Institute Of Tamil Language
        </Text>
        <Text className="text-center text-sm text-black mt-6 px-4">
          Every Tamil word you learn is a step closer to your heritage
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
