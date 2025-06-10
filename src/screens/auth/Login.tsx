import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Login: React.FC = () => {
  return (
     <ScrollView className="p-4 bg-white">
      {/* NotoSansTamil Examples */}
      <View className="mb-6">
        <Text className="text-xl font-bold mb-2">NotoSansTamil Fonts</Text>
        
        <Text className="font-tamil-100 text-base mb-1">
          NotoSansTamil-Black - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-200 text-base mb-1">
          NotoSansTamil-Bold - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-300 text-base mb-1">
          NotoSansTamil-ExtraBold - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-400 text-base mb-1">
          NotoSansTamil-ExtraLight - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-500 text-base mb-1">
          NotoSansTamil-Light - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-600 text-base mb-1">
          NotoSansTamil-Medium - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-700 text-base mb-1">
          NotoSansTamil-Regular - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-800 text-base mb-1">
          NotoSansTamil-SemiBold - தமிழ் டெக்ஸ்ட்
        </Text>
        
        <Text className="font-tamil-900 text-base mb-1">
          NotoSansTamil-Thin - தமிழ் டெக்ஸ்ட்
        </Text>
      </View>

      {/* Roboto Examples */}
      <View className="mb-6">
        <Text className="text-xl font-bold mb-2">Roboto Fonts</Text>
        
        <Text className="font-roboto-black text-base mb-1">
          Roboto-Black - Sample Text
        </Text>
        
        <Text className="font-roboto-black-italic text-base mb-1">
          Roboto-BlackItalic - Sample Text
        </Text>
        
        <Text className="font-roboto-bold text-base mb-1">
          Roboto-Bold - Sample Text
        </Text>
        
        <Text className="font-roboto-bold-italic text-base mb-1">
          Roboto-BoldItalic - Sample Text
        </Text>
        
        <Text className="font-roboto-extrabold text-base mb-1">
          Roboto-ExtraBold - Sample Text
        </Text>
        
        <Text className="font-roboto-extrabold-italic text-base mb-1">
          Roboto-ExtraBoldItalic - Sample Text
        </Text>
        
        <Text className="font-roboto-extralight text-base mb-1">
          Roboto-ExtraLight - Sample Text
        </Text>
        
        <Text className="font-roboto-extralight-italic text-base mb-1">
          Roboto-ExtraLightItalic - Sample Text
        </Text>
        
        <Text className="font-roboto-italic text-base mb-1">
          Roboto-Italic - Sample Text
        </Text>
        
        <Text className="font-roboto-light text-base mb-1">
          Roboto-Light - Sample Text
        </Text>
        
        <Text className="font-roboto-light-italic text-base mb-1">
          Roboto-LightItalic - Sample Text
        </Text>
        
        <Text className="font-roboto-medium text-base mb-1">
          Roboto-Medium - Sample Text
        </Text>
        
        <Text className="font-roboto-medium-italic text-base mb-1">
          Roboto-MediumItalic - Sample Text
        </Text>
        
        <Text className="font-roboto-regular text-base mb-1">
          Roboto-Regular - Sample Text
        </Text>
        
        <Text className="font-roboto-semibold text-base mb-1">
          Roboto-SemiBold - Sample Text
        </Text>
        
        <Text className="font-roboto-semibold-italic text-base mb-1">
          Roboto-SemiBoldItalic - Sample Text
        </Text>
        
        <Text className="font-roboto-thin text-base mb-1">
          Roboto-Thin - Sample Text
        </Text>
        
        <Text className="font-roboto-thin-italic text-base mb-1">
          Roboto-ThinItalic - Sample Text
        </Text>
      </View>

      {/* Roboto Semi Condensed Example */}
      <View>
        <Text className="text-xl font-bold mb-2">Roboto Semi Condensed</Text>
        <Text className="font-roboto-semi-condensed-thin-italic text-base">
          Roboto_SemiCondensed-ThinItalic - Sample Text
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;