import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Responsive } from '../../../Constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const WIDTH = Responsive.viewportWidth;

const ITEM_HEIGHT = Responsive.hp(7);
const X_THRESHOLD = -WIDTH * 0.2;

const SwipableItem = ({ item, onDismiss }) => {
  const X_value = useSharedValue(0);
  const Itemheight = useSharedValue(ITEM_HEIGHT);
  const marginVertical = useSharedValue(Responsive.hp(2));
  const opacity = useSharedValue(1);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: event => {
      // console.log('onStart -> ', JSON.stringify(event.translationX, null, 2));
      X_value.value = event.translationX;
    },
    onActive: event => {
      // console.log('onActive -> ', JSON.stringify(event.translationX, null, 2));
      // console.log('width -> ', JSON.stringify(width * 0.2, null, 2));
      X_value.value = event.translationX;
    },
    onEnd: event => {
      // console.log('onEnd -> ', JSON.stringify(event.translationX, null, 2));
      // console.log('width -> ', JSON.stringify(width * 0.2, null, 2));
      const shouldBeDismiss = event.translationX < X_THRESHOLD;

      if (shouldBeDismiss) {
        // runOnJS(onDismiss)(item);
        X_value.value = withTiming(-WIDTH);
        Itemheight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0);
      } else {
        X_value.value = withTiming(0);
      }
    },
  });

  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: X_value.value }],
    };
  });

  const DeleteStyle = useAnimatedStyle(() => {
    const opacity = withTiming(X_value.value < X_THRESHOLD ? 1 : 0);
    return {
      opacity,
    };
  });

  const ContainerStyle = useAnimatedStyle(() => {
    // const opacity = withTiming(X_value.value > X_THRESHOLD ? 1 : 0);
    return {
      height: Itemheight.value,
      marginVertical: marginVertical.value,
      // opacity: opacity.value,
      transform: [{ scale: opacity.value }],
    };
  });

  return (
    <Animated.View style={[styles.Container, ContainerStyle]}>
      <Animated.View style={[styles.trashIcon, DeleteStyle]}>
        <FontAwesome5
          name={'trash-alt'}
          size={Responsive.normalize(20)}
          style={{ color: '#F00' }}
        />
      </Animated.View>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.itemView, AnimatedStyle]}>
          <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default SwipableItem;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
  },
  itemView: {
    backgroundColor: '#fff',
    width: Responsive.wp(95),
    height: ITEM_HEIGHT,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: Responsive.wp(5),
    borderRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  itemText: {
    fontSize: Responsive.normalize(16),
    fontWeight: 'bold',
    color: '#000',
  },
  trashIcon: {
    width: Responsive.wp(10),
    height: ITEM_HEIGHT,
    position: 'absolute',
    right: Responsive.wp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
