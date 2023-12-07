import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
    },
    tableRow: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    header: {
        fontWeight: 'bold',
    },
})