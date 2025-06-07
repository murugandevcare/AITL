import React from 'react';
import { View, Text } from 'react-native';
import "./global.css"

const App: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center gap-5 bg-blue-500">
      <Text className="text-4xl  text-white font-tamilRegular" style={{ fontFamily: 'NotoSansTamil_Condensed-Bold' }}>வணக்கம்!</Text>
      <Text className="text-4xl  text-white font-tamilBold">வணக்கம்!</Text>
      <Text className="text-4xl text-white">வணக்கம்!</Text>
       <Text style={{ fontFamily: 'Roboto', fontSize: 22 }}>
        Hello, Roboto Regular!
      </Text>
      <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 22 }}>
        Hello, Roboto Bold!
      </Text>
    </View>
  );
};

export default App;