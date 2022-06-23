import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import { routeScreen_2 } from './MatrixDynamic';

const { width, height } = Dimensions.get('window');

export const routeScreen_1 = 'Screen 1';

const Screen_1 = ({ navigation }) => {
  const [Value, setValue] = useState(null);

  const onPressHandler = () => {
    if (!Value) {
      return Alert.alert('Worning', 'Please Enter Number');
    } else if (Value < 3 || Value > 10) {
      return Alert.alert('Worning', 'Please Enter Number Between 3 To 10');
    }
    navigation.navigate(routeScreen_2, { num: Value });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f73e3e' }}>
      <StatusBar barStyle="light-content" />

      <View style={styles.Box}>
        <TextInput
          placeholder={'Please Enter Number between 3 to 10'}
          placeholderTextColor={'#00000090'}
          style={styles.Input}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={val => setValue(val)}
        />

        <TouchableOpacity
          onPress={onPressHandler}
          style={{
            backgroundColor: '#f73e3e',
            width: width * 0.75,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            marginTop: 30,
            borderRadius: 15,
          }}>
          <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screen_1;
const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    borderWidth: 1,
    width: width * 0.75,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#00000080',
  },
});
