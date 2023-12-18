import {Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles, colors } from '../assets/styles/loginStyles';

const LogoutScreen = () => {
    return (
        <SafeAreaView style={styles.loadingContainer}>
            <ActivityIndicator size='large' color={colors.primary} />
            <Text>Please Wait...</Text>
        </SafeAreaView>
    );
};

export default LogoutScreen;