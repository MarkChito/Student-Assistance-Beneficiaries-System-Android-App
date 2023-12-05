import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import TransactionsScreen from './TransactionsScreen';
import ProfileScreen from './ProfileScreen';
import LogoutScreen from './LogoutScreen';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={require('../assets/img/icon.png')} style={styles.image} />
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.student_number}>Student Number</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// Your Main Drawer Component
export const MainDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Dashboard' component={DashboardScreen} />
      <Drawer.Screen name='Transactions' component={TransactionsScreen} />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
      <Drawer.Screen name='Logout' component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

// Rest of your App component remains the same
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MainDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#343A40'
  },

  name: {
    marginTop: 10,
    fontSize: 18,
    color: 'white'
  },

  student_number: {
    fontSize: 12, color: 'white'
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 75
  }
});