import React, { useRef } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images, Responsive } from '../../../Constants';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import Photos from './Photos';

const DATA = [
  Images.img_Fox,
  Images.im_pencil,
  Images.img_Car,
  Images.img_Bike,
  Images.img_Flower,
  Images.img_OpenImage,
  Images.img_Orange,
  Images.img_Parrot,
  Images.img_PineApple,
  Images.img_Quiz,
];

const PhotoGallery = () => {
  const [Images, setImages] = React.useState(DATA);
  const [ActiveIndex, setActiveIndex] = React.useState(0);
  const ImageRef = React.useRef();
  const SmallImageRef = useRef();
  const ScaleAnimation = useSharedValue(0);
  const keyExtractor = (v, index) => index.toString();

  const onPresshandler = (item, index) => {
    ImageRef.current.scrollToIndex({ index: index });
    ScaleAnimation.value = withTiming(index);
  };

  const onScroll = ({ nativeEvent }) => {
    const contentOffset_X = nativeEvent.contentOffset.x;
    const layoutMeasurement_width = nativeEvent.layoutMeasurement.width;
    // console.log('offSet -> ', JSON.stringify(nativeEvent, null, 2));

    const slide = Math.round(contentOffset_X / layoutMeasurement_width);

    ScaleAnimation.value = withTiming(slide);
    SmallImageRef.current.scrollToIndex({ index: slide });

    if (slide !== ActiveIndex) {
      setActiveIndex(slide);
    }
  };

  const renderShortImages = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onPresshandler(item, index)}
        style={[
          styles.ShortImagesRenderView,
          { borderWidth: ActiveIndex == index ? 1 : 0 },
        ]}>
        <Image
          source={item}
          resizeMode={'stretch'}
          style={styles.ShortImages}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <FlatList
        ref={ImageRef}
        data={Images}
        keyExtractor={keyExtractor}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        renderItem={({ item, index }) => (
          <Photos
            item={item}
            index={index}
            ActiveIndex={ActiveIndex}
            ScaleAnimation={ScaleAnimation}
          />
        )}
      />

      <View style={styles.ShortImagesMainView}>
        <FlatList
          ref={SmallImageRef}
          data={Images}
          keyExtractor={keyExtractor}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderShortImages}
        />
      </View>
    </View>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ShortImagesMainView: {
    position: 'absolute',
    bottom: Responsive.hp(5),
    left: 0,
    right: 0,
  },
  ShortImages: {
    width: '100%',
    height: '100%',
  },
  ShortImagesRenderView: {
    borderColor: '#000',
    marginHorizontal: Responsive.wp(5),
    width: Responsive.viewportWidth / 4,
    height: Responsive.viewportHeight / 10,
  },
});
