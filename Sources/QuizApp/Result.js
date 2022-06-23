import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Style';
import { routeWelcome } from './Welcome';

const { width, height } = Dimensions.get('window');

export const routeResult = 'Result';

const Result = props => {
  const { Answers } = props.route?.params;
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Answers == 0 ? '#f00' : '#40b850' }}>
      <View style={styles.centerWhite}>
        <Text style={styles.resultTitle}>Result</Text>
        {Answers == 0 ? (
          <Text style={styles.resultText}>{`Sorry \n Your are Failed`}</Text>
        ) : (
          <Text
            style={
              styles.resultText
            }>{`Congratulations \n Your ${Answers} answers are correct`}</Text>
        )}

        <TouchableOpacity
          onPress={() => props.navigation.navigate(routeWelcome)}
          style={[
            styles.buttonView,
            { backgroundColor: Answers == 0 ? '#f00' : '#40b850' },
          ]}>
          <Text style={styles.buttonText}>{'Go To Home'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Result;
