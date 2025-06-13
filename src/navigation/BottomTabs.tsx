import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lesson from '../features/lesson/components/Lesson';

const Tab = createBottomTabNavigator();

const CustomBottomTabs = () => {
  const navigation = useNavigation();

  const tabs = [
    { name: 'Lesson', icon: 'home', color: '#34A853' },
    { name: 'Voice', icon: 'record-voice-over', color: '#1DA1F2' },
    { name: 'Badge', icon: 'star', color: '#FBBC05' },
    { name: 'Profile', icon: 'person', color: '#F36C3D' },
  ];

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab.Screen key={index} name={tab.name} component={Lesson} />
        ))}
      </Tab.Navigator>

      <SafeAreaView edges={['bottom']} style={styles.safeAreaTabBar}>
        <View style={styles.customTabBar}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.iconWrapper, { backgroundColor: tab.color }]}
              onPress={() => navigation.navigate(tab.name as never)}
            >
              <MaterialIcons name={tab.icon} size={24} color="white" />
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaTabBar: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 5,
  },
  customTabBar: {
    backgroundColor: '#CCF5CC',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});

export default CustomBottomTabs;
