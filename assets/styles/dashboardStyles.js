import { StyleSheet } from "react-native";

export const colors = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',
    muted: '#6c757d',
    default: '',
};

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    cardContainer: {
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
    },
    card: {
        backgroundColor: colors.light,
        borderRadius: 8,
        padding: 15,
        margin: 10,
    },
    cardHeader: {
        height: 5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    educationalHeader: {
        backgroundColor: colors.primary,
    },
    scholarshipHeader: {
        backgroundColor: colors.success,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listItem: {
        marginBottom: 5,
    },
    availableSlots: {
        fontSize: 24,
        marginBottom: 5,
        textAlign: "center",
    },
    noData: {
        textAlign: 'center',
        fontSize: 24,
        color: 'gray',
    },
    button: {
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
    },
    btn_primary: {
        backgroundColor: colors.primary,
    },
    btn_success: {
        backgroundColor: colors.success,
    },
    disabledButton: {
        backgroundColor: 'gray',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})