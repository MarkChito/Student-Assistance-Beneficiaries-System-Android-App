import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },

    heading: {
        flex: 1,
        fontSize: 15,
        fontWeight: "bold",
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 3,
        marginHorizontal: 2,
        elevation: 1,
        borderRadius: 3,
        padding: 10,
        borderColor: "#FFF",
        backgroundColor: "#FFF",
    },

    cell: {
        fontSize: 15,
        textAlign: "left",
        flex: 1,
    },

    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    footer: {
        textAlign: 'center',
        marginTop: 10,
    },

    noData: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});