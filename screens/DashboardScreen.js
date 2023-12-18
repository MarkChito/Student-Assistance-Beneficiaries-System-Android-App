import { colors, styles } from '../assets/styles/dashboardStyles';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = () => {
    const [ipAddress, setIpAddress] = useState(null);
    const [showEducationalCards, setShowEducationalCards] = useState(true);
    const [showScholarshipCards, setShowScholarshipCards] = useState(true);
    const [scholarshipProceduresData, setScholarshipProceduresData] = useState([]);
    const [educationalProceduresData, setEducationalProceduresData] = useState([]);
    const [scholarshipRequirementsData, setScholarshipRequirementsData] = useState([]);
    const [educationalRequirementsData, setEducationalRequirementsData] = useState([]);
    const [scholarshipSlotsData, setScholarshipSlotsData] = useState([]);
    const [educationalSlotsData, setEducationalSlotsData] = useState([]);

    useEffect(() => {
        retrieveProceduresData();
        retrieveRequirementsData();
        retrieveSlotsData();
    }, []);

    const retrieveProceduresData = async () => {
        try {
            const storedIpAddress = await AsyncStorage.getItem('ipAddress');
            const jsonValue = await AsyncStorage.getItem('proceduresData');

            if (jsonValue !== null) {
                const parsedData = JSON.parse(jsonValue);

                const savedScholarshipData = parsedData.filter(item => item.category === 'Scholarship');
                const savedEducationalData = parsedData.filter(item => item.category === 'Educational');

                console.log(savedScholarshipData);
                console.log(savedEducationalData);

                setIpAddress(storedIpAddress);
                setScholarshipProceduresData(savedScholarshipData);
                setEducationalProceduresData(savedEducationalData);
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const retrieveRequirementsData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('requirementsData');

            if (jsonValue !== null) {
                const parsedData = JSON.parse(jsonValue);

                const savedScholarshipData = parsedData.filter(item => item.category === 'Scholarship');
                const savedEducationalData = parsedData.filter(item => item.category === 'Educational');

                console.log(savedScholarshipData);
                console.log(savedEducationalData);

                setScholarshipRequirementsData(savedScholarshipData);
                setEducationalRequirementsData(savedEducationalData);
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const retrieveSlotsData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('slotsData');

            if (jsonValue !== null) {
                const parsedData = JSON.parse(jsonValue);

                const savedScholarshipData = parsedData.filter(item => item.category === 'Scholarship');
                const savedEducationalData = parsedData.filter(item => item.category === 'Educational');

                console.log(savedScholarshipData);
                console.log(savedEducationalData);

                setScholarshipSlotsData(savedScholarshipData);
                setEducationalSlotsData(savedEducationalData);
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const toggleEducationalCards = () => {
        setShowEducationalCards(!showEducationalCards);
    };

    const toggleScholarshipCards = () => {
        setShowScholarshipCards(!showScholarshipCards);
    };

    const apply = () => {
        const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/dashboard`;

        Linking.openURL(url)
            .catch((err) => console.error('An error occurred: ', err));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <React.Fragment>
                {/* Educational Assistance Tab */}
                <View style={styles.cardGroup}>
                    <View style={styles.cardTitle}>
                        <Text style={styles.sectionHeader}>Educational Assistance</Text>
                        <TouchableOpacity style={styles.toggleButton} onPress={toggleEducationalCards} >
                            <Text style={[styles.sectionHeader, styles.expandCollapseButton]}>
                                {showEducationalCards ? <Ionicons name="ios-remove" size={30} color={colors.black} /> : <Ionicons name="ios-add" size={30} color={colors.black} />}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.cardHeader, styles.educationalHeader]}>
                        {/* Color Primary Padding */}
                    </View>
                    <View style={styles.cardContainer}>
                        {showEducationalCards && (
                            <React.Fragment>
                                <View style={styles.card}>
                                    <Text style={styles.sectionTitle}>Procedures</Text>
                                    {educationalProceduresData.length > 0 ? (
                                        educationalProceduresData.map((item, index) => (
                                            <View key={index} style={styles.procedureItem}>
                                                <Text style={styles.procedureNumberEducational}>{index + 1}</Text>
                                                <Text style={styles.procedureDescription}>{item.description}</Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text style={styles.noData}>No Data Available</Text>
                                    )}
                                </View>
                                <View style={styles.card}>
                                    <Text style={styles.sectionTitle}>Requirements</Text>
                                    {educationalRequirementsData.length > 0 ? (
                                        educationalRequirementsData.map((item, index) => (
                                            <View key={index} style={styles.procedureItem}>
                                                <Text style={styles.procedureNumberEducational}>{index + 1}</Text>
                                                <Text style={styles.procedureDescription}>{item.description}</Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text style={styles.noData}>No Data Available</Text>
                                    )}
                                </View>
                                <View style={styles.card}>
                                    <Text style={styles.sectionTitle}>Available Slots</Text>
                                    {educationalSlotsData.length > 0 ? (
                                        <Text style={styles.haveData}>{educationalSlotsData[0].slot} Available Slots</Text>
                                    ) : (
                                        <Text style={styles.noData}>No Data Available</Text>
                                    )}
                                </View>
                                <TouchableOpacity style={[styles.button, styles.btn_primary]} onPress={apply}>
                                    <Text style={styles.buttonText}>Apply for Educational Assistance</Text>
                                </TouchableOpacity>
                            </React.Fragment>
                        )}
                    </View>
                </View>

                {/* Scholarship Assistance Tab */}
                <View style={styles.cardGroup}>
                    <View style={styles.cardTitle}>
                        <Text style={styles.sectionHeader}>Scholarship Assistance</Text>
                        <TouchableOpacity style={styles.toggleButton} onPress={toggleScholarshipCards} >
                            <Text style={[styles.sectionHeader, styles.expandCollapseButton]}>
                                {showScholarshipCards ? <Ionicons name="ios-remove" size={30} color={colors.black} /> : <Ionicons name="ios-add" size={30} color={colors.black} />}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.cardHeader, styles.scholarshipHeader]}>
                        {/* Color Success Padding */}
                    </View>
                    <View style={styles.cardContainer}>
                        {showScholarshipCards && (
                            <React.Fragment>
                                <View style={styles.card}>
                                    <Text style={styles.sectionTitle}>Procedures</Text>
                                    {scholarshipProceduresData.length > 0 ? (
                                        scholarshipProceduresData.map((item, index) => (
                                            <View key={index} style={styles.procedureItem}>
                                                <Text style={styles.procedureNumberScholarship}>{index + 1}</Text>
                                                <Text style={styles.procedureDescription}>{item.description}</Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text style={styles.noData}>No Data Available</Text>
                                    )}
                                </View>
                                <View style={styles.card}>
                                    <Text style={styles.sectionTitle}>Requirements</Text>
                                    {scholarshipRequirementsData.length > 0 ? (
                                        scholarshipRequirementsData.map((item, index) => (
                                            <View key={index} style={styles.procedureItem}>
                                                <Text style={styles.procedureNumberScholarship}>{index + 1}</Text>
                                                <Text style={styles.procedureDescription}>{item.description}</Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text style={styles.noData}>No Data Available</Text>
                                    )}
                                </View>
                                <View style={styles.card}>
                                    <Text style={styles.sectionTitle}>Available Slots</Text>
                                    {scholarshipSlotsData.length > 0 ? (
                                        <Text style={styles.haveData}>{scholarshipSlotsData[0].slot} Available Slots</Text>
                                    ) : (
                                        <Text style={styles.noData}>No Data Available</Text>
                                    )}
                                </View>
                                <TouchableOpacity style={[styles.button, styles.btn_success]} onPress={apply}>
                                    <Text style={styles.buttonText}>Apply for Scholarship Assistance</Text>
                                </TouchableOpacity>
                            </React.Fragment>
                        )}
                    </View>
                </View>
            </React.Fragment>
        </ScrollView>
    );
};

export default DashboardScreen;