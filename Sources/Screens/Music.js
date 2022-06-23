import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../Constants';
import Sound from 'react-native-sound';
import PaytmNotification from '../Assets/Sounds/PaytmNotification.mp3';
import PaytmKaro from '../Assets/Sounds/PaytmKoro.mp3';
import Googlepay from '../Assets/Sounds/Googlepay.mp3';

Sound.setCategory('Playback');

const Music = () => {
  const ring =
    'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3';

  const audio = new Sound(
    PaytmNotification,
    success => console.log('Sound Loaded SuccessFully...', success),
    error => console.log('failed to load the sound', error),
  );

  useEffect(() => {
    audio.setVolume(10000);
    return () => audio.release();
  }, []);

  const playPause = () => {
    audio.play(success =>
      success
        ? console.log('successfully finished playing......')
        : console.log('playback failed due to audio decoding errors.....'),
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2d8aed' }}>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.Box}>
        <TouchableOpacity
          style={{ backgroundColor: '#2d8aed', padding: 20 }}
          onPress={() => playPause()}>
          <Text style={{ color: '#fff' }}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Music;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
