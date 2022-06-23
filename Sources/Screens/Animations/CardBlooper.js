import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import { Responsive } from '../../Constants';

const CardMatching = () => {
  const rotateX = React.useRef(new Animated.Value(0)).current;
  const data = [
    '0',
    '1',
    '2',
    '3',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '4',
    '5',
    '6',
    '7',
  ];
  const [Data, setData] = React.useState(data);
  const [Selected, setSelected] = React.useState(
    new Array(data.length).fill(false),
  );
  const [Checking, setChecking] = React.useState([]);

  React.useEffect(() => {
    if (Checking.length > 1) {
      setChecking([]);
    }
  }, [Checking]);

  const pressHandler = (item, index) => {
    // console.log('Item...', item);
    // console.log('Index...', index);
    const updateSelected = Selected.map((v, i) => {
      return index == i ? !v : v;
    });
    setSelected(updateSelected);

    setChecking(prevState => [...prevState, item]);
  };

  console.log('Checking...', Checking);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <FlatList
          data={Data}
          keyExtractor={(v, index) => index.toString()}
          numColumns={4}
          renderItem={({ item, index }) => {
            return item ? (
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: Selected[index] ? '#f00' : '#00000010',
                  },
                ]}>
                <TouchableOpacity
                  style={[styles.card, { marginBottom: 0 }]}
                  onPress={() => pressHandler(item, index)}>
                  <Text
                    style={{
                      fontSize: 40,
                      fontWeight: 'bold',
                      color: 'transparent',
                      color: Selected[index] ? '#fff' : 'transparent',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={[styles.card, { backgroundColor: '#fff' }]} />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardMatching;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#00000020',
    width: Responsive.viewportWidth / 4 - 20,
    height: Responsive.viewportHeight / 4 - 50,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
});
