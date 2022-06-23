import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Images from '../Assets/Images';
import Header from '../Common/Header';
import { routeChat } from './Chat';

const { width, height } = Dimensions.get('screen');

export const routeUsers = 'Users';

const data = [
  {
    image: Images.user_1,
    name: 'Robert Downey jr.',
    des: 'Hello There i am using Gifted Chat system',
    ago: '2 minutes ago',
  },
  {
    image: Images.user_2,
    name: 'Anjali Patel',
    des: 'Hello There i am using Gifted Chat system',
    ago: '4 minutes ago',
  },
  {
    image: Images.user_3,
    name: 'Vijat Raval',
    des: 'Hello There i am using Gifted Chat system',
    ago: '10 minutes ago',
  },
];

const Users = props => {
  const { navigation } = props;

  return (
    <View style={styles.Box}>
      <StatusBar
        backgroundColor={'transparent'}
        animated={true}
        barStyle={'light-content'}
      />

      <Header title={'Users'} />

      <FlatList
        data={data}
        keyExtractor={(v, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate(routeChat, { ...item })}
            style={{
              flexDirection: 'row',
              width: width * 0.9,
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                width: width * 0.15,
                height: width * 0.15,
                borderRadius: 50,
              }}
            />

            <View
              style={{
                flex: 1,
                paddingHorizontal: width * 0.03,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingTop: 5,
                  paddingBottom: 8,
                }}>
                {item.name}
              </Text>
              <Text style={{ color: '#000' }}>{item.des}</Text>
            </View>

            <Text style={{ fontSize: 12, color: '#000' }}>{item.ago}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
