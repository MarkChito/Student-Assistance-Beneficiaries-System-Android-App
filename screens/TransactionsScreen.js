import { View, Text, TextInput } from 'react-native';
import { styles } from '../assets/styles/transactionsStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

const TransactionsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [endOfList, setEndOfList] = useState(false);
    const [data, setData] = useState([]);
    const pageSize = 3;

    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('transactionsData');

            if (jsonValue !== null) {
                const parsedData = JSON.parse(jsonValue);

                setData(parsedData);
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const formatDate = (inputDate) => {
        const dateComponents = inputDate.split(' ');
        const monthName = dateComponents[0];
        const day = parseInt(dateComponents[1].replace(',', ''), 10);
        const year = parseInt(dateComponents[2], 10);

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const monthIndex = months.findIndex(month => month === monthName);

        const formattedDate = `${months[monthIndex].slice(0, 3)} ${day < 10 ? '0' : ''}${day}, ${year}`;

        return formattedDate;
    };

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{formatDate(item.date)}{"\n"}{item.time}</Text>
            <Text style={styles.cell}>{item.event}</Text>
        </View>
    );

    const loadMoreItems = () => {
        if (page * pageSize >= filteredData.length) {
            setEndOfList(true);
        } else {
            setPage(page + 1);
        }
    };

    const renderFooter = () => {
        return endOfList ? null : <Text style={styles.footer}>Loading...</Text>;
    };

    const renderNoData = () => {
        if (filteredData.length == 0) {
            return (
                <View style={styles.noData}>
                    <Text>No data available in table</Text>
                </View>
            );
        }
        return null;
    };

    const filteredData = data.filter((item) =>
        item.event.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBar} placeholder="Search..." onChangeText={(text) => setSearchQuery(text)} value={searchQuery} />
            <View style={styles.header}>
                <Text style={styles.heading}>Date and Time</Text>
                <Text style={styles.heading}>Transaction Event</Text>
            </View>
            {filteredData.length === 0 ? (
                renderNoData()
            ) : (
                <FlatList
                    data={filteredData.slice(0, page * pageSize)}
                    keyExtractor={(item) => item.primary_key.toString()}
                    renderItem={renderItem}
                    onEndReached={loadMoreItems}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                />
            )}
        </View>
    );
};

export default TransactionsScreen;