import React from 'react';
import {View, ScrollView, Image, TextInput} from 'react-native';
import {theme} from '../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import { NavigationProp } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';


const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <View className="flex-1" style={{backgroundColor: theme.color}}>
      <SafeAreaView className="flex-1">
        <ScrollView className="bg-white">
          <View
            className="flex-1 items-center"
            style={{backgroundColor: theme.color}}>
            <View
              className="w-0 h-0 mt-16 border-l-[250px] border-r-[250px] border-b-[180px] border-l-transparent border-r-transparent"
              style={{
                borderBottomColor: 'white',
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
          <View className="flex-1 bg-white p-5">
            <CustomText className="text-3xl text-center font-[700] mb-2">
              Sign In
            </CustomText>
            <View
              className="flex-1 bg-green-100 px-8 pt-8 pb-8"
              style={{borderRadius: 10}}>
              <View className="form">
                <CustomText className="text-md font-[700] ml-1">
                  UserId
                </CustomText>
                <TextInput className="p-4 bg-white rounded-xl mb-5" />
                <CustomText className="text-md font-[700] ml-1">
                  Password
                </CustomText>
                <TextInput secureTextEntry className="p-4 bg-white rounded-xl" />
                <View className="flex-1 justify-center items-center mt-6">
                  <CustomButton className="bg-theme-color rounded-md" onPress={() => navigation.navigate('Nilai')}>
                    <CustomText className="text-white font-bold">
                      Login
                    </CustomText>
                  </CustomButton>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Login;
