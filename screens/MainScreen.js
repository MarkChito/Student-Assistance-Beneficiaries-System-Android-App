import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import TransactionsScreen from './TransactionsScreen';
import LogoutScreen from './LogoutScreen';
import { styles } from '../assets/styles/mainStyles';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  const logout = async () => {
    try {
      await AsyncStorage.clear();

      navigation.navigate("Login");
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={(props) => <HeaderDrawerContent {...props} />}>
        <Drawer.Screen name='Dashboard' component={DashboardScreen} />
        <Drawer.Screen name='Transactions' component={TransactionsScreen} />
        <Drawer.Screen name='Logout' component={LogoutScreen} listeners={{ focus: () => logout() }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const HeaderDrawerContent = (props) => {
  useEffect(() => {
    retrieveData();
  }, []);

  const [ipAddress, setIpAddress] = useState(null);
  const [primaryKey, setPrimaryKey] = useState(null);
  const [name, setName] = useState(null);
  const [studentNumber, setStudentNumber] = useState(null);
  const [image, setImage] = useState(null);

  const retrieveData = async () => {
    try {
      const storedIpAddress = await AsyncStorage.getItem('ipAddress');
      const storedPrimaryKey = await AsyncStorage.getItem('primary_key');
      const storedStudentNumber = await AsyncStorage.getItem('student_number');
      const storedName = await AsyncStorage.getItem('name');
      const storedImage = await AsyncStorage.getItem('image');

      setIpAddress(storedIpAddress);
      setPrimaryKey(storedPrimaryKey);
      setStudentNumber(storedStudentNumber);
      setName(storedName);
      setImage(storedImage);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const update_profile = () => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/profile`;

    Linking.openURL(url).catch((err) => console.error('An error occurred: ', err));
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.student_number}>{studentNumber}</Text>
        <TouchableOpacity onPress={update_profile}>
          <Text style={styles.link}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default MainScreen;