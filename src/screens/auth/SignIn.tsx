import React from 'react';
import {
  View,
  Image,
  StatusBar,
} from 'react-native';
import {theme} from '../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import CustomButton from '../../components/CustomButton';

const SignIn: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View className="flex-1 bg-theme-color">
      <SafeAreaView className="flex-1">
        <StatusBar barStyle={'light-content'} />
        <View className="pb-4 px-3 pt-16 gap-5">
          <CustomText className="text-2xl font-[700] text-center ">
            WELCOME
          </CustomText>
          <CustomText className="text-1xl text-center font-[700] ">
            to
          </CustomText>
          <CustomText className="text-xl text-center font-[700] ">
            American Institute Of Tamil Language
          </CustomText>
          <View className="flex items-center mt-4 mb-4">
            <Image
              source={require('../../../assets/images/logo.webp')}
              className="w-40 h-40"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="relative items-center bg-white">
          <View
            className="w-0 h-0 border-l-[240px] border-r-[240px] border-t-[90px] border-l-transparent border-r-transparent"
            style={{borderTopColor: theme.color}}
          />
          <CustomText className="text-center text-sm mt-2 font-[700] absolute pl-6 pr-6 ">
            Every Tamil word you learn is a step closer to your heritage
          </CustomText>
        </View>
        <View className="flex-1 justify-center items-center bg-white">
          <CustomButton
            className="bg-green-500 rounded-md"
            onPress={() => navigation.navigate('Login')}>
            <CustomText className="text-white font-bold">Sign In</CustomText>
          </CustomButton>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignIn;
