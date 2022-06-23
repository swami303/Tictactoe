import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ReduxToolkitImage from './Images/Redux-Toolkit.webp';
import {
  Decrement,
  FetchAPI,
  Increment,
  IncrementByAmount,
} from './Toolkit/CounterReducer';
import { routeToolkitData } from './ToolkitData';

const { width, height } = Dimensions.get('window');

export const routeReduxToolkit = 'Redux Toolkit';

const ReduxToolKit = props => {
  const { navigation } = props;

  const AnimatedValue = React.useRef(new Animated.Value(0)).current;

  const { value, array, isLoading, error } = useSelector(
    state => state.CounterReducer,
  );
  const dispatch = useDispatch();

  console.log('isLoading --> ', isLoading);
  console.log('array --> ', JSON.stringify(array, null, 2));
  console.log('error --> ', error);

  const startAnimation = () => {
    Animated.spring(AnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      bounciness: 20,
    }).start();
  };

  React.useEffect(() => {
    dispatch(FetchAPI('Hello World'));
    setTimeout(() => {
      startAnimation();
    }, 300);
  }, []);

  const scale = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <SafeAreaView style={styles.Container}>
      {isLoading && (
        <View style={styles.Loading}>
          <ActivityIndicator size={'large'} color={'#fff'} />
        </View>
      )}

      <StatusBar barStyle={'light-content'} />

      <View style={styles.PageView}>
        <Animated.Image
          source={ReduxToolkitImage}
          resizeMode={'cover'}
          style={[styles.toolkitImage, { transform: [{ scale: scale }] }]}
        />

        <Text style={styles.valueText}>{'value: ' + value}</Text>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.buttonView, { backgroundColor: '#2ec912' }]}
          onPress={() => dispatch(Increment())}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.buttonView, { backgroundColor: '#de3131' }]}
          onPress={() => dispatch(Decrement())}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.buttonView}
          onPress={() => dispatch(IncrementByAmount(20))}>
          <Text style={styles.buttonText}>Increment By 20</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.buttonView, { backgroundColor: '#ab8118' }]}
          onPress={() =>
            navigation.navigate(routeToolkitData, { data: array.data })
          }>
          <Text style={styles.buttonText}>Toolkit Data Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReduxToolKit;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#754cbc',
  },
  PageView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolkitImage: {
    width: width * 0.8,
    height: height * 0.12,
    position: 'absolute',
    top: height * 0.03,
    borderRadius: width * 0.05,
  },
  valueText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    paddingBottom: height * 0.04,
  },
  buttonView: {
    backgroundColor: '#374dde',
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
  Loading: {
    flex: 1,
    backgroundColor: '#00000099',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
