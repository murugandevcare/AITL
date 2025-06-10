import React from 'react';
import './global.css';
import Navigation from './src/navigation/navigation';


const App: React.FC = () => {
  return (
    // <SafeAreaView className='flex-1' style={{backgroundColor:'#81e980'}}>
    //   <StatusBar
    //     backgroundColor="#81e980"
    //     barStyle={'light-content'}
    //   />
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="SignIn">
    //       <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    //       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaView>
    <Navigation />
  );
};

export default App;
