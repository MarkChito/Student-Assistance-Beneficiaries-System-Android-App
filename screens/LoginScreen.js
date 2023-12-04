import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground, Image, Keyboard, Linking, ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles, colors, notificationStyle } from '../assets/styles/loginStyles';
import CheckBox from 'expo-checkbox';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [responseCode, setResponseCode] = useState(null);
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ipAddress, setIpAddress] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIpAddress('192.168.100.10');
  }, []);

  const rememberMe = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  const login = (username, password) => {
    if (validateForm() && !loading) {
      Keyboard.dismiss();

      setLoading(true);

      const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/login?username=${username}&password=${password}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const apiResponseCode = data.response_code;

          setResponseCode(apiResponseCode);

          if (apiResponseCode === 200) {
            navigation.navigate('Main');
          } else {
            setNotification('Invalid Username or Password');
          }

          setLoading(false);
        })
        .catch(error => {
          setLoading(false);

          console.error('Error:', error);
        });
    }
  };

  const qrCodeLogin = (qrCodeData) => {
    if (qrCodeData && !loading) {
      setLoading(true);

      const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/qr_code_login?qr_code_data=${qrCodeData}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const apiResponseCode = data.response_code;

          setResponseCode(apiResponseCode);

          if (apiResponseCode === 200) {
            navigation.navigate('Main');
          } else {
            setLoading(false);

            setNotification('Invalid QR Code');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  const register = () => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online?process=register`;

    Linking.openURL(url)
      .catch((err) => console.error('An error occurred: ', err));
  };

  const scanQrCode = () => {
    navigation.navigate('QRCodeScanner', { qrCodeLogin });
  };

  const validateForm = () => {
    let errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color={colors.primary} />
        <Text>Please Wait...</Text>
      </SafeAreaView>
    )
  }

  return (
    <ImageBackground source={require('../assets/img/bg.jpg')} style={styles.container}>
      {notification ? (
        <View style={notificationStyle(responseCode)}>
          <Text style={styles.notificationMessage}>{notification}</Text>
        </View>
      ) : null}

      <View style={styles.loginForm}>
        <Image source={require('../assets/img/icon.png')} style={styles.logo} />

        <Text style={styles.title}>Student Assistances Beneficiaries System</Text>

        <View style={styles.hr}></View>

        <Text style={styles.subtitle}>Sign in to proceed</Text>

        <View style={styles.formGroup}>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} placeholder='Username' onChangeText={(val) => { setUsername(val); errors.username = null }} value={username} />
            <Image source={require('../assets/img/username.png')} style={styles.inputImage} />
          </View>
          {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        </View>

        <View style={styles.formGroup}>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} onChangeText={(val) => { setPassword(val); errors.password = null }} value={password} />
            <Image source={require('../assets/img/password.png')} style={styles.inputImage} />
          </View>
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        </View>

        <View style={styles.rowCheckbox}>
          <View style={styles.checkboxGroup}>
            <CheckBox value={toggleCheckBox} onValueChange={setToggleCheckBox} color={toggleCheckBox ? colors.primary : colors.default} />
            <Text style={styles.rememberMe} onPress={rememberMe}>Remember Me</Text>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={() => login(username, password)}>
            <Text style={styles.btnLoginText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLoginQRCode} onPress={scanQrCode}>
          <Text style={styles.btnLoginText}>Sign in using QR Code</Text>
        </TouchableOpacity>

        <View style={styles.registerGroup}>
          <Text style={styles.normalText}>Don't have an Account? </Text>
          <TouchableOpacity onPress={register}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;