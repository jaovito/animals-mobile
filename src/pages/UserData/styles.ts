import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';


export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Loading = styled.ActivityIndicator`
`

export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const LogOut = styled.TouchableOpacity`
    position: relative;
    top: ${Dimensions.get('window').height / 20}px;
    right: ${Dimensions.get('window').width / 11}px;
`

export const Title = styled.Text`
    margin-top: 10%;

    color: #EEE;
    font-size: 31px;
    font-family: 'Archivo_700Bold';
    align-self: flex-start;

    margin-left: 5%;
`

export const SubTitle = styled.Text`
    color: #EEE;
    font-size: 20px;
    font-family: 'Archivo_400Regular';
    align-self: flex-start;

    margin-left: 5%;
`
export const Content = styled.ScrollView`
    margin-top: 20%;
    flex: 1;
    width: 100%;

`

export const Name = styled.TextInput`
    width: 99%;
    height: 50px;
    background-color: #EEE;

    text-align: center;
    justify-content: center;

    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    font-size: 16px;
    font-family: 'Archivo_700Bold'
`

export const SecondName = styled.TextInput`
    width: 99%;
    height: 50px;
    background-color: #EEE;

    text-align: center;
    justify-content: center;

    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 16px;
    font-family: 'Archivo_700Bold'

`

export const Whatsapp = styled.TextInput`
    width: 99%;
    height: 50px;
    background-color: #EEE;

    text-align: center;
    justify-content: center;

    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    font-size: 16px;
    font-family: 'Archivo_700Bold'
`

export const City = styled.TextInput`
    width: 99%;
    height: 50px;
    background-color: #EEE;

    text-align: center;
    justify-content: center;

    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 16px;
    font-family: 'Archivo_700Bold'
`

export const Row = styled.View`
    margin-top: 10%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 80%;
`

export const TextContainer = styled.View`
    width: 100%;
    flex: 1;
`

export const Label = styled.Text`
    font-family: 'Poppins_700Bold';
    color: #FFF;

    font-size: 16px;
`

export const Button = styled(RectButton)`
  background-color: #1C9209;
  width: 80%;
  height: 50px;

  border-radius: 8px;

  align-items: center;
  justify-content: center;
  margin: 25px 0;
`

export const ButtonText = styled.Text`
  font-size: 21px;
  color: #EEE;
  font-family: 'Poppins_700Bold'
`