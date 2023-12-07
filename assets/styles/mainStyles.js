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
    header: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.dark,
    },

    name: {
        marginTop: 10,
        fontSize: 18,
        color: 'white'
    },

    student_number: {
        fontSize: 12, 
        color: 'white'
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 75
    },
    
    link: {
        marginTop: 5,
        fontSize: 14,
        color: colors.primary,
        textDecorationLine: 'underline',
    },
})