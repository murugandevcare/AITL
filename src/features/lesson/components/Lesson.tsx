import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {theme} from '../../../theme/theme';
import CustomText from '../../../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../navigation/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useThemeContext} from '../../../context/ThemeContext';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomScrollView from '../../../components/CustomScrollView';

const Lesson: React.FC = () => {
  const levels = [
    'Lesson 1',
    'Lesson 2',
    'Lesson 3',
    'Lesson 4',
    'Lesson 5',
    'Lesson 6',
    'Lesson 1',
    'Lesson 2',
    'Lesson 3',
    'Lesson 4',
    'Lesson 5',
    'Lesson 6',
  ];
  const navigation = useNavigation<NavigationProp>();
  const {isDarkMode} = useThemeContext();

  return (
    <CustomSafeAreaView>
      <CustomScrollView>
        <View className="relative items-center">
          <View
            className="w-0 h-0 border-l-[500px] border-r-[500px] border-t-[180px] border-l-transparent border-r-transparent"
            style={{borderTopColor: theme.light.color}}
          />
          <View className="absolute mt-5">
            <Image
              source={require('../../../assets/images/logo.webp')}
              className="w-20 h-20"
              resizeMode="contain"
            />
          </View>
          <View className="absolute">
            <CustomText className="text-center dark:text-white text-lg mt-28 font-[700] pl-6 pr-6 ">
              நிலை 1
            </CustomText>
            <CustomText className="text-center dark:text-white text-lg font-[500] pl-6 pr-6 ">
              Tap. Learn. Shine
            </CustomText>
          </View>
        </View>
        <View className="flex-1 mt-5 mb-10">
          <View className="p-16 gap-5">
            {levels.map((level, index) => (
              <View
                key={index}
                className="border border-theme-color rounded-xl py-3 px-4 flex-row items-center justify-between">
                <TouchableOpacity>
                  <CustomText className="text-base font-bold dark:text-white">
                    {level}
                  </CustomText>
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialIcons
                    name="download"
                    size={20}
                    color={isDarkMode ? 'white' : 'black'}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </CustomScrollView>
    </CustomSafeAreaView>
  );
};

export default Lesson;
