import { styles } from '../assets/styles/dashboardStyles';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Educational Assistance Tab */}
            <View style={[styles.cardHeader, styles.educationalHeader]}></View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Educational Assistance (Procedures)</Text>
                    <Text style={styles.listItem}>1. Bring valid ID</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Educational Assistance (Requirements)</Text>
                    <Text style={styles.listItem}>1. Valid ID</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Educational Assistance (Available Slots)</Text>
                    <Text style={styles.availableSlots}>6 Available Slots</Text>
                </View>
                <TouchableOpacity style={[styles.button, styles.btn_primary]} onPress={() => console.log('Apply for Educational Assistance')}>
                    <Text style={styles.buttonText}>Apply for Educational Assistance</Text>
                </TouchableOpacity>
            </View>

            {/* Scholarship Assistance Tab */}
            <View style={[styles.cardHeader, styles.scholarshipHeader]}></View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Scholarship Assistance (Procedures)</Text>
                    <Text style={styles.noData}>No Data Available</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Scholarship Assistance (Requirements)</Text>
                    <Text style={styles.noData}>No Data Available</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Scholarship Assistance (Available Slots)</Text>
                    <Text style={styles.noData}>No Data Available</Text>
                </View>
                <TouchableOpacity style={[styles.button, styles.btn_success]} onPress={() => console.log('Apply for Scholarship Assistance')}>
                    <Text style={styles.buttonText}>Apply for Scholarship Assistance</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DashboardScreen;