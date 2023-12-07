import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../assets/styles/transactionsStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransactionsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.cell, styles.header]}>ID</Text>
                    <Text style={[styles.cell, styles.header]}>Name</Text>
                    <Text style={[styles.cell, styles.header]}>Age</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>1</Text>
                    <Text style={styles.cell}>John Doe</Text>
                    <Text style={styles.cell}>30</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>Jane Smith</Text>
                    <Text style={styles.cell}>25</Text>
                </View>
                {/* Add more rows as needed */}
            </View>
        </View>
    );
};

export default TransactionsScreen;