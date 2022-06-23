import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const SIZE = width * 0.7;

const FlatListWidthComponet = ({ item, index, translateX }) => {
  const color = ['#0d1e59', '#12702b', '#63290e', '#590d52'];
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const boxStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1.2, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );

    const Y_Value = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{ translateY: Y_Value }],
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        [
          styles.Container,
          { backgroundColor: `rgba(20, 166, 219, 0.${index + 1})` },
        ],
      ]}>
      <Animated.View
        style={[
          styles.Container,
          styles.Box,
          { backgroundColor: color[index] },
          boxStyle,
        ]}>
        <Animated.Text style={[styles.Text, textStyle]}>{item}</Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default FlatListWidthComponet;

const styles = StyleSheet.create({
  Container: {
    width,
    height,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box: {
    width: SIZE,
    height: SIZE,
  },
  Text: {
    fontSize: width * 0.12,
    fontWeight: 'bold',
    color: '#fff',
  },
});
