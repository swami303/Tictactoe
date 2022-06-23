import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Colors, Images, Responsive } from '../Constants';

const AtulTask = () => {
  const Container = [Images.ic_square, Images.ic_triangle, Images.ic_circle];
  const [SelectedItems, setSelectedItems] = useState([]);
  const [Bull, setBull] = useState([]);

  useEffect(() => {
    setBull(new Array(SelectedItems.length).fill(true));
    // All Logic depende on this ...If the length of SelectedItems should be change, New Array will generate and
    // All will fill with true
  }, [SelectedItems.length]);

  const DeletPrevious = (item, index, previousTarget = index) => {
    console.log('item.....', item);
    console.log('index.....', index);
    console.log('previousTarget....', previousTarget);

    const currentTarget = previousTarget - 1;
    console.log('currentTarget......', currentTarget);

    if (currentTarget == -1) {
      console.log('Reached to last element So Delete Index of....', index);
      const updated = SelectedItems.filter((i, v) => v != index);
      setSelectedItems(updated);
      return;
    }

    if (Bull[currentTarget]) {
      console.log('Not Same...');
      const updated = SelectedItems.map((v, i) =>
        i == index ? SelectedItems[currentTarget] : v,
      );
      setSelectedItems(updated);
      Bull[currentTarget] = false;
    } else {
      console.log('Same Element So Going To Recursion...');
      DeletPrevious(item, index, currentTarget);
    }
  };

  console.log('BULL.........', Bull);

  // const DeletPrevious = (item, index) => {
  //   console.log('item.....', item);
  //   console.log('index.....', index);
  //   const target = index - 1;
  //   console.log('Target......', target);

  //   if (target == -1) {
  //     console.log('Reached to last element....');
  //     const updated = SelectedItems.filter((i, v) => v != index);
  //     setSelectedItems(updated);
  //     return;
  //   }

  //   if (SelectedItems[index] != SelectedItems[target]) {
  //     console.log('Not Same...');
  //     const updated = SelectedItems.map((v, i) =>
  //       i == index ? SelectedItems[target] : v,
  //     );
  //     setSelectedItems(updated);
  //   } else {
  //     console.log('Same Going To Recursion...');
  //     DeletPrevious(item, target);
  //   }
  // };

  // const DeletPrevious = (item, index) => {
  //   console.log('item.....', item);
  //   console.log('index.....', index);
  //   const target = index - 1;
  //   console.log('Target......', target);
  //   if (target == -1) {
  //     console.log('Reached to last element....');
  //     const updated = SelectedItems.filter((i, v) => v != index);
  //     setSelectedItems(updated);
  //     return;
  //   }
  //   if (SelectedItems[index] != SelectedItems[target]) {
  //     console.log('Not Same...');
  //     const updated = SelectedItems.map((v, i) => (i == target ? item : v));
  //     setSelectedItems(updated);
  //   } else {
  //     console.log('Same Going To Recursion...');
  //     DeletPrevious(item, target);
  //   }
  // };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Container}>
        <View style={styles.SelectedView}>
          <FlatList
            data={SelectedItems}
            keyExtractor={(v, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => DeletPrevious(item, index)}
                style={styles.DeletItemView}
                key={index}>
                <Image
                  source={item}
                  resizeMode="contain"
                  style={styles.Image}
                />
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.usersView}>
          {Container.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedItems(state => [item, ...state])}
              style={[styles.DeletItemView, { marginTop: 0 }]}
              key={index}>
              <Image source={item} resizeMode="contain" style={styles.Image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AtulTask;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  SelectedView: {
    flex:1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  DeletItemView: {
    width: Responsive.wp(20),
    height: Responsive.wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.black,
    marginTop: Responsive.hp(1),
  },
  usersView: {
    width: Responsive.wp(100),
    alignSelf: 'center',
    height: Responsive.hp(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
  },
  Image: {
    width: '75%',
    height: '75%',
    tintColor: Colors.black,
  },
});
