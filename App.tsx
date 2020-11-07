import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/Routes';

import { AppLoading } from 'expo';
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
    <>
      <StatusBar style='light' />
      <Routes />
    </>
  );
}
