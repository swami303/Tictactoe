import React, { useCallback, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  GestureHandlerRootView,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';
import SwipableItem from './SwipableItem';

const DATA = [
  { id: 0, text: 'Hello Vivek, This is Hello World' },
  { id: 1, text: 'Hello Utsav, This is Hello World' },
  { id: 2, text: 'Hello Urmin, This is Hello World' },
  { id: 3, text: 'Hello Parth, This is Hello World' },
  { id: 4, text: 'Hello Darshan, This is Hello World' },
];

const SwipableList = () => {
  const [listData, setListData] = useState(DATA);
  const keyExtractor = (v, index) => index.toString();

  const onDismiss = ({ id }) => {
    console.log('id -> ', id);
    setListData(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  const renderListItems = ({ item, index }) => {
    return <SwipableItem item={item} index={index} onDismiss={onDismiss} />;
  };
  console.log('listItem -> ', JSON.stringify(listData, null, 2));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.Container}>
        {/* <FlatList
          data={listData}
          keyExtractor={keyExtractor}
          renderItem={renderListItems}
          showsVerticalScrollIndicator={false}
        /> */}

        <ScrollView>
          {listData.map((item, index) => {
            return (
              <SwipableItem key={index} item={item} onDismiss={onDismiss} />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SwipableList;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
