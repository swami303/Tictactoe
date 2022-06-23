import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat';
import Images from '../Assets/Images';
import Header from '../Common/Header';
import Firebase from '@react-native-firebase/firestore';

const { width, height } = Dimensions.get('window');

export const routeChat = 'Chat';

const Chat = props => {
  const { navigation } = props;
  const { name } = props.route?.params;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSubscribe = gettingChats();

    return () => unSubscribe();

    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
  }, []);

  const gettingChats = async () => {
    try {
      const data = await Firebase()
        .collection('ChatRoom')
        .doc('Vivek')
        .collection('Massages')
        .orderBy('createdAt', 'desc')
        .onSnapshot(QuerySnap => {
          const allMassages = QuerySnap.docs.map(res => res.data());
          setMessages(allMassages);
        });

      return data;
    } catch (error) {
      console.log('Error from GettingChats', error);
    }
  };

  const onSend = async arrays => {
    try {
      const [obj] = arrays;
      const massage = {
        ...obj,
        sentBY: 'Vivek',
        sentTO: 'Urmin',
        FlatList: 'true',
      };

      setMessages(prevMsg => GiftedChat.append(prevMsg, massage));

      await Firebase()
        .collection('ChatRoom')
        .doc('Vivek')
        .collection('Massages')
        .add(massage);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <View style={styles.Box}>
      <StatusBar
        backgroundColor={'transparent'}
        animated={true}
        barStyle={'light-content'}
      />

      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : null}
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}> */}
      <Header
        title={name}
        LeftIcon={Images.back}
        LeftPress={() => navigation.goBack()}
      />

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 'Vivek',
        }}
        textInputProps={{ color: '#000' }}
        alwaysShowSend={true}
      />

      {/* <TextInput
            placeholder="Please Enter Text"
            placeholderTextColor={'#000'}
            style={{
              borderWidth: 1,
              width: '90%',
              alignSelf: 'center',
              height: 50,
              bottom: 5,
            }}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback> */}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    paddingBottom: 15,
  },
});
