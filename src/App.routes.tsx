import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import CreateAnimal from './pages/CreateAnimal'
import AnimalInfo from './pages/AnimalInfo'

const {Navigator, Screen} = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
      <Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Screen name='Home' component={Home} />
        <Screen name='CreateAnimal' component={CreateAnimal} />
        <Screen name='AnimalInfo' component={AnimalInfo} />
      </Navigator>
  );
}

export default AppRoutes;