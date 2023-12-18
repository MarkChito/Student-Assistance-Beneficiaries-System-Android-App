import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground, Image, Keyboard, Linking, ActivityIndicator, SafeAreaView, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles, colors, notificationStyle } from '../assets/styles/loginStyles';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [notification, setNotification] = useState({});
  const [loading, setLoading] = useState(false);
  const [ipAddress, setIpAddress] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState({});
  const [responseCode, setResponseCode] = useState(null);
  const [showModal, setShowModal] = useState(true);

  var qrCodeData = route.params?.qrCodeData;

  useEffect(() => {
    setIpAddress('192.168.100.10');

    if (qrCodeData) {
      qrCodeLogin(qrCodeData);
    }
  }, [qrCodeData]);

  const rememberMe = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  const getTransactions = (primary_key) => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/get_transactions?login_primary_key=${primary_key}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const apiResponseCode = data.response_code;
        const apiResponseContent = JSON.parse(data.response_content);

        if (apiResponseCode == 200) {
          AsyncStorage.setItem('transactionsData', JSON.stringify(apiResponseContent));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const getProcedures = () => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/get_procedures`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const apiResponseCode = data.response_code;
        const apiResponseContent = JSON.parse(data.response_content);

        if (apiResponseCode == 200) {
          AsyncStorage.setItem('proceduresData', JSON.stringify(apiResponseContent));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const getRequirements = () => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/get_requirements`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const apiResponseCode = data.response_code;
        const apiResponseContent = JSON.parse(data.response_content);

        if (apiResponseCode == 200) {
          AsyncStorage.setItem('requirementsData', JSON.stringify(apiResponseContent));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const getSlots = () => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/get_slots`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const apiResponseCode = data.response_code;
        const apiResponseContent = JSON.parse(data.response_content);

        if (apiResponseCode == 200) {
          AsyncStorage.setItem('slotsData', JSON.stringify(apiResponseContent));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  const getApplications = (primary_key) => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/get_applications?student_primary_key=${primary_key}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const apiResponseCode = data.response_code;
        const apiResponseContent = JSON.parse(data.response_content);

        if (apiResponseCode == 200) {
          AsyncStorage.setItem('applicationsData', JSON.stringify(apiResponseContent));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const login = (username, password) => {
    if (validateForm() && !loading) {
      Keyboard.dismiss();

      setLoading(true);

      const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/login?username=${username}&password=${password}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const apiResponseCode = data.response_code;
          const apiResponseContent = JSON.parse(data.response_content);

          setResponseCode(apiResponseCode);

          if (apiResponseCode == 200) {
            const primary_key = apiResponseContent[0].primary_key;
            const name = apiResponseContent[0].name;

            const url_2 = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/get_student_data?login_primary_key=${primary_key}`;

            fetch(url_2)
              .then(response_2 => response_2.json())
              .then(data_2 => {
                const apiResponseCode_2 = data_2.response_code;
                const apiResponseContent_2 = JSON.parse(data_2.response_content);

                if (apiResponseCode_2 == 200 && apiResponseContent_2) {
                  const student_number = apiResponseContent_2[0].student_number;
                  const image = `http://${ipAddress}/cdmstudentassistance.ssystem.online/dist/img/user_upload/${apiResponseContent_2[0].user_image}`;

                  AsyncStorage.setItem('ipAddress', ipAddress);
                  AsyncStorage.setItem('primary_key', primary_key);
                  AsyncStorage.setItem('name', name);
                  AsyncStorage.setItem('student_number', student_number);
                  AsyncStorage.setItem('image', image);

                  getApplications(primary_key);
                  getTransactions(primary_key);
                  getProcedures();
                  getRequirements();
                  getSlots();

                  setNotification({});

                  if (!toggleCheckBox) {
                    setUsername(null);
                    setPassword(null);
                  }

                  navigateToMain();
                }
              })
              .catch(error_2 => {
                setLoading(false);

                console.error('Error:', error_2);
              });
          } else {
            let notif = {};

            notif.type = "danger";
            notif.message = "Invalid Username or Password";

            setNotification(notif);

            setLoading(false);
          }
        })
        .catch(error => {
          setLoading(false);

          console.error('Error:', error);
        });
    }
  };

  const qrCodeLogin = (qrCodeData) => {
    setLoading(true);

    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/qr_code_login?qr_code_data=${qrCodeData}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const apiResponseCode = data.response_code;
        const apiResponseContent = JSON.parse(data.response_content);

        setResponseCode(apiResponseCode);

        if (apiResponseCode == 200) {
          const primary_key = apiResponseContent[0].primary_key;
          const name = apiResponseContent[0].name;

          const url_2 = `http://${ipAddress}/cdmstudentassistance.ssystem.online/api/get_student_data?login_primary_key=${primary_key}`;

          fetch(url_2)
            .then(response_2 => response_2.json())
            .then(data_2 => {
              const apiResponseCode_2 = data_2.response_code;
              const apiResponseContent_2 = JSON.parse(data_2.response_content);

              if (apiResponseCode_2 == 200) {
                const student_number = apiResponseContent_2[0].student_number;
                const image = `http://${ipAddress}/cdmstudentassistance.ssystem.online/dist/img/user_upload/${apiResponseContent_2[0].user_image}`;

                AsyncStorage.setItem('ipAddress', ipAddress);
                AsyncStorage.setItem('primary_key', primary_key);
                AsyncStorage.setItem('name', name);
                AsyncStorage.setItem('student_number', student_number);
                AsyncStorage.setItem('image', image);

                getApplications(primary_key);
                getTransactions(primary_key);
                getProcedures();
                getRequirements();
                getSlots();

                setNotification({});

                setUsername(null);
                setPassword(null);
                setErrors({});
                setToggleCheckBox(false);

                navigateToMain();
              }
            })
            .catch(error_2 => {
              setLoading(false);

              console.error('Error:', error_2);
            });
        } else {
          let notif = {};

          notif.type = "danger";
          notif.message = "Invalid QR Code";

          setNotification(notif);

          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    qrCodeData_param = null;
  }

  const register = () => {
    const url = `http://${ipAddress}/cdmstudentassistance.ssystem.online?process=register`;

    Linking.openURL(url)
      .catch((err) => console.error('An error occurred: ', err));
  };

  const scanQrCode = () => {
    navigation.navigate('QRCodeScanner');
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
  };

  const resetIpAddress = (inputIpAddress) => {
    setIpAddress(inputIpAddress);

    setLoading(true);

    const url = `http://${inputIpAddress}/cdmstudentassistance.ssystem.online/api/check_connectivity`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Server not responding");
        }
        return response.json();
      })
      .then(data => {
        const apiResponseCode = data.response_code;

        setResponseCode(apiResponseCode);

        let notif = {};

        if (apiResponseCode === 200) {
          notif.type = "success";
          notif.message = "Connected to " + inputIpAddress;
        } else {
          notif.type = "danger";
          notif.message = "Can't connect to the server.";
        }

        setNotification(notif);
      })
      .catch(error => {
        let notif = {};
        notif.type = "danger";
        notif.message = "Can't connect to the server.";

        setNotification(notif);
      })
      .finally(() => {
        setLoading(false);
        setShowModal(false);
      });
  };

  const closeModal = () => {
    Keyboard.dismiss();

    setShowModal(false);
  };

  const navigateToMain = () => {
    let notif = {};

    notif.type = "success";
    notif.message = "You've been successfully signed out";

    setNotification(notif);

    navigation.navigate('Main');

    setLoading(false);
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
      <Modal transparent={true} visible={showModal ? true : false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderContent}>Localhost's IP Address</Text>
            </View>
            <View style={styles.modalBody}>
              <View style={styles.note}>
                <Text style={styles.noteNote}>Note: </Text>
                <Text>Please use 'ipconfig' on your cmd to check your server's IP Address.</Text>
              </View>
              <View style={styles.modalBodyInputGroup}>
                <TextInput style={styles.modalBodyInput} placeholder='Enter IP Address' onChangeText={(val) => { setIpAddress(val) }} />
                <Image source={require('../assets/img/ip_address.png')} style={styles.inputImage} />
              </View>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity style={[styles.modalFooterButton, { "marginEnd": 5 }]} onPress={() => closeModal()}>
                <Text style={styles.btnLoginText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalFooterButton, { "backgroundColor": colors.primary }]} onPress={() => resetIpAddress(ipAddress)}>
                <Text style={styles.btnLoginText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {Object.keys(notification).length != 0 ? (
        <View style={notificationStyle(notification)}>
          <Text style={styles.notificationMessage}>{notification.message}</Text>
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