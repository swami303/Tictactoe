import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import FlatListWidthComponet from './FlatListWidthComponet';

const { width, height } = Dimensions.get('window');

const SIZE = width * 0.7;

const FlatListWidthAnimation = () => {
  const words = ['ReactJs', 'NodeJs', 'VueJs', 'AngularJs'];
  const translateX = useSharedValue(0);

  const Scrollhandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.Container}>
      <Animated.FlatList
        data={words}
        keyExtractor={(v, index) => index.toString()}
        pagingEnabled={true}
        horizontal={true}
        onScroll={Scrollhandler}
        renderItem={({ item, index }) => (
          <FlatListWidthComponet
            item={item}
            index={index}
            translateX={translateX}
          />
        )}
      />
    </View>
  );
};

export default FlatListWidthAnimation;

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
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#fff',
  },
});
