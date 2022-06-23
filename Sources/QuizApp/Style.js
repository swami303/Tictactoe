import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Welcome
  centerWhite: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  WelcomeTitle: {
    fontSize: width * 0.075,
    fontWeight: 'bold',
  },
  QuizLogo: {
    width: width * 0.8,
    height: width * 0.8,
  },
  buttonView: {
    backgroundColor: '#8257fe',
    width: width * 0.6,
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.1,
  },
  buttonText: {
    fontSize: width * 0.075,
    fontWeight: 'bold',
    color: '#fff',
  },
  // Quiz
  isCorrect: {
    fontSize: width * 0.12,
    fontWeight: 'bold',
  },
  questionNumber: {
    alignSelf: 'center',
    fontSize: width * 0.05,
    marginBottom: 30,
    color: '#000',
  },
  questionCard: {
    width: width * 0.9,
    backgroundColor: '#fff',
    paddingVertical: width * 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: width * 0.05,
  },
  question: {
    alignSelf: 'center',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    textAlign: 'center',
    width: width * 0.7,
    color: '#000',
  },
  optionView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    justifyContent: 'center',
  },
  option: {
    width: width * 0.35,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#00000050',
    borderRadius: width * 0.04,
  },
  optionText: {
    fontSize: width * 0.035,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000',
  },
  // Result
  resultTitle: {
    fontSize: width * 0.1,
    fontWeight: 'bold',
    color: '#000',
  },
  resultText: {
    fontSize: 25,
    width: '90%',
    textAlign: 'center',
    color: '#000',
  },
});

export default styles;
