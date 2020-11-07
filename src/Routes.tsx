import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthUser from './pages/AuthUser'
import CreateUser from './pages/CreateUser'

const {Navigator, Screen} = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Screen name='AuthUser' component={AuthUser} />
        <Screen name='CreateUser' component={CreateUser} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;