import React, { useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import PensilImage from '../../../Assets/Images/BackgroundImage.jpg';
import CarImage from '../../../Assets/Images/Car.jpg';
import BikeImage from '../../../Assets/Images/Bike.jpg';
import FlowerImage from '../../../Assets/Images/Flower.jpg';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Dots from './Dots';

const { width, height } = Dimensions.get('window');

const data = [PensilImage, CarImage, BikeImage, FlowerImage];

const DotAnimation = () => {
  const keyExtractor = (v, index) => index.toString();
  const [Images, setImages] = useState(data);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const translateX = useSharedValue(0);

  const onScroll = ({ nativeEvent }) => {
    const contentOffset_X = nativeEvent.contentOffset.x;
    const layoutMeasurement_width = nativeEvent.layoutMeasurement.width;
    // console.log('offSet -> ', JSON.stringify(nativeEvent, null, 2));

    translateX.value = contentOffset_X;

    const slide = Math.round(contentOffset_X / layoutMeasurement_width);

    if (slide !== ActiveIndex) {
      setActiveIndex(slide);
    }
  };

  const renderItems = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item} resizeMode={'cover'} style={styles.images} />
      </View>
    );
  };

  const DotRenderItems = ({ index }) => {
    return (
      <Dots index={index} ActiveIndex={ActiveIndex} translateX={translateX} />
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.imageContainer}>
        <FlatList
          data={Images}
          keyExtractor={keyExtractor}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={onScroll}
          renderItem={renderItems}
        />
      </View>

      <View style={styles.DotContainer}>
        <Animated.FlatList
          data={Array(4)}
          keyExtractor={keyExtractor}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={DotRenderItems}
        />
      </View>
    </SafeAreaView>
  );
};

export default DotAnimation;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: width * 0.9,
    height: height * 0.4,
    alignSelf: 'center',
  },
  images: {
    width: '100%',
    height: '100%',
  },
  DotContainer: {
    width: width * 0.35,
    height: height * 0.04,
    marginTop: height * 0.01,
    alignSelf: 'center',
  },
});
