import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {themeColor} from '../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';

const SignIn: React.FC = () => {
  return (
    <>
      <SafeAreaView className="flex-1" style={{backgroundColor:themeColor.greenColor}}>
        <StatusBar barStyle={'dark-content'} />
        <View
          className="pb-4 px-3 pt-16 gap-4"
          style={{backgroundColor: themeColor.greenColor}}>
          {/* <Text className="text-5xl font-robotoBold tracking-widest text-center text-green-900">
            W E L C O M E
          </Text> */}
          <CustomText variant='h2'  className='font-roboto-400 text-center text-green-900'>W E L C O M E</CustomText>
          <Text className="text-1xl text-center text-green-900 mt-2 font-robotoBold">
            to
          </Text>
          <Text className="text-sm text-center text-green-900 mt-2 font-robotoBold">
            American Institute Of Tamil Language
          </Text>
          <View className="flex items-center mt-4">
            <Image
              source={require('../../../assets/images/logo.webp')}
              className="w-40 h-40"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="relative items-center bg-white">
          <View
            className="w-0 h-0 border-l-[240px] border-r-[240px] border-t-[125px] border-l-transparent border-r-transparent"
            style={{borderTopColor: themeColor.greenColor}}
          />
          <Text className="text-center text-sm mt-2 text-green-900 font-robotoBold absolute pl-5 pr-5">
            Every Tamil word you learn is a step closer to your heritage
          </Text>
        </View>
        <View className="flex-1 justify-center items-center bg-white">
          <TouchableOpacity className="px-6 py-3 rounded-lg" style={{backgroundColor:themeColor.greenColor}}>
            <Text className="text-white font-bold text-lg">Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
