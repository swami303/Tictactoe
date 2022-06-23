import React, { useRef } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  Animated,
} from 'react-native';
import { Colors, Responsive } from '../../Constants';

const FlatListAnimation = () => {
  const anime = useRef(new Animated.Value(0)).current;

  // formula.....     Height + marginVertical   ...or...    paddingVertical + paddingVertical + marginVertical
  // const itemSize = 70 + 20; // for hight + marginBottom
  // const itemSize = 25 + 25 + (25 + 25) + 20; // paddingTop + paddingBottom + ( paddingTop + paddingBottom ) + marginBottom

  // Responsive.....
  const itemSize = Responsive.hp(10) + 20;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../../Assets/Images/BackgroundImage.jpg')}
        resizeMode="stretch"
        style={[
          StyleSheet.absoluteFillObject,
          { width: '100%', height: '100%' },
        ]}
      />

      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: anime } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={(v, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight || 40,
        }}
        renderItem={({ item, index }) => {
          const scale = anime.interpolate({
            inputRange: [-1, 0, itemSize * index, itemSize * (index + 2)],
            outputRange: [1, 1, 1, 0],
          });

          const opacity = anime.interpolate({
            inputRange: [-1, 0, itemSize * index, itemSize * (index + 2)],
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={[
                styles.MainView,
                { transform: [{ scale: scale }], opacity },
              ]}>
              <Image
                source={item.image}
                resizeMode={'contain'}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.desc}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default FlatListAnimation;

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 7 },
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 9,
    marginHorizontal: 20,
    // height: 70,
    // padding: 25,
    height: Responsive.hp(10),
    paddingHorizontal: Responsive.wp(5),
    marginBottom: 20,
  },
  text: {
    color: Colors.black,
    fontWeight: 'bold',
  },
});

const DATA = [
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
  {
    image: require('../../Assets/Images/Man.png'),
    name: 'Salman Khan',
    desc: 'Salman is Actore',
  },
  {
    image: require('../../Assets/Images/sub1.png'),
    name: 'Girl Number 1',
    desc: 'Girl Number is Doctore',
  },
  {
    image: require('../../Assets/Images/sub2.png'),
    name: 'Girl Number 2',
    desc: 'Girl Number is Lawer',
  },
  {
    image: require('../../Assets/Images/sub3.png'),
    name: 'Girl Number 3',
    desc: 'Girl Number is Programmer',
  },
  {
    image: require('../../Assets/Images/sub4.png'),
    name: 'Girl Number 4',
    desc: 'Girl Number is Artist',
  },
];
