import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import { RootStackParams } from './types';
import SignIn from '../features/auth/components/SignIn';
import Login from '../features/auth/components/Login';
import Nilai from '../features/nilai/components/Nilai';
import BottomTabs from './BottomTabs';
// import Nilai from '../screens/nilai/Nilai';
// import Lesson from '../screens/lesson/Lesson';
// import BottomTabs from './BottomTabs';


const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Nilai"
                    component={Nilai}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Lesson"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
