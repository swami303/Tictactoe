import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StarPatterns = () => {
  const n = [0, 1, 2, 3, 4];
  let str = '\n';

  const Star = () => {
    console.log('------->', str);
    str = '\n';
  };

  return (
    <View style={styles.Box}>
      <TouchableOpacity style={styles.Button} onPress={() => Star()}>
        <Text>{''}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StarPatterns;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    padding: 100,
    backgroundColor: '#f00',
  },
});

// *
// **
// ***
// ****
// *****
// for (let i = 0; i < n.length; i++) {
//   for (let j = 0; j <= i; j++) {
//     str += '*';
//   }
//   str += '\n';
// }

// *****
// ****
// ***
// **
// *
// for (let i = 0; i < n.length; i++) {
//   for (let j = 0; j <= n.length - 1 - i; j++) {
//     str += '*';
//   }
//   str += '\n';
// }

// *****
//  ****
//   ***
//    **
//     *
// for (let i = 0; i < n.length; i++) {
//   for (let j = 0; j < i; j++) {
//     str += ' ';
//   }

//   for (let k = 0; k <= n.length - 1 - i; k++) {
//     str += '*';
//   }
//   str += '\n';
// }

//     *
//    **
//   ***
//  ****
// ****
// for (let i = 0; i < n.length; i++) {
//   for (let j = 0; j < n.length - 1 - i; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k <= i; k++) {
//     str += '*';
//   }
//   str += '\n';
// }

//
//    *
//   ***
//  *****
// *******
// for (let i = 0; i < n.length; i++) {
//   for (let j = 0; j < n.length - i; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     str += '*';
//   }
//   str += '\n';
// }

//   Urmin's Logic.....
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// for (let i = 0; i <= n.length; i++) {
//   for (let j = 0; j <= n.length - i; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k < i; k++) {
//     str += ' *';
//   }
//   str += '\n';
// }

// *****
//  ***
//   *
// for (let i = n.length; i > 0; i--) {
//   for (let j = i; j < n.length; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     str += '*';
//   }
//   str += '\n';
// }

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// let i;
// for (i = 0; i < n.length; i++) {
//   for (let j = 0; j <= i; j++) {
//     str += '*';
//   }
//   str += '\n';
// }
// for (i = n.length; i > 0; i--) {
//   for (let j = 1; j < i; j++) {
//     str += '*';
//   }
//   str += '\n';
// }

//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *
// let i;
// for (i = 0; i < n.length; i++) {
//   for (let j = 0; j < n.length - i; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     str += '*';
//   }
//   str += '\n';
// }
// for (i = n.length; i > 0; i--) {
//   for (let j = 0; j < n.length - i; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     str += '*';
//   }
//   str += '\n';
// }

//      *
//     **
//    ***
//   ****
//  *****
//   ****
//    ***
//     **
//      *
// let i;
// for (i = 0; i < n.length; i++) {
//   for (let j = 0; j < n.length - 1 - i; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k <= i; k++) {
//     str += '*';
//   }
//   str += '\n';
// }

// for (i = n.length; i > 0; i--) {
//   for (let j = 0; j < n.length - i + 1; j++) {
//     str += ' ';
//   }
//   for (let k = 0; k < i - 1; k++) {
//     str += '*';
//   }
//   str += '\n';
// }
