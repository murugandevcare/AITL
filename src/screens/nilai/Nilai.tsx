import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../theme/theme';
import CustomText from '../../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

const Nilai: React.FC = () => {
  const levels = ['நிலை 1', 'நிலை 2', 'நிலை 3', 'நிலை 4', 'நிலை 5'];
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 bg-theme-color">
      <SafeAreaView className="flex-1">
        <ScrollView className="bg-white">
          <View className="relative items-center">
            <View
              className="w-0 h-0 border-l-[500px] border-r-[500px] border-t-[180px] border-l-transparent border-r-transparent"
              style={{borderTopColor: theme.color}}
            />
            <View className="absolute mt-5">
              <Image
                source={require('../../../assets/images/logo.webp')}
                className="w-20 h-20"
                resizeMode="contain"
              />
            </View>
            <View className="absolute">
              <CustomText className="text-center text-lg mt-28 font-[500] pl-6 pr-6 ">
                Get started with your
              </CustomText>
              <CustomText className="text-center text-lg font-[700] pl-6 pr-6 ">
                நிலை !
              </CustomText>
            </View>
          </View>
          <View className="flex-1 mt-5">
            <View className="p-16 gap-5">
              {levels.map((level, index) => (
                <View
                  key={index}
                  className="border border-theme-color rounded-xl py-3 px-4 items-center">
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Lesson')}>
                    <CustomText className="text-base font-bold">
                      {level}
                    </CustomText>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Nilai;
