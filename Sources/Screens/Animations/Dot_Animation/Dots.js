import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const Dot_SIZE = width * 0.088; // width + margin

const Dots = ({ index, ActiveIndex, translateX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const dotRotation = useAnimatedStyle(() => {
    const X = interpolate(translateX.value, inputRange, [
      -Dot_SIZE,
      0,
      Dot_SIZE,
    ]);

    return {
      transform: [{ translateX: X }],
    };
  });

  return (
    <View style={styles.DotBorders}>
      {index == 0 && (
        <Animated.View style={[styles.FillDotColor, dotRotation]} />
      )}
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({
  DotBorders: {
    borderWidth: 1,
    borderColor: '#f00',
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: 100,
    marginLeft: width * 0.03,
  },
  FillDotColor: {
    backgroundColor: '#f00',
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: 100,
  },
});
