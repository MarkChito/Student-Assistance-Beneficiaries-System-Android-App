import { View, Text } from 'react-native';
import { styles } from '../assets/styles/dashboardStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    );
};

export default DashboardScreen;