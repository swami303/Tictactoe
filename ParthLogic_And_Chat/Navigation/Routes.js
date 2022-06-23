import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_1, { routeScreen_1 } from '../Screens/Screen_1';
import MatrixDynamic, { routeScreen_2 } from '../Screens/MatrixDynamic';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Parths Logic */}
        <Stack.Screen name={routeScreen_1} component={Screen_1} />
        <Stack.Screen name={routeScreen_2} component={MatrixDynamic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
