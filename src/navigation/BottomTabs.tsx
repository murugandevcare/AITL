import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Lesson from '../screens/lesson/Lesson';

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
        }}>
        {tabs.map((tab, index) => (
          <Tab.Screen key={index} name={tab.name} component={Lesson} />
        ))}
      </Tab.Navigator>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customTabBar: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#CCF5CC',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10,
  },
  iconWrapper: {
    padding: 5,
    borderRadius: 40,
  },
});

export default CustomBottomTabs;
