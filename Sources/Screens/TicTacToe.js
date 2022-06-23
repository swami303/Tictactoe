// Simple TicTacToe Game using the logic of Vanila JS and this game is about two playes...

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import { Colors, Responsive } from '../Constants';
import GestureAnimations from './Animations/GestureAnimations';

const TicTacToe = () => {
  const Xsign = 'X';
  const Osign = 'O';
  const [Boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentSign, setcurrentSign] = useState(Xsign);
  const [Status, setStatus] = useState('Welcome to the Game');
  const Tie = Boxes.every(item => item != '');

  // for modal
  const [modelShow, setModelShow] = useState(false);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkWinner();
  }, [Boxes]);

  const checkWinner = () => {
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      let a = Boxes[winCondition[0]];
      let b = Boxes[winCondition[1]];
      let c = Boxes[winCondition[2]];
      if (a === '' || b === '' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        setStatus(`${a} is win the match`);
        Alert.alert('Winner', `${a} is the winner`, [
          { text: 'Ok', onPress: () => setModelShow(true) },
        ]);
        return;
      }
    }
    if (Tie) {
      setStatus('Match is Tie');
      Alert.alert('Tie', `The Match is tie`, [
        {
          text: 'Restart',
          onPress: RestartGame,
          style: 'destructive',
        },
      ]);
      return;
    }
  };

  const pressHandler = (item, index) => {
    if (!Boxes[index]) {
      const updated = Boxes.map((v, i) => (index == i ? currentSign : v));
      setBoxes(updated);
      setStatus(`${currentSign}'s Turn`);
      setcurrentSign(currentSign == Xsign ? Osign : Xsign);
    }
  };

  const RestartGame = () => {
    setModelShow(false);
    setBoxes(['', '', '', '', '', '', '', '', '']);
    setStatus('Welcome to the Game');
  };

  return (
    <SafeAreaView style={styles.Box}>
      <Text style={styles.Status}>{Status}</Text>
      <View style={styles.MainContainer}>
        {Boxes.map((item, index) => (
          <TouchableOpacity
            onPress={() => pressHandler(item, index)}
            activeOpacity={0.5}
            key={index}
            style={styles.Boxes}>
            <Text style={styles.Signs}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.RestartView}
        onPress={() => RestartGame()}
        activeOpacity={0.5}>
        <Text style={styles.RestartText}>{'Restart'}</Text>
      </TouchableOpacity>

      <Modal animationType="slide" visible={modelShow}>
        <Text style={styles.moveBall}>Move the Ball</Text>

        <GestureAnimations />

        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => RestartGame()}>
          <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default TicTacToe;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  MainContainer: {
    width: Responsive.wp(90),
    height: Responsive.hp(55),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  Status: {
    fontSize: Responsive.hp(3.5),
    fontWeight: 'bold',
    color: Colors.black,
  },
  Boxes: {
    width: '32%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop: Responsive.hp(1.3),
    borderRadius: 10,
  },
  Signs: {
    fontSize: Responsive.hp(7),
    fontWeight: 'bold',
    color: Colors.black,
  },
  RestartView: {
    backgroundColor: Colors.red,
    width: Responsive.wp(90),
    height: Responsive.wp(12),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Responsive.hp(1),
  },
  RestartText: {
    fontSize: Responsive.wp(5),
    color: Colors.white,
    fontWeight: 'bold',
  },
  moveBall: {
    fontSize: 20,
    marginTop: 50,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goBackButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 50,
    borderRadius: 100,
  },
  text: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
});
