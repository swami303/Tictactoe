import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { Images, Responsive } from '../Constants';
import { ToastMassage } from '../Screens/Common/Toast';

const Card = ({ item, index, onPress, notSame }) => {
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  const [ToValue, setToValue] = useState(1);

  // console.log('item...', item);

  const PressHandler = () => {
    ToastMassage({
      text1: `Card Number: ${index}`,
      text2: 'Images are showing correctly...',
    });
    HandleAnimation();
    onPress(item, index);
  };

  const HandleAnimation = () => {
    Animated.spring(rotateAnimation, {
      toValue: ToValue,
      duration: 500,
      useNativeDriver: true,
      bounciness: 12,
    }).start();
    setToValue(v => (v == 1 ? 0 : 1));
  };

  useEffect(() => {
    if (!item.matched) {
      if (!notSame) {
        console.log('Same function');
        Animated.spring(rotateAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
          bounciness: 12,
        }).start();
      } else {
        console.log('Not Same function');
        setToValue(1);
      }
    }
  }, [notSame]);

  return (
    <View>
      <TouchableOpacity disabled={item.matched} onPress={PressHandler}>
        <Animated.Image
          source={item.src}
          resizeMode={'cover'}
          style={[
            styles.frontImage,
            {
              transform: [
                {
                  rotateZ: rotateAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['360deg', '0deg'],
                  }),
                },
                {
                  scale: rotateAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={Images.im_pencil}
          resizeMode={'cover'}
          // style={{ width: '100%', height: '100%' }}
          style={[
            styles.frontImage,
            { position: 'absolute' },
            {
              transform: [
                {
                  rotateZ: rotateAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
                {
                  scale: rotateAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  frontImage: {
    width: Responsive.viewportWidth / 4 - 10,
    height: Responsive.viewportHeight / 4 - 80,
    marginBottom: 40,
    marginHorizontal: 5,
  },
});
