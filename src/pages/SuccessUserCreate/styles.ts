import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler'


export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: #FFF;
  font-family: 'Archivo_700Bold';
  font-size: 30px;


  text-align: center;
  line-height: 40px;
  margin-bottom: 20px;

  z-index: 10;
`

export const SubTitle = styled.Text`
  color: #FFF;
  font-family: 'Poppins_400Regular';
  font-size: 21px;
  max-width: 80%;

  text-align: center;
  line-height: 25px;

  z-index: 10;
`

export const ButtonSubmitTrue = styled(RectButton)`
  width: 90%;
  height: 61px;

  align-items: center;
  justify-content: center;
  background-color: #1C9209;

  border-radius: 8px;

  margin-top: 5%;
`

export const ButtonTextTrue = styled.Text`
  font-size: 23px;
  font-family: 'Archivo_700Bold';

  color: #FFF;
`
