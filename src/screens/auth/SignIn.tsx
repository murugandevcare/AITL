import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {theme} from '../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParams>;

const SignIn: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View className="flex-1" style={{backgroundColor: theme.color}}>
      <SafeAreaView className="flex-1">
        <StatusBar barStyle={'light-content'} />
        <View
          className="pb-4 px-3 pt-16 gap-5"
          style={{backgroundColor: theme.color}}>
          <CustomText className="text-3xl font-[600] text-center text-white">
            WELCOME
          </CustomText>
          <CustomText className="text-1xl text-center font-[500] text-white">
            to
          </CustomText>
          <CustomText className="text-xl text-center font-[600] text-white">
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
          <CustomText className="text-center text-sm mt-2 font-[500] absolute pl-6 pr-6 text-white">
            Every Tamil word you learn is a step closer to your heritage
          </CustomText>
        </View>
        <View className="flex-1 justify-center items-center bg-white">
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            className="px-6 py-3 rounded-lg"
            style={{backgroundColor: theme.color}}>
            <CustomText className="text-white font-bold text-lg">
              Sign In
            </CustomText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignIn;
