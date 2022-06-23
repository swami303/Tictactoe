import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';
import EmojiImage from '../Assets/Images/Emoji.png';

const { width, height } = Dimensions.get('window');

const ChatScreen = () => {
  const [ChatData, setChatData] = useState([...DATA, ...DATA] || []);
  const [inputText, setInputText] = useState('');
  const currentTime = moment(new Date()).format('hh:mm A');
  const flatListRef = useRef();

  const renderChatList = ({ item, index }) => {
    return (
      <View
        style={[
          styles.massageView,
          {
            alignSelf: item.id == 1 ? 'flex-end' : 'flex-start',
            marginVertical: item.id == 1 ? height * 0.002 : height * 0.01,
            backgroundColor: item.id == 1 ? '#2BB741' : '#3a3745',
          },
        ]}>
        <Text style={styles.msg}>{item.massage}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    );
  };

  const onMassageSend = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    setChatData([
      { massage: inputText, time: currentTime, id: 1 },
      ...ChatData,
    ]);
    setInputText('');

    setTimeout(() => {
      setChatData(state => [
        { massage: inputText, time: currentTime, id: 2 },
        ...state,
      ]);
    }, 4000);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={'light-content'} />

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        <View style={styles.Box}>
          <FlatList
            ref={flatListRef}
            data={ChatData}
            keyExtractor={(v, index) => index.toString()}
            renderItem={renderChatList}
            showsVerticalScrollIndicator={false}
            inverted={true}
          />

          <View style={styles.typeMassageView}>
            <View style={styles.inputView}>
              <TextInput
                placeholder={'Message'}
                placeholderTextColor={'#ffffff99'}
                style={styles.inputText}
                value={inputText}
                onChangeText={v => setInputText(v)}
              />

              <TouchableOpacity style={styles.emojiView} onPress={() => {}}>
                <Image
                  source={EmojiImage}
                  resizeMode={'contain'}
                  style={styles.emojiImage}
                />
              </TouchableOpacity>
            </View>

            {inputText != '' && (
              <TouchableOpacity
                onPress={onMassageSend}
                activeOpacity={0.5}
                style={styles.sendButton}>
                <Text style={styles.sendButtonText}>{'Send'}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#3a3745',
  },
  Box: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.015,
  },
  typeMassageView: {
    height: width * 0.12,
    marginVertical: height * 0.01,
    flexDirection: 'row',
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3a3745',
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.025,
  },
  inputText: {
    flex: 1,
    height: '100%',
    fontSize: width * 0.04,
    color: '#fff',
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '13%',
    marginHorizontal: width * 0.015,
    backgroundColor: '#2BB741',
    borderRadius: 100,
  },
  emojiView: {
    width: width * 0.09,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginLeft: width * 0.015,
  },
  emojiImage: {
    width: '75%',
    height: '75%',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: width * 0.035,
  },
  massageView: {
    minWidth: width * 0.45,
    maxWidth: width * 0.8,
    padding: width * 0.02,
    borderRadius: width * 0.015,
  },
  msg: {
    color: '#fff',
    fontSize: width * 0.04,
  },
  time: {
    alignSelf: 'flex-end',
    color: '#fff',
    marginTop: height * 0.005,
  },
});

const DATA = [
  {
    massage: 'Hello Urmin',
    time: '10:38 AM',
    id: 1,
  },
  {
    massage: 'Hii Vivek',
    time: '10:38 AM',
    id: 2,
  },
  {
    massage: 'How Are you gabani...???',
    time: '10:39 AM',
    id: 1,
  },
  {
    massage: 'What are you doing now...???',
    time: '10:39 AM',
    id: 1,
  },
  {
    massage: 'I am fine dear',
    time: '10:45 AM',
    id: 2,
  },
  {
    massage: 'How was collage days..???',
    time: '10:47 AM',
    id: 1,
  },
  {
    massage: 'First Class',
    time: '10:50 AM',
    id: 2,
  },
  {
    massage: 'Second class...???',
    time: '10:51 AM',
    id: 1,
  },
  {
    massage: 'Pagal First class to lakhyu me',
    id: 2,
  },
];
