import { StyleSheet } from "react-native";

export const colors = {
    primary: '#007BFF',
    secondary: '#6C757D',
    success: '#28A745',
    info: '#17A2B8',
    warning: '#FFC107',
    danger: '#DC3545',
    light: '#F8F9FA',
    dark: '#343A40',
    white: '#FFFFFF',
    black: '#000000',
    muted: '#6C757D',
    default: '',
};

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: colors.light,
    },
    cardContainer: {
        marginBottom: 24,
        backgroundColor: "#FFFFFF",
    },
    cardGroup: {
        marginBottom: 16,
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
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
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
        color: colors.muted,
    },
    haveData: {
        textAlign: 'center',
        fontSize: 24,
        color: colors.black,
        fontWeight: "bold",
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
    cardTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    expandCollapseButton: {
        alignSelf: "flex-end",
        color: colors.black,
    },
    procedureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    procedureNumberEducational: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
        color: colors.white,
        width: 20,
        height: 20,
        backgroundColor: colors.primary,
        textAlign: "center",
        borderRadius: 5,
    },
    procedureNumberScholarship: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
        color: colors.white,
        width: 20,
        height: 20,
        backgroundColor: colors.success,
        textAlign: "center",
        borderRadius: 5,
    },
    procedureDescription: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
    cardAccepted: {
        padding: 10,
        backgroundColor: colors.primary,
    },
    cardPending: {
        padding: 10,
        backgroundColor: colors.info,
    },
    cardApproved: {
        padding: 10,
        backgroundColor: colors.success,
    },
    cardRejected: {
        padding: 10,
        backgroundColor: colors.danger,
    },
    notifHeader: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    notifSubTitle: {
        color: colors.white,
        fontSize: 16,
    },
    line: {
        marginVertical: 16,
        height: 3,
        backgroundColor: colors.white,
    },
    list: {
        color: colors.white,
        fontSize: 16,
        marginStart: 16,
        marginBottom: 10,
    },
    spacer:{
        marginBottom: 16,
    },
})