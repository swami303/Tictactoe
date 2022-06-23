import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const Header = props => {
  const { title, barStyle, LeftIcon, LeftPress } = props;

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Box}>
        <View style={styles.View1}>
          <TouchableOpacity onPress={LeftPress} style={styles.ImageView}>
            <Image
              source={LeftIcon}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.View2}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.View3}></View>
      </View>
    </SafeAreaView>
  );
};

Header.defaultProps = {
  title: '',
  barStyle: null,
  LeftPress: () => null,
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#3381d4',
    paddingHorizontal: width * 0.03,
  },
  Box: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginHorizontal: width * 0.02,
    alignItems: 'center',
  },
  View1: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  View2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View3: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  ImageView: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.05,
    height: width * 0.05,
    transform: [{ rotate: '90deg' }],
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
});
