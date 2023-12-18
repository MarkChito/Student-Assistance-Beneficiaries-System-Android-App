import { colors, styles } from '../assets/styles/dashboardStyles';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Educational Assistance Tab */}
            <View style={styles.cardGroup}>
                <Text style={styles.sectionHeader}>Educational Assistance</Text>
                <View style={[styles.cardHeader, styles.educationalHeader]}></View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Procedures</Text>
                        <Text style={styles.noData}>No Data Available</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Requirements</Text>
                        <Text style={styles.noData}>No Data Available</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Available Slots</Text>
                        <Text style={styles.noData}>No Data Available</Text>
                    </View>
                    <TouchableOpacity style={[styles.button, styles.btn_primary]} onPress={() => console.log('Apply for Educational Assistance')}>
                        <Text style={styles.buttonText}>Apply for Educational Assistance</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Scholarship Assistance Tab */}
            <View style={styles.cardGroup}>
                <Text style={styles.sectionHeader}>Scholarship Assistance</Text>
                <View style={[styles.cardHeader, styles.scholarshipHeader]}></View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Procedures</Text>
                        <Text style={styles.noData}>No Data Available</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Requirements</Text>
                        <Text style={styles.noData}>No Data Available</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Available Slots</Text>
                        <Text style={styles.noData}>No Data Available</Text>
                    </View>
                    <TouchableOpacity style={[styles.button, styles.btn_success]} onPress={() => console.log('Apply for Scholarship Assistance')}>
                        <Text style={styles.buttonText}>Apply for Scholarship Assistance</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default DashboardScreen;