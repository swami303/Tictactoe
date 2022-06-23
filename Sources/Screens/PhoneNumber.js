//Below code is that how to get phone number when specific screen is opened.

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

const PhoneNumber = () => {
  const [PHONE_NUMBER, setPHONE_NUMBER] = useState('Phone Number');

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS == 'android') {
      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
          {
            title: 'TicTacToe App Phone Permission',
            message: 'TicTacToe App needs access to your Phone number ',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const GetPhoneNumber = async () => {
    try {
      const phoneNumber = await DeviceInfo.getPhoneNumber();
      if (!phoneNumber.includes('unkno')) {
        setPHONE_NUMBER(phoneNumber);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={[styles.buttonView, { backgroundColor: '#374dde' }]}
        onPress={GetPhoneNumber}>
        <Text style={styles.buttonText}>{PHONE_NUMBER}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: '#f000f0',
    width: width * 0.75,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.02,
    borderRadius: width * 0.025,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: width * 0.0456,
    color: '#fff',
    fontWeight: 'bold',
  },
});
