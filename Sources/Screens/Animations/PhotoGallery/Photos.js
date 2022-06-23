import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Responsive } from '../../../Constants';
import ImageZoom from 'react-native-image-pan-zoom';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Photos = ({ item, index, ScaleAnimation }) => {
  const ReAnimatedStyles = useAnimatedStyle(() => {
    /*
        With Extrapolate.CLAMP the animation frames goes to 0, 0, 0, 1, 0, 0, 0, 
        With-Out Extrapolate.CLAMP the animation frames goes to -2, -1, 0, 1, 0, -1, -2, 
    */
    const scale = interpolate(
      ScaleAnimation.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <ImageZoom
      cropWidth={Responsive.viewportWidth}
      cropHeight={Responsive.viewportHeight}
      imageWidth={styles.LongImage.width}
      imageHeight={styles.LongImage.height}
      minScale={1}>
      <Animated.Image
        source={item}
        resizeMode={'contain'}
        style={[styles.LongImage, ReAnimatedStyles]}
      />
    </ImageZoom>
  );
};

export default Photos;

const styles = StyleSheet.create({
  LongImage: {
    width: Responsive.viewportWidth,
    height: Responsive.viewportHeight,
  },
});
