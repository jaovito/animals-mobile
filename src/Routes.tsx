import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthUser from './pages/AuthUser'
import CreateUser from './pages/CreateUser'
import ForgotUser from './pages/ForgotUser'

const {Navigator, Screen} = createStackNavigator()

const Routes: React.FC = () => {
  return (
      <Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Screen name='AuthUser' component={AuthUser} />
        <Screen name='CreateUser' component={CreateUser} />
        <Screen name='ForgotUser' component={ForgotUser} />
      </Navigator>
  );
}

export default Routes;