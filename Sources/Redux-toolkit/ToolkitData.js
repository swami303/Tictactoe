import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  FadeIn,
  ZoomInLeft,
  SlideInLeft,
  LightSpeedInLeft,
  RollInLeft,
  RotateInUpLeft,
  BounceIn,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export const routeToolkitData = 'Toolkit Data';

const ToolkitData = props => {
  console.log('props --> ', JSON.stringify(props, null, 2));

  const { navigation } = props;
  const { data } = props.route.params;

  const renderItems = (item, index) => {
    return (
      <Animated.View
        entering={ZoomInLeft.delay(`${index * 2}00`)}
        style={styles.renderMainView}>
        <Text style={styles.Text}>{item.email}</Text>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.PageView}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={[
            styles.buttonView,
            {
              width: width * 0.15,
              marginLeft: width * 0.05,
              alignSelf: 'stretch',
            },
          ]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{'<--'}</Text>
        </TouchableOpacity>
        <FlatList
          data={[...data, ...data, ...data, ...data]}
          keyExtractor={(v, index) => index.toString()}
          renderItem={({ item, index }) => renderItems(item, index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ToolkitData;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#754cbc',
  },
  PageView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Text: {
    fontSize: width * 0.0456,
    color: '#fff',
    fontWeight: 'bold',
  },
  renderMainView: {
    backgroundColor: '#f00',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: width * 0.0456,
    color: '#fff',
    fontWeight: 'bold',
  },
});
