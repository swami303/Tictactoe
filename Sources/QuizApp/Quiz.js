import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Questions } from './Data';
import { routeResult } from './Result';
import styles from './Style';

export const routeQuiz = 'Quiz';

const Quiz = props => {
  const { navigation } = props;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isCorrect, setIsCorrect] = React.useState('');
  const [Answers, setAnswers] = React.useState(0);
  const AnimatedValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.spring(AnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      bounciness: 25,
    }).start();
  };

  const endAnimation = () => {
    Animated.spring(AnimatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const pressHandler = (item, index) => {
    startAnimation();
    const correctAnswer = Questions[currentQuestion].correctAnswer == item;
    setIsCorrect(correctAnswer ? 'Correct' : 'Wrong');
    setAnswers(
      Questions[currentQuestion].correctAnswer == item ? Answers + 1 : Answers,
    );

    setTimeout(() => {
      if (currentQuestion + 1 == Questions.length) {
        return navigation.navigate(routeResult, { Answers: Answers });
      }

      endAnimation();
      setCurrentQuestion(currentQuestion + 1);
      setIsCorrect('');
    }, 2000);
  };

  const scale = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          isCorrect == 'Correct'
            ? '#40b850'
            : isCorrect == 'Wrong'
            ? '#f71b1b'
            : '#8257fe',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Animated.View style={{ height: 80, transform: [{ scale: scale }] }}>
          <Text
            style={[
              styles.isCorrect,
              { color: isCorrect == 'Correct' ? '#40b850' : '#f71b1b' },
            ]}>
            {isCorrect}
          </Text>
        </Animated.View>

        <View style={{ marginBottom: 100 }}>
          <Text style={styles.questionNumber}>
            {`Question Number: ${currentQuestion + 1} out of ${
              Questions.length
            }`}
          </Text>

          <View style={styles.questionCard}>
            <Text style={styles.question}>
              {Questions[currentQuestion].question}
            </Text>

            <View style={styles.optionView}>
              {Questions[currentQuestion].options.map((item, index) => (
                <TouchableOpacity
                  onPress={() => pressHandler(item, index)}
                  key={index}
                  disabled={isCorrect}
                  style={styles.option}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
