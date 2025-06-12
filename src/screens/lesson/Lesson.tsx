import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../theme/theme';
import CustomText from '../../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Lesson: React.FC = () => {
  const levels = ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Lesson 6'];
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
              <CustomText className="text-center text-lg mt-28 font-[700] pl-6 pr-6 ">
                நிலை 1
              </CustomText>
              <CustomText className="text-center text-lg font-[500] pl-6 pr-6 ">
                Tap. Learn. Shine
              </CustomText>
            </View>
          </View>
          <View className="flex-1 mt-5">
            <View className="p-16 gap-5">
              {levels.map((level, index) => (
                <View
                  key={index}
                  className="border border-theme-color rounded-xl py-3 px-4 flex-row items-center justify-between">
                  <TouchableOpacity>
                    <CustomText className="text-base font-bold ">
                      {level}
                    </CustomText>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <MaterialIcons name="download" size={20}  />
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

export default Lesson;
