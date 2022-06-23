// This project is created from Yarn package manager ...

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
// import Routes from './ParthLogic_And_Chat/Navigation/Routes';
import SplashScreen from 'react-native-splash-screen';
import TicTacToe from './Sources/Screens/TicTacToe';
import AtulTask from './Sources/Screens/AtulTask';
import Music from './Sources/Screens/Music';
import StarPatterns from './Sources/Screens/StarPatterns';
import Opacity from './Sources/Screens/Animations/Opacity';
import FlatListAnimation from './Sources/Screens/Animations/FlatListAnimation';
import NotificationOnDate from './Sources/Screens/NotificationOnDate';
import GestureAnimations from './Sources/Screens/Animations/GestureAnimations';
import PdfScanner from './Sources/Screens/PdfScanner';
import CardMatching from './Sources/CardGame/CardMatching';
import Toast from 'react-native-toast-message';
import QuizApp from './Sources/QuizApp';
import SensorAnimation from './Sources/Screens/Animations/SensorAnimation';
import Store from './Sources/Redux-toolkit/Toolkit/Store';
import { Provider } from 'react-redux';
import Navigation from './Sources/Redux-toolkit/Navigation';
import ChatScreen from './Sources/Screens/ChatScreen';
import FlatListWidthAnimation from './Sources/Screens/Animations/Width_Animation/FlatListWidthAnimation';
import DotAnimation from './Sources/Screens/Animations/Dot_Animation/DotAnimation';
import PhotoGallery from './Sources/Screens/Animations/PhotoGallery/PhotoGallery';
import PhoneNumber from './Sources/Screens/PhoneNumber';
import SwipableList from './Sources/Screens/Animations/SwipableList/SwipableList';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/*
        <TicTacToe />
        <AtulTask />
        <Music />
        <StarPatterns />
        <Opacity />
        <FlatListAnimation />
        <Routes />
        <NotificationOnDate />
        <GestureAnimations />
        <PdfScanner />
        <CardMatching />
        <Toast />
        <QuizApp />
        <SensorAnimation />
        <ChatScreen />
        <FlatListWidthAnimation />
        <DotAnimation />
        <PhotoGallery />
        <PhoneNumber />
      */}
      <SwipableList />
    </>

    // redux-toolkit Demo...
    // <Provider store={Store}>
    //   <Navigation />
    // </Provider>
  );
};

export default App;
