import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: #FFF;
  font-family: 'Archivo_700Bold';
  font-size: 30px;

  align-self: flex-start;
  margin-left: 6%;

  z-index: 10;
`

export const InputView = styled.View`
  background-color: #FFF;
  width: 90%;
  height: 150px;

  justify-content: center;

  border-radius: 8px;
  border-width: 2px;
  border-color: #FF3D00;

  padding: 2%;

  margin-bottom: 3%;
`

export const Email = styled.TextInput`
  flex: 2;
  border-bottom-width: 1px;
  border-color: #FF3D00;

  font-size: 14px;
  font-family: 'Poppins_400Regular';
`

export const Password = styled.TextInput`
  flex: 2;

  font-size: 14px;
  font-family: 'Poppins_400Regular';
`

export const AccountOptions = styled.View`
  width: 85%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CreateAccount = styled.Text`
  color: #333;
  font-family: 'Poppins_700Bold';

  font-size: 16px;

  text-decoration: underline;
`

export const ButtonSubmitTrue = styled.TouchableOpacity`
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

export const ButtonSubmitFalse = styled.View`
  width: 90%;
  height: 61px;

  align-items: center;
  justify-content: center;
  background-color: #999;

  border-radius: 8px;

  margin-top: 5%;
`