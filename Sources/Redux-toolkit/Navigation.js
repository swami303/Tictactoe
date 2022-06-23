import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToolkitData, { routeToolkitData } from './ToolkitData';
import ReduxToolKit, { routeReduxToolkit } from './ReduxToolKit';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routeReduxToolkit} component={ReduxToolKit} />
        <Stack.Screen name={routeToolkitData} component={ToolkitData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
