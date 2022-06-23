import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../Constants';

const Opacity = () => {
  const width = useRef(new Animated.Value(200)).current;
  const [widthControl, setWidthControl] = useState(true);

  const startAnimation = () => {
    if (widthControl) {
      Animated.timing(width, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      setWidthControl(!widthControl);
    } else {
      Animated.timing(width, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      setWidthControl(!widthControl);
    }
  };

  return (
    <View style={styles.Box}>
      <View style={[styles.animation, { marginBottom: 10 }]}>
        <Text style={styles.buttonText}>Hello World</Text>
      </View>

      <Animated.View style={[styles.animation, { width }]}>
        <Text style={styles.buttonText}>Hello World</Text>
      </Animated.View>

      <View style={[styles.animation, { marginTop: 10 }]}>
        <Text style={styles.buttonText}>Hello World</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => startAnimation()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Opacity;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 200,
    height: 50,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    backgroundColor: Colors.k24a0ed,
    borderRadius: 100,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

// Rotation animation......
// const Opacity = () => {
//   const [opacity, setOpacity] = useState(new Animated.Value(0));

//   const startAnimation = () => {
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 1500,
//       useNativeDriver: true,
//       easing: Easing.linear,
//     }).start(() => setOpacity(new Animated.Value(0)));
//   };

//   const rotate = opacity.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.Box}>
//       <Animated.View
//         style={[styles.animation, { transform: [{ rotate: rotate }] }]}>
//         <Text style={styles.buttonText}>Hello World</Text>
//       </Animated.View>

//       <TouchableOpacity
//         style={styles.buttonView}
//         onPress={() => startAnimation()}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// Width Animation
// const Opacity = () => {
//   const width = useRef(new Animated.Value(200)).current;
//   const [widthControl, setWidthControl] = useState(true);

//   const startAnimation = () => {
//     if (widthControl) {
//       Animated.timing(width, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: false,
//       }).start();
//       setWidthControl(!widthControl);
//     } else {
//       Animated.timing(width, {
//         toValue: 200,
//         duration: 1000,
//         useNativeDriver: false,
//       }).start();
//       setWidthControl(!widthControl);
//     }
//   };

//   return (
//     <View style={styles.Box}>
//       <View style={[styles.animation, { marginBottom: 10 }]}>
//         <Text style={styles.buttonText}>Hello World</Text>
//       </View>

//       <Animated.View style={[styles.animation, { width }]}>
//         <Text style={styles.buttonText}>Hello World</Text>
//       </Animated.View>

//       <View style={[styles.animation, { marginTop: 10 }]}>
//         <Text style={styles.buttonText}>Hello World</Text>
//       </View>

//       <TouchableOpacity
//         style={styles.buttonView}
//         onPress={() => startAnimation()}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
