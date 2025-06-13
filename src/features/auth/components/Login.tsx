import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {theme} from '../../../theme/theme';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import {NavigationProp} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useThemeContext} from '../../../context/ThemeContext';
import CustomScrollView from '../../../components/CustomScrollView';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const {isDarkMode} = useThemeContext();

  return (
    <CustomSafeAreaView>
      <CustomScrollView>
        <View
          className="flex-1 items-center"
          style={{backgroundColor: theme.light.color}}>
          <View
            className="w-0 h-0 mt-16 border-l-[250px] border-r-[250px] border-b-[180px] border-l-transparent border-r-transparent"
            style={{
              borderBottomColor: isDarkMode ? 'black' : 'white',
            }}
          />
          <View className="absolute mt-36">
            <Image
              source={require('../../../assets/images/logo.webp')}
              className="w-28 h-28"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="flex-1 p-5">
          <CustomText className="text-3xl text-center font-[700] mb-2 dark:text-white">
            Sign In
          </CustomText>
          <View
            className="flex-1 bg-green-100 dark:bg-green-900 px-8 pt-8 pb-8"
            style={{borderRadius: 10}}>
            <View className="form">
              <CustomText className="text-md font-[700] ml-1 dark:text-white">
                UserId
              </CustomText>
              <TextInput className="p-4 bg-white text-black dark:text-white dark:bg-black rounded-xl mb-5" />
              <CustomText className="text-md font-[700] ml-1 dark:text-white">
                Password
              </CustomText>
              <TextInput
                secureTextEntry
                className="p-4 bg-white dark:bg-black text-black dark:text-white rounded-xl"
              />
              <View className="flex-1 justify-center items-center mt-6">
                <CustomButton
                  className="bg-green-500 rounded-md"
                  onPress={() => navigation.navigate('Nilai')}>
                  <CustomText className="text-white font-bold">
                    Login
                  </CustomText>
                </CustomButton>
              </View>
            </View>
          </View>
        </View>
      </CustomScrollView>
    </CustomSafeAreaView>
  );
};

export default Login;
