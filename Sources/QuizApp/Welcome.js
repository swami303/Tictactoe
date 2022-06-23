import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import Images from '../Constants/Images';
import { routeQuiz } from './Quiz';
import styles from './Style';

export const routeWelcome = 'Welcome';

const Welcome = props => {
  const { navigation } = props;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#8257fe' }}>
      <StatusBar barStyle="light-content" animated={true} />
      <View style={styles.centerWhite}>
        {/* <Text style={styles.WelcomeTitle}>Welcome To Quiz App</Text> */}
        <Image
          source={Images.img_Quiz}
          resizeMode={'cover'}
          style={styles.QuizLogo}
        />

        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(routeQuiz)}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
