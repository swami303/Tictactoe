import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const useFollowAnimation = ({ x, y }) => {
  const followX = useDerivedValue(() => {
    return withSpring(x.value);
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value);
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: followX.value }, { translateY: followY.value }],
    };
  });

  return { followX, followY, animatedStyle };
};

const GestureAnimations = () => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const Context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      Context.value = { x: translationX.value, y: translationY.value };
    })
    .onUpdate(event => {
      translationX.value = event.translationX + Context.value.x;
      translationY.value = event.translationY + Context.value.y;
    });

  const { followX, followY, animatedStyle } = useFollowAnimation({
    x: translationX,
    y: translationY,
  });

  const {
    followX: blueX,
    followY: blueY,
    animatedStyle: blueStyle,
  } = useFollowAnimation({
    x: followX,
    y: followY,
  });

  const {
    followX: yellowX,
    followY: yellowY,
    animatedStyle: yellowStyle,
  } = useFollowAnimation({
    x: blueX,
    y: blueY,
  });

  const {
    followX: greenX,
    followY: greenY,
    animatedStyle: greenStyle,
  } = useFollowAnimation({
    x: yellowX,
    y: yellowY,
  });

  return (
    <GestureHandlerRootView style={styles.Box}>
      <Animated.View
        style={[styles.square, { backgroundColor: '#59db21' }, greenStyle]}
      />
      <Animated.View
        style={[styles.square, { backgroundColor: '#f0f' }, yellowStyle]}
      />
      <Animated.View
        style={[styles.square, { backgroundColor: '#00f' }, blueStyle]}
      />

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.square, animatedStyle]} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default GestureAnimations;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    zIndex: 1,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ff2617',
    borderRadius: 100,
    position: 'absolute',
  },
});
