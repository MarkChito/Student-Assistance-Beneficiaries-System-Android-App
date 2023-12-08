import { StatusBar } from "expo-status-bar";
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

export const notificationStyle = (notification) => ({
    width: 350,
    height: 'auto',
    paddingVertical: 10,
    backgroundColor: notification.type == "success" ? colors.success : colors.danger,
    borderRadius: 5,
    marginBottom: 10,
});

export const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: colors.default,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },

    formGroup: {
        marginBottom: 10,
    },

    errorText: {
        color: colors.danger,
        width: 300,
        alignSelf: 'center',
        marginTop: 1,
    },

    notificationMessage: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15
    },

    register: {
        fontSize: 15,
        color: colors.primary,
    },

    normalText: {
        fontSize: 15,
    },

    registerGroup: {
        flexDirection: 'row',
        marginBottom: 10,
        width: 300,
        alignSelf: 'center'
    },

    checkboxGroup: {
        flexDirection: 'row',
        width: 150,
    },

    btnLoginText: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center'
    },

    btnLogin: {
        backgroundColor: colors.primary,
        width: 150,
        paddingVertical: 10,
        borderRadius: 5,
    },

    btnLoginQRCode: {
        backgroundColor: colors.success,
        width: 300,
        paddingVertical: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 10,
    },

    rowCheckbox: {
        width: 300,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    rememberMe: {
        marginLeft: 3,
        fontWeight: 'bold',
        fontSize: 15,
    },

    inputGroup: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 300
    },

    inputImage: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: colors.muted,
        resizeMode: 'center',
        backgroundColor: '#E9ECEF',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },

    input: {
        width: 260,
        borderWidth: 1,
        borderColor: colors.muted,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 0,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginForm: {
        width: 350,
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },

    title: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 25,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 20,
    },

    logo: {
        marginTop: 20,
        marginBottom: 10,
        width: 150,
        height: 150,
        alignSelf: 'center',
    },

    hr: {
        marginVertical: 10,
        width: '100%',
        height: 0.5,
        backgroundColor: '#CED4DA',
    },
});