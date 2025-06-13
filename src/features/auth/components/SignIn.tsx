import React from 'react';
import {View, Image} from 'react-native';
import {theme} from '../../../theme/theme';
import CustomText from '../../../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../navigation/types';
import CustomButton from '../../../components/CustomButton';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomScrollView from '../../../components/CustomScrollView';

const SignIn: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <CustomSafeAreaView>
      <CustomScrollView>
        <View className="pb-4 px-3 pt-16 gap-5 bg-theme-color">
          <CustomText className="text-2xl font-[700] text-center dark:text-white">
            WELCOME
          </CustomText>
          <CustomText className="text-1xl text-center font-[700] dark:text-white">
            to
          </CustomText>
          <CustomText className="text-xl text-center font-[700] dark:text-white">
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
        <View className="relative items-center">
          <View
            className="w-0 h-0 border-l-[240px] border-r-[240px] border-t-[90px] border-l-transparent border-r-transparent"
            style={{borderTopColor: theme.light.color}}
          />
          <CustomText className="text-center text-sm mt-2 font-[700] absolute pl-6 pr-6 dark:text-white">
            Every Tamil word you learn is a step closer to your heritage
          </CustomText>
        </View>
        <View className="flex-1 justify-center items-center mt-32">
          <CustomButton
            className="bg-theme-color rounded-md"
            onPress={() => navigation.navigate('Login')}>
            <CustomText className="text-white font-bold">Sign In</CustomText>
          </CustomButton>
        </View>
      </CustomScrollView>
    </CustomSafeAreaView>
  );
};

export default SignIn;
