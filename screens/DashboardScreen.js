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
    const [applicationsData, setApplicationsData] = useState([]);

    useEffect(() => {
        retrieveApplicationsData();
        retrieveProceduresData();
        retrieveRequirementsData();
        retrieveSlotsData();
        retrieveIpAddressData();
    }, []);

    const retrieveIpAddressData = async () => {
        try {
            const savedIpAddress = await AsyncStorage.getItem('ipAddress');

            setIpAddress(savedIpAddress);
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const retrieveApplicationsData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('applicationsData');

            if (jsonValue !== null) {
                const savedApplicationsData = JSON.parse(jsonValue);

                setApplicationsData(savedApplicationsData[0].status);
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const retrieveProceduresData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('proceduresData');

            if (jsonValue !== null) {
                const parsedData = JSON.parse(jsonValue);

                const savedScholarshipData = parsedData.filter(item => item.category === 'Scholarship');
                const savedEducationalData = parsedData.filter(item => item.category === 'Educational');

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
            {applicationsData === 'Pending' ? (
                <React.Fragment>
                    <View style={styles.cardPending}>
                        <Text style={styles.notifHeader}>Application Under Review</Text>
                        <Text style={styles.notifSubTitle}>Thank you for submitting your application. We would like to inform you that your application is now being reviewed by our administrators.</Text>
                        <View style={styles.line}></View>
                        <Text style={[styles.notifSubTitle, styles.spacer]}>Please follow the instructions below:</Text>
                        <Text style={styles.list}>1. Check this website regularly for updates on your application status.</Text>
                        <Text style={styles.list}>2. Ensure that you have provided accurate contact information.</Text>
                        <Text style={styles.list}>3. Feel free to contact our support team if you have any questions or concerns.</Text>
                    </View>
                </React.Fragment>
            ) : applicationsData === 'Approved' ? (
                <React.Fragment>
                    <View style={styles.cardApproved}>
                        <Text style={styles.notifHeader}>Educational Assistance Application Accepted</Text>
                        <Text style={styles.notifSubTitle}>Congratulations! We are pleased to inform you that your application has been accepted.</Text>
                        <View style={styles.line}></View>
                        <Text style={[styles.notifSubTitle, styles.spacer]}>Please take note of the following:</Text>
                        <Text style={styles.list}>1. Check your email for detailed information regarding the next steps.</Text>
                        <Text style={styles.list}>2. Submit any additional required documents within the specified timeline.</Text>
                        <Text style={styles.list}>3. Contact our student support team if you have any questions or need further assistance.</Text>
                    </View>
                </React.Fragment>
            ) : applicationsData === 'Rejected' ? (
                <React.Fragment>
                    <View style={styles.cardRejected}>
                        <Text style={styles.notifHeader}>Educational Assistance Application Rejected</Text>
                        <Text style={styles.notifSubTitle}>We regret to inform you that your application has been rejected.</Text>
                        <View style={styles.line}></View>
                        <Text style={[styles.notifSubTitle, styles.spacer]}>Please take note of the following:</Text>
                        <Text style={styles.list}>1. Review the rejection notice carefully to understand the reasons for the rejection.</Text>
                        <Text style={styles.list}>2. Consider reaching out to our student support team for further clarification or guidance.</Text>
                        <Text style={styles.list}>3. Explore alternative options or funding opportunities to support your educational needs.</Text>
                    </View>
                </React.Fragment>
            ) : applicationsData === 'Received' ? (
                <React.Fragment>
                    <View style={styles.cardAccepted}>
                        <Text style={styles.notifHeader}>Educational Assistance Application Completed</Text>
                        <Text style={styles.notifSubTitle}>Your assistance money has been released.</Text>
                        <View style={styles.line}></View>
                        <Text style={[styles.notifSubTitle, styles.spacer]}>Please take note of the following:</Text>
                        <Text style={styles.list}>1. Confirm the receipt of the released funds in your designated account.</Text>
                        <Text style={styles.list}>2. Keep records of the transaction for your financial records.</Text>
                        <Text style={styles.list}>3. Reach out to our student support team for any questions or concerns related to the released assistance.</Text>
                    </View>
                </React.Fragment>
            ) : applicationsData === 'None' ? (
                <React.Fragment>
                    <Text>None</Text>
                </React.Fragment>
            ) : (
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
            )}
        </ScrollView>
    );
};

export default DashboardScreen;