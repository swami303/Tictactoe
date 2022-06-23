import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Images } from '../Constants';
import Card from './Card';

const ImageData = [
  { src: Images.img_Ball, matched: false },
  { src: Images.img_Bike, matched: false },
  { src: Images.img_Car, matched: false },
  { src: Images.img_Flower, matched: false },
  { src: Images.img_Fox, matched: false },
  { src: Images.img_Orange, matched: false },
  { src: Images.img_Parrot, matched: false },
  { src: Images.img_PineApple, matched: false },
];

const CardMatching = () => {
  const [CardImage, setCardImage] = useState([]);
  const [ChoiceOne, setChoiceOne] = useState(null);
  const [ChoiceTwo, setChoiceTwo] = useState(null);

  // console.log('Choice_One...', ChoiceOne);
  // console.log('Choice_Two...', ChoiceTwo);

  useEffect(() => {
    ShuffleCrads();
  }, []);

  useEffect(() => {
    FindWinner();
  }, [ChoiceOne, ChoiceTwo]);

  const FindWinner = () => {
    if (ChoiceOne && ChoiceTwo) {
      if (ChoiceOne.src == ChoiceTwo.src) {
        console.log('Same...');
        setCardImage(prevState =>
          prevState.map(item =>
            item.src === ChoiceOne.src ? { ...item, matched: true } : item,
          ),
        );
        ResetData(true);
      } else {
        console.log('Not Same...');
        setTimeout(() => {
          ResetData(false);
        }, 1000);
      }
    }
  };

  const ShuffleCrads = () => {
    const Images = [...ImageData, ...ImageData].sort(() => Math.random() - 0.5);
    setCardImage(Images);
  };

  const pressHandler = (item, index) => {
    ChoiceOne ? setChoiceTwo(item) : setChoiceOne(item);
  };

  const ResetData = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {CardImage.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            onPress={pressHandler}
            notSame={ChoiceTwo && ChoiceOne !== ChoiceTwo}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CardMatching;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
