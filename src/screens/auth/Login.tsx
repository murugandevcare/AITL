import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import {theme} from '../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';

const Login: React.FC = () => {
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
            <View className="absolute top-[100px] left-[140px]">
              <Image
                source={require('../../../assets/images/logo.webp')}
                className="w-28 h-28"
                resizeMode="contain"
              />
            </View>
          </View>
          <View className="flex-1 bg-white p-5">
            <CustomText className="text-3xl text-center font-[600] mb-2">
              Sign In
            </CustomText>
            <View className="flex-1 bg-green-100 px-8 pt-8 pb-8" style={{borderRadius: 10}}>
              <View className="form space-y-2">
                <CustomText className="text-lg font-[600] ml-3">
                  User Id
                </CustomText>
                <TextInput className='p-4 bg-white text-gray-700 rounded-2xl mb-3' />
                <CustomText className="text-lg font-[600] ml-3">
                  Password
                </CustomText>
                <TextInput className='p-4 bg-white text-gray-700 rounded-2xl' />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Login;
