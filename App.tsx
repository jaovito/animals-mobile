import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import IndexRoutes from './src/index.routes';
import {AuthContext} from './src/context/AuthContext'

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold
} from '@expo-google-fonts/archivo';
import {Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_700Bold
  })


  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <AuthContext>
        <IndexRoutes />
      </AuthContext>
    </NavigationContainer>
  );
}
