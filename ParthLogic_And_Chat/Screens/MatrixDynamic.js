import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export const routeScreen_2 = 'Matrix Dynamic';

const MatrixDynamic = props => {
  const { num } = props.route?.params;

  // const [array, setarray] = useState(new Array(num * num).fill('*'));
  const [array, setarray] = useState([]);
  const [winner, setWinner] = useState([]);

  // const [ArrDATA, setArrDATA] = useState(Array(num).fill(Array(num).fill('*')));

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr[i] = [];
      for (let j = 0; j < num; j++) {
        arr[i][j] = `${i}${j}`;
      }
    }
    setarray(arr);
  }, []);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr[i] = [];
      for (let j = 0; j < num; j++) {
        arr[i][j] = false;
      }
    }
    setWinner(arr);
  }, []);

  const arr = [
    ['00', '01', '02', '03', '04'],
    ['10', '11', '12', '13', '14'],
    ['20', '21', '22', '23', '24'],
    ['30', '31', '32', '33', '34'],
    ['40', '41', '42', '43', '44'],
  ];
  const win = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];

  // console.log('Array.....', array);
  // console.log('Winning.....', winner);
  // console.log('num.....', num);

  const onPressHandler = (MainValue, MainIndex, target, INDEX) => {
    // console.log('MainValue..........', MainValue.length);
    // console.log('MainIndex..........', MainIndex);
    // console.log('target..........', target);
    // console.log('index..........', INDEX);

    const Diagnols = array.map((v, index) => array[index][index]);
    const Cross = array.map(
      (v, index) => array[index][array.length - index - 1],
    );
    const rows = array.find(item => item[INDEX] === target);
    const columnsNested = array.map((item, MainIndex) =>
      item.filter(
        (v, subIndex) => array[MainIndex][INDEX] == array[MainIndex][subIndex],
      ),
    );
    const columns = columnsNested.flat(Infinity);

    const isIncludeInDiagnols = Diagnols.includes(target);
    const isIncludeInCross = Cross.includes(target);

    // console.log('rows..........', rows);
    // console.log('columns..........', columns);
    // console.log('Diagnols..........', Diagnols);
    // console.log('Cross..........', Cross);
    // console.log('isIncludeInDiagnols..........', isIncludeInDiagnols);
    // console.log('isIncludeInCross..........', isIncludeInCross);

    const centerMainArray = Math.floor(array.length / 2);
    const fullyCentered = () => {
      if (num % 2 != 0) {
        return array[centerMainArray][
          Math.floor(array[centerMainArray].length / 2)
        ];
      }
      return false;
    };
    // console.log('centerMainArray......', centerMainArray);
    // console.log('FullyCentered......', fullyCentered());

    setWinner(prevState => {
      return prevState.map((mItem, mIndex) => {
        // console.log('Main Array....', mItem);

        return mItem.map((sItem, sIndex) => {
          // console.log('sub Array....', sItem);

          if (
            array[mIndex][sIndex] == target ||
            array[mIndex].includes(target) == rows.includes(target) ||
            array[mIndex][sIndex] == array[mIndex][INDEX] ||
            (array[mIndex][sIndex] == array[mIndex][mIndex] &&
              Diagnols.includes(target) &&
              fullyCentered() == target) ||
            (array[mIndex][sIndex] == array[mIndex][num - 1 - mIndex] &&
              Cross.includes(target) &&
              fullyCentered() == target) ||
            (array[0][0] == target &&
              Diagnols.includes(target) &&
              array[mIndex][sIndex] == array[mIndex][mIndex]) ||
            (array[num - 1][num - 1] == target &&
              Diagnols.includes(target) &&
              array[mIndex][sIndex] == array[mIndex][mIndex]) ||
            (array[num - 1][0] == target &&
              Cross.includes(target) &&
              array[mIndex][sIndex] == array[mIndex][num - 1 - mIndex]) ||
            (array[0][num - 1] == target &&
              Cross.includes(target) &&
              array[mIndex][sIndex] == array[mIndex][num - 1 - mIndex])
          ) {
            return true;
          } else {
            return false;
          }
        });
      });
    });

    // Logic Taken from C++......
    // for (let i = 0; i < num; i++) {
    //   for (let j = 0; j < num; j++) {
    //     // Targeting All Diagnols......last two condition is used for rows and columns.....
    //     if (
    //       i == j ||
    //       j == num - i - 1 ||
    //       array[i][j] == target ||
    //       array[i][j] == array[i][index]
    //     ) {
    //       // console.log('Box.....', array[i][j]);
    //     }
    //   }
    // }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f73e3e' }}>
      <StatusBar barStyle="light-content" />

      <View style={styles.Box}>
        <View
          style={{
            paddingHorizontal: width * 0.02,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <ScrollView>
            {array.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    height: width * `0.1${num}`,
                    justifyContent: 'space-between',
                  }}>
                  {item.map((val, ind) => {
                    return (
                      <TouchableOpacity
                        onPress={() => onPressHandler(item, index, val, ind)}
                        key={ind}
                        style={{
                          backgroundColor: winner[index][ind]
                            ? '#ff0000'
                            : '#00000010',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: width / num - 20,
                        }}>
                        <Text
                          style={{
                            color: winner[index][ind] ? '#fff' : '#000',
                            fontWeight: 'bold',
                          }}>
                          *
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MatrixDynamic;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// return (
//   <TouchableOpacity
//     onPress={() => onPressHandler(item, index)}
//     key={index}
//     style={{
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: width / num - 20,
//       height: width / num - 20,
//       marginVertical: 5,
//       marginHorizontal: 5,
//       borderWidth: 1,
//     }}>
//     <Text
//       style={{
//         color: '#000',
//         fontWeight: 'bold',
//       }}>
//       {item}
//     </Text>
//   </TouchableOpacity>
// );
