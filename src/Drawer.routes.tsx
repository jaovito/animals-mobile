import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import AppRoutes from './App.routes'
import UserData from './pages/UserData'

const { Navigator, Screen } = createBottomTabNavigator()

const DrawerRoute: React.FC = () => {
  return (
      <Navigator
        tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64
            },
            tabStyle: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#f09560'
        }}
      >
          <Screen 
            name='Main' 
            component={AppRoutes} 
            options={{
                tabBarLabel: 'Adoção',
                tabBarIcon: ({size, color, focused}) => <MaterialCommunityIcons name='dog' size={size} color={ focused ? '#f08915' : color } />
            }}
          />

          <Screen 
            name='Profile' 
            component={UserData} 
            options={{
                tabBarLabel: 'Meus dados',
                tabBarIcon: ({size, color, focused}) => <FontAwesome name='user-circle' size={size} color={ focused ? '#f08915' : color } />
            }}
          />

          <Screen 
            name='Adopted' 
            component={AppRoutes} 
            options={{
                tabBarLabel: 'Já doados',
                tabBarIcon: ({size, color, focused}) => <MaterialCommunityIcons name='dog-service' size={size} color={ focused ? '#f08915' : color } />
            }}
          />
      </Navigator>
  );
}

export default DrawerRoute;