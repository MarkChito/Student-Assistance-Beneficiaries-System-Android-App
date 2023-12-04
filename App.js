import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/LoginScreen';
import QRCodeScanner from './screens/QRCodeScannerScreen';
import Main from './screens/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;